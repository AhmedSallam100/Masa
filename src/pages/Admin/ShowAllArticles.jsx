import { Link } from "react-router-dom";
import "./dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { format, formatDistanceToNowStrict } from "date-fns";
import { ar } from "date-fns/locale";
import { toast } from "react-toastify";

const ShowAllArtilces = () => {
  const [articles, setArticles] = useState([]);

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

  const handleDelete = async (e, articleId) => {
    e.preventDefault();
    try {
      await axios.delete(`/articles/${articleId}`);
      setArticles(articles.filter((article) => article._id !== articleId));
      toast.success("تم الحذف بنجاح");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        toast.error(error.response.data.message);
      } else if (error.request) {
        console.log(error.request);
        toast.error("حدث خطأ اثناء العملية. يرجى المحاولة مرة اخرى.");
      } else {
        console.log("Error", error.message);
        toast.error("حدث خطأ اثناء العملية. يرجى المحاولة مرة اخرى.");
      }
    }
  };

  return (
    <div className="show-all-exams">
      <div className="container">
        <div className="table_component" role="region" tabIndex="0">
          <div className="table-head">
            <h1>المقالات</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>الرقم</th>
                <th>اسم المقال</th>
                <th>تاريخ الاضافة</th>
                <th>اجراءات</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{article.title}</td>
                  <td>
                    {article
                      ? format(new Date(article.createdAt), "yyyy/M/d", {
                          locale: ar,
                        })
                      : ""}
                  </td>
                  <td className="action-icons">
                    <div>
                      <Link to={`/mediaCenter/${article._id}`}>
                        <i className="uil uil-eye show-exam"></i>
                      </Link>
                      <form>
                        <button onClick={(e) => handleDelete(e, article._id)}>
                          <i className="uil uil-trash-alt delete-exam"></i>
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowAllArtilces;
