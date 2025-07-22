// components/Banner9Section.jsx
import React from 'react';
import {
  ClipboardList,
  Search,
  Store,
  Headphones,
  Code,
  CheckSquare,
  Globe,
  HelpCircle,
} from 'lucide-react';
import SlideAnimator from '../../utils/SlideAnimator';

const features = [
  { label: 'Content creation', icon: ClipboardList },
  { label: 'Research', icon: Search },
  { label: 'Marketplace operations', icon: Store },
  { label: 'Help desk', icon: Headphones },
  { label: 'Coding', icon: Code },
  { label: 'Task automation', icon: CheckSquare },
  { label: 'Translation', icon: Globe },
  { label: '', icon: HelpCircle },
];

export default function Banner9Section() {
  return (
    <SlideAnimator direction="down">
    <section className="relative bg-white py-20 px-6 md:px-20 overflow-hidden">
      {/* Background translucent angles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-100/50 transform skew-x-[-20deg]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gray-100/50 transform skew-x-[-20deg]"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-accent-dark">
          “But what is AI being used for?”
        </h2>
      </div>

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {features.map(({ label, icon: Icon }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center bg-white rounded-xl shadow-md p-6 aspect-square hover:shadow-xl transition"
          >
            <Icon className="w-10 h-10 text-accent-dark mb-3" />
            {label && (
              <p className="text-accent-dark text-sm md:text-base">{label}</p>
            )}
          </div>
        ))}
      </div>
    </section>
    </SlideAnimator>
  );
}