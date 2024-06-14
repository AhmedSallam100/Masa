import MainTitle from "../../components/title/MainTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import React, { useEffect, useRef, useState } from "react";
import "./industry.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Industry = () => {
  return (
    <>
      <IndustrySection />
    </>
  );
};
export function IndustrySection() {
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const response = await axios.get("/industries");
        setIndustries(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchIndustries();
  }, []);

  const [t] = useTranslation("global");
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <section
      className="industry-section"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <MainTitle text={t("header.Ourindustry")} />
      <div className={`container `}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {industries.map((industry) => (
            <SwiperSlide>
              {" "}
              <img src={industry?.image} alt="industry" />
            </SwiperSlide>
          ))}

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
export default Industry;
