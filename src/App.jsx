import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(true));
  }, [!localStorage.getItem("darkMode")]);

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
