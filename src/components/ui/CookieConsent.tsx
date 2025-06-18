import React, { useEffect, useState } from 'react';
import Button from './Button';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-medium text-primary mb-2">We value your privacy</h2>
            <p className="text-sm text-gray-500">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept", you consent to our use of cookies. For more information, please read our{' '}
              <a href="/privacy-policy" className="text-accent hover:text-accent-dark underline">
                Privacy Policy
              </a>.
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 flex space-x-3">
            <Button 
              variant="outline" 
              onClick={handleDecline}
              className="w-full md:w-auto"
            >
              Decline
            </Button>
            <Button 
              onClick={handleAccept}
              className="w-full md:w-auto"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;