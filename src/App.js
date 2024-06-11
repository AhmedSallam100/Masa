import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Departments from "./pages/departments/departments";
import MediaCenter from "./pages/Media-center/MediaCenter";
import Contact from "./pages/contact/contact";
import Licenses from "./pages/Licenses/licenses";
import Services from "./pages/Services/services";
import Clients from "./pages/clients/clients";
import Industry from "./pages/industry/industry";
import DepartmentDetails from "./pages/departmentDetails/departmentDetails";
import Footer from "./components/footer/Footer";
import Article from "./pages/article/Article";
import AddArticle from "./pages/Admin/AddArticle";

axios.defaults.baseURL = `http://localhost:3001/api`;
axios.defaults.withCredentials = true;

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departmentDetails" element={<DepartmentDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/licenses" element={<Licenses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/industry" element={<Industry />} />

        <Route path="/dashboard/add-article" element={<AddArticle />} />
        <Route path="/mediaCenter" element={<MediaCenter />} />
        <Route path="/mediaCenter/:id" element={<Article />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
