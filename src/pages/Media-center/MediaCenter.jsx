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

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("/articles");
        setArticles(response?.data);
        console.log(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, []);
  return (
    <section className="MediaCenter-Section ">
      <MainTitle text={"المركز الاعلامي"} />

      <div className="container">
        <div class="wrap">
          {articles.map((article) => (
            <Article
              date={
                article ? format(new Date(article.createdAt), "yyyy/M/d") : ""
              }
              news={article.title}
              text={article.description}
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
      <p>{text}</p>
      <Link to={url} className="more">
        اقرأ المزيد ....
      </Link>
    </div>
  );
}

export default MediaCenter;
