import { NextRequest, NextResponse } from 'next/server';

const feedbackStore: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { rating, feedback, category } = body;

    if (!rating || !feedback) {
      return NextResponse.json(
        { error: 'Rating and feedback are required' },
        { status: 400 }
      );
    }

    const feedbackEntry = {
      id: Date.now().toString(),
      rating,
      feedback,
      category: category || 'general',
      timestamp: new Date().toISOString(),
    };

    feedbackStore.push(feedbackEntry);

    return NextResponse.json({
      success: true,
      message: 'Feedback received successfully',
      id: feedbackEntry.id,
    });
  } catch (error) {
    console.error('Feedback API error:', error);
    return NextResponse.json(
      { error: 'Failed to submit feedback' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    data: feedbackStore,
    count: feedbackStore.length,
  });
}
