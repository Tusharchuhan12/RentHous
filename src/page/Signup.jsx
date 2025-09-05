import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaEnvelope, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
export default function Signup() {
    const navigate = useNavigate();
    const { signup } = useAuth(); // 
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState(""); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        try {
            await signup(formData.email, formData.password);
            navigate("/Home");
        } catch (err) {
            setError(err.message || "Signup failed");
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4 bg-white border-b border-gray-200">
                <button onClick={() => navigate("/Home")} 
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
            <main className="flex lg:w-[1100px]
             flex-col md:flex-row flex-1 max-w-7xl mx-auto my-8 sm:my-12 md:my-16 px-4 sm:px-8 md:px-12 gap-10 md:gap-16">
                {/* Left Section - Form */}
                <section className="order-2  md:order-1 flex flex-col max-w-md w-full p-6 sm:p-8 rounded-2xl shadow">
                    <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-6 text-center md:text-left">
                        Create new account
                    </h1>

                    {/* Show error if any */}
                    {error && (
                        <div className="text-red-600 text-sm mb-2 text-center">{error}</div>
                    )}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        {/* Name */}
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="name"
                                className="text-sm font-semibold text-gray-900"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter Your Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border border-[#1F3C88] rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1F3C88]"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1 relative">
                            <label
                                htmlFor="email"
                                className="text-sm font-semibold text-gray-900"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter Your Email Id"
                                value={formData.email}
                                onChange={handleChange}
                                className="border border-[#1F3C88] rounded-lg px-4 py-3 pr-12 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1F3C88]"
                            />
                            <FaEnvelope className="absolute right-4 top-[38px] text-gray-400" />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1 relative">
                            <label
                                htmlFor="password"
                                className="text-sm font-semibold text-gray-900"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Your Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="border border-[#1F3C88] rounded-lg px-4 py-3 pr-12 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1F3C88]"
                            />
                            <FaEye
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-[38px] text-gray-400 cursor-pointer"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="flex flex-col gap-1 relative">
                            <label
                                htmlFor="confirmPassword"
                                className="text-sm font-semibold text-gray-900"
                            >
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Your Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="border border-[#1F3C88] rounded-lg px-4 py-3 pr-12 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1F3C88]"
                            />
                            <FaEye
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-[38px] text-gray-400 cursor-pointer"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-[#1F3C88] text-white text-base font-medium rounded-full py-3 mt-4 hover:bg-[#172e6a] transition"
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Already have an account */}
                    <p className="text-xs sm:text-sm text-gray-600 text-center mt-6">
                        Already have an account?{" "}
                        <a href="Login" className="font-bold text-[#1F3C88] hover:underline">
                            Log In
                        </a>
                    </p>
                </section>

                {/* Right Section - Image */}
                <section className="order-1 md:order-2 flex-1 flex justify-center items-center">
                    <img
                        src="https://storage.googleapis.com/a1aa/image/cf29c0cf-bc79-41f3-eccb-86bf7c198c8b.jpg"
                        alt="Modern house exterior"
                        className="lg:h-[600px] lg:w-[500px] rounded-t-2xl md:rounded-tl-3xl md:rounded-bl-3xl w-full max-w-lg object-cover shadow"
                    />
                </section>
            </main>
        </div>
    );
}
