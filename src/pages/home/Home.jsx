import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { ServiceItem } from "../Services/services";
import MainTitle from "../../components/title/MainTitle";
import { MainDepartments } from "../departments/departments";
import { LicenseBox } from "../Licenses/licenses";
import { Client } from "../clients/clients";
import { clientsData } from "../../components/data/clientsData";
import { IndustrySection } from "../industry/industry";
import { useTranslation } from "react-i18next";
const Home = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <HeroSection t={t} />
      <HomeServicesSection />
      <HomeDepartmentsSection />
      <IndustrySection />
      <HomeLicensesSection />
      <HomeClients />
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
              src={process.env.PUBLIC_URL + "/assets/home/home-gallery-1.png"}
              alt=""
            />
          </div>
          <div
            className="gallery-img img-two"
            data-aos="zoom-out"
            data-aos-duration="1000"
          >
            <img
              src={process.env.PUBLIC_URL + "/assets/home/home-gallery-2.png"}
              alt=""
            />
          </div>
          <div
            className="gallery-img img-three"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <img
              src={process.env.PUBLIC_URL + "/assets/home/home-gallery-3.png"}
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

function HomeServicesSection() {
  return (
    <section className="ServicesSection" id="services">
      <div className="services" data-aos="fade-up" data-aos-duration="2000">
        <MainTitle text={"الخدمات"} />
        <div className="container">
          <ServiceItem
            number={"01"}
            text={
              "سحب الاسلاك علي البارد واسلاك التربيط وشبك الارضيات بمقاسات وسماكات مختلفة تلبي احتياجات العملاء"
            }
          />
          <ServiceItem
            number={"02"}
            text={
              "قسم شبك الارضيات : في هذا القسم نقوم بتوفير شبك الارضيات بكافة المقاسات والتي تتراوح من 5,5 ملم الي 12 ملم نوع سابك"
            }
          />
          <ServiceItem
            number={"03"}
            text={
              "قسم الحديد النظامي (12 متر) بدون قص او تني ويتوفر في هذا القسم كافة مقاسات حديد التسليح من كافة انواع الحديد من مقاس 6 ملم الي مقاس 32"
            }
          />
          <Link to={"/services"} className="show-more-button">
            عرض المزيد
          </Link>
        </div>
      </div>
    </section>
  );
}
function HomeDepartmentsSection() {
  return (
    <section
      className="mass-departments"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <MainTitle text={"الاقسام"} />
      <div className="container">
        <div className="main-departments">
          <MainDepartments
            src={
              process.env.PUBLIC_URL +
              "/assets/doors/iron/b02c3890-095f-404a-a7c8-e36b5e52f0ca.jpg"
            }
            text1={"قسم الابواب"}
          />
          <MainDepartments
            src={
              process.env.PUBLIC_URL +
              "/assets/iron-department/5af7d4a9-d78f-46eb-8155-39e80185df10.jpg"
            }
            text1={"قسم الحديد"}
          />
          <MainDepartments
            src={
              process.env.PUBLIC_URL +
              "/assets/structures/78c30868-ec8d-4753-a6ad-2fe085a9368c.jpg"
            }
            text1={"قسم هياكل وخزانات"}
          />
        </div>
        <Link to={"/departments"} className="show-more-button">
          عرض المزيد
        </Link>
      </div>
    </section>
  );
}
function HomeClients() {
  return (
    <section
      className="clients-section"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <MainTitle text={"عملائنا"} />
      <div className="container">
        <Client obj={clientsData[0]} />
        <Client obj={clientsData[1]} />
        <Client obj={clientsData[2]} />
        <Client obj={clientsData[3]} />
      </div>
      <Link to={"/clients"} className="show-more-button">
        عرض المزيد
      </Link>
    </section>
  );
}
function HomeLicensesSection() {
  return (
    <section
      className="licenses-section"
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <MainTitle text={"التراخيص"} />
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
                عرض
              </a>
              <a
                href={process.env.PUBLIC_URL + "/assets/licence/licence-1.pdf"}
                target="_blank"
                rel="noreferrer"
                download={true}
              >
                تحميل
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
                عرض
              </a>
              <a
                href={process.env.PUBLIC_URL + "/assets/licence/licence-2.pdf"}
                target="_blank"
                rel="noreferrer"
                download={true}
              >
                تحميل
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
                عرض
              </a>
              <a
                href={process.env.PUBLIC_URL + "/assets/licence/licence-3.pdf"}
                target="_blank"
                rel="noreferrer"
                download={true}
              >
                تحميل
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
                عرض
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
                تحميل
              </a>
            </div>
          </LicenseBox>
        </div>
        <Link to={"/licenses"} className="show-more-button">
          عرض المزيد
        </Link>
      </div>
    </section>
  );
}
export default Home;
