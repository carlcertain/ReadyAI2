import React from 'react';
import { Link } from 'react-router-dom';

const Banner: React.FC = () => {

    const homeUrl = window.location.origin;

    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-12">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                        <img
                            src={homeUrl + "/src/images/banner1.png"}
                        /><img
                            src={homeUrl + "/src/images/banner4.png"}
                        /><img
                            src={homeUrl + "/src/images/banner5.png"}
                        /><img
                            src={homeUrl + "/src/images/banner7.png"}
                        /><img
                            src={homeUrl + "/src/images/banner8.png"}
                        /><img
                            src={homeUrl + "/src/images/banner9.png"}
                        /><img
                            src={homeUrl + "/src/images/banner10.png"}
                        /><img
                            src={homeUrl + "/src/images/banner12.png"}
                        /><img
                            src={homeUrl + "/src/images/banner13.png"}
                        /><img
                            src={homeUrl + "/src/images/banner14.png"}
                        /><img
                            src={homeUrl + "/src/images/banner15.png"}
                        /><img
                            src={homeUrl + "/src/images/banner18.png"}
                        />
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;