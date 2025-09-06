// src/components/Hero.jsx
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Hero() {
    return (
        <div className="bg-transparent">
            <div className="max-w-[1140px] mx-auto p-4">
                <div className="relative rounded-3xl overflow-hidden">
                    {/* Background Image */}
                    <img
                        src="https://storage.googleapis.com/a1aa/image/6fa51785-ad11-4dbb-fc7d-1fadf683172b.jpg"
                        alt="Modern gray house with metal roof and warm lights inside at sunset with partly cloudy sky"
                        className="w-full h-[500px] object-cover"
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-center items-center px-6 py-10 text-center">
                        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight max-w-4xl">
                            Find Your Dream Home in One Click!
                        </h1>
                        <p className="text-white text-sm sm:text-base mt-2 max-w-md">
                            Discover, Buy, or Rent Verified Properties with Ease.
                        </p>

                        {/* Location Search */}
                        <form className="mt-8 w-full max-w-4xl flex flex-row items-center gap-4">
                            <label
                                htmlFor="search-location"
                                className="flex items-center flex-grow bg-white rounded-xl px-4 py-3 text-gray-500 text-sm shadow-md"
                            >
                                <FaMapMarkerAlt className="mr-3 text-gray-400" />
                                <input
                                    id="search-location"
                                    type="search"
                                    placeholder="Search Location..."
                                    className="w-full outline-none text-gray-700 placeholder-gray-400 text-sm"
                                />
                            </label>
                            <button
                                type="button"
                                className="whitespace-nowrap border border-[#1E2A78] text-[#1E2A78] rounded-full px-5 py-2 text-sm font-semibold shadow-md hover:bg-[#1E2A78] hover:text-white transition"
                            >
                                List Your Property
                            </button>
                        </form>
                    </div>

                    {/* Filter Form - half inside, half outside */}
                    <form className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-full max-w-4xl flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-4 bg-white rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-4 shadow-lg z-20">
                        <select
                            aria-label="For Rent or For Sale"
                            className="appearance-none cursor-pointer text-blue-800 text-sm font-normal rounded-full border border-gray-300 px-3 sm:px-4 py-2 pr-5 focus:outline-none focus:ring-2 focus:ring-[#1E2A78]"
                        >
                            <option>For Rent</option>
                            <option>For Sale</option>
                        </select>
                        <select
                            aria-label="Property Type"
                            className="appearance-none cursor-pointer text-blue-700 text-sm font-normal rounded-full border border-gray-300 px-3 sm:px-4 py-2 pr-5 focus:outline-none focus:ring-2 focus:ring-[#1E2A78]"
                        >
                            <option>House</option>
                            <option>Apartment</option>
                            <option>Condo</option>
                        </select>
                        <select
                            aria-label="Location"
                            className="appearance-none cursor-pointer text-blue-700 text-sm font-normal rounded-full border border-gray-300 px-3 sm:px-4 py-2 pr-5 focus:outline-none focus:ring-2 focus:ring-[#1E2A78]"
                        >
                            <option>Indonesia</option>
                            <option>USA</option>
                            <option>UK</option>
                        </select>
                        <button
                            className="bg-[#1E2A78] text-white font-semibold text-sm rounded-full px-5 sm:px-6 py-2 shadow-md hover:bg-[#16215a] transition whitespace-nowrap"
                        >
                            Find
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
