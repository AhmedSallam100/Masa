
import MainTitle from "../../components/title/MainTitle";
import "./SecondaryDepartment.css";

import { MainDepartments } from "../departments/departments";
const SecondDepartments = () => {
  return (
    <>
      <SecondaryDepartments />
    </>
  );
};

function SecondaryDepartments() {
  return (
    <section className="second-departments">
      <MainTitle text={"الاقسام الفرعية"} />
      <div className="container">
        <div className="main-departments">
          <MainDepartments
            src={
              process.env.PUBLIC_URL +
              "/assets/doors/wood/1aafe501-0025-40de-a7d2-65824eb3f096.jpg"
            }
            text1={"قسم ابواب الخشب"}
            link = '/departmentDetails'
          />
          <MainDepartments
            src={
              process.env.PUBLIC_URL +
             "/assets/doors/iron/b02c3890-095f-404a-a7c8-e36b5e52f0ca.jpg"
            }
            text1={"قسم ابواب الحديد"}
            link = '/departmentDetails'
          />

        </div>
      </div>
    </section>
  );
}


export default SecondDepartments;
