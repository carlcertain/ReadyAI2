import React from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES } from '../../utils/constants';
import { ArrowRight, Landmark, ShoppingBag, Stethoscope, Factory, Zap, Building } from 'lucide-react';

const iconMap = {
  'landmark': Landmark,
  'shopping-bag': ShoppingBag,
  'stethoscope': Stethoscope,
  'factory': Factory,
  'zap': Zap,
  'building': Building
};

const IndustriesSection: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Industries
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tailored AI solutions for every sector
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover how Devs.ai can transform operations and drive innovation in your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry) => {
            const Icon = iconMap[industry.icon as keyof typeof iconMap];
            
            return (
              <Link 
                key={industry.id} 
                to={`/industry/${industry.id}`}
                className="group"
              >
                <div className="h-full flex flex-col bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="p-6 flex-1">
                    <div className="w-12 h-12 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="mt-3 text-gray-500">
                      {industry.description}
                    </p>
                  </div>
                  <div className="px-6 py-4 bg-gray-50 flex justify-end">
                    <span className="text-blue-600 font-medium inline-flex items-center group-hover:underline">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;