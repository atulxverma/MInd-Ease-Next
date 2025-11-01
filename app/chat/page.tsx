'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import ChatWindow from '@/components/ChatWindow';
import DeveloperPanel from '@/components/DeveloperPanel';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Activity, AlertCircle } from 'lucide-react';

export default function ChatPage() {
  const [currentEmotion, setCurrentEmotion] = useState('neutral');
  const [currentHeartRate, setCurrentHeartRate] = useState(72);

  const handleSendMessage = async (message: string): Promise<string> => {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, context: { emotion: currentEmotion } }),
    });

    const data = await response.json();
    return data.response;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Empathetic Chat</h1>
          <p className="text-gray-600">
            Share your feelings in a safe, supportive environment
          </p>
        </div>

        <Alert className="mb-6 border-blue-200 bg-blue-50">
          <AlertCircle className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-900">
            <strong>AI/ML Integration Placeholder:</strong> This chat uses mock responses.
            To connect a real AI chatbot, integrate OpenAI GPT, Google Gemini, or Rasa at{' '}
            <code className="bg-blue-100 px-1 rounded">/api/chat</code>
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="h-[600px]">
              <ChatWindow onSendMessage={handleSendMessage} />
            </div>
          </div>

          <div className="space-y-4">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Activity className="h-5 w-5 text-teal-600" aria-hidden="true" />
                  <h3 className="font-semibold text-gray-900">Current Status</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-teal-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Camera className="h-4 w-4 text-teal-600" aria-hidden="true" />
                      <span className="text-sm font-medium text-gray-700">Emotion</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900 capitalize">
                      {currentEmotion}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Heart Rate</span>
                    <span className="text-sm font-bold text-gray-900">{currentHeartRate} BPM</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Source: Camera & Sensors (Placeholder)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 bg-yellow-50">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <AlertCircle className="h-4 w-4 text-yellow-600 mr-2" aria-hidden="true" />
                  Need Immediate Help?
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  If you're in crisis, please reach out to a professional:
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:988"
                    className="block w-full text-center px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Call 988 - Suicide & Crisis Lifeline
                  </a>
                  <a
                    href="tel:1-800-273-8255"
                    className="block w-full text-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    National Helpline: 1-800-273-8255
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <DeveloperPanel
          onEmotionChange={setCurrentEmotion}
          onHeartRateChange={setCurrentHeartRate}
        />
      </div>
    </div>
  );
}
