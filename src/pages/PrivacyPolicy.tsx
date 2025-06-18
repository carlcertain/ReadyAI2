import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Privacy Policy - ReadyAI';
  }, []);

  return (
    <div className="pt-20">
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Shield className="h-10 w-10 text-accent" />
            <div>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-2 text-xl text-gray-100">
                Effective Date: May 1, 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-8 space-y-8">
            {/* Introduction Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                Introduction
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We respect your privacy and are committed to protecting your personal data. 
                This Privacy Policy ("Policy") describes how we collect, use, and disclose your personal data.
              </p>
            </div>

            {/* Information Collection Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                Information Collection
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">Personal Data</h3>
                <p className="text-gray-700 mb-4">We collect the following types of personal data:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span>Contact information (e.g., name, email, phone number)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span>Usage data (e.g., IP address, browser type, operating system)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use of Personal Data Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                Use of Personal Data
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">Purpose</h3>
                <p className="text-gray-700 mb-4">We use your personal data for:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span>Providing and improving the Website</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span>Responding to your inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span>Sending marketing communications</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Disclosure Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                Disclosure of Personal Data
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">Third Parties</h3>
                <p className="text-gray-700 mb-4">We may disclose your personal data to:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span>Service providers (e.g., cloud storage, email marketing)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span>Law enforcement or regulatory agencies</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Protection Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                Data Protection
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span><strong>Security:</strong> We implement reasonable security measures to protect your personal data.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span><strong>Retention:</strong> We retain your personal data for as long as necessary to fulfill the purposes described in Section 2.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Your Rights Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                Your Rights
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span><strong>Access:</strong> You have the right to access your personal data.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span><strong>Correction:</strong> You have the right to correct or update your personal data.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span><strong>Deletion:</strong> You have the right to request deletion of your personal data.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;