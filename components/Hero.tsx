import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle, LayoutDashboard, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-green-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              <span>Your Digital Emotional Companion</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              MindEase
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Experience compassionate support through intelligent emotion detection and empathetic conversation. We're here to listen, understand, and support your emotional wellbeing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-base font-medium"
              >
                <Link href="/chat">
                  <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                  Open Chat
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-teal-600 text-teal-700 hover:bg-teal-50 text-base font-medium"
              >
                <Link href="/dashboard">
                  <LayoutDashboard className="mr-2 h-5 w-5" aria-hidden="true" />
                  View Dashboard
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative lg:block">
            <div className="relative w-full h-96 bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-400/20 backdrop-blur-3xl"></div>
              <div className="relative z-10 text-center p-8">
                <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <MessageCircle className="h-16 w-16 text-teal-600" aria-hidden="true" />
                </div>
                <p className="text-gray-700 text-lg font-medium">
                  Placeholder for hero illustration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
