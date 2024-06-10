import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Landing />
    </>
  );
};

function Landing() {
  return (
    <div className="home">
      <div className="container">
        <div className="text">
          <div
            className="interview-text"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h1>شركة مصنع ماس الخليج للصناعة</h1>
            <h2>بالمملكة العربية السعودية</h2>
          </div>
          <p data-aos="fade-up" data-aos-duration="1200">
            تقوم شركه مصنع ماس لمنتجات الصناعه بانتاج العديد من المنتجات
            المتميزة والتي تتمتع بجودة عالية وتلبي كثيرا من الاستخدامات الصناعية
            والخدمات{" "}
          </p>
          <div
            className="show-more"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Link to={"/about"}>
              <span>اكتشف المزيد</span>
              <i className="uil uil-arrow-left"></i>
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
    </div>
  );
}

export default Home;
