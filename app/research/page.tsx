'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, BarChart, Target, Users, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

export default function ResearchPage() {
  const [feedback, setFeedback] = useState({ rating: '', feedback: '', category: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const metrics = [
    {
      icon: Target,
      title: 'Emotion Detection Accuracy',
      description: 'Measure precision of multimodal emotion classification',
      metrics: ['Accuracy', 'Precision', 'Recall', 'F1-Score'],
      target: '≥85%',
    },
    {
      icon: Users,
      title: 'User Experience',
      description: 'Evaluate platform usability and user satisfaction',
      metrics: ['SUS Score', 'Task Completion Rate', 'Time on Task', 'Error Rate'],
      target: 'SUS ≥70',
    },
    {
      icon: TrendingUp,
      title: 'Response Time',
      description: 'Monitor system performance and latency',
      metrics: ['API Response Time', 'Chat Latency', 'Sensor Data Delay'],
      target: '<500ms',
    },
  ];

  const mockResults = [
    { metric: 'Facial Emotion Accuracy', value: 'Pending', baseline: 'FER2013: ~70%', status: 'pending' },
    { metric: 'Sensor Data Accuracy', value: 'Pending', baseline: 'MAX30102: ±2 BPM', status: 'pending' },
    { metric: 'Chat Response Quality', value: 'Mock Data', baseline: 'Human Eval', status: 'mock' },
    { metric: 'System Response Time', value: '<200ms', baseline: 'Target: <500ms', status: 'passing' },
  ];

  const handleSubmitFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedback),
      });

      if (response.ok) {
        toast.success('Thank you for your feedback!');
        setFeedback({ rating: '', feedback: '', category: '' });
      } else {
        toast.error('Failed to submit feedback. Please try again.');
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
            Research & Evaluation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Methodology, metrics, and testing results for MindEase platform
          </p>
        </div>

        <section className="mb-12">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <BarChart className="h-6 w-6 text-teal-600 mr-3" aria-hidden="true" />
                Evaluation Plan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The MindEase platform evaluation follows a comprehensive methodology combining quantitative
                performance metrics with qualitative user feedback. Our approach ensures both technical
                accuracy and user satisfaction.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {metrics.map((metric, index) => (
                  <Card key={index} className="bg-teal-50 border-teal-200">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-3">
                        <metric.icon className="h-6 w-6 text-teal-600" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {metric.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-3">{metric.description}</p>
                      <div className="space-y-1">
                        {metric.metrics.map((m, i) => (
                          <div key={i} className="flex items-center text-xs text-gray-600">
                            <CheckCircle2 className="h-3 w-3 text-teal-600 mr-2" />
                            {m}
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-teal-200">
                        <p className="text-xs font-semibold text-teal-700">Target: {metric.target}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Testing Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Metric</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Current Value</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Baseline/Target</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockResults.map((result, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-4 text-gray-700">{result.metric}</td>
                        <td className="py-3 px-4 text-gray-700 font-medium">{result.value}</td>
                        <td className="py-3 px-4 text-gray-600">{result.baseline}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                              result.status === 'passing'
                                ? 'bg-green-100 text-green-800'
                                : result.status === 'mock'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {result.status.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Note: Testing results will be updated once AI/ML models and sensors are integrated.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">User Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitFeedback} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating
                  </label>
                  <Select
                    value={feedback.rating}
                    onValueChange={(value) => setFeedback({ ...feedback, rating: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 - Excellent</SelectItem>
                      <SelectItem value="4">4 - Good</SelectItem>
                      <SelectItem value="3">3 - Average</SelectItem>
                      <SelectItem value="2">2 - Below Average</SelectItem>
                      <SelectItem value="1">1 - Poor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <Select
                    value={feedback.category}
                    onValueChange={(value) => setFeedback({ ...feedback, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usability">Usability</SelectItem>
                      <SelectItem value="features">Features</SelectItem>
                      <SelectItem value="performance">Performance</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Feedback
                  </label>
                  <Textarea
                    value={feedback.feedback}
                    onChange={(e) => setFeedback({ ...feedback, feedback: e.target.value })}
                    placeholder="Share your thoughts about MindEase..."
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !feedback.rating || !feedback.feedback}
                  className="w-full bg-teal-600 hover:bg-teal-700"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
