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
import AddDepartment from "./pages/Admin/AddDepartment";
import AddIndustry from "./pages/Admin/AddIndustry";
import AddLicenses from "./pages/Admin/AddLicense";
import AddClient from "./pages/Admin/AddClient";
import AddService from "./pages/Admin/AddService";
import AddSucess from "./pages/Admin/AddSucess";
import ShowAllArtilces from "./pages/Admin/ShowAllArticles";
import ShowAllDepartments from "./pages/Admin/ShowAllDepartments";
import ShowAllIndustries from "./pages/Admin/ShowAllIndustries";
import ShowAllLicenses from "./pages/Admin/ShowAllLicenses";
import ShowAllClients from "./pages/Admin/ShowAllClients";
import ShowAllServices from "./pages/Admin/ShowAllServices";
import ShowAllSucesses from "./pages/Admin/ShowAllSucesses";
import AddImagesToDepartment from "./pages/Admin/AddImagesToDepartment";
import NotFound from "./pages/404/404";
import LoginDash from "./pages/login-dash/LoginDash";

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
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/dashboard" element={<LoginDash />} />

        <Route path="/dashboard/add-article" element={<AddArticle />} />
        <Route path="/mediaCenter" element={<MediaCenter />} />
        <Route path="/mediaCenter/:id" element={<Article />} />

        <Route path="/dashboard/add-department" element={<AddDepartment />} />
        <Route
          path="/dashboard/add-department-images"
          element={<AddImagesToDepartment />}
        />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/:id" element={<DepartmentDetails />} />

        <Route path="/dashboard/add-industry" element={<AddIndustry />} />
        <Route path="/industry" element={<Industry />} />

        <Route path="/dashboard/add-lisense" element={<AddLicenses />} />
        <Route path="/licenses" element={<Licenses />} />

        <Route path="/dashboard/add-client" element={<AddClient />} />
        <Route path="/clients" element={<Clients />} />

        <Route path="/dashboard/add-service" element={<AddService />} />
        <Route path="/services" element={<Services />} />

        <Route path="/dashboard/add-sucess" element={<AddSucess />} />

        <Route path="/dashboard/articles" element={<ShowAllArtilces />} />
        <Route path="/dashboard/departments" element={<ShowAllDepartments />} />
        <Route path="/dashboard/industries" element={<ShowAllIndustries />} />
        <Route path="/dashboard/licenses" element={<ShowAllLicenses />} />
        <Route path="/dashboard/clients" element={<ShowAllClients />} />
        <Route path="/dashboard/services" element={<ShowAllServices />} />
        <Route path="/dashboard/sucesses" element={<ShowAllSucesses />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
