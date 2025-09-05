// src/components/Journey.jsx
import { FaHandHoldingUsd, FaMapMarkedAlt, FaShieldAlt } from "react-icons/fa";

export default function Journey() {
    return (
        <div className="bg-white text-gray-700">
            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Top Section */}
                <section className="mb-20 max-w-5xl">
                    <h1 className="text-3xl font-extrabold text-[#1e3a8a] mb-1 leading-tight">
                        Start Your Journey Today!
                    </h1>
                    <p className="text-gray-600 mb-6 text-base">
                        Create a profile in seconds and find your ideal home.
                    </p>

                    {/* Form */}
                    <form className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="flex-1 border border-gray-300 rounded-md py-2 px-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                        />
                        <select
                            aria-label="Select User Type"
                            defaultValue=""
                            className="flex-1 border border-gray-300 rounded-md py-2 px-4 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent bg-white"
                        >
                            <option value="" disabled>
                                Select User Type
                            </option>
                            <option>Buyer</option>
                            <option>Seller</option>
                            <option>Agent</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Enter Your Location"
                            className="flex-1 border border-gray-300 rounded-md py-2 px-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                        />
                        <button
                            type="submit"
                            className="bg-[#1e3a8a] text-white font-semibold rounded-full px-8 py-2 text-sm whitespace-nowrap hover:bg-[#16326b] transition-colors"
                        >
                            Continue
                        </button>
                    </form>
                </section>

                {/* Bottom Section */}
                <section className="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-6xl mx-auto">
                    {/* Images */}
                    <div className="relative flex-shrink-0 w-full max-w-md lg:max-w-sm">
                        <img
                            src="https://storage.googleapis.com/a1aa/image/f3a47aa6-9a61-481a-1bae-238df771bf8c.jpg"
                            alt="Modern white house with clean lines and a large tree on the right side under a clear blue sky"
                            className="rounded-md shadow-md"
                        />
                        <img
                            src="https://storage.googleapis.com/a1aa/image/326bf212-eed6-43e5-122f-d0339f3b7f81.jpg"
                            alt="Wooden A-frame house with large glass windows and a dark roof, set on a green lawn with a partly cloudy sky"
                            className="rounded-md shadow-md absolute -bottom-12 left-12 border-8 border-white"
                            style={{ maxWidth: "280px" }}
                        />
                    </div>

                    {/* Text + Features */}
                    <div className="flex-1 max-w-xl">
                        <h2 className="text-[#1e3a8a] font-extrabold text-2xl sm:text-3xl mb-8 text-center lg:text-left leading-tight">
                            We Provide Latest Properties
                            <br />
                            For Our Valuable Clients
                        </h2>

                        <div className="space-y-8">
                            {/* Feature 1 */}
                            <div className="flex gap-4">
                                <div className="text-[#1e3a8a] text-3xl flex items-start pt-1">
                                    <FaHandHoldingUsd />
                                </div>
                                <div>
                                    <h3 className="text-[#1e3a8a] font-semibold text-lg mb-1">
                                        Budget Friendly
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Lorem ipsum dolor sit amet consectetur. Venenatis sed ac
                                        aenean tempus. Lectus quis pretium varius iaculis sed.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-4">
                                <div className="text-[#1e3a8a] text-3xl flex items-start pt-1">
                                    <FaShieldAlt />
                                </div>
                                <div>
                                    <h3 className="text-[#1e3a8a] font-semibold text-lg mb-1">
                                        Trusted By Thousands
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Lorem ipsum dolor sit amet consectetur. Venenatis sed ac
                                        aenean tempus. Lectus quis pretium varius iaculis sed.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex gap-4">
                                <div className="text-[#1e3a8a] text-3xl flex items-start pt-1">
                                    <FaMapMarkedAlt />
                                </div>
                                <div>
                                    <h3 className="text-[#1e3a8a] font-semibold text-lg mb-1">
                                        Prime Location
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Lorem ipsum dolor sit amet consectetur. Venenatis sed ac
                                        aenean tempus. Lectus quis pretium varius iaculis sed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}