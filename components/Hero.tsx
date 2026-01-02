'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              We build growth systems{' '}
              <span className="text-blue-600">that don't guess.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your business with AI-powered growth infrastructure that
              delivers precision data, intelligent automation, and measurable
              results. No guesswork, just growth.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 group"
            >
              Let's Connect
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              <svg
                viewBox="0 0 500 500"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="grad1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: '#3B82F6', stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: '#1D4ED8', stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>

                <circle
                  cx="250"
                  cy="250"
                  r="200"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />

                <circle cx="250" cy="250" r="120" fill="#EFF6FF" />
                <circle cx="250" cy="250" r="100" fill="url(#grad1)" />

                <circle cx="250" cy="150" r="30" fill="#60A5FA" />
                <circle cx="350" cy="250" r="25" fill="#3B82F6" />
                <circle cx="250" cy="350" r="25" fill="#1D4ED8" />
                <circle cx="150" cy="250" r="25" fill="#60A5FA" />

                <line
                  x1="250"
                  y1="250"
                  x2="250"
                  y2="150"
                  stroke="#3B82F6"
                  strokeWidth="3"
                />
                <line
                  x1="250"
                  y1="250"
                  x2="350"
                  y2="250"
                  stroke="#3B82F6"
                  strokeWidth="3"
                />
                <line
                  x1="250"
                  y1="250"
                  x2="250"
                  y2="350"
                  stroke="#3B82F6"
                  strokeWidth="3"
                />
                <line
                  x1="250"
                  y1="250"
                  x2="150"
                  y2="250"
                  stroke="#3B82F6"
                  strokeWidth="3"
                />

                <rect
                  x="220"
                  y="220"
                  width="60"
                  height="60"
                  rx="8"
                  fill="white"
                />
                <path
                  d="M 240 250 L 250 260 L 270 240"
                  stroke="#3B82F6"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wider">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map(
              (company, index) => (
                <div
                  key={index}
                  className="text-2xl font-bold text-gray-400"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
