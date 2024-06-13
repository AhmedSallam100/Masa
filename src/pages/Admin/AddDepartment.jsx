import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Sidebar from "./Sidebar";
import "./dashboard.css";
import { useTranslation } from "react-i18next";

const AddDepartment = () => {
  const [t] = useTranslation("global");
  const [title, setTitle] = useState("");
  const [enTitle, setEnTitle] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  let addNewDepartment = async (e) => {
    e.preventDefault();

    if (!title) {
      return toast.error("برجاء كتابة الاسم..!");
    }
    if (!enTitle) {
      return toast.error("برجاء كتابة الاسم..!");
    }
    if (!image) {
      return toast.error("برجاء رفع الصورة..!");
    }

    const departmentData = new FormData();
    departmentData.set("title", title);
    departmentData.set("enTitle", enTitle);
    departmentData.append("image", image);

    try {
      setLoading(true);
      const response = await axios.post("/departments", departmentData, {
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
          <form onSubmit={addNewDepartment}>
            <div className="mixed-inp">
              <div className="input-group">
                <label>الاسم</label>
                <input
                  type="text"
                  placeholder="الاسم"
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

export default AddDepartment;
