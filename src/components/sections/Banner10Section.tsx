import React from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';
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
      'Coding',
      'IT troubleshooting',
      'Technical documentation',
      'System integration advice',
      ' ',
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
      <section className="relative bg-white py-20 px-6 md:px-20 overflow-hidden">
        {/* Translucent background shape */}
        {/* <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-100/50 transform skew-x-[-20deg]"></div>
        </div> */}

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

                <div className="relative bg-accent text-white text-center py-2 rounded-t-lg text-xl md:text-xl overflow-hidden">
                  
                  {/* Decorative Background Icons */}
                  <Sparkles className="absolute top-0 left-0 w-20 h-20 opacity-5 transform -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                  <Sparkles className="absolute top-4 right-6 w-10 h-10 opacity-10 pointer-events-none" />
                  <Sparkles className="absolute bottom-0 left-1/2 w-16 h-16 opacity-5 transform -translate-x-1/2 translate-y-1/3 pointer-events-none" />
                  <Sparkles className="absolute bottom-2 right-2 w-12 h-12 opacity-15 pointer-events-none" />
                  <Sparkles className="absolute top-1/2 left-1/4 w-24 h-24 opacity-5 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                  {/* Foreground Text */}
                  {dept.title}
                </div>

                <div className="bg-accent2-lighter p-6 rounded-b-lg space-y-3 text-center md:text-left">
                  {dept.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-row items-center justify-center md:justify-start gap-2 text-base md:text-lg text-accent-dark"
                    >
                      {(item.trim().length > 0) 
                      ? <CheckCircle className="w-4 h-4 text-accent" /> 
                      : <div className="invisible"> <br /> </div>}
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    
  );
}