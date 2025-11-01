'use client';

import { Metadata } from 'next';
import { useEffect, useState } from 'react';
import DashboardCard from '@/components/DashboardCard';
import ChartCard from '@/components/ChartCard';
import SensorWidget from '@/components/SensorWidget';
import { Smile, Heart, Droplets, TrendingUp, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { getMockMoodData, generateMockHeartRateHistory, generateMockEmotionDistribution } from '@/lib/mockData';

export default function DashboardPage() {
  const [moodData, setMoodData] = useState<any[]>([]);
  const [heartRateData, setHeartRateData] = useState<any[]>([]);
  const [emotionDistribution, setEmotionDistribution] = useState<any[]>([]);

  useEffect(() => {
    const mood = getMockMoodData();
    const formattedMood = mood.map(entry => ({
      time: new Date(entry.ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: entry.mood_score,
    }));
    setMoodData(formattedMood);

    setHeartRateData(generateMockHeartRateHistory());
    setEmotionDistribution(generateMockEmotionDistribution());
  }, []);

  const handleExportCSV = () => {
    const csvContent = [
      ['Timestamp', 'Mood Score', 'Emotion', 'Heart Rate'],
      ...getMockMoodData().map(entry => [
        entry.ts,
        entry.mood_score,
        entry.emotion,
        '72'
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mindease-mood-history.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Wellbeing Dashboard</h1>
            <p className="text-gray-600">Track your emotional health over time</p>
          </div>
          <Button
            onClick={handleExportCSV}
            variant="outline"
            className="border-teal-600 text-teal-700 hover:bg-teal-50"
          >
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>

        <Alert className="mb-6 border-blue-200 bg-blue-50">
          <AlertDescription className="text-blue-900 text-sm">
            This dashboard displays mock data. Charts will populate with real sensor and emotion data once integrated.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Current Mood"
            value="Calm"
            icon={Smile}
            subtitle="Last updated: Just now"
            iconColor="text-green-600"
          />
          <DashboardCard
            title="Heart Rate"
            value="72 BPM"
            icon={Heart}
            subtitle="Normal range"
            trend={{ value: 3, isPositive: false }}
            iconColor="text-red-600"
          />
          <DashboardCard
            title="SpO₂"
            value="98%"
            icon={Droplets}
            subtitle="Excellent"
            iconColor="text-blue-600"
          />
          <DashboardCard
            title="Mood Trend"
            value="+12%"
            icon={TrendingUp}
            subtitle="vs. last week"
            trend={{ value: 12, isPositive: true }}
            iconColor="text-teal-600"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <ChartCard
              title="Mood Score Over Time"
              description="Track your emotional wellbeing patterns"
              type="line"
              data={moodData}
              xAxisKey="time"
              dataKey="value"
            />
          </div>
          <SensorWidget />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Heart Rate History"
            description="Last 100 minutes of heart rate data"
            type="line"
            data={heartRateData}
            xAxisKey="time"
            dataKey="value"
          />
          <ChartCard
            title="Emotion Distribution"
            description="Breakdown of detected emotions this week"
            type="pie"
            data={emotionDistribution}
            xAxisKey="emotion"
            dataKey="count"
          />
        </div>
      </div>
    </div>
  );
}
