// components/Banner7Section.jsx
import React from 'react';

export default function Banner7Section() {
  return (
    <section className="relative text-white py-20 overflow-hidden">
      {/* Background translucent angles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent2-lightest transform skew-x-[-20deg]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-accent2-lightest transform skew-x-[-20deg]"></div>
      </div>

      {/* Text and Chart in Columns */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-20 mb-12">
        {/* Text */}
        <div className="text-left">
          <h2 className="text-8xl font-bold text-accent">~2</h2>
          <p className="text-2xl text-accent-light mt-2">
            New AI models are <br className="hidden md:block" />
            released weekly
          </p>
        </div>
        {/* Chart */}
        <div className="w-full flex justify-center">
          <img src="/assets/images/ai_growth_chart.png" alt="AI Growth Chart" className="max-w-full h-auto opacity-70 rounded-lg" />
        </div>
      </div>
    </section>
  );
}