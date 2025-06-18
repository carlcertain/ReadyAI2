import React from 'react';
import { FileText } from 'lucide-react';

const TermsOfService: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Terms of Service - ReadyAI';
  }, []);

  return (
    <div className="pt-20">
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <FileText className="h-10 w-10 text-accent" />
            <div>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                Terms of Service
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
                Welcome to ReadyAI a platform designed to provide information on an enterprise grade AI platform. 
                By accessing or using our website, you agree to be bound by these Terms of Service ("Terms"). 
                Please read them carefully.
              </p>
            </div>

            {/* Definitions Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                1. Definitions
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span><strong>Website:</strong> Refers to ReadyAI including all its subdomains and related services.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span><strong>User:</strong> Anyone accessing or using the Website.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span><strong>Content:</strong> Any information, text, images, videos, or other materials posted or shared on the Website.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use of Website Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                2. Use of the Website
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">License and Compliance</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span><strong>License:</strong> You are granted a non-exclusive, non-transferable, and revocable license to use the Website for personal or internal business purposes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span><strong>Compliance:</strong> You must comply with all applicable laws and regulations when using the Website.</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-primary mt-6 mb-4">Prohibited Activities</h3>
                <p className="text-gray-700 mb-4">You may not:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span>Use the Website for unlawful or unauthorized purposes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span>Interfere with or disrupt the operation of the Website.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span>Attempt to gain unauthorized access to the Website or its underlying systems.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                3. Intellectual Property
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span><strong>Trademarks:</strong> All trademarks, logos, and service marks on the Website are owned by their respective parties.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span><strong>Copyright:</strong> The Website and its Content are protected by copyright laws.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Additional Sections */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                4. Legal Provisions
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Disclaimer and Limitation of Liability</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                      <span><strong>Disclaimer:</strong> The Website is provided "as is" and "as available" without warranties of any kind.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                      <span><strong>Limitation of Liability:</strong> We will not be liable for any damages arising from or related to your use of the Website.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Governing Law and Jurisdiction</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                      <span><strong>Governing Law:</strong> These Terms will be governed by and construed in accordance with the laws of New Hampshire, United States.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                      <span><strong>Jurisdiction:</strong> Any disputes arising from or related to these Terms will be resolved through mediation in the State of New Hampshire.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Final Sections */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary border-b border-gray-200 pb-4">
                5. Additional Terms
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span><strong>Changes to Terms:</strong> We reserve the right to modify or update these Terms at any time.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-accent mr-2">•</span>
                    <span><strong>Termination:</strong> We may terminate or suspend your access to the Website at any time.</span>
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

export default TermsOfService;