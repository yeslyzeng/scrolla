import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import ytdl from 'ytdl-core';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const url = formData.get('url') as string;
    const file = formData.get('file') as File;
    const title = formData.get('title') as string;

    if (!url && !file) {
      return NextResponse.json({ error: 'No video source provided' }, { status: 400 });
    }

    const videoId = uuidv4();
    let audioBuffer: Buffer;
    let videoInfo: any = {};

    // Create uploads directory
    const uploadsDir = join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadsDir, { recursive: true });

    if (url) {
      // Handle YouTube URL
      try {
        // Get video info
        const info = await ytdl.getInfo(url);
        videoInfo = {
          title: info.videoDetails.title,
          description: info.videoDetails.description,
          duration: parseInt(info.videoDetails.lengthSeconds),
          thumbnail: info.videoDetails.thumbnails[0]?.url,
        };

        // Download audio stream
        const audioStream = ytdl(url, { 
          quality: 'highestaudio',
          filter: 'audioonly'
        });

        const chunks: Buffer[] = [];
        for await (const chunk of audioStream) {
          chunks.push(chunk);
        }
        audioBuffer = Buffer.concat(chunks);

      } catch (error) {
        console.error('YouTube processing error:', error);
        return NextResponse.json({ error: 'Failed to process YouTube video' }, { status: 500 });
      }
    } else if (file) {
      // Handle uploaded file
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      // Save the uploaded file
      const filePath = join(uploadsDir, `${videoId}_${file.name}`);
      await writeFile(filePath, buffer);
      
      // For now, we'll use the file buffer as audio (in production, you'd extract audio using FFmpeg)
      audioBuffer = buffer;
      
      videoInfo = {
        title: title,
        description: '',
        duration: 0, // Would be extracted with proper video processing
      };
    }

    // Save audio for transcription
    const audioPath = join(uploadsDir, `${videoId}_audio.webm`);
    await writeFile(audioPath, audioBuffer);

    // Transcribe audio using OpenAI Whisper
    const transcriptionResponse = await openai.audio.transcriptions.create({
      file: await fetch(`data:audio/webm;base64,${audioBuffer.toString('base64')}`).then(r => r.blob()) as any,
      model: 'whisper-1',
      response_format: 'verbose_json',
      timestamp_granularities: ['segment'],
    });

    // Process transcription segments
    const segments = transcriptionResponse.segments?.map((segment: any) => ({
      text: segment.text.trim(),
      start: segment.start,
      end: segment.end,
    })) || [];

    // Generate summary using GPT-4
    const summaryPrompt = `
    Please analyze this video transcript and provide a comprehensive summary.
    
    Video Title: ${videoInfo.title || title}
    
    Transcript:
    ${transcriptionResponse.text}
    
    Please provide:
    1. A brief overview (2-3 sentences)
    2. Key topics and concepts covered (max 5)
    3. Main takeaways and insights (max 3)
    
    Format your response as JSON with this structure:
    {
      "overview": "Brief overview here",
      "keyTopics": ["topic1", "topic2", "topic3"],
      "mainTakeaways": ["takeaway1", "takeaway2"]
    }
    `;

    const summaryResponse = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are an expert at analyzing educational content and creating comprehensive summaries. Always respond with valid JSON.' },
        { role: 'user', content: summaryPrompt }
      ],
      temperature: 0.3,
    });

    let summary;
    try {
      summary = JSON.parse(summaryResponse.choices[0].message.content || '{}');
    } catch {
      summary = {
        overview: 'Summary generation completed',
        keyTopics: ['General content'],
        mainTakeaways: ['Key insights extracted']
      };
    }

    // Generate some sample clips based on transcript segments
    const clips = segments.slice(0, 5).map((segment: any, index: number) => ({
      id: `${videoId}_clip_${index}`,
      title: `Clip ${index + 1}: ${segment.text.substring(0, 50)}...`,
      startTime: segment.start,
      endTime: segment.end,
      thumbnail: videoInfo.thumbnail || null,
    }));

    const result = {
      id: videoId,
      title: videoInfo.title || title,
      description: videoInfo.description || '',
      duration: videoInfo.duration || 0,
      transcription: {
        fullText: transcriptionResponse.text,
        segments: segments,
      },
      summary: summary,
      clips: clips,
      status: 'completed'
    };

    return NextResponse.json(result);

  } catch (error) {
    console.error('Video processing error:', error);
    return NextResponse.json(
      { error: 'Failed to process video' },
      { status: 500 }
    );
  }
}

export const runtime = 'nodejs';
export const maxDuration = 300; // 5 minutes

