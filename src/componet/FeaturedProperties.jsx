import React from "react";
import {
    FaExternalLinkAlt,
    FaHome,
    FaCrosshairs,
    FaChevronDown,
} from "react-icons/fa";

export default function FeaturedProperty() {
    return (
        <div className="max-w-[1200px] mx-auto mt-10 rounded-3xl overflow-hidden relative">
            {/* Background Image */}
            <img
                src="https://storage.googleapis.com/a1aa/image/023225e3-6b81-479c-0445-58b01f1af41d.jpg"
                alt="Modern house exterior with large windows and trees in the background during dusk"
                width="900"
                height="300"
                className="w-full h-120 object-cover rounded-3xl"
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

            {/* Search Form */}
            <form
                aria-label="Property search form"
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl sm:rounded-full shadow-lg flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 sm:px-6 py-3 sm:py-5 max-w-[850px] w-full"
            >
                {/* For Buying Button */}
                <button
                    type="button"
                    className="flex items-center gap-2 border border-gray-300 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    <FaExternalLinkAlt className="text-xs" />
                    For Buying
                    <FaChevronDown className="text-xs" />
                </button>

                {/* House Button */}
                <button
                    type="button"
                    className="flex items-center gap-2 border border-gray-300 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    <FaHome className="text-xs" />
                    House
                    <FaChevronDown className="text-xs" />
                </button>

                {/* Location Button */}
                <button
                    type="button"
                    className="flex items-center gap-2 border border-gray-300 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    <FaCrosshairs className="text-xs" />
                    Indonesia
                    <FaChevronDown className="text-xs" />
                </button>

                {/* Find Property Button */}
                <button
                    type="submit"
                    className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white rounded-full px-5 sm:px-6 py-2 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    Find Property
                </button>
            </form>
        </div>
    );
}
