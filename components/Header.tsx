'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Arovis</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#home"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Contact Us
            </Link>
          </nav>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            We're Hiring
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
