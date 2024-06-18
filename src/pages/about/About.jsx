import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import "./about.css";
import MainTitle from "../../components/title/MainTitle";
import { useTranslation } from "react-i18next";
import axios from "axios";

const About = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <WhoUs t={t} />
      <Success t={t} />
    </>
  );
};

function WhoUs({ t }) {
  return (
    <div className="about">
      <div className="container">
        <div className="about-text">
          <h1 data-aos="fade-left" data-aos-duration="1000">
            <span> {t("about.headerThree")}</span>
            <br />
            {t("about.headerTwo")}
          </h1>
          <p
            className="about-description"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {t("about.headerOne")}
          </p>
          <p className="experience" data-aos="fade-up" data-aos-duration="1000">
            <CountUp start={0} end={50} duration={3} />
            <span> {t("about.headerFour")}</span>
          </p>
        </div>
        <div className="gallery">
          <div
            className="gallery-img"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={process.env.PUBLIC_URL + "/assets/about/about-img-1.jpg"}
              alt={t("about.headerTwo")}
            />
          </div>
          <div
            className="gallery-img img-two"
            data-aos="zoom-out"
            data-aos-duration="1000"
          >
            <img
            src={process.env.PUBLIC_URL + "/assets/about/about-img-2.jpg"}
              alt={t("about.headerTwo")}
            />
          </div>
          <div
            className="gallery-img img-three"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <img
                 src={process.env.PUBLIC_URL + "/assets/about/about-img-3.jpg"}
              alt={t("about.headerTwo")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Success({ t }) {
  const [sucesses, setSucesses] = useState([]);
  const [lang, setLang] = useState(localStorage.getItem("lang") || `"ar"`);

  useEffect(() => {
    const fetchSucesses = async () => {
      try {
        const response = await axios.get("/sucesses");
        setSucesses(response?.data);
        console.log(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSucesses();

    const handleStorageChange = () => {
      setLang(localStorage.getItem("lang") || `"ar"`);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return (
    <div className="success">
      <MainTitle text={t("about.success")} />
      <div className="container">
        {sucesses.map((success, index) => (
          <SuccessItem
            effect={"left"}
            duration={"1000"}
            text={
              lang === `"ar"` ? success?.description : success?.enDescription
            }
          />
        ))}
      </div>
    </div>
  );
}

function SuccessItem(props) {
  return (
    <div
      className="success-box"
      data-aos={`fade-${props.effect}`}
      data-aos-duration={props.duration}
    >
      <i
        className={`uil  uil-check-circle ${
          localStorage.getItem("lang") === `"en"` ? "sucess-item-IconEn" : ""
        }`}
      ></i>
      <p>{props.text}</p>
    </div>
  );
}

export default About;
