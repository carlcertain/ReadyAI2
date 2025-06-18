import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import IndustriesSection from '../components/sections/IndustriesSection';
import CtaSection from '../components/sections/CtaSection';
import ROICalculator from '../components/sections/ROICalculator';
import Banner from '../components/sections/Banner';

const Home: React.FC = () => {
  // Update the document title
  React.useEffect(() => {
    document.title = 'ReadyAI - AI Solutions for Business';
  }, []);

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Calculate Your Potential Savings
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                No matter your industry, our platform can help you reduce costs while expanding AI capabilities. 
                Use our ROI calculator to see how much you could save by switching to our platform.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our fixed price of $30 per user per month provides access to all platform features, 
                including unlimited AI agents, all supported LLMs, and our comprehensive management tools.
              </p>
            </div>
            <div className="lg:col-span-5 mt-8 lg:mt-0">
              <ROICalculator />
            </div>
          </div>
        </div>
      </div>
      <IndustriesSection />
      <Banner />
      <CtaSection />
    </div>
  );
};

export default Home;