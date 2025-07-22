import React from 'react';
import { Brain, ShieldCheck, TrendingDown, LayoutDashboard, Cpu, User } from 'lucide-react';

const features = [
  {
    name: 'Customizable AI Agents',
    description: 'Deploy AI agents that automate complex workflows and decision-making processes across your organization.',
    icon: Cpu,
  },
  {
    name: 'Leading LLM Access',
    description: 'Centralized access to an industry-leading selection of customizable LLMs tailored to your business needs.',
    icon: Brain,
  },
  {
    name: 'Simplified Management',
    description: 'Single platform to create, deploy, and manage all your AI agents within a secure environment.',
    icon: LayoutDashboard,
  },
  {
    name: 'Enterprise Security',
    description: 'Enterprise-grade security with role-based access control, audit logs, and compliance with industry standards.',
    icon: ShieldCheck,
  },
  {
    name: 'Cost Optimization',
    description: 'Save significantly on AI licenses with our flexible, cost-effective AI adoption model.',
    icon: TrendingDown,
  },
  {
    name: 'User Accessibility',
    description: 'Built for users of all skill levels, simplifying AI creation and management across your teams.',
    icon: User,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-accent font-semibold tracking-wide uppercase">Capabilities</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
            A better way to implement AI
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Simplify AI adoption with a secure, flexible platform that meets your specific business needs
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-primary">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;