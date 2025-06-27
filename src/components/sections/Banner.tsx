import React from 'react';
import { Link } from 'react-router-dom';
import Banner1Section from './Banner1Section';
import Banner2Section from './Banner2Section';
import Banner3Section from './Banner3Section';
import Banner4Section from './Banner4Section';
import Banner5Section from './Banner5Section';
import Banner6Section from './Banner6Section';
import Banner7Section from './Banner7Section';

const Banner: React.FC = () => {

    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-12">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                        <Banner1Section />
                        <Banner2Section />
                        <Banner3Section />
                        <Banner4Section />
                        <Banner5Section />
                        <Banner6Section />
                        <Banner7Section />
                        <img src="/assets/images/banner13.png"/>
                        <img src="/assets/images/banner14.png"/>
                        <img src="/assets/images/banner15.png"/>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;