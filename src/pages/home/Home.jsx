import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { ServiceItem } from "../Services/services";
import MainTitle from "../../components/title/MainTitle";
import { MainDepartments } from "../departments/departments";
import { LicenseBox } from "../Licenses/licenses";
import { Client } from "../clients/clients";
import { IndustrySection } from "../industry/industry";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Loader from "../../components/loader/Loader";
import axios from "axios";

const Home = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <Loader />
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
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (_s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="home">
      <div className="container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className={`mySwiper ${localStorage.getItem("lang") === `"ar"` ? 'swiper-ar' : localStorage.getItem("lang") === `"en"` ? 'swiper-en' : ''}`}
          key={localStorage.getItem("lang")}
        >
          <SwiperSlide>
            <div
              className={`text ${
            localStorage.getItem("lang") === `"ar"` ? "text-ar" :  localStorage.getItem("lang") === `"en"` ? 'text-en' : ''
              }`}
            >
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
                    "/assets/doors/iron/0a1902a8-f1e7-48de-9cb2-3d8dfbd8ac62.jpg"
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
                    "/assets/structures/78c30868-ec8d-4753-a6ad-2fe085a9368c.jpg"
                  }
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`text ${
                localStorage.getItem("lang") === `"ar"` ? "text-ar" :  localStorage.getItem("lang") === `"en"` ? 'text-en' : ''
              }`}
            >
              <div
                className="interview-text"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <h1>{t("hero.headerOne")}</h1>
                <h2>{t("hero.headerTwo")}</h2>
              </div>
              <p data-aos="fade-up" data-aos-duration="1200">
                {t("hero.descriptionTwo")}
              </p>
              <div
                className="show-more"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <Link to={"/contact"}>
                  <span>{t("hero.headerFive")}</span>
                  <i className={`uil uil-arrow-${t("hero.arrow")}`}></i>
                </Link>
              </div>
            </div>
            <div className="gallery gallery-two">
              <div
                className="gallery-img img-one"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/doors/wood/2f36c39b-6500-42ac-8158-3bb33f77df6f.jpg"
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
                    "/assets/doors/wood/91193696-068f-482e-af33-b67cac587018.jpg"
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
                    "/assets/doors/wood/36815165-66b9-4700-9978-8e8bc65c4f4a.jpg"
                  }
                  alt=""
                />
              </div>
              <div
                className="gallery-img img-four"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/doors/wood/b09469e2-7f8a-4303-93cb-b20ed752ba34.jpg"
                  }
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`text ${
                 localStorage.getItem("lang") === `"ar"` ? "text-ar" :  localStorage.getItem("lang") === `"en"` ? 'text-en' : ''
              }`}
            >
              <div
                className="interview-text"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <h1>{t("hero.headerOne")}</h1>
                <h2>{t("hero.headerTwo")}</h2>
              </div>
              <p data-aos="fade-up" data-aos-duration="1200">
                {t("hero.descriptionThree")}
              </p>
              <div
                className="show-more"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <Link to={"/services"}>
                  <span>{t("hero.headerSeven")}</span>
                  <i className={`uil uil-arrow-${t("hero.arrow")}`}></i>
                </Link>
              </div>
            </div>
            <div className="gallery gallery-three">
              <div
                className="gallery-img img-one"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/structures/78c30868-ec8d-4753-a6ad-2fe085a9368c.jpg"
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
                    "/assets/iron-department/5af7d4a9-d78f-46eb-8155-39e80185df10.jpg"
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
                    "/assets/doors/wood/22658edd-ba77-4435-82d0-26fba83b5139.jpg"
                  }
                  alt=""
                />
 
              </div>
              <div
                className="gallery-img img-four"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
               <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/doors/iron/b02c3890-095f-404a-a7c8-e36b5e52f0ca.jpg"
                  }
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
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
  const [departments, setDepartments] = useState([]);
  const [lang, setLang] = useState(localStorage.getItem("lang") || `"ar"`);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get("/departments");
        setDepartments(response?.data);
        console.log(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDepartments();

    const handleStorageChange = () => {
      setLang(localStorage.getItem("lang") || `"ar"`);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <section
      className="mass-departments"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <MainTitle text={t("header.departments")} />
      <div className="container">
        <div className="main-departments">
          {departments.map((department) => (
            <MainDepartments
              src={department?.image}
              text1={lang === `"ar"` ? department?.title : department?.enTitle}
              link={`/departments/${department?._id}`}
              t={t("header.show")}
            />
          ))}
        </div>
        <Link to={"/departments"} className="show-more-button">
          {t("header.showMore")}
        </Link>
      </div>
    </section>
  );
}
function HomeClients({ t }) {
  const [clients, setClients] = useState([]);
  const [lang, setLang] = useState(localStorage.getItem("lang") || `"ar"`);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("/clients");
        setClients(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClients();

    const handleStorageChange = () => {
      setLang(localStorage.getItem("lang") || `"ar"`);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <section
      className="clients-section"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <MainTitle text={t("header.clients")} />
      <div className="container">
        {clients.slice(0, 3).map((client, index) => (
          <Client
            title={lang === `"ar"` ? client?.name : client?.enName}
            description={
              lang === `"ar"` ? client?.description : client?.enDescription
            }
            image={client?.image}
            key={index}
          />
        ))}
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
