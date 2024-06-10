import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Departments from "./pages/departments/departments";
import MediaCenter from "./pages/Media-center/MediaCenter";
import Contact from "./pages/contact/contact";
import Licenses from "./pages/Licenses/licenses";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/mediaCenter" element={<MediaCenter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/licenses" element={<Licenses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
