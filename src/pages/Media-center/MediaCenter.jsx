import "./MediaCenter.css";
import MainTitle from "../../components/title/MainTitle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

const MediaCenter = () => {
  return (
    <>
      <MediaSection />
    </>
  );
};

function MediaSection() {
  const [articles, setArticles] = useState([]);
  const [lang, setLang] = useState(localStorage.getItem("lang") || `"ar"`);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("/articles");
        setArticles(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setLang(localStorage.getItem("lang") || `"ar"`);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <section className="MediaCenter-Section">
      <MainTitle text={"المركز الاعلامي"} />

      <div className="container">
        <div className="wrap">
          {articles.map((article) => (
            <Article
              key={article._id}
              date={
                article ? format(new Date(article.createdAt), "yyyy/M/d") : ""
              }
              news={lang === `"ar"` ? article?.title : article?.enTitle}
              text={
                lang === `"ar"` ? article?.description : article?.enDescription
              }
              src={article.image}
              url={`/mediaCenter/${article._id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Article({ date, news, src, text, url }) {
  return (
    <div className="article">
      <div className="overlay"></div>
      <div className="wrap-cat">
        <span className="cat" data-hover={date}>
          {date}
        </span>
      </div>
      <h1>
        <span>{news}</span>
      </h1>

      <img alt={news} src={src} />
      <p>{text}</p>
      <Link to={url} className="more">
        اقرأ المزيد ....
      </Link>
    </div>
  );
}

export default MediaCenter;
