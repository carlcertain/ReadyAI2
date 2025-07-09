import React from 'react';
import { Zap, Brain, Layers, TrendingDown, Check } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50">
      {/* Original Comparison Section */}
      <div className="flex min-h-screen">
        {/* Left Section - Value Proposition */}
        <div className="w-1/2 bg-accent2 text-white p-16 flex flex-col rounded-3xl">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-12 leading-tight">
              ReadyAI value
            </h1>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-5xl font-bold text-accent-light">7</div>
                  <div className="text-xl text-accent">AI subscriptions</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl">
                    offering <span className="text-3xl font-bold text-accent-light">30+</span> AI models
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl">
                    rolled into <span className="text-3xl font-bold text-accent-light">1</span> platform
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <TrendingDown className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl">
                    at <span className="text-4xl font-bold text-green-400">~80%</span> discount
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Pricing Table */}
        <div className="w-1/2 bg-white p-16">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div></div>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Direct sub</h2>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">ReadyAI</h2>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-3 gap-8 items-center py-4 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center text-white text-lg`}>
                      <img src={service.icon} alt={service.name} />
                    </div>
                    {/* <span className="text-xl font-semibold text-gray-900">{service.name}</span> */}
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-medium text-gray-700">{service.price}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-medium text-accent-dark">All Models Included</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="border-t-2 border-gray-200 pt-6">
              <div className="grid grid-cols-3 gap-8 items-center">
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

            {/* CTA Button */}
            <div className="mt-12 text-center">
              <button className="bg-accent hover:bg-accent-dark text-white font-bold py-4 px-12 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Get Started with ReadyAI
              </button>
            </div>
          </div>
        </div>
      </div>

      <br />

      {/* New Pricing Section with Gold Color Palette */}
      <div className="py-24 px-8 bg-accent2 rounded-3xl">
        <div className="max-w-7xl mx-auto font-bold text-center">
          <h2 className="text-5xl font-bold text-white mb-16">Pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'bg-white shadow-2xl border-4' 
                    : 'bg-white shadow-xl'
                }`}
                style={tier.popular ? { borderColor: '#D4B36A' } : {}}
              >
                {tier.popular && (
                  <div 
                    className="text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4"
                    style={{ backgroundColor: '#D4B36A' }}
                  >
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 style={{ color: '#a6863f' }} className="text-2xl font-bold mb-2">
                    {tier.name}
                  </h3>
                  {tier.subtitle && (
                    <p style={{ color: '#D4B36A' }} className="text-sm mb-2">
                      {tier.subtitle}
                    </p>
                  )}
                  <div className="flex items-baseline mb-2">
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

                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    tier.popular
                      ? 'text-white shadow-lg hover:shadow-xl'
                      : 'border-2 hover:opacity-80'
                  }`}
                  style={tier.popular ? { 
                    backgroundColor: '#D4B36A',
                  } : { 
                    borderColor: '#D4B36A', 
                    color: '#a6863f',
                    backgroundColor: 'transparent'
                  }}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>          
        </div>
      </div>
    </div>
  );
}

export default PricingSection1;