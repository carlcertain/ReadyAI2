import React from "react";
import { Linkedin } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="bg-gray-700">
        <div className="max-w-7xl mx-auto">
            <div className="lg:text-center pb-8 pt-8">
                <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                    
                    <a
                        href="https://www.linkedin.com/company/readyai-dev/"
                        target="_blank"
                        className="flex items-center justify-center md:justify-end space-x-2 hover:text-blue-600 transition-colors"
                    >
                        <span className="text-sm text-gray-100">Find us on</span>
                        <Linkedin className="w-5 h-5" />
                        <span className="text-sm text-gray-100">LinkedIn</span>
                    </a>
                </h2>
            </div>
        </div>
    </div>
      
  );
};

export default SocialLinks;