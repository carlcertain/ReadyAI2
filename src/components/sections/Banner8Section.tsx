// components/Banner8Section.jsx
import React from 'react';
import SlideAnimator from '../../utils/SlideAnimator';

export default function Banner8Section() {
  return (
    <SlideAnimator direction="up">
    <section className="relative bg-accent-dark2-lightest text-white py-20 overflow-hidden">
      {/* Translucent diagonal background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 transform skew-x-[-20deg]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white/5 transform skew-x-[-20deg]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 text-center max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-accent-light">
          <span className="font-bold">Transitioning from the </span><span className="font-bold text-accent-dark">AI chat era</span>
          <span className="text-accent-light font-bold"> to the </span><span className="font-bold text-accent-dark">AI agent era</span>
        </h2>

        <p className="mt-2 text-red-400 text-lg font-medium">
          The <span className="text-red-500 font-semibold">age of AI agents</span> has arrived
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 text-accent text-center">
          <div>
            <p className="text-6xl font-bold">82%</p>
            <p className="mt-2 text-accent-light text-lg">
              executives plan to <br />
              integrate AI agents <br />
              by 2028
            </p>
          </div>
          <div>
            <p className="text-6xl font-bold">$50b</p>
            <p className="mt-2 text-accent-light text-lg">
              size of AI agent <br />
              industry by 2030
            </p>
          </div>
        </div>

        {/* Source text */}
        <p className="text-sm text-accent-light mt-16">
          Sources: Venturebeat, SellerCommerce
        </p>
      </div>
    </section>
    </SlideAnimator>
  );
}