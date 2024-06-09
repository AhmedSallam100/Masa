import React from "react";
import CountUp from "react-countup";
import "./about.css";
import MainTitle from "../../components/title/MainTitle";

const About = () => {
  return (
    <>
      <WhoUs />
      <Success />
    </>
  );
};

function WhoUs() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-text">
          <h1 data-aos="fade-left" data-aos-duration="1000">
            من نحن ؟
            <br />
            شركة ماس الخليج للصناعة
          </h1>
          <p
            className="about-description"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            تقوم شركه مصنع ماس لمنتجات الصناعه بانتاج العديد من المنتجات
            المتميزة والتي تتمتع بجودة عالية وتلبي كثيرا من الاستخدامات الصناعية
            والخدمات وقد حقق نجاحا كبيرا وسمعة طيبة رغم عمره القصير من خلال حرصه
            علي تطبيق اعلي معايير الجودة والاهتمام المستمر بتطوير خطوط الانتاج
          </p>
          <p className="experience" data-aos="fade-up" data-aos-duration="1000">
            <CountUp start={0} end={50} duration={3} />
            <span> عام من الخبرة</span>
          </p>
        </div>
        <div className="gallery">
          <div
            className="gallery-img"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={process.env.PUBLIC_URL + "/assets/about-img-1.jpg"}
              alt=""
            />
          </div>
          <div
            className="gallery-img img-two"
            data-aos="zoom-out"
            data-aos-duration="1000"
          >
            <img
              src={process.env.PUBLIC_URL + "/assets/about-img-2.jpg"}
              alt=""
            />
          </div>
          <div
            className="gallery-img img-three"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <img
              src={process.env.PUBLIC_URL + "/assets/about-img-3.jpg"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Success() {
  return (
    <div className="success">
      <MainTitle text={"عوامل النجاح"} />
      <div className="container">
        <SuccessItem
          effect={"left"}
          duration={"1000"}
          icon={"10-plus"}
          text={"الالتزام التام باجراءات جودة النوعية بدون اي تنازل"}
        />
        <SuccessItem
          effect={"left"}
          duration={"1200"}
          icon={"check-circle"}
          text={"توافق جميع المنتجات مع المقاييس"}
        />
        <SuccessItem
          effect={"left"}
          duration={"1400"}
          icon={"robot"}
          text={
            "استخدام احدث الماكينات والتي تعمل بقدرات انتاجية عالية وبدقة متناهية"
          }
        />
        <SuccessItem
          effect={"left"}
          duration={"1600"}
          icon={"constructor"}
          text={"توظيف فنيين وعمالة علي درجة عالية من المهارة وبخبرات ممتازة "}
        />
        <SuccessItem
          effect={"left"}
          duration={"1800"}
          icon={"map-pin"}
          text={"تسليم المواد الي الموقع في اي منطقة بالمملكة وبالوقت المحدد"}
        />
        <SuccessItem icon={"users-alt"} text={"رعاية مصالح العملاء"} />
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
      <i className={`uil uil-${props.icon}`}></i>
      <p>{props.text}</p>
    </div>
  );
}

export default About;
