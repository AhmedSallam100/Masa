import { Link, NavLink } from "react-router-dom";
import "./dashboard.css";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const [t] = useTranslation("global");
  return (
    <div className="sidebar">
      <ul className="ul-links">
        <NavLink className="ul-link" to={"/dashboard/add-article"}>
          <i className="uil uil-clipboard-alt"></i>
          <Link to={"/dashboard/add-article"}>{t('sidebar.headerOne')}</Link>
        </NavLink>
        <NavLink className="ul-link" to={"/dashboard/add-department"}>
          <i className="uil uil-clipboard-alt"></i>
          <Link to={"/dashboard/add-department"}>{t('sidebar.headerTwo')}</Link>
        </NavLink>
        <NavLink className="ul-link" to={"/dashboard/add-department-images"}>
          <i className="uil uil-clipboard-alt"></i>
          <Link to={"/dashboard/add-department-images"}>{t('sidebar.headerThree')}</Link>
        </NavLink>
        <NavLink className="ul-link" to={"/dashboard/add-industry"}>
          <i className="uil uil-clipboard"></i>
          <Link to={"/dashboard/add-industry"}>{t('sidebar.headerFour')}</Link>
        </NavLink>
        <NavLink className="ul-link" to={"/dashboard/add-lisense"}>
          <i className="uil uil-video"></i>
          <Link to={"/dashboard/add-lisense"}>{t('sidebar.headerFive')}</Link>
        </NavLink>
        <NavLink className="ul-link" to={"/dashboard/add-client"}>
          <i className="uil uil-record-audio"></i>
          <Link to={"/dashboard/add-client"}>{t('sidebar.headerSeven')}</Link>
        </NavLink>
        <NavLink className="ul-link" to={"/dashboard/add-service"}>
          <i className="uil uil-record-audio"></i>
          <Link to={"/dashboard/add-service"}>{t('sidebar.headerNine')}</Link>
        </NavLink>
        <NavLink className="ul-link" to={"/dashboard/add-sucess"}>
          <i className="uil uil-record-audio"></i>
          <Link to={"/dashboard/add-sucess"}>{t('sidebar.headerTwil')}</Link>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
