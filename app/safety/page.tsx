import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, Heart, Phone, Lock, Users } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Safety Guidelines - MindEase',
  description: 'Safety information, crisis resources, and ethical guidelines for MindEase users.',
};

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-teal-600 mx-auto mb-4" aria-hidden="true" />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Safety & Ethics
          </h1>
          <p className="text-lg text-gray-600">
            Your safety and wellbeing are our highest priorities
          </p>
        </div>

        <Card className="border-2 border-red-200 bg-red-50 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <AlertTriangle className="h-6 w-6 text-red-600 mr-3" aria-hidden="true" />
              Crisis Support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 font-medium">
              If you're experiencing a mental health crisis or having thoughts of harming yourself or others,
              please contact emergency services immediately:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border-2 border-red-300">
                <h3 className="font-bold text-gray-900 mb-2">988 Suicide & Crisis Lifeline</h3>
                <p className="text-sm text-gray-600 mb-3">24/7 confidential support</p>
                <a
                  href="tel:988"
                  className="inline-block w-full text-center px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
                >
                  Call 988
                </a>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-red-300">
                <h3 className="font-bold text-gray-900 mb-2">Crisis Text Line</h3>
                <p className="text-sm text-gray-600 mb-3">Text support anytime</p>
                <a
                  href="sms:741741?body=HOME"
                  className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Text HOME to 741741
                </a>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-red-300">
                <h3 className="font-bold text-gray-900 mb-2">Emergency Services</h3>
                <p className="text-sm text-gray-600 mb-3">Immediate danger</p>
                <a
                  href="tel:911"
                  className="inline-block w-full text-center px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
                >
                  Call 911
                </a>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-red-300">
                <h3 className="font-bold text-gray-900 mb-2">SAMHSA Helpline</h3>
                <p className="text-sm text-gray-600 mb-3">Mental health & substance abuse</p>
                <a
                  href="tel:1-800-662-4357"
                  className="inline-block w-full text-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  1-800-662-4357
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                <Heart className="h-5 w-5 text-teal-600 mr-3" aria-hidden="true" />
                What MindEase Is and Isn't
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">MindEase IS:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>A supportive companion for emotional wellbeing</li>
                  <li>A tool to track and understand your mood patterns</li>
                  <li>A supplement to professional mental health care</li>
                  <li>A safe space for self-reflection</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">MindEase IS NOT:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>A replacement for professional therapy or medical treatment</li>
                  <li>An emergency response service</li>
                  <li>Capable of diagnosing mental health conditions</li>
                  <li>A substitute for human connection and support</li>
                </ul>
              </div>

              <p className="text-sm bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <strong>Important:</strong> If you're experiencing severe symptoms, suicidal thoughts,
                or other mental health concerns, please seek help from a qualified mental health professional.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                <Lock className="h-5 w-5 text-teal-600 mr-3" aria-hidden="true" />
                Ethical Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Informed Consent</h3>
                <p>
                  We obtain explicit consent before collecting emotional or physiological data. You
                  control what data is collected and how it's used. You can withdraw consent anytime.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Data Minimization</h3>
                <p>
                  We collect only the data necessary to provide our services. No excessive or
                  unnecessary information is gathered.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Transparency</h3>
                <p>
                  We clearly communicate how emotion detection works, what data is collected, and
                  the limitations of AI-based emotional support.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Non-Discrimination</h3>
                <p>
                  Our algorithms are designed and tested to avoid bias based on race, gender, age,
                  or other protected characteristics.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Professional Referral</h3>
                <p>
                  When our system detects signs of serious distress, we immediately provide resources
                  for professional help rather than attempting to handle the situation ourselves.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                <Users className="h-5 w-5 text-teal-600 mr-3" aria-hidden="true" />
                Best Practices for Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span><strong>Use as a complement:</strong> MindEase works best alongside professional care, not as a replacement</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">2</span>
                  <span><strong>Be honest:</strong> The more accurately you express your feelings, the better support we can provide</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">3</span>
                  <span><strong>Know your limits:</strong> If you feel overwhelmed, reach out to a human - friend, family, or professional</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">4</span>
                  <span><strong>Protect your privacy:</strong> Don't share your account with others; your data is personal</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">5</span>
                  <span><strong>Regular check-ins:</strong> Use the dashboard to monitor patterns and share insights with your therapist</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                <Phone className="h-5 w-5 text-teal-600 mr-3" aria-hidden="true" />
                Additional Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900">Therapy Directories</h4>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Psychology Today: <a href="https://www.psychologytoday.com" className="text-teal-600 hover:underline">psychologytoday.com</a></li>
                    <li>SAMHSA Treatment Locator: <a href="https://findtreatment.gov" className="text-teal-600 hover:underline">findtreatment.gov</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Support Communities</h4>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>NAMI (National Alliance on Mental Illness): <a href="https://www.nami.org" className="text-teal-600 hover:underline">nami.org</a></li>
                    <li>Mental Health America: <a href="https://www.mhanational.org" className="text-teal-600 hover:underline">mhanational.org</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Educational Resources</h4>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>NIMH (National Institute of Mental Health): <a href="https://www.nimh.nih.gov" className="text-teal-600 hover:underline">nimh.nih.gov</a></li>
                    <li>CDC Mental Health: <a href="https://www.cdc.gov/mentalhealth" className="text-teal-600 hover:underline">cdc.gov/mentalhealth</a></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-teal-200 bg-teal-50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Need Help?</h3>
              <p className="text-gray-700 text-center mb-4">
                If you have concerns about safety or need assistance, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Contact Support
                </Link>
                <a
                  href="mailto:safety@mindease.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-teal-600 text-teal-700 font-medium rounded-lg hover:bg-teal-50 transition-colors"
                >
                  safety@mindease.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
