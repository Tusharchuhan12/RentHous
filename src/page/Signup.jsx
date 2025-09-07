// src/components/Signup.jsx
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaEye, FaEnvelope, FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // API call logic here
        navigate("/Home");
    };

    return (
        <div className="bg-white min-h-[700px]">
            {/* Header */}
            <header className="flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4 bg-white border-b border-gray-200">
                <button
                    onClick={() => navigate("/Home")}
                    aria-label="Back to Homepage"
                    className="flex items-center gap-2 text-gray-700 text-xs sm:text-sm rounded-full border border-gray-400 px-3 sm:px-4 py-2 hover:bg-gray-100 transition"
                >
                    <FaArrowLeft className="text-sm" />
                    Back to Homepage
                </button>
                <div className="flex items-center gap-2 font-bold text-base sm:text-lg text-gray-900">
                    <span>PropBot</span>
                </div>
                <button
                    aria-label="About Us"
                    className="bg-[#1F3C88] text-white text-xs sm:text-sm font-medium rounded-full px-4 sm:px-6 py-2 flex items-center gap-2 hover:bg-[#1a2e6a] transition"
                >
                    About Us <FaArrowRight />
                </button>
            </header>

            {/* Main */}
            <main className="flex flex-col md:flex-row w-full mt-10">
                {/* Left Section - Form */}
                <section className=" mt-10 order-2 md:order-1 md:w-[500px] max-w-full px-6 md:px-12 lg:px-16 flex flex-col justify-center">
                    <h2 className="font-extrabold text-2xl mb-6 text-gray-900">Sign Up</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-1">
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter Your Full Name"
                                required
                                className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-500 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter Your Email Id"
                                    autoComplete="email"
                                    required
                                    className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 text-gray-500 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                                />
                                <FaEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none" />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter Your Password"
                                    autoComplete="new-password"
                                    required
                                    className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 text-gray-400 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                                />
                                <FaEye
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-base cursor-pointer"
                                />
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-900 mb-1">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm Your Password"
                                    required
                                    className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 text-gray-400 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                                />
                                <FaEye
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-base cursor-pointer"
                                />
                            </div>
                        </div>

                        {/* Signup Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#1E2F7D] text-white text-base font-normal rounded-full py-3 mt-3 hover:bg-[#17255a] focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                            SignUp
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-8">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-3 text-xs text-gray-400 font-semibold">OR CONTINUE WITH</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center justify-center gap-10 text-2xl">
                        <button aria-label="Continue with Apple" className="text-black hover:text-gray-700">
                            <FaApple />
                        </button>
                        <button aria-label="Continue with Facebook" className="text-[#1877F2] hover:text-[#145dbf]">
                            <FaFacebookF />
                        </button>
                        <button aria-label="Continue with Google" className="text-[#4285F4] hover:text-[#3367d6]">
                            <FaGoogle />
                        </button>
                    </div>

                    {/* Login link */}
                    <p className="text-center text-gray-700 mt-8 text-base sm:text-lg">
                        Already have an account?{" "}
                        <a href="Login" className="font-bold text-gray-900 hover:underline">
                            Log In
                        </a>
                    </p>
                </section>

                {/* Right Section - Image */}
                <section className="order-1 md:order-2 md:flex-1 flex justify-end">
                    <img
                        src="https://storage.googleapis.com/a1aa/image/cf29c0cf-bc79-41f3-eccb-86bf7c198c8b.jpg"
                        alt="Modern house exterior"
                        className="w-full h-[500px] object-cover rounded-tl-3xl rounded-bl-3xl lg:h-[600px]"
                    />
                </section>
            </main>
        </div>
    );
}
