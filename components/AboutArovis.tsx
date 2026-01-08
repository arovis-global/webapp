'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Database, Cpu, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Database,
    stat: '10x',
    title: 'Precision Data',
    description:
      'Access deep, accurate insights that eliminate guesswork and power smarter decisions.',
  },
  {
    icon: Cpu,
    stat: '100x',
    title: 'AI-Powered',
    description:
      'Leverage cutting-edge artificial intelligence to automate and optimize your growth strategies.',
  },
  {
    icon: TrendingUp,
    stat: '100x',
    title: 'Growth-Focused',
    description:
      'Every solution is designed with one goal: accelerating your sustainable business growth.',
  },
];

export default function AboutArovis() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Arovis</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in building intelligent growth systems. We
            combine precision data, AI automation, and growth expertise to
            deliver results that matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-gray-200 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-200/50 transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl mb-6 shadow-md">
                    <feature.icon className="h-8 w-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-3">
                    {feature.stat}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
