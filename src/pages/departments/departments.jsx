import "./departments.css";
import MainTitle from "../../components/title/MainTitle";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";

const Departments = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <MassDepartments t={t} />
    </>
  );
};

function MassDepartments({ t }) {
  const [departments, setDepartments] = useState([]);
  const [lang, setLang] = useState(localStorage.getItem("lang") || `"ar"`);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get("/departments");
        setDepartments(response?.data);
        console.log(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDepartments();

    const handleStorageChange = () => {
      setLang(localStorage.getItem("lang") || `"ar"`);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return (
    <section className="mass-departments">
      <MainTitle text={t("header.departments")} />
      <div className="container">
        <div className="main-departments">
          {departments.map((department) => (
            <MainDepartments
              src={department?.image}
              text1={lang === `"ar"` ? department?.title : department?.enTitle}
              link={`/departments/${department?._id}`}
              t={t("header.show")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export function MainDepartments({ src, text1, link, t }) {
  return (
    <div>
      <img src={src} alt={text1} />
      <h1>{text1}</h1>
      <Link to={link}>{t}</Link>
    </div>
  );
}

export default Departments;
