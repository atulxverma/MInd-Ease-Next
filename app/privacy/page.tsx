import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - MindEase',
  description: 'MindEase privacy policy and data handling practices.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-teal-600 mx-auto mb-4" aria-hidden="true" />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: November 1, 2025
          </p>
        </div>

        <Card className="border-2 mb-8">
          <CardContent className="pt-6 space-y-6 text-gray-700 leading-relaxed">
            <p>
              At MindEase, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, protect, and share your personal information when you use our emotional support platform.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                <Database className="h-5 w-5 text-teal-600 mr-3" aria-hidden="true" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Name and email address (when you create an account)</li>
                  <li>Contact information (when you reach out to us)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Health Data</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Emotional state and mood patterns</li>
                  <li>Physiological data (heart rate, SpO₂) from connected sensors</li>
                  <li>Chat conversation history</li>
                  <li>Facial expression data (if camera access is granted)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Technical Data</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Device information and browser type</li>
                  <li>IP address and location data</li>
                  <li>Usage statistics and interaction patterns</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                <Eye className="h-5 w-5 text-teal-600 mr-3" aria-hidden="true" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700 text-sm">
              <p><strong>Provide Services:</strong> To deliver personalized emotional support and track your wellbeing</p>
              <p><strong>Improve Platform:</strong> To enhance our emotion detection algorithms and chatbot responses</p>
              <p><strong>Communicate:</strong> To send important updates, respond to inquiries, and provide support</p>
              <p><strong>Safety:</strong> To detect crisis situations and connect you with appropriate resources</p>
              <p><strong>Research:</strong> To conduct anonymized research on emotional wellbeing (with explicit consent)</p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                <Lock className="h-5 w-5 text-teal-600 mr-3" aria-hidden="true" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700 text-sm">
              <p>We implement industry-standard security measures to protect your data:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Encryption:</strong> All data is encrypted in transit (TLS/HTTPS) and at rest</li>
                <li><strong>Access Control:</strong> Strict authentication and authorization mechanisms</li>
                <li><strong>Anonymization:</strong> Personal identifiers are separated from health data</li>
                <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
                <li><strong>Limited Retention:</strong> Data is kept only as long as necessary</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                <UserCheck className="h-5 w-5 text-teal-600 mr-3" aria-hidden="true" />
                Your Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700 text-sm">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your data (right to be forgotten)</li>
                <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
                <li><strong>Opt-Out:</strong> Withdraw consent for data processing at any time</li>
                <li><strong>Restrict Processing:</strong> Limit how we use your information</li>
              </ul>
              <p className="mt-4 p-3 bg-teal-50 border border-teal-200 rounded-lg">
                To exercise these rights, contact us at privacy@mindease.com or use the data management
                tools in your account settings.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                <FileText className="h-5 w-5 text-teal-600 mr-3" aria-hidden="true" />
                Data Sharing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700 text-sm">
              <p><strong>We do NOT sell your personal information.</strong></p>
              <p>We may share data only in these limited circumstances:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Service Providers:</strong> Third-party services that help us operate (e.g., cloud hosting, analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
                <li><strong>Emergency Services:</strong> In crisis situations, with appropriate emergency responders</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize sharing</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700 text-sm">
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Remember your preferences and settings</li>
                <li>Analyze platform usage and performance</li>
                <li>Provide personalized experiences</li>
              </ul>
              <p className="mt-3">You can control cookie preferences in your browser settings.</p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              <p>
                MindEase is not intended for children under 13. We do not knowingly collect personal
                information from children. If you believe a child has provided us with personal information,
                please contact us immediately.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              <p>
                We may update this Privacy Policy periodically. We will notify you of significant changes
                via email or through a prominent notice on our platform. Continued use after changes
                constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-teal-200 bg-teal-50">
            <CardContent className="pt-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Questions?</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Email:</strong> privacy@mindease.com</p>
                <p><strong>Mail:</strong> MindEase Privacy Team, 123 Wellness Street, San Francisco, CA 94102</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
