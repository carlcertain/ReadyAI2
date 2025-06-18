import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

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
              <span className="block">All of your AI solutions on one</span>
              <span className="block text-accent">enterprise grade platform for one monthly fee</span>
              <span className="block text-2xl mt-4 text-gray-100">Migrate to the new era of AI management</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;