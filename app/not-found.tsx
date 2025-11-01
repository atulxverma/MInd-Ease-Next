import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-teal-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" aria-hidden="true" />
              Go Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-2 border-teal-600 text-teal-700 hover:bg-teal-50">
            <Link href="javascript:history.back()">
              <ArrowLeft className="mr-2 h-5 w-5" aria-hidden="true" />
              Go Back
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
