import { Industry, Solution, NavItem, Pricing } from '../types';

export const SOLUTIONS: Solution[] = [
  {
    id: 'ai-agents',
    title: 'AI Agents',
    description: 'Deploy customizable AI agents that automate complex workflows and decision-making processes across your organization.',
    icon: 'cpu',
  },
  {
    id: 'llm-integration',
    title: 'LLM Integration',
    description: 'Access industry-leading selection of customizable LLMs tailored to your specific business needs and use cases.',
    icon: 'brain',
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with role-based access control, audit logs, and compliance with industry standards.',
    icon: 'shield',
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'financial',
    name: 'Financial Services',
    description: 'Streamline operations, enhance customer experiences, and improve risk management with AI-powered solutions.',
    icon: 'landmark',
  },
  {
    id: 'retail',
    name: 'Retail',
    description: 'Personalize customer experiences, optimize inventory management, and automate routine tasks.',
    icon: 'shopping-bag',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    description: 'Improve patient care, accelerate research, and optimize operational efficiency with secure AI solutions.',
    icon: 'stethoscope',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Enhance quality control, predict maintenance needs, and optimize production processes.',
    icon: 'factory',
  },
  {
    id: 'energy',
    name: 'Energy & Utilities',
    description: 'Optimize resource allocation, predict equipment failures, and improve customer service.',
    icon: 'zap',
  },
  {
    id: 'public',
    name: 'Public Sector',
    description: 'Enhance citizen services, improve resource allocation, and optimize administrative processes.',
    icon: 'building',
  }
];


export const PricingTiers: Pricing[] = [
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


export const NAVIGATION: NavItem[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Solutions',
    path: '/solutions',
    submenu: SOLUTIONS.map(solution => ({
      name: solution.title,
      path: `/solutions/${solution.id}`,
    })),
  },
  {
    name: 'Industry',
    path: '/industry',
    submenu: INDUSTRIES.map(industry => ({
      name: industry.name,
      path: `/industry/${industry.id}`,
    })),
  },
  {
    name: 'Pricing',
    path: '/pricing'
  },
  // {
  //   name: 'Resources',
  //   path: '/resources'
  // },
  // {
  //   name: 'Blog',
  //   path: '/blog'
  // },
  {
    name: 'FAQ',
    path: '/faq'
  }
];