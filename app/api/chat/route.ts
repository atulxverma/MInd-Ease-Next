import { NextRequest, NextResponse } from 'next/server';
import { getMockChatResponses } from '@/lib/mockData';

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    const responses = getMockChatResponses();
    const lowerMessage = message.toLowerCase();

    let selectedResponse = responses.find(r => r.trigger === 'default')?.response ||
      "Thank you for sharing that with me. I'm here to listen and support you.";

    for (const resp of responses) {
      if (resp.trigger !== 'default' && lowerMessage.includes(resp.trigger)) {
        selectedResponse = resp.response;
        break;
      }
    }

    return NextResponse.json({
      response: selectedResponse,
      sentiment: context?.emotion || 'neutral',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    );
  }
}
