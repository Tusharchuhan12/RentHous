import React from "react";

export default function FeaturedProperty() {
    return (
        <div className="bg-white text-gray-700 min-[400px]:">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                    <h2 className="text-2xl font-extrabold text-[#1E3A8A]">
                        Featured Property
                    </h2>
                    <button
                        type="button"
                        className="mt-4 sm:mt-0 inline-flex items-center border border-[#1E3A8A] text-[#1E3A8A] text-sm font-medium rounded-full px-4 py-1 hover:bg-[#1E3A8A] hover:text-white transition"
                    >
                        See 268 New Projects
                        <svg
                            aria-hidden="true"
                            className="ml-1 w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <img
                            src="https://storage.googleapis.com/a1aa/image/564b07be-a1ad-4cf1-1ad0-a9c3e74409b7.jpg"
                            alt="Modern house exterior at twilight with warm lights glowing from windows and garage doors, surrounded by a green lawn and clear blue sky"
                            className="w-full h-70 object-cover rounded-t-xl"
                            width="200"
                            height="120px"
                        />
                        <div className="bg-white p-5 rounded-b-xl shadow-md relative -mt-10 mx-4 mb-4">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-map-marker-alt text-[#1E3A8A]"></i>
                                    <h3 className="text-[#1E3A8A] font-semibold text-lg leading-tight">
                                        Green Villa, Uttar Pradesh
                                    </h3>
                                </div>
                                <button
                                    aria-label="Bookmark"
                                    className="text-[#1E3A8A] hover:text-[#374785]"
                                >
                                    <i className="fas fa-bookmark"></i>
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mb-4">
                                Spacious 3BHK apartment in a prime location with modern
                                amenities.
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-base">$450,000</span>
                                <button
                                    type="button"
                                    className="bg-[#1E3A8A] text-white text-xs font-semibold rounded-full px-4 py-1 hover:bg-[#374785] transition"
                                >
                                    Know More
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <img
                            src="https://storage.googleapis.com/a1aa/image/85815a70-14d8-40ce-61df-94fc43af3ea9.jpg"
                            alt="Cozy suburban house with gray siding, multiple windows, a green lawn with trees and bushes, under a sunny sky"
                            className="w-full h-70 object-cover rounded-t-xl"
                            width="200"
                            height="120"
                        />
                        <div className="bg-white p-5 rounded-b-xl shadow-md relative -mt-10 mx-4 mb-4">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-map-marker-alt text-[#1E3A8A]"></i>
                                    <h3 className="text-[#1E3A8A] font-semibold text-lg leading-tight">
                                        Green Villa, Uttar Pradesh
                                    </h3>
                                </div>
                                <button
                                    aria-label="Bookmark"
                                    className="text-[#1E3A8A] hover:text-[#374785]"
                                >
                                    <i className="fas fa-bookmark"></i>
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mb-4">
                                Spacious 3BHK apartment in a prime location with modern
                                amenities.
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-base">$450,000</span>
                                <button
                                    type="button"
                                    className="bg-[#1E3A8A] text-white text-xs font-semibold rounded-full px-4 py-1 hover:bg-[#374785] transition"
                                >
                                    Know More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}