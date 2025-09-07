// src/components/FeaturedProperty.jsx
import { FaMapMarkerAlt, FaBookmark } from "react-icons/fa";

export default function FeaturedProperty() {
    return (
        <div className="bg-white text-gray-700 mb-6">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                    <h2 className="text-2xl font-extrabold text-[#1E3A8A]">
                        Featured Property
                    </h2>
                    <button
                        type="button"
                        className="mt-4 sm:mt-0 w-full sm:w-auto border border-[#1E2A78] text-[#1E2A78] font-semibold rounded-full px-5 py-3 hover:bg-[#1E2A78] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        See 268 New Projects
                        <svg
                            aria-hidden="true"
                            className="ml-1 w-4 h-4"
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
                            className="w-full h-72 object-cover rounded-t-xl"
                        />
                        <div className="bg-white p-5 rounded-b-xl shadow-md relative -mt-10 mx-4 mb-4">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center space-x-2">
                                    <FaMapMarkerAlt className="text-[#1E3A8A]" />
                                    <h3 className="text-[#1E3A8A] font-semibold text-lg leading-tight">
                                        Green Villa, Uttar Pradesh
                                    </h3>
                                </div>
                                <button
                                    aria-label="Bookmark"
                                    className="text-[#1E3A8A] hover:text-[#374785]"
                                >
                                    <FaBookmark />
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mb-4">
                                Spacious 3BHK apartment in a prime location with modern
                                amenities.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                                <span className="font-bold text-base">$450,000</span>
                                <button
                                    type="button"
                                    className="w-full sm:w-auto bg-[#1E2A78] text-white font-semibold text-sm rounded-full px-5 py-3 hover:bg-[#16215a] transition-all duration-300 flex items-center justify-center gap-2"
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
                            className="w-full h-72 object-cover rounded-t-xl"
                        />
                        <div className="bg-white p-5 rounded-b-xl shadow-md relative -mt-10 mx-4 mb-4">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center space-x-2">
                                    <FaMapMarkerAlt className="text-[#1E3A8A]" />
                                    <h3 className="text-[#1E3A8A] font-semibold text-lg leading-tight">
                                        Green Villa, Uttar Pradesh
                                    </h3>
                                </div>
                                <button
                                    aria-label="Bookmark"
                                    className="text-[#1E3A8A] hover:text-[#374785]"
                                >
                                    <FaBookmark />
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mb-4">
                                Spacious 3BHK apartment in a prime location with modern
                                amenities.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                                <span className="font-bold text-base">$450,000</span>
                                <button
                                    type="button"
                                    className="w-full sm:w-auto bg-[#1E2A78] text-white font-semibold text-sm rounded-full px-5 py-3 hover:bg-[#16215a] transition-all duration-300 flex items-center justify-center gap-2"
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
