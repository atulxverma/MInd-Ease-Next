'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Heart, Droplets, Thermometer } from 'lucide-react';

interface SensorData {
  hr: number;
  spO2: number;
  temperature?: number;
  timestamp: string;
}

interface SensorWidgetProps {
  className?: string;
}

export default function SensorWidget({ className = '' }: SensorWidgetProps) {
  const [sensorData, setSensorData] = useState<SensorData>({
    hr: 72,
    spO2: 98,
    temperature: 36.6,
    timestamp: new Date().toISOString(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData({
        hr: 68 + Math.floor(Math.random() * 12),
        spO2: 96 + Math.floor(Math.random() * 3),
        temperature: 36.4 + Math.random() * 0.6,
        timestamp: new Date().toISOString(),
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className={`border-2 ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-lg font-semibold text-gray-900">
          <Activity className="h-5 w-5 text-teal-600" aria-hidden="true" />
          <span>Live Sensor Data (Simulated)</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Heart className="h-6 w-6 text-red-600" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-gray-700">Heart Rate</p>
                <p className="text-xs text-gray-500">BPM</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{sensorData.hr}</p>
          </div>

          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Droplets className="h-6 w-6 text-blue-600" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-gray-700">SpO₂</p>
                <p className="text-xs text-gray-500">Oxygen Saturation</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{sensorData.spO2}%</p>
          </div>

          {sensorData.temperature && (
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Thermometer className="h-6 w-6 text-orange-600" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Temperature</p>
                  <p className="text-xs text-gray-500">Body Temp</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">{sensorData.temperature.toFixed(1)}°C</p>
            </div>
          )}

          <p className="text-xs text-gray-500 text-center mt-4">
            Last updated: {new Date(sensorData.timestamp).toLocaleTimeString()}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
