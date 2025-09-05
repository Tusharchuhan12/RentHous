// src/components/FeaturedProperties.jsx
import { FaExternalLinkAlt, FaHome, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";

export default function FeaturedProperties() {
    return (
        <div className="bg-white mt-20 mb-20">
            <div className="max-w-7xl mx-auto mt-8 rounded-2xl overflow-hidden relative shadow-lg">
                {/* Background Image */}
                <div className="w-full h-64 md:h-80 lg:h-[400px] relative">
                    <img
                        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                        alt="Modern house exterior"
                        className="w-full h-full object-cover rounded-2xl"
                        loading="lazy"
                    />
                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-opacity-40 rounded-2xl flex flex-col justify-center px-4 py-8 sm:px-8 sm:py-16 md:px-16 lg:px-20">
                        <h1 className="text-white font-semibold text-xl sm:text-2xl md:text-4xl max-w-lg leading-tight sm:leading-snug">
                            Featured Properties For Sale
                        </h1>
                        <p className="text-white text-xs sm:text-base max-w-md mt-2 font-normal">
                            Discover, Buy, or Rent Verified Properties with Ease.
                        </p>
                    </div>
                </div>

                {/* Search Filters */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 sm:gap-4 rounded-full shadow-xl px-2 py-3 sm:px-6 sm:py-6 max-w-5xl w-[98%] sm:w-[95%] mb-9">

                    {/* For Buying */}
                    <button
                        type="button"
                        className="bg-[#2C3E8F] text-white rounded-full px-3 py-1 text-xs sm:px-10 sm:py-4 sm:text-lg font-semibold hover:bg-[#1f2a63] flex items-center whitespace-nowrap"
                    >
                        <FaExternalLinkAlt className="text-xs" />
                        <span className="ml-1">For Buying</span>
                        <FaChevronDown className="text-xs ml-1" />
                    </button>

                    {/* House */}
                    <button
                        type="button"
                        className="bg-[#2C3E8F] text-white rounded-full px-3 py-1 text-xs sm:px-10 sm:py-4 sm:text-lg font-semibold hover:bg-[#1f2a63] flex items-center whitespace-nowrap"
                    >
                        <FaHome className="text-xs" />
                        <span className="ml-1">House</span>
                        <FaChevronDown className="text-xs ml-1" />
                    </button>

                    {/* Location */}
                    <button
                        type="button"
                        className="bg-[#2C3E8F] text-white rounded-full px-3 py-1 text-xs sm:px-10 sm:py-4 sm:text-lg font-semibold hover:bg-[#1f2a63] flex items-center whitespace-nowrap"
                    >
                        <FaMapMarkerAlt className="text-xs" />
                        <span className="ml-1">Indonesia</span>
                        <FaChevronDown className="text-xs ml-1" />
                    </button>

                    {/* Find Property */}
                    <button
                        type="button"
                        className="bg-[#2C3E8F] text-white rounded-full px-3 py-1 text-xs sm:px-10 sm:py-4 sm:text-lg font-semibold hover:bg-[#1f2a63] whitespace-nowrap"
                    >
                        <span className="ml-1">Find Property</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
