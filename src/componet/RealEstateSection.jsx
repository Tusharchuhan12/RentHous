import React from "react";

export default function RealEstateSection() {
    return (
        <div className="bg-white p-6 sm:p-10">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <h2 className="text-[#1B3666] font-extrabold text-2xl sm:text-3xl leading-tight">
                        Featured Property
                    </h2>
                    <a
                        href="#"
                        className="mt-4 sm:mt-0 inline-flex items-center text-[#1B3666] text-sm font-medium border border-[#1B3666] rounded-full px-5 py-2 hover:bg-[#1B3666] hover:text-white transition"
                    >
                        See 268 New Projects
                        <i className="fas fa-arrow-up-right ml-2 text-xs"></i>
                    </a>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
                    {/* Big Image Left */}
                    <div className="sm:col-span-3 relative group">
                        <img
                            src="https://storage.googleapis.com/a1aa/image/b5367608-635b-4343-d10e-f3d65029e733.jpg"
                            alt="Modern house with pool and large glass windows under blue sky"
                            className="w-full h-90 object-cover rounded"
                        />
                        <div className="absolute bottom-4 left-4 text-white drop-shadow-lg">
                            <p className="text-xs font-normal mb-1">By Finder &amp; Projects</p>
                            <h3 className="font-bold text-lg leading-tight">Kenanga Residence</h3>
                        </div>
                    </div>

                    {/* Side Image */}
                    <div className="sm:col-span-1">
                        <img
                            src="https://storage.googleapis.com/a1aa/image/96cd51f9-d904-4079-d322-6b0df1a70e42.jpg"
                            alt="Modern house with pool and glass doors with plants on the side"
                            className="w-full h-90 object-cover rounded"
                        />
                    </div>

                    {/* Two Stacked Images */}
                    <div className="sm:col-span-1 ">
                        <img
                            src="https://storage.googleapis.com/a1aa/image/abd616bb-1e01-4f29-d24b-05ec8ca495db.jpg"
                            alt="Modern house with wood ceiling and pool in front"
                            className="w-full h-90 object-cover"
                        />
                    
                    </div>
                </div>
            </div>
        </div>
    );
}