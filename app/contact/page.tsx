'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Toaster />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help. Reach out with questions, feedback, or support requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="border-2">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-3">
                <Mail className="h-6 w-6 text-teal-600" aria-hidden="true" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-2">support@mindease.com</p>
              <p className="text-sm text-gray-600">We typically respond within 24 hours</p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-3">
                <Phone className="h-6 w-6 text-teal-600" aria-hidden="true" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-2">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-600">Mon-Fri, 9am-5pm EST</p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-3">
                <MapPin className="h-6 w-6 text-teal-600" aria-hidden="true" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900">Office</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-2">123 Wellness Street</p>
              <p className="text-sm text-gray-600">San Francisco, CA 94102</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 hover:bg-teal-700"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-2 border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-2" aria-hidden="true" />
                  Emergency Helplines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-700">
                  If you're experiencing a mental health crisis, please contact one of these helplines immediately:
                </p>

                <div className="space-y-3">
                  <div className="p-4 bg-white rounded-lg border border-red-200">
                    <h4 className="font-semibold text-gray-900 mb-1">988 Suicide & Crisis Lifeline</h4>
                    <p className="text-sm text-gray-600 mb-2">24/7 support for people in distress</p>
                    <a
                      href="tel:988"
                      className="inline-block px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Call 988
                    </a>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-red-200">
                    <h4 className="font-semibold text-gray-900 mb-1">Crisis Text Line</h4>
                    <p className="text-sm text-gray-600 mb-2">Text HOME to 741741</p>
                    <a
                      href="sms:741741?body=HOME"
                      className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Text Now
                    </a>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-red-200">
                    <h4 className="font-semibold text-gray-900 mb-1">SAMHSA National Helpline</h4>
                    <p className="text-sm text-gray-600 mb-2">1-800-662-4357 (24/7)</p>
                    <a
                      href="tel:1-800-662-4357"
                      className="inline-block px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">FAQ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">How quickly will I receive a response?</h4>
                  <p className="text-sm text-gray-600">
                    We aim to respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Is this service confidential?</h4>
                  <p className="text-sm text-gray-600">
                    Yes, we treat all communications confidentially and follow strict privacy guidelines.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Can I schedule a consultation?</h4>
                  <p className="text-sm text-gray-600">
                    Please mention your availability in the message, and we'll coordinate a suitable time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
