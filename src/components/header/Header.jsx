import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "@uidotdev/usehooks";

const Header = () => {
  const [t, i18n] = useTranslation("global");
  const [lang, setLang] = useLocalStorage("lang", "");
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const dir = i18n.dir();
  useEffect(() => {
    const handleCloseMenu = (e) => {
      if (!e.target.closest(".dropmenu-container")) {
        setOpenOne(false);
        setOpenTwo(false);
      }
    };
    document.addEventListener("mousedown", handleCloseMenu);
    return () => {
      document.removeEventListener("mousedown", handleCloseMenu);
    };
  }, []);

  const handleCloseMenus = () => {
    setOpenOne(false);
    setOpenTwo(false);
  };
  function handleChange(e) {
    setLang(e.target.value);
    handleChangeLanguage(e.target.value);
  }
  useEffect(() => {
    i18n.changeLanguage(lang);
    document.body.dir = dir;
  }, [dir, i18n, lang]);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="header">
      <div className={`mob-menu ${openMenu ? "active" : "inactive"} `}>
        <ul className="mob-links">
          <li className="mob-link">
            <Link to={"/"}>{t("header.home")}</Link>
          </li>
          <li className="mob-link">
            <Link to={"/about"}>{t("header.about")}</Link>
          </li>
          <li className="mob-link">
            <Link to={"/contact"}>{t("header.contact")}</Link>
          </li>
          <li className="mob-link">
            <Link to={"/clients"}>{t("header.clients")}</Link>
          </li>
          <li className="mob-link">
            <Link to={"/departments"}>{t("header.departments")}</Link>
          </li>
          <li className="mob-link">
            <Link to={"/MediaCenter"}>{t("header.media")}</Link>
          </li>
          <li className="mob-link">
            <Link to={"/industry"}>{t("header.industry")}</Link>
          </li>
          <li className="mob-link">
            <Link to={"/licenses"}>{t("header.licenses")}</Link>
          </li>
          <li className="mob-link">
            <Link to={"/services"}>{t("header.services")}</Link>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="logo">
          <i
            className="uil uil-bars menu-btn"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          ></i>
          <Link to={"/"}>
            <img
              src={process.env.PUBLIC_URL + "/assets/vertical-logo.png"}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="links">
          <ul className="ul-links">
            <li className="li-link">
              <Link to={"/"} className="active">
                {t("header.home")}
              </Link>
            </li>
            <li className="li-link">
              <div className="dropmenu-container">
                <div
                  className="dropmenu-btn"
                  onClick={() => {
                    setOpenOne(!openOne);
                    setOpenTwo(false);
                  }}
                >
                  <span>{t("header.overview")}</span>
                  <i className="uil uil-angle-down"></i>
                </div>
                <div className={`dropmenu ${openOne ? "active" : "inactive"}`}>
                  <ul>
                    <DropMenuItem
                      url={"/about"}
                      text={t("header.about")}
                      onClick={handleCloseMenus}
                      lang={lang}
                    />
                    <hr />
                    <DropMenuItem
                      url={"/contact"}
                      text={t("header.contact")}
                      onClick={handleCloseMenus}
                      lang={lang}
                    />
                  </ul>
                </div>
              </div>
            </li>
            <li className="li-link">
              <Link to={"clients"}>{t("header.clients")}</Link>
            </li>
            <li className="li-link">
              <Link to={"departments"}>{t("header.departments")}</Link>
            </li>
            <li className="li-link">
              <Link to={"MediaCenter"}>{t("header.media")}</Link>
            </li>
            <li className="li-link">
              <div className="dropmenu-container">
                <div
                  className="dropmenu-btn"
                  onClick={() => {
                    setOpenTwo(!openTwo);
                    setOpenOne(false);
                  }}
                >
                  <span>{t("header.Ourindustry")}</span>
                  <i className="uil uil-angle-down"></i>
                </div>
                <div className={`dropmenu ${openTwo ? "active" : "inactive"}`}>
                  <ul>
                    <DropMenuItem
                      url={"/industry"}
                      text={t("header.industry")}
                      onClick={handleCloseMenus}
                      lang={lang}
                    />
                    <hr />
                    <DropMenuItem
                      url={"/licenses"}
                      text={t("header.licenses")}
                      onClick={handleCloseMenus}
                      lang={lang}
                    />
                    <hr />
                    <DropMenuItem
                      url={"/services"}
                      text={t("header.services")}
                      lang={lang}
                      onClick={handleCloseMenus}
                    />
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="btns">
          <select value={lang} onChange={handleChange}>
            <option value="ar">العربية</option>
            <option value="en">{t("header.english")}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

function DropMenuItem({ lang, url, text, onClick }) {
  return (
    <li
      className={`dropmenu-item ${lang === "en" ? "dropmenu-item-en" : ""}`}
      onClick={onClick}
    >
      <Link to={url}>{text}</Link>
    </li>
  );
}

export default Header;
