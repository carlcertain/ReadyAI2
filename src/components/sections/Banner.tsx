import React from 'react';
import { Link } from 'react-router-dom';
import Banner1Section from './Banner1Section';
import Banner2Section from './Banner2Section';
import Banner3Section from './Banner3Section';
import Banner4Section from './Banner4Section';
import Banner5Section from './Banner5Section';
import Banner6Section from './Banner6Section';
import Banner7Section from './Banner7Section';
import Banner8Section from './Banner8Section';
import Banner9Section from './Banner9Section';
import Banner10Section from './Banner10Section';

const Banner: React.FC = () => {

    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-12">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                        {/* Banners moved to Home */}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;