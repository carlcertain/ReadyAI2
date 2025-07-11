import React from 'react';
import { Zap, Brain, Layers, TrendingDown, Check } from 'lucide-react';
import { INDUSTRIES } from '../../utils/constants';

const PricingSection1: React.FC = () => {
  const services = [
    {
      name: 'OpenAI',
      price: '$60/mo',
      icon: '/assets/images/openai.png',
      color: 'bg-green-500'
    },
    {
      name: 'ANTHROPIC',
      price: '$60/mo',
      icon: '/assets/images/anthropic.png',
      color: 'bg-orange-500'
    },
    {
      name: 'Gemini',
      price: '$30/mo',
      icon: '/assets/images/gemini.png',
      color: 'bg-blue-500'
    },
    {
      name: 'cohere',
      price: '$19/mo',
      icon: '/assets/images/cohere.png',
      color: 'bg-green-600'
    },
    {
      name: 'Grok',
      price: '$40/mo',
      icon: '/assets/images/grok.png',
      color: 'bg-black'
    },
    {
      name: 'Meta',
      price: 'Open source',
      icon: '/assets/images/meta.png',
      color: 'bg-blue-600'
    },
    {
      name: 'deepseek',
      price: 'Open source',
      icon: '/assets/images/deepseek.png',
      color: 'bg-purple-600'
    },
    {
      name: '',
      price: 'Plus more!',
      icon: '',
      color: ''
    }
  ];

  const pricingTiers = [
    {
      name: 'Free',
      price: '$0',
      period: '/mo',
      features: [
        'Access to 20+ LLMs',
        '2GB storage',
        'Microsoft integration',
        'Create unlimited agents',
        'Use unlimited agents',
        'Analytics on AI usage',
        'Vector database & RAG pipeline',
        'RAG & Python tools'
      ]
    },
    {
      name: 'Personal',
      price: '$15',
      period: '/mo/seat',
      subtitle: '(7-day free trial)',
      note: 'Paid annually',
      monthlyNote: '$18/mo/seat if month to month',
      popular: true,
      features: [
        'Access to all 30+ LLMs',
        '10GB storage',
        'All integrations',
        'Unlimited chat history',
        'Embed AI anywhere',
        'Build workflows',
        'Access to APIs',
        '+All features in Free'
      ]
    },
    {
      name: 'Business',
      price: '$30',
      period: '/mo/seat',
      note: 'Paid annually',
      features: [
        'Access to 30+ LLMs',
        '20GB storage',
        'Governance features',
        'User permissions',
        'Compliance tools',
        'Advanced analytics',
        '+All features in Personal'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Comparison Section */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-accent2 text-white p-8 md:p-16 flex flex-col rounded-3xl">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-12 leading-tight">
              ReadyAI value
            </h1>
            <div className="space-y-8">
              {[ 
                { icon: Brain, title: '7+', subtitle: 'AI subscriptions' },
                { icon: Layers, title: '30+', subtitle: 'offering AI models' },
                { icon: Zap, title: '1', subtitle: 'rolled into one platform' },
                { icon: TrendingDown, title: '~80%', subtitle: 'discount' }
              ].map(({ icon: Icon, title, subtitle }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className={`text-${title.includes('%') ? '4xl' : '5xl'} font-bold text-accent-light`}>
                      {title}
                    </div>
                    <div className="text-xl text-accent">{subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-white p-8 md:p-16">
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-4 mb-8 text-center">
              <div></div>
              <h2 className="text-2xl font-bold text-gray-900">Direct sub</h2>
              <h2 className="text-2xl font-bold text-gray-900">ReadyAI</h2>
            </div>

            {/* Services */}
            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 items-center gap-4 py-4 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    {service.icon && (
                      <img
                        src={service.icon}
                        alt={service.name}
                        className="w-40 sm:w-40 h-auto object-contain max-w-full"
                      />
                    )}
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-medium text-gray-700">{service.price}</span>
                  </div>
                  <div className="text-center">
                    {service.name && (
                      <span className="text-lg font-medium text-accent-dark">All Models Included</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="border-t-2 border-gray-200 pt-6">
              <div className="grid grid-cols-3 gap-4 items-center">
                <div>
                  <span className="text-2xl font-bold text-gray-900">TOTAL</span>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">$210</div>
                  <div className="text-sm text-gray-500">/mo/seat</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600">$30</div>
                  <div className="text-sm text-gray-500">/mo/seat</div>
                  <div className="mt-2">
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Save 86%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <a href="https://devs.ai/signup?ref=sales%40readyai.dev">
                <button className="bg-accent hover:bg-accent-dark text-white font-bold py-4 px-12 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Get Started with ReadyAI
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <br />

      {/* Pricing Tiers */}
      <div className="py-24 px-4 md:px-8 bg-accent2 rounded-3xl">
        <div className="max-w-7xl mx-auto font-bold text-center">
          <h2 className="text-5xl font-bold text-white mb-16">Pricing</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                  tier.popular ? 'bg-white shadow-2xl border-4' : 'bg-white shadow-xl'
                }`}
                style={tier.popular ? { borderColor: '#D4B36A' } : {}}
              >
                <div className="mb-6">
                  <h3 style={{ color: '#a6863f' }} className="text-2xl font-bold mb-2">
                    {tier.name}
                  </h3>
                  {tier.subtitle && (
                    <p style={{ color: '#D4B36A' }} className="text-sm mb-2">
                      {tier.subtitle}
                    </p>
                  )}
                  <div className="flex items-baseline mb-2 justify-center">
                    <span style={{ color: '#a6863f' }} className="text-4xl font-bold">
                      {tier.price}
                    </span>
                    <span style={{ color: '#D4B36A' }} className="text-lg ml-1">
                      {tier.period}
                    </span>
                  </div>
                  {tier.note && (
                    <p style={{ color: '#D4B36A' }} className="text-sm">
                      {tier.note}
                    </p>
                  )}
                  {tier.monthlyNote && (
                    <p style={{ color: '#D4B36A' }} className="text-sm mt-1">
                      {tier.monthlyNote}
                    </p>
                  )}
                </div>

                <div style={{ borderColor: '#E2C788' }} className="border-t pt-6 mb-8">
                  <ul className="space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check
                          style={{ color: '#D4B36A' }}
                          className="w-5 h-5 mt-0.5 flex-shrink-0"
                        />
                        <span style={{ color: '#a6863f' }} className="text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="https://devs.ai/signup?ref=sales%40readyai.dev">
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      tier.popular
                        ? 'text-white shadow-lg hover:shadow-xl'
                        : 'border-2 hover:opacity-80'
                    }`}
                    style={
                      tier.popular
                        ? { backgroundColor: '#D4B36A' }
                        : {
                            borderColor: '#D4B36A',
                            color: '#a6863f',
                            backgroundColor: 'transparent'
                          }
                    }
                  >
                    Get Started
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection1;