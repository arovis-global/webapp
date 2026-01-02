'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, DollarSign, Target, Zap, CheckCircle } from 'lucide-react';

const features = [
  {
    badge: 'Deep Analytics',
    icon: Sparkles,
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
    icon: DollarSign,
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
    icon: Target,
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
    icon: Zap,
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
    <section id="services" className="py-20 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              feature.reverse ? 'lg:grid-flow-dense' : ''
            }`}
          >
            <div className={feature.reverse ? 'lg:col-start-2' : ''}>
              <Badge
                variant="outline"
                className="mb-4 text-blue-600 border-blue-600"
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
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Learn More
              </Button>
            </div>

            <div className={feature.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-12 flex items-center justify-center">
                  <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id={`grad-${index}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: '#3B82F6', stopOpacity: 0.8 }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: '#1D4ED8', stopOpacity: 0.8 }}
                        />
                      </linearGradient>
                    </defs>

                    <circle
                      cx="200"
                      cy="200"
                      r="150"
                      fill={`url(#grad-${index})`}
                      opacity="0.2"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="100"
                      fill={`url(#grad-${index})`}
                      opacity="0.3"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="60"
                      fill={`url(#grad-${index})`}
                    />

                    <foreignObject x="150" y="150" width="100" height="100">
                      <div className="w-full h-full flex items-center justify-center">
                        <feature.icon className="h-12 w-12 text-white" />
                      </div>
                    </foreignObject>

                    {[0, 1, 2, 3, 4, 5].map((i) => {
                      const angle = (i * 60 * Math.PI) / 180;
                      const x = 200 + 130 * Math.cos(angle);
                      const y = 200 + 130 * Math.sin(angle);
                      return (
                        <circle
                          key={i}
                          cx={x}
                          cy={y}
                          r="15"
                          fill="#3B82F6"
                          opacity="0.6"
                        />
                      );
                    })}
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
