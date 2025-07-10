// components/Banner5Section.jsx
import React from 'react';
import { ShieldCheck, RefreshCw, Cpu } from 'lucide-react';
import SlideAnimator from '../../utils/SlideAnimator';

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-accent-light" />,
    title: "The danger of shadow AI",
    description: "Your data becomes training data for AI",
  },
  {
    icon: <RefreshCw className="w-10 h-10 text-accent-light" />,
    title: "New models released weekly",
    description: "New LLMs become old news – fast",
  },
  {
    icon: <Cpu className="w-10 h-10 text-accent-light" />,
    title: "Agentic AI is here",
    description: "Chatbots aren’t enough in the agent era",
  },
];

export default function Banner5Section() {
  return (
    <SlideAnimator direction="up">
    <div>
      {/* Top title row with different background */}
      <div className="bg-accent2-lightest text-accent2 text-center py-12">
        <h2 className="text-lg md:text-xl font-light">AI users face</h2>
        <h1 className="text-3xl md:text-4xl font-bold">Major Problems</h1>
      </div>

      {/* Feature cards section */}
      <section className="text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 py-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-accent2-lightest border-2 border-accent-light rounded-lg p-6 text-center rounded-xl"
            >
              <div className="text-accent2 flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-accent2 text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-accent">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </SlideAnimator>
  );
}