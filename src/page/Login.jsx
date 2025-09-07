// src/components/Login.jsx
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaEye, FaEnvelope, FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
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
                <section className=" mt-4 order-2 md:order-1 md:w-[500px] max-w-full px-6 md:px-12 lg:px-16 flex flex-col justify-center">
                    <h2 className="font-extrabold text-2xl mb-6 text-gray-900">Log In</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter Your Password"
                                    autoComplete="current-password"
                                    required
                                    className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 text-gray-400 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                                />
                                <FaEye
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-base cursor-pointer"
                                />
                            </div>
                        </div>

                        {/* Remember Me + Forgot */}
                        <div className="flex items-center justify-between text-xs text-gray-500">
                            <label className="flex items-center gap-1 select-none">
                                <input type="checkbox" name="remember" className="w-3.5 h-3.5 border border-gray-300 rounded-sm" />
                                Remember Me
                            </label>
                            <a href="#" className="text-xs  hover:underline">
                                Forgot Password?
                            </a>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#1E2F7D] text-white text-base font-normal rounded-full py-3 mt-3 hover:bg-[#17255a] focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                            Log In
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

                    {/* Create account link */}
                    <p className="text-center text-gray-700 mt-8 text-base sm:text-lg">
                        Doesn&apos;t have an account?{" "}
                        <a href="Signup" className="font-bold text-gray-900 hover:underline">
                            Create One
                        </a>
                    </p>
                </section>

                {/* Right Section - Image */}
                <section className="order-1 md:order-2 md:flex-1 relative">
                    <img
                        src="https://storage.googleapis.com/a1aa/image/688a85c2-4778-4e9c-5073-acd7181df5ce.jpg"
                        alt="Modern house exterior"
                        className=" mb-4 w-screen md:w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-tl-3xl rounded-bl-3xl"
                    />
                </section>
     

            </main>
        </div>
    );
}
