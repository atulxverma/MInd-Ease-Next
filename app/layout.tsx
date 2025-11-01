export const dynamic = "force-dynamic";
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  ClerkProvider,
} from '@clerk/nextjs';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'MindEase - Your Digital Emotional Companion',
  description:
    'Experience compassionate support through intelligent emotion detection and empathetic conversation. MindEase provides multimodal emotional support with privacy and safety at its core.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`${inter.variable} antialiased`}>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </body>
      </ClerkProvider>
    </html>
  );
}
