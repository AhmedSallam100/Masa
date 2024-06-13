import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Sidebar from "./Sidebar";
import "./dashboard.css";
import { useTranslation } from "react-i18next";

const AddImagesToDepartment = () => {
  const [t] = useTranslation("global");
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get("/departments");
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  const handleAddImages = async (e) => {
    e.preventDefault();

    if (!selectedDepartment) {
      return toast.error("برجاء اختيار القسم..!");
    }
    if (images.length === 0) {
      return toast.error("برجاء رفع الصور..!");
    }

    const formData = new FormData();
    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      setLoading(true);
      const response = await axios.post(
        `/departments/${selectedDepartment}/images`,
        formData,
        {
          withCredentials: true,
        }
      );
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
          <form onSubmit={handleAddImages}>
            <div className="input-group">
              <label>اختر القسم</label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="">اختر القسم</option>
                {departments.map((department) => (
                  <option key={department._id} value={department._id}>
                    {department.title}
                  </option>
                ))}
              </select>
            </div>
            <label>الصور</label>
            <div className="input-group">
              <div className="upload-content">
                <i className="uil uil-image"></i>
              </div>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setImages([...e.target.files])}
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

export default AddImagesToDepartment;
