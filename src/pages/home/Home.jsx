import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { ServiceItem } from "../Services/services";
import MainTitle from "../../components/title/MainTitle";
import { MainDepartments } from "../departments/departments";
import { LicenseBox } from "../Licenses/licenses";
import { Client } from "../clients/clients";
import { IndustrySection } from "../industry/industry";
import { useTranslation } from "react-i18next";
const Home = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <HeroSection t={t} />
      <HomeServicesSection t={t} />
      <HomeDepartmentsSection t={t} />
      <IndustrySection t={t} />
      <HomeLicensesSection t={t} />
      <HomeClients t={t} />
    </>
  );
};

function HeroSection({ t }) {
  return (
    <div className="home">
      <div className="container">
        <div className="text">
          <div
            className="interview-text"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h1>{t("hero.headerOne")}</h1>
            <h2>{t("hero.headerTwo")}</h2>
          </div>
          <p data-aos="fade-up" data-aos-duration="1200">
            {t("hero.description")}
          </p>
          <div
            className="show-more"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Link to={"/about"}>
              <span>{t("hero.learnMore")}</span>
              <i className={`uil uil-arrow-${t("hero.arrow")}`}></i>
            </Link>
          </div>
        </div>
        <div className="gallery">
          <div
            className="gallery-img img-one"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/iron-department/5af7d4a9-d78f-46eb-8155-39e80185df10.jpg"
              }
              alt=""
            />
          </div>
          <div
            className="gallery-img img-two"
            data-aos="zoom-out"
            data-aos-duration="1000"
          >
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/structures/e3c8fd0b-7370-4e10-9357-d075a797894a.jpg"
              }
              alt=""
            />
          </div>
          <div
            className="gallery-img img-three"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/structures/1adc0ef5-a342-4b8d-8bc3-26304b6cea6e.jpg"
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <a className="go-down" href="#services">
        <svg width="30px" height="30px" viewBox="0 0 16 16" version="1.1">
          <path fill="#fff" d="M3 2v2l5 5 5-5v-2l-5 5z" />
          <path fill="#444" d="M3 7v2l5 5 5-5v-2l-5 5z" />
        </svg>
      </a>
    </div>
  );
}

function HomeServicesSection({ t }) {
  return (
    <section className="ServicesSection" id="services">
      <div className="services" data-aos="fade-up" data-aos-duration="2000">
        <MainTitle text={t("header.services")} />
        <div className="container">
          <ServiceItem number={"01"} text={t("services.servicesOne")} />
          <ServiceItem number={"02"} text={t("services.servicesTwo")} />
          <ServiceItem number={"03"} text={t("services.servicesThree")} />
          <Link to={"/services"} className="show-more-button">
            {t("header.showMore")}
          </Link>
        </div>
      </div>
    </section>
  );
}
function HomeDepartmentsSection({ t }) {
  return (
    <section
      className="mass-departments"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <MainTitle text={t("header.departments")} />
      <div className="container">
        <div className="main-departments">
          <MainDepartments
            src={
              process.env.PUBLIC_URL +
              "/assets/doors/iron/b02c3890-095f-404a-a7c8-e36b5e52f0ca.jpg"
            }
            text1={t("departments.departmentsTwo")}
            t={t("header.show")}
            link="/secondDepartments"
          />
          <MainDepartments
            src={
              process.env.PUBLIC_URL +
              "/assets/doors/wood/1aafe501-0025-40de-a7d2-65824eb3f096.jpg"
            }
            text1={t("departments.departmentsOne")}
            t={t("header.show")}
            link="/secondDepartments"
          />
          <MainDepartments
            src={
              process.env.PUBLIC_URL +
              "/assets/iron-department/5af7d4a9-d78f-46eb-8155-39e80185df10.jpg"
            }
            text1={t("departments.departmentsFour")}
            t={t("header.show")}
            link="/secondDepartments"
          />
          <MainDepartments
            src={
              process.env.PUBLIC_URL +
              "/assets/structures/78c30868-ec8d-4753-a6ad-2fe085a9368c.jpg"
            }
            text1={t("departments.departmentsThree")}
            t={t("header.show")}
            link="/secondDepartments"
          />
        </div>
        <Link to={"/departments"} className="show-more-button">
          {t("header.showMore")}
        </Link>
      </div>
    </section>
  );
}
function HomeClients({ t }) {
  const clientsData = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVh1jny9HE2IDBz_0eu1Hvcvyk7XpE9HnbQ&s",
      Clientsheader: `${t("clients.clientone")}`,
      Clientstitle: `${t("clients.clientDesc1")}`,
    },
    {
      src: "https://www.alrashed-steel.com/img/logo.png",
      Clientsheader: `${t("clients.clientTwo")}`,
      Clientstitle: `${t("clients.clientDesc2")}`,
    },
    {
      src: "https://pbs.twimg.com/profile_images/1387684984899657730/D5CoXADH_400x400.jpg",
      Clientsheader: `${t("clients.clientThree")}`,
      Clientstitle: `${t("clients.clientDesc3")}`,
    },
    {
      src: "https://pbs.twimg.com/media/EU6zljXXgAA6c_J.jpg",
      Clientsheader: `${t("clients.clientFour")}`,
      Clientstitle: `${t("clients.clientDesc4")}`,
    },
  ];
  return (
    <section
      className="clients-section"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <MainTitle text={t("header.clients")} />
      <div className="container">
        <Client obj={clientsData[0]} />
        <Client obj={clientsData[1]} />
        <Client obj={clientsData[2]} />
        <Client obj={clientsData[3]} />
      </div>
      <Link to={"/clients"} className="show-more-button">
        {t("header.showMore")}
      </Link>
    </section>
  );
}
function HomeLicensesSection({ t }) {
  return (
    <section
      className="licenses-section"
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <MainTitle text={t("header.licenses")} />
      <div className="container">
        <div className="license-lists">
          <LicenseBox>
            <img
              src={process.env.PUBLIC_URL + "/assets/licence/licence-1.png"}
              alt=""
            />
            <div className="btns">
              <a
                href={process.env.PUBLIC_URL + "/assets/licence/licence-1.png"}
                target="_blank"
                rel="noreferrer"
              >
                {t("header.show")}
              </a>
              <a
                href={process.env.PUBLIC_URL + "/assets/licence/licence-1.pdf"}
                target="_blank"
                rel="noreferrer"
                download={true}
              >
                {t("header.download")}
              </a>
            </div>
          </LicenseBox>
          <LicenseBox>
            <img
              src={process.env.PUBLIC_URL + "/assets/licence/licence-2.png"}
              alt=""
            />
            <div className="btns">
              <a
                href={process.env.PUBLIC_URL + "/assets/licence/licence-2.png"}
                target="_blank"
                rel="noreferrer"
              >
                {t("header.show")}
              </a>
              <a
                href={process.env.PUBLIC_URL + "/assets/licence/licence-2.pdf"}
                target="_blank"
                rel="noreferrer"
                download={true}
              >
                {t("header.download")}
              </a>
            </div>
          </LicenseBox>
          <LicenseBox>
            <img
              src={process.env.PUBLIC_URL + "/assets/licence/licence-3.png"}
              alt=""
            />
            <div className="btns">
              <a
                href={process.env.PUBLIC_URL + "/assets/licence/licence-3.png"}
                target="_blank"
                rel="noreferrer"
              >
                {t("header.show")}
              </a>
              <a
                href={process.env.PUBLIC_URL + "/assets/licence/licence-3.pdf"}
                target="_blank"
                rel="noreferrer"
                download={true}
              >
                {t("header.download")}
              </a>
            </div>
          </LicenseBox>
          <LicenseBox>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/licence/عنوان مصنع ماس الخليج.jpg"
              }
              alt="عقد عنوان مصنع ماس الخليج"
            />
            <div className="btns">
              <a
                href={
                  process.env.PUBLIC_URL +
                  "/assets/licence/عنوان مصنع ماس الخليج.jpg"
                }
                target="_blank"
                rel="noreferrer"
              >
                {t("header.show")}
              </a>
              <a
                href={
                  process.env.PUBLIC_URL +
                  "/assets/licence/عنوان مصنع ماس الخليج.pdf"
                }
                target="_blank"
                rel="noreferrer"
                download={true}
              >
                {t("header.download")}
              </a>
            </div>
          </LicenseBox>
        </div>
        <Link to={"/licenses"} className="show-more-button">
          {t("header.showMore")}
        </Link>
      </div>
    </section>
  );
}
export default Home;
