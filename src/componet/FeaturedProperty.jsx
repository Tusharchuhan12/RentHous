// src/components/FeaturedProperty.js

export default function FeaturedProperty() {
    const properties = [
        {
            id: 1,
            title: "Green Villa, Uttar Pradesh",
            description:
                "Spacious 3BHK apartment in a prime location with modern amenities.",
            price: "$450,000",
            image:
                "https://storage.googleapis.com/a1aa/image/1f846c76-777d-4425-4a49-90b09a701ff4.jpg",
        },
        {
            id: 2,
            title: "Green Villa, Uttar Pradesh",
            description:
                "Spacious 3BHK apartment in a prime location with modern amenities.",
            price: "$450,000",
            image:
                "https://storage.googleapis.com/a1aa/image/516aff13-3aa4-466f-99c7-ff1d328348c2.jpg",
        },
    ];

    return (
        <div className="bg-white p-6 sm:p-10">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <h2 className="text-[#1B3A7A] font-semibold text-xl sm:text-2xl leading-tight">
                        Featured Property
                    </h2>
                    <button
                        aria-label="See 268 New Projects"
                        className="mt-4 sm:mt-0 text-[#1B3A7A] border border-[#1B3A7A] rounded-full px-4 py-1.5 text-sm font-medium flex items-center gap-1 hover:bg-[#1B3A7A] hover:text-white transition"
                    >
                        See 268 New Projects
                        <i className="fas fa-arrow-up-right ml-1 text-xs"></i>
                    </button>
                </div>

                {/* Property Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {properties.map((property) => (
                        <div
                            key={property.id}
                            className="rounded-xl overflow-hidden shadow-lg"
                        >
                            {/* Image */}
                            <img
                                src={property.image}
                                alt={property.title}
                                className="w-full h-auto object-cover rounded-t-xl"
                                width={600}
                                height={400}
                                loading="lazy"
                            />

                            {/* Card Content */}
                            <div className="bg-white p-4 rounded-b-xl border border-t-0 border-gray-200">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-[#1B3A7A] font-semibold text-base flex items-center gap-2">
                                        <i className="fas fa-map-marker-alt text-[#1B3A7A]"></i>
                                        {property.title}
                                    </h3>
                                    <button
                                        aria-label={`Bookmark ${property.title}`}
                                        className="text-[#1B3A7A]"
                                    >
                                        <i className="fas fa-bookmark"></i>
                                    </button>
                                </div>

                                <p className="text-gray-500 text-xs leading-tight mb-4">
                                    {property.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-sm">{property.price}</span>
                                    <button
                                        aria-label={`Know More about ${property.title}`}
                                        className="bg-[#1B3A7A] text-white text-xs font-semibold rounded-full px-4 py-1.5 hover:bg-[#152a5a] transition"
                                    >
                                        Know More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </div >
    );
}