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
    <section id="about" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Arovis
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
              <Card className="h-full border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-3">
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
