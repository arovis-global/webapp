'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Gauge, Rocket, Shield, Users } from 'lucide-react';

const metrics = [
  {
    icon: Gauge,
    title: '10x Faster Optimization',
    description: 'AI-driven insights deliver results in hours, not weeks',
  },
  {
    icon: Rocket,
    title: '3x Revenue Growth',
    description: 'Data-backed strategies that consistently outperform',
  },
  {
    icon: Shield,
    title: '99.9% Uptime Guarantee',
    description: 'Enterprise-grade infrastructure you can depend on',
  },
  {
    icon: Users,
    title: '500+ Happy Clients',
    description: 'Trusted by businesses across every industry',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Arovis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of companies that trust Arovis to power their growth
            with precision, speed, and reliability.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="h-full"
            >
              <Card className="h-full border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-xl mb-4">
                    <metric.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {metric.title}
                  </h3>
                  <p className="text-sm text-gray-600">{metric.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
