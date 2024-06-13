import React, { useEffect, useState } from "react";
import "./article.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Article = () => {
  const [articleInfo, setArticleInfo] = useState(null);
  const [lang, setLang] = useState(localStorage.getItem("lang") || `"ar"`);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleArticle = async () => {
      try {
        const response = await axios.get(`/articles/${id}`);
        setArticleInfo(response?.data);
        console.log(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleArticle();

    const handleStorageChange = () => {
      setLang(localStorage.getItem("lang") || `"ar"`);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="article">
      <div className="container">
        <h1 className="article-title">
          {lang === `"ar"` ? articleInfo?.title : articleInfo?.enTitle}
        </h1>
        <div className="article-img">
          <img src={articleInfo?.image} alt="article" />
        </div>
        <p className="article-text">
          {lang === `"ar"`
            ? articleInfo?.description
            : articleInfo?.enDescription}
        </p>
      </div>
    </div>
  );
};

export default Article;
