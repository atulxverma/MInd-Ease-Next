import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import { Brain, MessageCircle, BarChart3, Shield, Camera, Activity, Heart } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: 'Multimodal Emotion Detection',
      description: 'Advanced emotion recognition combining facial analysis and physiological sensors to understand your emotional state comprehensively. (Integration Placeholder)',
    },
    {
      icon: MessageCircle,
      title: 'Empathetic Chat Support',
      description: 'Engage in meaningful conversations with our AI-powered chatbot designed to provide compassionate, non-judgmental emotional support.',
    },
    {
      icon: BarChart3,
      title: 'Mood History Dashboard',
      description: 'Track your emotional wellbeing over time with intuitive visualizations and insights into your mood patterns and trends.',
    },
    {
      icon: Shield,
      title: 'Privacy & Safety First',
      description: 'Your data is protected with industry-standard security. We prioritize your privacy and provide clear consent mechanisms.',
    },
  ];

  const howItWorksSteps = [
    {
      icon: Camera,
      title: 'Capture Inputs',
      description: 'Camera and sensors capture facial expressions and vital signs (heart rate, SpO₂) for emotion analysis.',
      note: 'Placeholder - Integration Required',
    },
    {
      icon: Activity,
      title: 'Fusion & Detection',
      description: 'Advanced algorithms fuse multimodal data to accurately detect your emotional state in real-time.',
      note: 'Placeholder - ML Model Required',
    },
    {
      icon: Heart,
      title: 'Support & Dashboard',
      description: 'Receive personalized support through chat and monitor your emotional wellbeing via interactive dashboards.',
      note: 'Active - Mock Data',
    },
  ];

  return (
    <div>
      <Hero />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              MindEase combines cutting-edge technology with empathetic design to provide comprehensive emotional support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three simple steps to comprehensive emotional support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => (
              <Card key={index} className="border-2 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-teal-700">{index + 1}</span>
                </div>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-teal-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">{step.description}</p>
                  <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                    {step.note}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-teal-200 bg-gradient-to-br from-teal-50 to-blue-50">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <Shield className="h-12 w-12 text-teal-600 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Safe and Private</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Your emotional wellbeing and privacy are our top priorities. All data is encrypted,
                    and we never share your personal information without explicit consent. We follow
                    industry best practices for data security and provide transparent data handling policies.
                  </p>
                  <Link
                    href="/privacy"
                    className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center"
                  >
                    Read our Privacy Policy
                    <span className="ml-1" aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
