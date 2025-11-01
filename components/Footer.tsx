import Link from 'next/link';
import { Heart, Shield, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-teal-600" aria-hidden="true" />
              <span className="text-xl font-bold text-gray-900">MindEase</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Your digital emotional companion. We provide empathetic support through multimodal emotion detection and intelligent conversation.
            </p>
            <div className="flex items-start space-x-2 text-sm text-gray-600">
              <Shield className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p>Your privacy and safety are our top priorities</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-teal-600 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-600 hover:text-teal-600 text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-600 hover:text-teal-600 text-sm">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-teal-600 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Legal & Safety
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-teal-600 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-gray-600 hover:text-teal-600 text-sm">
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <a href="tel:988" className="text-gray-600 hover:text-teal-600 text-sm">
                  Crisis Helpline: 988
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} MindEase. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Lock className="h-4 w-4 text-gray-500" aria-hidden="true" />
              <p className="text-gray-600 text-sm">
                Secure & Confidential
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
