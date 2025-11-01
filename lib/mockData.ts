import mockMood from '@/data/mockMood.json';
import mockSensors from '@/data/mockSensors.json';
import mockChatResponses from '@/data/mockChatResponses.json';

export interface MoodEntry {
  ts: string;
  mood_score: number;
  emotion: string;
}

export interface SensorData {
  timestamp: string;
  hr: number;
  spO2: number;
  device_id: string;
  temperature?: number;
  hrv?: number;
}

export interface ChatResponse {
  trigger: string;
  response: string;
}

export interface EmotionResult {
  emotion: string;
  score: number;
  sources: string[];
  timestamp: string;
}

export const getMockMoodData = (): MoodEntry[] => mockMood;

export const getMockSensorData = (): SensorData => mockSensors;

export const getMockChatResponses = (): ChatResponse[] => mockChatResponses;

export const getMockEmotionResult = (): EmotionResult => {
  return {
    emotion: 'calm',
    score: 0.72,
    sources: ['camera (placeholder)', 'sensors (mock)'],
    timestamp: new Date().toISOString(),
  };
};

export const generateMockHeartRateHistory = (points: number = 20): Array<{ time: string; value: number }> => {
  const data = [];
  const now = Date.now();
  for (let i = points - 1; i >= 0; i--) {
    const timestamp = new Date(now - i * 5 * 60 * 1000);
    const baseHR = 70;
    const variance = Math.sin(i / 5) * 10 + Math.random() * 5;
    data.push({
      time: timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      value: Math.round(baseHR + variance),
    });
  }
  return data;
};

export const generateMockEmotionDistribution = () => {
  return [
    { emotion: 'Happy', count: 12, color: '#10b981' },
    { emotion: 'Calm', count: 18, color: '#3b82f6' },
    { emotion: 'Neutral', count: 15, color: '#6b7280' },
    { emotion: 'Sad', count: 8, color: '#f59e0b' },
    { emotion: 'Anxious', count: 5, color: '#ef4444' },
  ];
};
