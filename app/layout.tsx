import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Arovis - AI-Powered Growth Systems',
  description:
    'Transform your business with AI-powered growth infrastructure that delivers precision data, intelligent automation, and measurable results.',
  openGraph: {
    title: 'Arovis - AI-Powered Growth Systems',
    description:
      "Build growth systems that don't guess. Leverage AI-powered analytics and automation.",
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arovis - AI-Powered Growth Systems',
    description:
      "Build growth systems that don't guess. Leverage AI-powered analytics and automation.",
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
