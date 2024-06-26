import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Sidebar from "./Sidebar";
import "./dashboard.css";
import { useTranslation } from "react-i18next";

const AddArticle = () => {
  const [t] = useTranslation("global");
  const [title, setTitle] = useState("");
  const [enTitle, setEnTitle] = useState("");
  const [description, setDescription] = useState("");
  const [enDescription, setEnDescription] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  let addNewArticle = async (e) => {
    e.preventDefault();
    if (!title) {
      return toast.error("برجاء كتابة عنوان..!");
    }
    if (!enTitle) {
      return toast.error("برجاء كتابة عنوان..!");
    }
    if (!description) {
      return toast.error("برجاء كتابة وصف..!");
    }
    if (!enDescription) {
      return toast.error("برجاء كتابة وصف..!");
    }
    if (!image) {
      return toast.error("برجاء رفع الصورة..!");
    }

    const articleData = new FormData();
    articleData.set("title", title);
    articleData.set("enTitle", enTitle);
    articleData.set("description", description);
    articleData.set("enDescription", enDescription);
    articleData.append("image", image);

    try {
      setLoading(true);
      const response = await axios.post("/articles", articleData, {
        withCredentials: true,
      });
      if (response.status === 200) {
        toast.success("تمت العملية بنجاح");
      }
    } catch (error) {
      toast.error("فشلت العملية..!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="add-exam">
      <div className="container">
        <Sidebar />
        <div className="add-content">
          <form onSubmit={addNewArticle}>
            <div className="mixed-inp">
              <div className="input-group">
                <label>العنوان</label>
                <input
                  type="text"
                  placeholder="العنوان"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Title</label>
                <input
                  type="text"
                  placeholder="title"
                  value={enTitle}
                  onChange={(e) => setEnTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="mixed-inp">
              <div className="input-group">
                <label>المقال</label>
                <textarea
                  placeholder="المقال"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="input-group">
                <label>Artilce</label>
                <textarea
                  placeholder="artilce"
                  value={enDescription}
                  onChange={(e) => setEnDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <label>الصورة</label>
            <div className="input-group">
              <div className="upload-content">
                <i className="uil uil-image"></i>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <button disabled={loading}>
              {loading ? t('dash.headerTwo') : t('dash.headerOne')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArticle;
