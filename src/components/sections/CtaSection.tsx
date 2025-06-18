import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CtaSection: React.FC = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to capture Shadow AI?</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link to="/contact">
              <Button 
                className="bg-white text-blue-600"
                size="lg"
              >
                Get started
              </Button>
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link to="/solutions">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-primary-dark text-white border-accent hover:bg-primary"
              >
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;