import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="footer-logo">
            <img
              src={process.env.PUBLIC_URL + "/assets/white-logo.png"}
              alt="Logo"
            />
          </div>
          <div className="footer-uls">
            <ul className="footer-links">
              <li className="footer-link">
                <Link to={"/"}>الرئيسية</Link>
              </li>
              <li className="footer-link">
                <Link to={"/about"}>من نحن</Link>
              </li>
              <li className="footer-link">
                <Link to={"/contact"}>تواصل معنا</Link>
              </li>
            </ul>
            <ul className="footer-links">
              <li className="footer-link">
                <Link to={"/clients"}>عملائنا</Link>
              </li>
              <li className="footer-link">
                <Link to={"/departments"}>الاقسام</Link>
              </li>
              <li className="footer-link">
                <Link to={"/MediaCenter"}>المركز الاعلامي</Link>
              </li>
            </ul>
            <ul className="footer-links">
              <li className="footer-link">
                <Link to={"/industry"}>الصناعات</Link>
              </li>
              <li className="footer-link">
                <Link to={"/licenses"}>التراخيص</Link>
              </li>
              <li className="footer-link">
                <Link to={"/services"}>الخدمات</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="industry-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/sudia.png"}
              alt="Logo"
            />
          </div>
          <div className="footer-icons">
            <a href="/">
              <i className="uil uil-facebook-f"></i>
            </a>
            <a href="/">
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href="/">
              <i className="uil uil-twitter-alt"></i>
            </a>
            <a href="/">
              <i className="uil uil-phone-alt"></i>
            </a>
          </div>
        </div>
        <hr />
        <p className="copy-right">
          جميع الحقوق محفوظة لموقع شركة مصنع ماس الخليج للصناعة
        </p>
      </div>
    </div>
  );
};

export default Footer;
