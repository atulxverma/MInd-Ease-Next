'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

interface DeveloperPanelProps {
  onEmotionChange?: (emotion: string) => void;
  onHeartRateChange?: (hr: number) => void;
}

export default function DeveloperPanel({ onEmotionChange, onHeartRateChange }: DeveloperPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [emotion, setEmotion] = useState('neutral');
  const [heartRate, setHeartRate] = useState([72]);

  const emotions = ['happy', 'calm', 'neutral', 'sad', 'anxious', 'stressed'];

  const handleEmotionChange = (value: string) => {
    setEmotion(value);
    onEmotionChange?.(value);
  };

  const handleHeartRateChange = (value: number[]) => {
    setHeartRate(value);
    onHeartRateChange?.(value[0]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 w-80">
      <Card className="border-2 border-teal-600 shadow-xl">
        <CardHeader
          className="cursor-pointer bg-teal-50 hover:bg-teal-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CardTitle className="flex items-center justify-between text-sm font-semibold text-gray-900">
            <div className="flex items-center space-x-2">
              <Code className="h-4 w-4 text-teal-600" aria-hidden="true" />
              <span>Developer Testing Panel</span>
            </div>
            {isOpen ? (
              <ChevronDown className="h-4 w-4 text-gray-600" />
            ) : (
              <ChevronUp className="h-4 w-4 text-gray-600" />
            )}
          </CardTitle>
        </CardHeader>

        {isOpen && (
          <CardContent className="pt-4 space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Simulate Emotion
              </label>
              <Select value={emotion} onValueChange={handleEmotionChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select emotion" />
                </SelectTrigger>
                <SelectContent>
                  {emotions.map((e) => (
                    <SelectItem key={e} value={e}>
                      {e.charAt(0).toUpperCase() + e.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Heart Rate: {heartRate[0]} BPM
              </label>
              <Slider
                value={heartRate}
                onValueChange={handleHeartRateChange}
                min={50}
                max={120}
                step={1}
                className="w-full"
              />
            </div>

            <div className="pt-2 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                Use these controls to simulate different sensor inputs and test the UI response.
              </p>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
