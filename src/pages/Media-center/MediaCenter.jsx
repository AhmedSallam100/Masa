import "./MediaCenter.css";
import MainTitle from "../../components/title/MainTitle";
import {Link} from "react-router-dom";


const MediaCenter = () => {
  return (
    <>
      <MediaSection />
    </>
  );
};

function MediaSection() {
  return (
    <section className="MediaCenter-Section ">
      <MainTitle text={"المركز الاعلامي"} />

      <div className="container">
        <div class="wrap">
          <Article
            date="Oct 25 2024"
            news={"نجاح شركه مصنع ماس الخليج الباهر"}
            src={
              process.env.PUBLIC_URL +
              "/assets/iron-department/5af7d4a9-d78f-46eb-8155-39e80185df10.jpg"
            }
          />
          <Article
            date="Oct 25 2024"
            news={"نجاح شركه مصنع ماس الخليج الباهر"}
            src={
              process.env.PUBLIC_URL +
              "/assets/doors/iron/b02c3890-095f-404a-a7c8-e36b5e52f0ca.jpg"
            }
          />
          <Article
            date="Oct 25 2024"
            news={"نجاح شركه مصنع ماس الخليج الباهر"}
            src={
              process.env.PUBLIC_URL +
              "/assets/structures/78c30868-ec8d-4753-a6ad-2fe085a9368c.jpg"
            }
          />
          <Article
            date="Oct 25 2024"
            news={"نجاح شركه مصنع ماس الخليج الباهر"}
            src={process.env.PUBLIC_URL + "/assets/home/home-gallery-2.png"}
          />
          <Article
            date="Oct 25 2024"
            news={"نجاح شركه مصنع ماس الخليج الباهر"}
            src={process.env.PUBLIC_URL + "/assets/home/home-gallery-1.png"}
          />
          <Article
            date="Oct 25 2024"
            news={"نجاح شركه مصنع ماس الخليج الباهر"}
            src={process.env.PUBLIC_URL + "/assets/home/home-gallery-3.png"}
          />
          <Article
            date="Oct 25 2024"
            news={"نجاح شركه مصنع ماس الخليج الباهر"}
            src={process.env.PUBLIC_URL + "/assets/home/home-gallery-2.png"}
          />
        </div>
      </div>
    </section>
  );
}
function Article({ date, news, src }) {
  return (
    <div class="article">
      <div class="overlay"></div>
      <div class="wrap-cat">
        <span class="cat" data-hover={date}>
          {date}
        </span>
      </div>
      <h1>
        <span>{news}</span>
      </h1>

      <img alt={news} src={src} />
      <p>
        {" "}
        تقوم شركه مصنع ماس لمنتجات الصناعه بانتاج العديد من المنتجات المتميزة
        والتي تتمتع بجودة عالية{" "}
      </p>
      <Link to="/myComponent" className="more">اقرأ المزيد ....</Link>

    </div>
  );
}

export default MediaCenter;
