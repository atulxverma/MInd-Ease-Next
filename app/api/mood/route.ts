import { NextRequest, NextResponse } from 'next/server';
import { getMockMoodData } from '@/lib/mockData';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const start = searchParams.get('start');
    const end = searchParams.get('end');

    let moodData = getMockMoodData();

    if (start) {
      const startDate = new Date(start);
      moodData = moodData.filter(entry => new Date(entry.ts) >= startDate);
    }

    if (end) {
      const endDate = new Date(end);
      moodData = moodData.filter(entry => new Date(entry.ts) <= endDate);
    }

    return NextResponse.json({
      data: moodData,
      count: moodData.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Mood API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch mood data' },
      { status: 500 }
    );
  }
}
