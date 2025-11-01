import { NextResponse } from 'next/server';
import { getMockEmotionResult } from '@/lib/mockData';

export async function GET() {
  try {
    const emotionData = getMockEmotionResult();

    return NextResponse.json({
      ...emotionData,
      status: 'mock',
      message: 'This is mock emotion data. Integrate facial recognition model here.',
    });
  } catch (error) {
    console.error('Emotion API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch emotion data' },
      { status: 500 }
    );
  }
}
