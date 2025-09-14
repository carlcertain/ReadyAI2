import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import CalendlyBtn from './CalendlyBtn';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark overflow-hidden">
      {/* Abstract background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">All your AI</span>
              <span className="block text-accent">One secure, enterprise-grade platform</span>
            </h1>
            <span className="block text-2xl mt-4 text-gray-100">Step confidently into the AI era</span>
            <span className="font-bold block text-2xl mt-4 text-gray-100">One monthly fee. No surprises</span>
            <div className="mt-12"> 
              <CalendlyBtn
              text="Book a Discovery Call"
              className="bg-accent text-white px-5 py-2 rounded-lg shadow hover:bg-accent-dark"
            /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;