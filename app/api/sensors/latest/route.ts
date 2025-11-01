import { NextResponse } from 'next/server';
import { getMockSensorData } from '@/lib/mockData';

export async function GET() {
  try {
    const sensorData = getMockSensorData();

    const enhancedData = {
      ...sensorData,
      timestamp: new Date().toISOString(),
      hr: 68 + Math.floor(Math.random() * 12),
      spO2: 96 + Math.floor(Math.random() * 3),
    };

    return NextResponse.json({
      data: enhancedData,
      status: 'ok',
    });
  } catch (error) {
    console.error('Sensors API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch sensor data' },
      { status: 500 }
    );
  }
}
