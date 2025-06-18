import React from 'react';
import { Lock } from 'lucide-react';

const GdprPolicy: React.FC = () => {
  React.useEffect(() => {
    document.title = 'GDPR Policy - ReadyAI';
  }, []);

  return (
    <div className="pt-20">
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Lock className="h-10 w-10 text-accent" />
            <div>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                GDPR Policy
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
                We are committed to complying with the General Data Protection Regulation (GDPR). 
                This GDPR Policy ("Policy") describes how we collect, use, and disclose your personal data.
              </p>
            </div>

            {/* Data Controller Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                1. Data Controller
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">
                  <strong>Data Controller:</strong> ReadyAI is the data controller of your personal data.
                </p>
              </div>
            </div>

            {/* Data Protection Officer Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                2. Data Protection Officer
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">
                  <strong>Data Protection Officer:</strong> ReadyAI is our Data Protection Officer.
                </p>
              </div>
            </div>

            {/* Data Subject Rights Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                3. Data Subject Rights
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">Rights</h3>
                <p className="text-gray-700 mb-4">You have the following rights:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span>Right to access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span>Right to rectification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span>Right to erasure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span>Right to restrict processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span>Right to data portability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span>Right to object</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Breach Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                4. Data Breach Notification
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">
                  <strong>Notification:</strong> We will notify you of any data breach affecting your personal data.
                </p>
              </div>
            </div>

            {/* International Transfers Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                5. International Data Transfers
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">
                  <strong>Transfers:</strong> We do not transfer your personal data outside the [EU/EEA].
                </p>
              </div>
            </div>

            {/* Acknowledgment Section */}
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700">
                By using our Website, you acknowledge that you have read, understood, and agree to be bound by these 
                Terms of Service, Privacy Policy, and GDPR Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GdprPolicy;