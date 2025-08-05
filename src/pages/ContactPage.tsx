import React from 'react';
import { Mail, Phone,MapPin } from 'lucide-react';
import ContactForm from '../components/layout/ContactForm';
import CalendlySectionPopUp from '../components/sections/CalendlySectionPopUp';

const ContactPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Contact - ReadyAI';
  }, []);

  return (
    <div className="pt-20">
    
      <CalendlySectionPopUp />

      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-100 max-w-3xl">
            Our team is excited to help your organization secure your AI strategy today.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <ContactForm />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div className="ml-3 text-base">
                  <p className="font-medium text-gray-900">Email</p>
                  <a 
                    href="mailto:sales@readyai.dev" 
                    className="mt-1 text-gray-500 hover:text-accent"
                  >
                    sales@readyai.dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div className="ml-3 text-base">
                  <p className="font-medium text-gray-900">Phone</p>
                  <a 
                    href="tel:888-778-6864" 
                    className="mt-1 text-gray-500 hover:text-accent"
                  >
                    {/* 949 444 5881 */}
                    949-402-7053
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div className="ml-3 text-base">
                  <p className="font-medium text-gray-900">Address</p>
                  <a 
                    href="tel:888-778-6864" 
                    className="mt-1 text-gray-500 hover:text-accent"
                  >
                    Irvine, California 92614
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">                  
                  
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;