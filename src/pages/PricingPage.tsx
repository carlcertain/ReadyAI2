import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PricingSection1 from '../components/sections/PricingSection1';
import FloatingButton from '../utils/FloatingButton';


const PricingPage: React.FC = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark overflow-hidden">
      {/* Abstract background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-10 md:pt-24 md:pb-14"> {/* Reduced padding to make background shorter */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Pricing</span>
              <span className="block text-2xl mt-4 text-accent">Enterprise grade platform for one monthly fee</span>
            </h1>
          </div>
        </div>
      </div>
    </div>   
            
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">                
        <PricingSection1 />               
    </div>
    
  <FloatingButton url="https://devs.ai/signup?ref=sales%40readyai.dev" label="Explore Platform" />

  </div>
    
  );
};

export default PricingPage;