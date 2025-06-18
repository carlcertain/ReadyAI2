import React from 'react';
import { Link } from 'react-router-dom';
import { SOLUTIONS } from '../../utils/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="/readyai-logo.png" 
                alt="ReadyAI" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-500 text-sm">
              Simplify AI adoption with a secure, flexible platform that meets your specific business needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-2">
              {SOLUTIONS.map((solution) => (
                <li key={solution.id}>
                  <Link 
                    to={`/solutions/${solution.id}`} 
                    className="text-gray-500 hover:text-gray-900"
                  >
                    {solution.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><Link to="/industry/financial" className="text-gray-500 hover:text-gray-900">Financial Services</Link></li>
              <li><Link to="/industry/retail" className="text-gray-500 hover:text-gray-900">Retail</Link></li>
              <li><Link to="/industry/healthcare" className="text-gray-500 hover:text-gray-900">Healthcare & Life Sciences</Link></li>
              <li><Link to="/industry/manufacturing" className="text-gray-500 hover:text-gray-900">Manufacturing</Link></li>
              <li><Link to="/industry/energy" className="text-gray-500 hover:text-gray-900">Energy & Utilities</Link></li>
              <li><Link to="/industry/public" className="text-gray-500 hover:text-gray-900">Public Sector</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-500 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-500 hover:text-gray-900">Terms of Service</Link></li>
              <li><Link to="/gdpr" className="text-gray-500 hover:text-gray-900">GDPR</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} ReadyAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;