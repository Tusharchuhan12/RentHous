// src/components/PropertyList.jsx
import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";

export default function PropertyList() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const res = await fetch(
                    "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing"
                );
                let data = await res.json();

                if (!Array.isArray(data)) {
                    data = [data];
                }
                setProperties(data);
            } catch (error) {
                console.error("Error fetching properties:", error);
                setProperties([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    const displayedProperties = showAll ? properties : properties.slice(0, 4);

    return (
        <section className="bg-white p-4 sm:p-6 md:p-10 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                <div>
                    <h2 className="text-2xl font-extrabold sm:text-2xl  leading-tight text-[#1B3666]">
                        Best Properties Available For Sale
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base max-w-xl mt-1">
                        Browse our top-rated properties for sale, featuring premium listings
                        tailored to your needs. Find your dream home today!
                    </p>
                </div>
                {properties.length > 4 && (
                    <button
                        type="button"
                        onClick={() => setShowAll(!showAll)}
                        className="mt-4 sm:mt-0 bg-[#0B1E55] text-white text-xs sm:text-sm font-semibold px-5 py-2 rounded-full whitespace-nowrap"
                    >
                        {showAll ? "Show Less" : "View More Properties"}
                    </button>
                )}
            </div>

            {/* Cards */}
            {loading ? (
                <p className="text-center text-gray-500">Loading properties...</p>
            ) : properties.length > 0 ? (
                <div
                    className={
                        showAll
                            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                            : "flex space-x-4 overflow-x-auto pb-2 scrollbar-hide"
                    }
                >
                    {displayedProperties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No properties found.</p>
            )}
        </section>
    );
}
