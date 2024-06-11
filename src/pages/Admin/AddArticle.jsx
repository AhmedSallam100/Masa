import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Sidebar from "./Sidebar";
import "./dashboard.css";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  let addNewArticle = async (e) => {
    e.preventDefault();
    if (!title) {
      return toast.error("برجاء كتابة عنوان..!");
    }
    if (!description) {
      return toast.error("برجاء كتابة وصف..!");
    }
    if (!image) {
      return toast.error("برجاء رفع الصورة..!");
    }

    const articleData = new FormData();
    articleData.set("title", title);
    articleData.set("description", description);
    articleData.append("image", image); // تأكد من الاسم الصحيح للحقل

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
            <label>العنوان</label>
            <div className="input-group">
              <input
                type="text"
                placeholder="العنوان"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <label>المقال</label>
            <div className="input-group">
              <textarea
                placeholder="المقال"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <label>الصورة</label>
            <div className="input-group">
              <div className="upload-content">
                <i className="uil uil-image"></i>
              </div>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <button disabled={loading}>
              {loading ? `جاري الرفع...` : "تاكيد"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArticle;
