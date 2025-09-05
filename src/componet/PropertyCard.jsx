// src/components/PropertyCard.jsx
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

export default function PropertyCard({ property }) {
    return (
        <div className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md p-4">
            <img
                src={property.image}
                alt={property.name}
                loading="lazy"
                className="rounded-md mb-3 object-cover w-full h-40"
            />
            <div className="flex items-center text-gray-400 text-xs mb-1">
                <FaMapMarkerAlt className="mr-1" />
                <span>{property.city}, {property.state}</span>
                <FaStar className="ml-auto text-yellow-400" />
                <span className="ml-1 font-semibold text-xs text-gray-700">
                    4.5/5
                </span>
            </div>
            <p className="text-gray-700 text-xs leading-snug mb-3">
                Spacious apartment in a prime location with modern amenities.
            </p>
            <div className="flex items-center justify-between">
                <button
                    type="button"
                    className="bg-[#0B1E55] text-white text-xs font-semibold px-4 py-1 rounded-full"
                >
                    Buy Now
                </button>
                <span className="text-gray-700 font-semibold text-sm">
                    ${property.price || "450,000"}
                </span>
            </div>
        </div>
    );
}


