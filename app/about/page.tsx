import { Metadata } from 'next';
import { Target, Users, Cpu, Database, Brain, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About - MindEase',
  description: 'Learn about MindEase project objectives, technologies, and our mission to provide accessible emotional support.',
};

export default function AboutPage() {
  const objectives = [
    'Develop a multimodal emotion detection system combining facial recognition and physiological sensors',
    'Create an empathetic chatbot that provides compassionate, context-aware emotional support',
    'Build an intuitive dashboard for tracking emotional wellbeing patterns over time',
    'Implement robust privacy and security measures to protect sensitive user data',
    'Establish integration pathways for IoT sensors and AI/ML models',
  ];

  const technologies = [
    {
      icon: Brain,
      name: 'Emotion AI',
      description: 'Facial emotion recognition using computer vision and deep learning models',
      status: 'Integration Pending',
      statusColor: 'bg-yellow-100 text-yellow-800',
      integration: 'Connect TensorFlow.js or OpenCV-based facial emotion detector to /api/emotion endpoint',
    },
    {
      icon: Activity,
      name: 'IoT Sensors',
      description: 'MAX30102 sensor for heart rate and SpO₂ monitoring via ESP32',
      status: 'Integration Pending',
      statusColor: 'bg-yellow-100 text-yellow-800',
      integration: 'Stream sensor data via WebSocket or POST to /api/sensors/stream endpoint',
    },
    {
      icon: Cpu,
      name: 'NLP Chatbot',
      description: 'Natural language processing for empathetic conversation',
      status: 'Mock Implementation',
      statusColor: 'bg-blue-100 text-blue-800',
      integration: 'Replace mock responses with OpenAI GPT, Google Gemini, or Rasa framework',
    },
    {
      icon: Database,
      name: 'Data Fusion',
      description: 'Algorithm to combine multimodal inputs for accurate emotion detection',
      status: 'Algorithm Placeholder',
      statusColor: 'bg-orange-100 text-orange-800',
      integration: 'Implement weighted fusion algorithm in /lib/emotionFusion.ts',
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About MindEase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive emotional support platform combining cutting-edge technology with compassionate design
          </p>
        </div>

        <section className="mb-16">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Project Synopsis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                MindEase is an innovative emotional support platform that leverages multimodal emotion detection
                to provide personalized, empathetic care. By combining facial expression analysis with physiological
                sensor data (heart rate, SpO₂), the system offers a comprehensive understanding of user emotional states.
              </p>
              <p>
                The platform features an AI-powered chatbot designed to engage users in meaningful, supportive
                conversations while respecting privacy and maintaining ethical standards. Users can track their
                emotional wellbeing over time through intuitive dashboards that visualize mood patterns and trends.
              </p>
              <p>
                This project serves as a foundation for integrating advanced AI/ML models and IoT hardware,
                with clear integration points and well-documented placeholder implementations that can be
                replaced with production-ready solutions.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center">
              <Target className="h-8 w-8 text-teal-600 mr-3" aria-hidden="true" />
              Project Objectives
            </h2>
          </div>

          <Card className="border-2">
            <CardContent className="pt-6">
              <ol className="space-y-4">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center mr-4">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 leading-relaxed pt-1">{objective}</p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Technologies & Integration</h2>
            <p className="text-gray-600">Core technologies with integration guidelines</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center">
                        <tech.icon className="h-6 w-6 text-teal-600" aria-hidden="true" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-gray-900">
                          {tech.name}
                        </CardTitle>
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium mt-1 ${tech.statusColor}`}>
                          {tech.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-700 leading-relaxed">{tech.description}</p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-xs font-semibold text-blue-900 mb-1">Integration Point:</p>
                    <p className="text-xs text-blue-800">{tech.integration}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center">
              <Users className="h-8 w-8 text-teal-600 mr-3" aria-hidden="true" />
              Team & Credits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 text-center">
              <CardContent className="pt-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-blue-400 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Development Team</h3>
                <p className="text-sm text-gray-600">
                  Full-stack developers, UX designers, and researchers
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-teal-400 mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-10 w-10 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI/ML Specialists</h3>
                <p className="text-sm text-gray-600">
                  Emotion AI researchers and data scientists
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-10 w-10 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">IoT Engineers</h3>
                <p className="text-sm text-gray-600">
                  Hardware integration and sensor specialists
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <Card className="border-2 border-teal-200 bg-gradient-to-br from-teal-50 to-blue-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Learn More About Our Research
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Explore our evaluation methodology, testing results, and research findings
              </p>
              <Link
                href="/research"
                className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
              >
                View Research & Evaluation
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
