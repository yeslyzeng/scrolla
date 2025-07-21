import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { videoId, startTime, endTime, title } = await request.json();

    if (!videoId || startTime === undefined || endTime === undefined || !title) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Generate a summary for the clip content
    const clipSummary = `This clip covers ${title} from ${Math.floor(startTime / 60)}:${(startTime % 60).toFixed(0).padStart(2, '0')} to ${Math.floor(endTime / 60)}:${(endTime % 60).toFixed(0).padStart(2, '0')}.`;

    // Generate TTS narration for the clip
    let narrationPath = null;
    try {
      await openai.audio.speech.create({
        model: 'tts-1',
        voice: 'alloy',
        input: clipSummary,
      });

      // In a real application, you would save this to a file
      // For demo purposes, we'll just indicate that TTS was generated
      narrationPath = `/api/tts/${videoId}_${startTime}_${endTime}.mp3`;
    } catch (error) {
      console.error('TTS generation error:', error);
    }

    // Create the clip object
    const newClip = {
      id: `${videoId}_clip_${Date.now()}`,
      title: title,
      description: clipSummary,
      startTime: startTime,
      endTime: endTime,
      thumbnail: null, // Would be generated from video frame
      clipPath: `/api/clips/${videoId}_${startTime}_${endTime}.mp4`, // Would be actual clip file
      hasCaption: true,
      hasNarration: !!narrationPath,
      narrationPath: narrationPath,
    };

    return NextResponse.json(newClip);

  } catch (error) {
    console.error('Clip generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate clip' },
      { status: 500 }
    );
  }
}

export const runtime = 'nodejs';

