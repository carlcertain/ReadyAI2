import React from 'react';
import { useParams, Link } from 'react-router-dom';


const PricingPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Our Pricing
          </h1>
        </div>
      </div>
            
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">                
          <img src="/assets/images/banner3.png"/>               
          <img src="/assets/images/banner18.png"/>
      </div>
</div>
    
  );
};

export default PricingPage;