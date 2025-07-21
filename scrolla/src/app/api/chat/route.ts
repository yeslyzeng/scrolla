import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface ChatMessage {
  type: 'user' | 'assistant';
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    const { videoId, message, conversationHistory } = await request.json();

    if (!message || !videoId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // In a real application, you would retrieve the video transcript and context from a database
    // For this demo, we'll simulate having access to video content
    const systemPrompt = `You are an AI tutor helping students understand video content. 
    You have access to the full transcript and can reference specific timestamps.
    
    When answering questions:
    1. Be helpful and educational
    2. Reference specific parts of the video when relevant
    3. Provide clear, concise explanations
    4. If you mention a specific concept, try to reference when it appears in the video
    
    The user is asking about video ID: ${videoId}`;

    // Build conversation context
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.map((msg: ChatMessage) => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.content
      })),
      { role: 'user', content: message }
    ];

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: messages as OpenAI.Chat.Completions.ChatCompletionMessageParam[],
      temperature: 0.7,
      max_tokens: 500,
    });

    const assistantResponse = response.choices[0].message.content || 'I apologize, but I could not generate a response.';

    // In a real application, you would also search for relevant transcript segments
    // and return timestamp references
    const mockReferences: Array<{ time: number; text: string }> = [
      // These would be actual timestamp references from the video
    ];

    return NextResponse.json({
      response: assistantResponse,
      references: mockReferences,
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    );
  }
}

export const runtime = 'nodejs';

