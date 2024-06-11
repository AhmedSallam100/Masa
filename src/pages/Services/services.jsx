import React from "react";
import "./services.css";
import MainTitle from "../../components/title/MainTitle";
import { useTranslation } from "react-i18next";
const Services = () => {
  const [t] = useTranslation("global");
  return (
    <section className="ServicesSection">
      <div className="services">
        <MainTitle text=     {t('header.services')} />
        <div className="container">
        <ServiceItem
            number={"01"}
            text={t('services.servicesOne')}
           
          />
          <ServiceItem
            number={"02"}
            text={t('services.servicesTwo')}
          
          />
          <ServiceItem
            number={"03"}
            text={t('services.servicesThree')}
          
          />
          <ServiceItem
            number={"04"}
            text={t('services.servicesFour')}
   
          />
          <ServiceItem
            number={"05"}
            text={t('services.servicesFive')}
  
          />
          <ServiceItem
            number={"06"}
            text={t('services.servicesSeven')}
       
          />
        </div>
      </div>
    </section>
  );
};

export function ServiceItem({number, text}) {

  return (
    <div className="service-box">
      <div className="service-number">
        <span className={`${localStorage.getItem("lang") === `"en"` ? "service-span-en" : ""}`}>{number}</span>
      </div>
      <p className="service-description">{text}</p>
    </div>
  );
}

export default Services;
