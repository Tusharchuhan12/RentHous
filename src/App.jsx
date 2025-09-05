import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Home from "./page/Home";
import Navbar from "./componet/Navbar";
import Footer from "./componet/Footer";
import Buy from "./page/Buy";

function App() {
  const location = useLocation();

 
  const hideLayout = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Navbar />} 

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
