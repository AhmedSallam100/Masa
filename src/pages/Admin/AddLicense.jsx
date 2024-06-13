import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Sidebar from "./Sidebar";
import "./dashboard.css";
import { useTranslation } from "react-i18next";

const AddLicenses = () => {
  const [t] = useTranslation("global");
  const [image, setImage] = useState("");
  const [pdf, setPdf] = useState(null);
  const [loading, setLoading] = useState(false);

  let addNewIndusry = async (e) => {
    e.preventDefault();

    if (!image) {
      return toast.error("برجاء رفع الصورة..!");
    }
    if (!pdf) {
      return toast.error("برجاء رفع الترخيص..!");
    }

    const licenseData = new FormData();
    licenseData.append("image", image);
    licenseData.append("pdf", pdf);

    try {
      setLoading(true);
      const response = await axios.post("/licenses", licenseData, {
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
          <form onSubmit={addNewIndusry}>
            <label>الصورة</label>
            <div className="input-group">
              <div className="upload-content">
                <i class="uil uil-image"></i>
              </div>
              <input
                style={{ height: "170px" }}
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <label>الترخيص</label>
            <div className="input-group">
              <div className="upload-content">
                <i class="uil uil-bookmark"></i>
              </div>
              <input
                style={{ height: "170px" }}
                type="file"
                accept="application/pdf"
                onChange={(e) => setPdf(e.target.files[0])}
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

export default AddLicenses;
