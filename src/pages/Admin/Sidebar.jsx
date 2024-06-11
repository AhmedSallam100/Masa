import { Link, NavLink } from "react-router-dom";
import "./dashboard.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="ul-links">
        <NavLink className="ul-link" to={"/dashboard/add-article"}>
          <i className="uil uil-clipboard-alt"></i>
          <Link to={"/dashboard/add-article"}>اضافة مقال</Link>
        </NavLink>
        <NavLink className="ul-link" to={"/dashboard/add-sheet"}>
          <i className="uil uil-clipboard-alt"></i>
          <Link to={"/dashboard/add-sheet"}>اضافة شيت</Link>
        </NavLink>
        <NavLink className="ul-link" to={"/dashboard/add-board"}>
          <i className="uil uil-clipboard"></i>
          <Link to={"/dashboard/add-board"}>اضافة سبورة</Link>
        </NavLink>
        <NavLink className="ul-link" to={"/dashboard/add-video"}>
          <i className="uil uil-video"></i>
          <Link to={"/dashboard/add-video"}>اضافة فيديو</Link>
        </NavLink>
        <NavLink className="ul-link" to={"/dashboard/add-audio"}>
          <i className="uil uil-record-audio"></i>
          <Link to={"/dashboard/add-audio"}>اضافة تسجيل</Link>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
