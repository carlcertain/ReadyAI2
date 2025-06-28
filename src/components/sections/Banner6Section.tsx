// components/ShadowAIStatsSection.jsx
import React from "react";
import SlideAnimator from "../../utils/SlideAnimator";

export default function Banner6Section() {
  return (
    <SlideAnimator direction="left">
    <section className="relative bg-accent2-lightest text-white py-20 overflow-hidden">
      {/* Background translucent diagonal shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent2-lighter transform skew-x-[-20deg]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-accent2-lighter transform skew-x-[-20deg]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          <span className="text-gray-500 font-bold">Shadow AI</span>{" "}
          <span className="text-accent-light">is on the rise</span>
        </h2>

        <p className="text-red-400 text-lg mt-4">
          With free AI tools,{" "}
          <span className="font-semibold text-red-500">
            your data is their training data
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 text-accent">
          <div className="text-center">
            <p className="text-6xl font-bold text-accent-dark">75%</p>
            <p className="mt-2 text-lg">of employees use free AI tools</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-bold text-accent-dark">69%</p>
            <p className="mt-2 text-lg">
              are afraid to report <br /> they use AI tools
            </p>
          </div>
        </div>
      </div>
    </section>
    </SlideAnimator>
  );
}