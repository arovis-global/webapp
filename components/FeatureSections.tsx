'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

const featureImages = [
  '/chatgpt_image_jan_8,_2026,_10_14_06_pm.png',
  '/chatgpt_image_jan_8,_2026,_10_10_04_pm.png',
  '/chatgpt_image_jan_9,_2026,_12_58_48_am.png',
  '/chatgpt_image_jan_9,_2026,_12_54_36_am.png',
];

const features = [
  {
    badge: 'Deep Analytics',
    title: 'Supercharge Your Success with AI',
    description:
      'Harness the power of artificial intelligence to transform your business operations and accelerate growth.',
    points: [
      'Real-time performance monitoring and insights',
      'Predictive analytics for strategic planning',
      'Automated optimization across all channels',
      'Machine learning that improves over time',
    ],
    reverse: false,
  },
  {
    badge: 'Revenue Growth',
    title: 'Boost Your Earnings',
    description:
      'Unlock new revenue streams and maximize profitability with data-driven strategies that deliver results.',
    points: [
      'Identify high-value opportunities instantly',
      'Optimize pricing and conversion rates',
      'Reduce customer acquisition costs',
      'Increase lifetime value systematically',
    ],
    reverse: true,
  },
  {
    badge: 'Actionable Intelligence',
    title: 'Insights You Can Actually Use',
    description:
      'Move beyond vanity metrics with actionable insights that drive real business decisions and outcomes.',
    points: [
      'Clear, visual dashboards that tell a story',
      'Customizable reports for every stakeholder',
      'Anomaly detection and alert systems',
      'Historical trend analysis and forecasting',
    ],
    reverse: false,
  },
  {
    badge: 'Smart Automation',
    title: 'Campaign Intelligence That Actually Works',
    description:
      'Deploy intelligent campaigns that learn, adapt, and optimize themselves for maximum performance.',
    points: [
      'Multi-channel campaign orchestration',
      'A/B testing at scale with AI recommendations',
      'Automatic budget allocation and optimization',
      'Personalization engines that convert',
    ],
    reverse: true,
  },
];

export default function FeatureSections() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={'grid lg:grid-cols-2 gap-12 items-center ' + (feature.reverse ? 'lg:grid-flow-dense' : '')}
          >
            <div className={feature.reverse ? 'lg:col-start-2' : ''}>
              <Badge
                variant="outline"
                className="mb-4 text-blue-600 border-blue-600 bg-blue-50"
              >
                {feature.badge}
              </Badge>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {feature.description}
              </p>
              <ul className="space-y-4 mb-8">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-6 w-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-shadow">
                Learn More
              </Button>
            </div>

            <div className={feature.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white">
                  <Image
                    src={featureImages[index]}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
