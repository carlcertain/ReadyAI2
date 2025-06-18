import React from 'react';
import { Link } from 'react-router-dom';

const Banner: React.FC = () => {
    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-12">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                        <img
                            src="/src/images/Screenshot 2025-06-18 130257.png"
                        />
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;