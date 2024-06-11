import React, { useEffect, useState } from "react";
import "./article.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Article = () => {
  const [articleInfo, setArticleInfo] = useState(null);
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
  }, []);

  return (
    <div className="article">
      <div className="container">
        <h1 className="article-title">{articleInfo?.title}</h1>
        <div className="article-img">
          <img src={articleInfo?.image} alt="article" />
        </div>
        <p className="article-text">{articleInfo?.description}</p>
      </div>
    </div>
  );
};

export default Article;
