// src/components/ContactSection.jsx
import { FaHome } from "react-icons/fa";

export default function ContactSection() {
    return (
        <div className="bg-gradient-to-b from-[#4B5F9E] to-[#2B3B7E] text-white mt-19">
            {/* Contact Section */}
            <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center">
                <h2 className="font-extrabold text-2xl md:text-3xl mb-3">
                    Get in Touch with Us
                </h2>
                <p className="text-base md:text-lg mb-8 max-w-md text-gray-200">
                    Subscribe now for exclusive property insights, updates, and deals!
                </p>

                {/* Form */}
                <form className="w-full max-w-md flex rounded-full overflow-hidden shadow-lg">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-grow bg-white text-gray-700 placeholder-gray-500 text-sm px-5 py-3 rounded-l-full focus:outline-none"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#1E2A5E] hover:bg-[#16204a] transition-colors text-white text-sm font-semibold px-6 py-3 rounded-r-full"
                    >
                        Subscribe
                    </button>
                </form>
            </div>

            {/* Footer */}
            <footer className="border-t border-white/20">
                <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-200">

                    {/* Logo */}
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <FaHome className="text-lg" />
                        <span className="font-bold text-white">PropBot</span>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
                        <a href="#" className="hover:text-white transition-colors">
                            For Sale
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Rentals
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            New Projects
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Property News
                        </a>
                    </nav>

                    {/* Copyright */}
                    <div className="text-gray-300 text-xs md:text-sm">
                        © {new Date().getFullYear()} PropBot. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
