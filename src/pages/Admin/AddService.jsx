import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Sidebar from "./Sidebar";
import "./dashboard.css";
import { useTranslation } from "react-i18next";

const AddService = () => {
  const [t] = useTranslation("global");
  const [description, setDescription] = useState("");
  const [enDescription, setEnDescription] = useState("");
  const [loading, setLoading] = useState(false);

  let addNewService = async (e) => {
    e.preventDefault();
    if (!description) {
      return toast.error("برجاء كتابة الخدمة..!");
    }
    if (!enDescription) {
      return toast.error("برجاء كتابة الخدمة..!");
    }

    const serviceData = {
      description,
      enDescription,
    };

    try {
      setLoading(true);
      const response = await axios.post("/services", serviceData, {
        headers: {
          "Content-Type": "application/json",
        },
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
          <form onSubmit={addNewService}>
            <div className="mixed-inp">
              <div className="input-group">
                <label>الوصف</label>
                <textarea
                  placeholder="نبذة"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="input-group">
                <label>Description</label>
                <textarea
                  placeholder="description"
                  value={enDescription}
                  onChange={(e) => setEnDescription(e.target.value)}
                ></textarea>
              </div>
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

export default AddService;
