import React from "react";
import { FaChartBar, FaKey, FaBullseye, FaLock } from "react-icons/fa";

const WhatWeDo = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 bg-white text-gray-800">
            <div className="text-center max-w-md mx-auto">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a2a6c] leading-tight">
                    What We Do?
                </h2>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                    Helping you find, buy, and rent the perfect <br className="hidden sm:block" />
                    property with ease.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

                <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-[4px_4px_8px_0_rgba(0,0,0,0.05)]">
                    <div className="bg-[#a3a3a3] rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <FaChartBar className="text-[#1a2a6c] text-lg" />
                    </div>
                    <h3 className="font-semibold text-sm leading-tight mb-1">
                        Buy &amp; Sell <br />
                        Properties
                    </h3>
                    <p className="text-[10px] text-gray-700 leading-tight max-w-[140px]">
                        Find verified homes for sale or list <br />
                        your property with ease.
                    </p>
                </div>

                <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-[4px_4px_8px_0_rgba(0,0,0,0.05)] border border-gray-200">
                    <div className="bg-[#a3a3a3] rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <FaKey className="text-[#1a2a6c] text-lg" />
                    </div>
                    <h3 className="font-semibold text-sm leading-tight mb-1">
                        Find Rental <br />
                        Homes
                    </h3>
                    <p className="text-[10px] text-gray-700 leading-tight max-w-[140px]">
                        Browse through thousands of <br />
                        rental options suited to your needs
                    </p>
                </div>

                <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-[4px_4px_8px_0_rgba(0,0,0,0.05)] border border-gray-200">
                    <div className="bg-[#a3a3a3] rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <FaBullseye className="text-[#1a2a6c] text-lg" />
                    </div>
                    <h3 className="font-semibold text-sm leading-tight mb-1">
                        Smart AI <br />
                        Property Search
                    </h3>
                    <p className="text-[10px] text-gray-700 leading-tight max-w-[140px]">
                        Get instant recommendations <br />
                        based on your budget &amp; location
                    </p>
                </div>

                <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-[4px_4px_8px_0_rgba(0,0,0,0.05)]">
                    <div className="bg-[#a3a3a3] rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <FaLock className="text-[#1a2a6c] text-lg" />
                    </div>
                    <h3 className="font-semibold text-sm leading-tight mb-1">
                        Safe &amp; Secure <br />
                        Transactions
                    </h3>
                    <p className="text-[10px] text-gray-700 leading-tight max-w-[140px]">
                        Verified listings &amp; secure deals to <br />
                        ensure a smooth experience.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default WhatWeDo;