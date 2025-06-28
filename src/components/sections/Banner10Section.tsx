import React from 'react';
import { CheckCircle } from 'lucide-react';
import SlideAnimator from '../../utils/SlideAnimator';

const departments = [
  {
    title: 'Marketing',
    items: [
      'Content generation',
      'Campaign ideation',
      'Market research',
      'CTA optimization',
      'Audience segmentation',
    ],
  },
  {
    title: 'Sales',
    items: [
      'Product recommendation',
      'Sales data analysis',
      'Sales pitch creation',
      'Objection handling',
      'Product comparison',
    ],
  },
  {
    title: 'Human Resources',
    items: [
      'Recruitment advice',
      'Resume comparison',
      'Onboarding automation',
      'Employee goal tracking',
      'HR policy compliance',
    ],
  },
  {
    title: 'Product Management',
    items: [
      'Feature prioritization',
      'User feedback analysis',
      'Roadmap planning',
      'Product documentation',
      'Competitive analysis',
    ],
  },
  {
    title: 'IT/Software Dev',
    items: [
      'API documentation',
      'Coding',
      'IT troubleshooting',
      'Technical documentation',
      'System integration advice',
    ],
  },
  {
    title: 'Legal',
    items: [
      'Contract review',
      'Legal documentation',
      'Compliance verification',
      'Risk assessment',
      'Legal pitch support',
    ],
  },
];

export default function Banner10Section() {
  return (
    <SlideAnimator direction="up">
    <section className="relative bg-white py-20 px-6 md:px-20">
      {/* Translucent background shape */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-100/50 transform skew-x-[-20deg]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-light text-accent-dark mb-12">
          Departmental <span className="font-semibold text-accent-dark">use cases</span> for AI agents
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {departments.map((dept, idx) => (
            <div
              key={idx}
              className="transition transform hover:scale-105 duration-300 ease-in-out"
            >
              <div className="bg-accent text-white text-center py-2 rounded-t-lg font-semibold">
                {dept.title}
              </div>
              <div className="bg-accent2-light p-6 rounded-b-lg space-y-3">
                {dept.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-accent-dark">
                    <CheckCircle className="w-4 h-4 text-accent mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </SlideAnimator>
  );
}