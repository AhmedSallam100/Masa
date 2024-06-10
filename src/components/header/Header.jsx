import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);

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

  return (
    <div className="header">
      <div className="container">
        <div className="logo">
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
                الرئيسية
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
                  <span>نبذة عنا</span>
                  <i className="uil uil-angle-down"></i>
                </div>
                <div className={`dropmenu ${openOne ? "active" : "inactive"}`}>
                  <ul>
                    <DropMenuItem
                      url={"/about"}
                      text={"من نحن"}
                      onClick={handleCloseMenus}
                    />
                    <hr />
                    <DropMenuItem
                      url={"/contact"}
                      text={"تواصل معنا"}
                      onClick={handleCloseMenus}
                    />
                  </ul>
                </div>
              </div>
            </li>
            <li className="li-link">
              <Link to={"#members"}>عملائنا</Link>
            </li>
            <li className="li-link">
              <Link to={"#reviews"}>الاقسام</Link>
            </li>
            <li className="li-link">
              <Link to={"MediaCenter"}>المركز الاعلامي</Link>
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
                  <span>صناعتنا</span>
                  <i className="uil uil-angle-down"></i>
                </div>
                <div className={`dropmenu ${openTwo ? "active" : "inactive"}`}>
                  <ul>
                    <DropMenuItem
                      url={"/about"}
                      text={"الصناعات"}
                      onClick={handleCloseMenus}
                    />
                    <hr />
                    <DropMenuItem
                      url={"/contact"}
                      text={"التراخيص"}
                      onClick={handleCloseMenus}
                    />
                    <hr />
                    <DropMenuItem
                      url={"/contact"}
                      text={"الخدمات"}
                      onClick={handleCloseMenus}
                    />
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="btns">
          <select>
            <option value="AR">العربية</option>
            <option value="EN">الانجليزية</option>
          </select>
        </div>
      </div>
    </div>
  );
};

function DropMenuItem(props) {
  return (
    <li className="dropmenu-item" onClick={props.onClick}>
      <Link to={props.url}>{props.text}</Link>
    </li>
  );
}

export default Header;
