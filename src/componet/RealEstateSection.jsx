// src/components/RealEstateSection.jsx
import {
    FaChartBar,
    FaKey,
    FaGlobe,
    FaLock,
    FaArrowRight,
} from "react-icons/fa";

export default function RealEstateSection() {
    return (
        <section className="bg-white font-sans max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
            {/* What We Do Section */}
            <div className="text-center max-w-xl mx-auto mb-12">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a2e6f] leading-tight">
                    What We Do?
                </h2>
                <p className="mt-2 text-gray-600 text-base sm:text-lg">
                    Helping you find, buy, and rent the perfect
                    <br className="hidden sm:inline" />
                    property with ease.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                {/* Card 1 */}
                <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-sm">
                    <div className="bg-[#a8a8a8] rounded-full w-14 h-14 flex items-center justify-center mb-4">
                        <FaChartBar className="text-[#1a2e6f] text-xl" />
                    </div>
                    <h3 className="font-semibold text-base mb-1">Buy &amp; Sell Properties</h3>
                    <p className="text-xs text-gray-700">
                        Find verified homes for sale or list
                        <br />
                        your property with ease.
                    </p>
                </div>

                {/* Card 2 (active) */}
                <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-md">
                    <div className="bg-[#a8a8a8] rounded-full w-14 h-14 flex items-center justify-center mb-4">
                        <FaKey className="text-[#1a2e6f] text-xl" />
                    </div>
                    <h3 className="font-semibold text-base mb-1">Find Rental Homes</h3>
                    <p className="text-xs text-gray-700">
                        Browse through thousands of
                        <br />
                        rental options suited to your needs
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-sm">
                    <div className="bg-[#a8a8a8] rounded-full w-14 h-14 flex items-center justify-center mb-4">
                        <FaGlobe className="text-[#1a2e6f] text-xl" />
                    </div>
                    <h3 className="font-semibold text-base mb-1">Smart AI Property Search</h3>
                    <p className="text-xs text-gray-700">
                        Get instant recommendations
                        <br />
                        based on your budget &amp; location
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-sm">
                    <div className="bg-[#a8a8a8] rounded-full w-14 h-14 flex items-center justify-center mb-4">
                        <FaLock className="text-[#1a2e6f] text-xl" />
                    </div>
                    <h3 className="font-semibold text-base mb-1">Safe &amp; Secure Transactions</h3>
                    <p className="text-xs text-gray-700">
                        Verified listings &amp; secure deals to
                        <br />
                        ensure a smooth experience.
                    </p>
                </div>
            </div>

            {/* Featured Property Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h3 className="text-2xl font-extrabold text-[#1a2e6f] mb-4 sm:mb-0">
                    Featured Property
                </h3>
                <button
                    aria-label="See 268 New Projects"
                    className="text-[#1a2e6f] border border-[#1a2e6f] rounded-full px-5 py-2 text-sm flex items-center gap-1 hover:bg-[#1a2e6f] hover:text-white transition"
                >
                    See 268 New Projects
                    <FaArrowRight className="text-xs" />
                </button>
            </div>

            {/* Featured Property Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Left large image */}
                <div className="relative">
                    <img
                        src="https://storage.googleapis.com/a1aa/image/860f44e4-e49e-403c-e42d-bece712403b5.jpg"
                        alt="Modern house with pool and glass windows under a cloudy sky"
                        className="w-full h-auto rounded-lg object-cover"
                    />
                    <div className="absolute bottom-4 left-4 text-white drop-shadow-lg">
                        <p className="text-xs font-light mb-0.5 text-[#1e3a8a]">By Finder &amp; Projects</p>
                        <h4 className="font-bold text-lg leading-tigh text-[#1e3a8a]">Kenanga Residence</h4>
                    </div>
                </div>

                {/* Middle tall image */}
              
                <div>
                    <img
                        src="https://storage.googleapis.com/a1aa/image/e045ab9a-e4d0-4eb3-f020-9c4bfc150943.jpg"
                        alt="Modern house with pool and glass doors under a clear blue sky"
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </div>

                {/* Right column with two stacked images */}
                <div className="grid grid-rows-2 gap-4">
                    <img
                        src="https://storage.googleapis.com/a1aa/image/e2a960d1-7266-45ad-7b1b-baaf6e88d1cf.jpg"
                        alt="Modern house with pool and wooden ceiling under a clear blue sky"
                        className="w-full h-auto rounded-lg object-cover"
                    />
                    <img
                        src="https://storage.googleapis.com/a1aa/image/fec5fe9a-1765-4ba7-4952-69e90704fa67.jpg"
                        alt="Modern white house with garage and driveway under a clear blue sky"
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </div>
            </div>
        </section>
    );
}