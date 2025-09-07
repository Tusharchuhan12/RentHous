import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const RentalHomes = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white text-gray-900">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-6">
                <div>
                    <h2 className="text-2xl font-extrabold text-[#1B3666] leading-tight">
                        Find The Perfect Rental Home
                    </h2>
                    <p className="text-gray-600 text-sm max-w-md mt-1">
                        Browse our top-rated properties for rent, featuring premium listings tailored to your needs. Find your dream home today!
                    </p>
                </div>
                <button className="bg-[#1B3A7A] text-white text-sm font-semibold rounded-full px-6 py-2 whitespace-nowrap hover:bg-[#16306a] transition" type="button">
                    View All Rentals
                </button>
            </div>

            <div className="overflow-x-auto -mx-4 px-4">
                <div className="inline-flex space-x-6 min-w-max">
                    {/* Card 1 */}
                    <div className="bg-gray-100 rounded-xl overflow-hidden w-70 flex-shrink-0">
                        <img alt="Front view of a beige house with porch and warm lighting in the evening" className="w-full h-48 object-cover rounded-t-xl" height="200" loading="lazy" src="https://storage.googleapis.com/a1aa/image/db75bf91-68aa-4080-1f94-8fa04c927ab2.jpg" width="400" />
                        <div className="p-4">
                            <div className="flex items-center text-gray-400 text-xs mb-1 space-x-1">
                                <FaMapMarkerAlt />
                                <span>New York, NY</span>
                                <span className="ml-auto flex items-center text-yellow-400 font-semibold">
                                    <FaStar className="mr-1" />
                                    4.5/5
                                </span>
                            </div>
                            <p className="text-xs text-gray-900 font-normal mb-3 leading-tight">
                                Spacious <span className="font-semibold">3BHK</span> apartment in a prime location with modern amenities.
                            </p>
                            <div className="flex items-center justify-between">
                                <button className="bg-[#1B3A7A] text-white text-xs font-semibold rounded px-3 py-1" type="button">
                                    Buy Now
                                </button>
                                <span className="text-sm font-normal">
                                    $1,500/<span className="text-xs">month</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gray-100 rounded-xl overflow-hidden w-70 flex-shrink-0">
                        <img alt="Backyard porch of a house with string lights glowing at dusk" className="w-full h-48 object-cover rounded-t-xl" height="200" loading="lazy" src="https://storage.googleapis.com/a1aa/image/063fb618-0c26-4c39-3806-7c65e9490ebe.jpg" width="400" />
                        <div className="p-4">
                            <div className="flex items-center text-gray-400 text-xs mb-1 space-x-1">
                                <FaMapMarkerAlt />
                                <span>New York, NY</span>
                                <span className="ml-auto flex items-center text-yellow-400 font-semibold">
                                    <FaStar className="mr-1" />
                                    4.5/5
                                </span>
                            </div>
                            <p className="text-xs text-gray-900 font-normal mb-3 leading-tight">
                                Spacious <span className="font-semibold">3BHK</span> apartment in a prime location with modern amenities.
                            </p>
                            <div className="flex items-center justify-between">
                                <button className="bg-[#1B3A7A] text-white text-xs font-semibold rounded px-3 py-1" type="button">
                                    Buy Now
                                </button>
                                <span className="text-sm font-normal">
                                    $2,599/<span className="text-xs">month</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-100 rounded-xl overflow-hidden w-71 flex-shrink-0">
                        <img alt="Small white house with porch and green grass lawn" className="w-full h-48 object-cover rounded-t-xl" height="200" loading="lazy" src="https://storage.googleapis.com/a1aa/image/fc09249e-d716-4900-d833-b32cefdacf82.jpg" width="400" />
                        <div className="p-4">
                            <div className="flex items-center text-gray-400 text-xs mb-1 space-x-1">
                                <FaMapMarkerAlt />
                                <span>New York, NY</span>
                                <span className="ml-auto flex items-center text-yellow-400 font-semibold">
                                    <FaStar className="mr-1" />
                                    4.5/5
                                </span>
                            </div>
                            <p className="text-xs text-gray-900 font-normal mb-3 leading-tight">
                                Spacious <span className="font-semibold">3BHK</span> apartment in a prime location with modern amenities.
                            </p>
                            <div className="flex items-center justify-between">
                                <button className="bg-[#1B3A7A] text-white text-xs font-semibold rounded px-3 py-1" type="button">
                                    Buy Now
                                </button>
                                <span className="text-sm font-normal">
                                    $1,600/<span className="text-xs">month</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-gray-100 rounded-xl overflow-hidden w-71 flex-shrink-0">
                        <img alt="Old brick house with yard and trees around" className="w-full h-48 object-cover rounded-t-xl" height="200" loading="lazy" src="https://storage.googleapis.com/a1aa/image/3caf2606-0edf-452c-a0be-ff07cdf0f6d4.jpg" width="400" />
                        <div className="p-4">
                            <div className="flex items-center text-gray-400 text-xs mb-1 space-x-1">
                                <FaMapMarkerAlt />
                                <span>New York, NY</span>
                                <span className="ml-auto flex items-center text-yellow-400 font-semibold">
                                    <FaStar className="mr-1" />
                                    4.5/5
                                </span>
                            </div>
                            <p className="text-xs text-gray-900 font-normal mb-3 leading-tight">
                                Spacious <span className="font-semibold">3BHK</span> apartment in a prime location with modern amenities.
                            </p>
                            <div className="flex items-center justify-between">
                                <button className="bg-[#1B3A7A] text-white text-xs font-semibold rounded px-3 py-1" type="button">
                                    Buy Now
                                </button>
                                <span className="text-sm font-normal">
                                    $450,000/<span className="text-xs">month</span>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RentalHomes;