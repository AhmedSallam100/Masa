import React, { useEffect, useState } from "react";
import "./services.css";
import MainTitle from "../../components/title/MainTitle";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);
  const [lang, setLang] = useState(localStorage.getItem("lang") || `"ar"`);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("/services");
        setServices(response?.data);
        console.log(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchServices();

    const handleStorageChange = () => {
      setLang(localStorage.getItem("lang") || `"ar"`);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const [t] = useTranslation("global");
  return (
    <section className="ServicesSection">
      <div className="services">
        <MainTitle text={t("header.services")} />
        <div className="container">
          {services.map((service, index) => (
            <ServiceItem
              number={index + 1}
              text={
                lang === `"ar"` ? service?.description : service?.enDescription
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export function ServiceItem({ number, text }) {
  return (
    <div className="service-box">
      <div className="service-number">
        <span
          className={`${
            localStorage.getItem("lang") === `"en"` ? "service-span-en" : ""
          }`}
        >
          {number}
        </span>
      </div>
      <p className="service-description">{text}</p>
    </div>
  );
}

export default Services;
