import { Metadata } from 'next';
import { Camera, Activity, MessageCircle, LineChart, AlertTriangle, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export const metadata: Metadata = {
  title: 'Features - MindEase',
  description: 'Explore MindEase features including emotion detection, empathetic chat, mood tracking, and emergency support.',
};

export default function FeaturesPage() {
  const features = [
    {
      icon: Camera,
      title: 'Facial Emotion Detection',
      description: 'Real-time emotion recognition using computer vision and deep learning models to detect facial expressions and emotional states.',
      status: 'Integration Pending',
      statusColor: 'bg-yellow-100 text-yellow-800',
      technicalDetails: {
        input: 'Video stream from webcam or uploaded image',
        output: '{ emotion: string, confidence: number, timestamp: string }',
        expectedModels: 'FER2013-trained CNN, DeepFace, or MediaPipe Face Mesh',
        integrationPoint: 'POST /api/emotion/camera',
      },
      mockUI: 'Camera feed placeholder with overlay showing detected emotion labels',
    },
    {
      icon: Activity,
      title: 'Physiological Sensor Integration',
      description: 'Continuous monitoring of vital signs including heart rate, SpO₂, and heart rate variability using MAX30102 sensor via ESP32.',
      status: 'Integration Pending',
      statusColor: 'bg-yellow-100 text-yellow-800',
      technicalDetails: {
        input: 'WebSocket stream or REST POST from ESP32',
        output: '{ hr: number, spO2: number, hrv: number, timestamp: string, device_id: string }',
        hardware: 'MAX30102 pulse oximeter sensor, ESP32 microcontroller',
        integrationPoint: 'POST /api/sensors/stream or WebSocket ws://api/sensors/live',
      },
      mockUI: 'Live sensor widget displaying simulated heart rate and SpO₂ readings',
    },
    {
      icon: MessageCircle,
      title: 'AI-Powered Empathetic Chatbot',
      description: 'Natural language conversation system that provides compassionate, context-aware emotional support with memory of conversation history.',
      status: 'Mock Implementation',
      statusColor: 'bg-blue-100 text-blue-800',
      technicalDetails: {
        input: '{ message: string, context: { emotion: string, history: Message[] } }',
        output: '{ response: string, sentiment: string, suggestions: string[] }',
        expectedModels: 'OpenAI GPT-4, Google Gemini, or Rasa NLU + dialogue management',
        integrationPoint: 'POST /api/chat',
      },
      mockUI: 'Interactive chat window with message history and typing indicators',
    },
    {
      icon: LineChart,
      title: 'Mood History & Analytics',
      description: 'Comprehensive dashboard for tracking emotional wellbeing over time with interactive charts and data export capabilities.',
      status: 'Active with Mock Data',
      statusColor: 'bg-green-100 text-green-800',
      technicalDetails: {
        input: 'Stored mood entries from database',
        output: 'Time-series data for visualization in charts',
        dataSchema: '{ timestamp: string, mood_score: number, emotion: string, hr: number }',
        integrationPoint: 'GET /api/mood?start=DATE&end=DATE',
      },
      mockUI: 'Dashboard with line charts, bar charts, and pie charts displaying mood trends',
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Alert System',
      description: 'Intelligent detection of distress signals with immediate access to crisis helplines and emergency contact notifications.',
      status: 'Design Phase',
      statusColor: 'bg-orange-100 text-orange-800',
      technicalDetails: {
        input: 'Emotion data showing prolonged negative states or specific keywords',
        output: '{ alert_level: string, recommended_action: string, helplines: string[] }',
        triggers: 'Sustained high stress/sadness, suicide-related keywords, abnormal vital signs',
        integrationPoint: 'POST /api/emergency/alert',
      },
      mockUI: 'Modal popup with helpline numbers and emergency contact options',
    },
    {
      icon: Lock,
      title: 'Privacy & Data Security',
      description: 'End-to-end encryption, secure data storage, and user consent management ensuring complete control over personal health data.',
      status: 'Implementation Required',
      statusColor: 'bg-red-100 text-red-800',
      technicalDetails: {
        features: 'HTTPS/TLS encryption, JWT authentication, GDPR-compliant data handling',
        storage: 'Encrypted database with user-controlled retention policies',
        consent: 'Explicit opt-in for data collection with granular permission controls',
        integrationPoint: '/api/user/consent, /api/user/delete-data',
      },
      mockUI: 'Privacy dashboard showing data collection status and deletion options',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Platform Features
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive emotional support through advanced technology and thoughtful design
          </p>
        </div>

        <Alert className="mb-8 border-blue-200 bg-blue-50">
          <AlertDescription className="text-blue-900">
            Features marked as "Integration Pending" are placeholder implementations with clear TODOs
            showing expected data formats and integration points. See technical details below each feature.
          </AlertDescription>
        </Alert>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-teal-200 transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-teal-600" aria-hidden="true" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </CardTitle>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${feature.statusColor}`}>
                        {feature.status}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {feature.description}
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                    Technical Details
                  </h4>
                  <dl className="space-y-2 text-sm">
                    {Object.entries(feature.technicalDetails).map(([key, value]) => (
                      <div key={key} className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <dt className="font-medium text-gray-700 capitalize">{key.replace(/_/g, ' ')}:</dt>
                        <dd className="sm:col-span-2 text-gray-600 font-mono text-xs bg-white p-2 rounded border border-gray-200">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">UI Implementation</h4>
                  <p className="text-blue-800 text-sm">{feature.mockUI}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="border-2 border-teal-200 bg-gradient-to-br from-teal-50 to-blue-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Integrate?
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                See our integration documentation for step-by-step guides on connecting
                AI models, IoT sensors, and third-party services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/docs/integration.md"
                  className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
                >
                  View Integration Docs
                </a>
                <a
                  href="/sensors"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-teal-600 text-teal-700 font-medium rounded-lg hover:bg-teal-50 transition-colors"
                >
                  Sensor Setup Guide
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
