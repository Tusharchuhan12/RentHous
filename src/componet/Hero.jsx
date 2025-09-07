// src/components/Hero.jsx
import { FaMapMarkerAlt, FaPlus, FaSearch, FaHome, FaBuilding, FaGlobe } from "react-icons/fa";

export default function Hero() {
    return (
        <div className="bg-transparent">
            <div className="max-w-[1300px] mx-auto p-4">
                <div className="relative rounded-3xl shadow-lg">
                    {/* Background Image with increased height on mobile */}
                    <img
                        src="https://storage.googleapis.com/a1aa/image/6fa51785-ad11-4dbb-fc7d-1fadf683172b.jpg"
                        alt="Modern gray house with metal roof and warm lights inside at sunset with partly cloudy sky"
                        className="w-full h-[600px] md:h-[500px] object-cover brightness-90"
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-opacity-40 flex flex-col gap-8 md:gap-16 py-6 px-4">
                        <div className="flex flex-col items-center mt-8 text-center">
                            <h1 className="text-white font-extrabold text-2xl md:text-4xl leading-tight max-w-3xl">
                                Find Your Dream Home in One Click!
                            </h1>
                            <p className="text-white text-sm sm:text-base mt-3 max-w-md">
                                Discover, Buy, or Rent Verified Properties with Ease.
                            </p>
                        </div>

                        {/* Location Search */}
                        <form className="w-full flex flex-col sm:flex-row items-center gap-2 sm:gap-3 justify-center">
                            <label
                                htmlFor="search-location"
                                className="flex items-center w-full sm:max-w-md bg-white rounded-xl text-blue-900 px-4 py-4 text-sm shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <FaMapMarkerAlt className="mr-3 text-gray-400 text-lg" />
                                <input
                                    id="search-location"
                                    type="search"
                                    placeholder="Search Location..."
                                    className="w-full outline-none text-gray-700 placeholder-gray-400 text-sm"
                                />
                            </label>
                            <button
                                type="button"
                                className="whitespace-nowrap border border-[#1E2A78] text-[#1E2A78] cursor-pointer rounded-full px-4 py-4 text-sm font-semibold shadow-md bg-white hover:bg-[#1E2A78] hover:text-white transition-all duration-300 flex items-center gap-2"
                            >
                                <FaPlus />
                                List Your
                            </button>
                        </form>
                    </div>

                    {/* Filter Form */}
                    <form className="mt-20 absolute left-1/2 bg-white -bottom-6 transform -translate-x-1/2 w-full max-w-4xl flex flex-wrap items-center justify-center gap-3 sm:gap-4 rounded-2xl px-4 sm:px-6 py-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 z-20 overflow-x-auto">
                        <div className="relative w-full sm:w-auto flex-shrink-0">
                            <FaHome className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-base" />
                            <select
                                aria-label="For Rent or For Sale"
                                className=" overflow-hidden appearance-none cursor-pointer text-blue-800 text-sm font-normal rounded-full border border-gray-300 pl-10 pr-4 py-2 w-full  sm:w-40 focus:outline-none focus:ring-2 focus:ring-[#1E2A78] hover:border-[#1E2A78] transition-all duration-300"
                            >
                                <option>For Rent</option>
                                <option>For Sale</option>
                            </select>
                        </div>

                        <div className="relative w-full sm:w-auto flex-shrink-0">
                            <FaBuilding className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-base" />
                            <select
                                aria-label="Property Type"
                                className="appearance-none cursor-pointer text-blue-700 text-sm font-normal rounded-full border border-gray-300 pl-10 pr-4 py-2 w-full sm:w-40 focus:outline-none focus:ring-2 focus:ring-[#1E2A78] hover:border-[#1E2A78] transition-all duration-300"
                            >
                                <option>House</option>
                                <option>Apartment</option>
                                <option>Condo</option>
                            </select>
                        </div>

                        <div className="relative w-full sm:w-auto flex-shrink-0">
                            <FaGlobe className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-base" />
                            <select
                                aria-label="Location"
                                className="appearance-none cursor-pointer text-blue-700 text-sm font-normal rounded-full border border-gray-300 pl-10 pr-4 py-2 w-full sm:w-40 max-w-xs focus:outline-none focus:ring-2 focus:ring-[#1E2A78] hover:border-[#1E2A78] transition-all duration-300"
                            >
                                <option>Indonesia</option>
                                <option>USA</option>
                                <option>UK</option>
                            </select>
                        </div>

                        <button
                            className="bg-[#1E2A78] text-white font-semibold text-sm rounded-full px-5 py-2 w-full sm:w-auto shadow-md hover:bg-[#16215a] transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                        >
                            <FaSearch />
                            Find
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
