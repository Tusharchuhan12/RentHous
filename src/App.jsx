import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import { FaWhatsapp } from "react-icons/fa";

import Login from "./page/Login";
import Signup from "./page/Signup";
import Home from "./page/Home";
import Navbar from "./componet/Navbar";
import Footer from "./componet/Footer";
import Buy from "./page/Buy";

function App() {
  const location = useLocation();

  // Hide Navbar + Footer on login & signup pages
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/signup";

  // WhatsApp floating button
  const phone = "918630116843";
  const message = "Hello! I need more details.";
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const position = "bottom-20 right-5";

  return (
    <>
   

   
      {!hideLayout && <Navbar />}

      {/* Routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>

    
       <Footer />

    
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed ${position} w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition`}
      >
        <FaWhatsapp className="w-8 h-8 text-white" />
      </a>
    </>
  );
}

export default App;
``