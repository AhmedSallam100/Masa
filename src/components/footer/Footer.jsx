import { Link } from "react-router-dom";
import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation("global");
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
<p>{t('hero.description')}</p>
          <div className="footer-uls">
            <ul className="footer-links">
              <li className="footer-link">
                <Link to={"/"}>{t('header.home')}</Link>
              </li>
              <li className="footer-link">
                <Link to={"/about"}>{t('header.about')}</Link>
              </li>
              <li className="footer-link">
                <Link to={"/contact"}>{t('header.contact')}</Link>
              </li>
            </ul>
            <ul className="footer-links">
              <li className="footer-link">
                <Link to={"/clients"}>{t('header.clients')}</Link>
              </li>
              <li className="footer-link">
                <Link to={"/departments"}>{t('header.departments')}</Link>
              </li>
              <li className="footer-link">
                <Link to={"/MediaCenter"}>{t('header.media')}</Link>
              </li>
            </ul>
            <ul className="footer-links">
              <li className="footer-link">
                <Link to={"/industry"}>{t('header.industry')}</Link>
              </li>
              <li className="footer-link">
                <Link to={"/licenses"}>{t('header.licenses')}</Link>
              </li>
              <li className="footer-link">
                <Link to={"/services"}>{t('header.services')}</Link>
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
        {t('header.footer')}
     
        </p>
      </div>
    </div>
  );
};

export default Footer;
