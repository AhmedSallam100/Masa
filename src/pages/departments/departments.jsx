import "./departments.css";
import MainTitle from "../../components/title/MainTitle";
import { Link } from "react-router-dom";

const Departments = () => {
  return (
    <>
      <MassDepartments />
    </>
  );
};

function MassDepartments() {
  return (
    <section className="mass-departments">
      <MainTitle text={"الاقسام"} />
      <div className="container">
        <div className="main-departments">
          <MainDepartments
            src={
              process.env.PUBLIC_URL +
              "/assets/doors/iron/b02c3890-095f-404a-a7c8-e36b5e52f0ca.jpg"
            }
            text1={"قسم الابواب"}
            link = '/secondDepartments'
          />
          <MainDepartments
            src={
              process.env.PUBLIC_URL +
              "/assets/iron-department/5af7d4a9-d78f-46eb-8155-39e80185df10.jpg"
            }
            text1={"قسم الحديد"}
            link = '/secondDepartments'
          />
          <MainDepartments
            src={
              process.env.PUBLIC_URL +
              "/assets/structures/78c30868-ec8d-4753-a6ad-2fe085a9368c.jpg"
            }
            text1={"قسم هياكل وخزانات"}
            link = '/secondDepartments'
          />
        </div>
      </div>
    </section>
  );
}
export function MainDepartments({ src, text1, link }) {
  return (
    <div>
      <img src={src} alt={text1} />
      <h1>{text1}</h1>
      <Link to={link}>عرض</Link>
    </div>
  );
}

export default Departments;
