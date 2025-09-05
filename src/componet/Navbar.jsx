import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/Home" },
        { name: "Buy", path: "/buy" },
        { name: "Rent", path: "/rent" },
        { name: "Sell", path: "/sell" },
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">

                {/* Logo */}
                <Link to="/Home" className="flex items-center space-x-2">
                    <span className="text-2xl">🏠</span>
                    <h1 className="text-xl font-bold">PropBot</h1>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className="hover:text-blue-600 transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Login/Register Button */}
                <div className="hidden md:flex">
                    <Link
                        to="/login"
                        className="bg-blue-800 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-all"
                    >
                        Login / Register <FaArrowRight />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-gray-700 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg py-4">
                    <ul className="flex flex-col space-y-4 px-6 text-gray-700 font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className="hover:text-blue-600 block"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                to="/login"
                                className="bg-blue-800 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-all w-fit"
                                onClick={() => setIsOpen(false)}
                            >
                                Login / Register <FaArrowRight />
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}