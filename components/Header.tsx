'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

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
          <Link href="/" className="flex items-center">
            <Image
              src="/logo_arovis_png.png"
              alt="Arovis"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#home"
              className="text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent transition-all font-medium"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent transition-all font-medium"
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent transition-all font-medium"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent transition-all font-medium"
            >
              Contact Us
            </Link>
          </nav>

          <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-shadow">
            We're Hiring
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
