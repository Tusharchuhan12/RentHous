import React from "react";
import {
    FaExternalLinkAlt,
    FaHome,
    FaCrosshairs,
    FaChevronDown,
} from "react-icons/fa";

export default function FeaturedProperty() {
    return (
        <div className="max-w-[1200px] mx-auto mt-10 rounded-3xl relative pb-20 sm:pb-10">
            {/* Background Image */}
            <img
                src="https://storage.googleapis.com/a1aa/image/023225e3-6b81-479c-0445-58b01f1af41d.jpg"
                alt="Modern house exterior with large windows and trees in the background during dusk"
                width="900"
                height="300"
                className="w-full h-110 md:h-120 object-cover rounded-3xl"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-30 rounded-3xl"></div>

            {/* Text Content */}
            <div className="absolute top-16 left-6 sm:left-10 right-6 sm:right-10 text-white">
                <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight max-w-lg">
                    Featured Properties For Sale
                </h1>
                <p className="mt-2 text-sm font-normal max-w-md">
                    Discover, Buy, or Rent Verified Properties with Ease.
                </p>
            </div>

            {/* Search Form with Hero-like buttons */}
            <form
                aria-label="Property search form"
                className="absolute bottom-0 sm:-bottom-6 mx-1 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-lg flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 max-w-[850px] w-full"
            >
                {/* For Buying Button */}
                <button
                    type="button"
                    className="w-full sm:w-auto flex items-center gap-2 border border-[#1E2A78] text-[#1E2A78] font-semibold rounded-full px-5 py-3 hover:bg-[#1E2A78] hover:text-white transition-all duration-300 whitespace-nowrap"
                >
                    <FaExternalLinkAlt className="text-sm" />
                    For Buying
                    <FaChevronDown className="text-sm" />
                </button>

                {/* House Button */}
                <button
                    type="button"
                    className="w-full sm:w-auto flex items-center gap-2 border border-[#1E2A78] text-[#1E2A78] font-semibold rounded-full px-5 py-3 hover:bg-[#1E2A78] hover:text-white transition-all duration-300 whitespace-nowrap"
                >
                    <FaHome className="text-sm" />
                    House
                    <FaChevronDown className="text-sm" />
                </button>

                {/* Location Button */}
                <button
                    type="button"
                    className="w-full sm:w-auto flex items-center gap-2 border border-[#1E2A78] text-[#1E2A78] font-semibold rounded-full px-5 py-3 hover:bg-[#1E2A78] hover:text-white transition-all duration-300 whitespace-nowrap"
                >
                    <FaCrosshairs className="text-sm" />
                    Indonesia
                    <FaChevronDown className="text-sm" />
                </button>

                {/* Find Property Button */}
                <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#1E2A78] text-white font-semibold rounded-full px-5 py-3 hover:bg-[#16215a] transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                >
                    Find Property
                </button>
            </form>
        </div>
    );
}
