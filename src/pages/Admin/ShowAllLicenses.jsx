import { Link } from "react-router-dom";
import "./dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { format, formatDistanceToNowStrict } from "date-fns";
import { ar } from "date-fns/locale";
import { toast } from "react-toastify";

const ShowAllLicenses = () => {
  const [licenses, setLicenses] = useState([]);

  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        const response = await axios.get("/licenses");
        setLicenses(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLicenses();
  }, []);

  const handleDelete = async (e, licenseId) => {
    e.preventDefault();
    try {
      await axios.delete(`/licenses/${licenseId}`);
      setLicenses(licenses.filter((license) => license._id !== licenseId));
      toast.success("تم الحذف بنجاح");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        toast.error(error.response.data.message);
      } else if (error.request) {
        console.log(error.request);
        toast.error("حدث خطأ اثناء العملية. يرجى المحاولة مرة اخرى.");
      } else {
        console.log("Error", error.message);
        toast.error("حدث خطأ اثناء العملية. يرجى المحاولة مرة اخرى.");
      }
    }
  };

  return (
    <div className="show-all-exams">
      <div className="container">
        <div className="table_component" role="region" tabIndex="0">
          <div className="table-head">
            <h1>التراخيص</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>الرقم</th>
                <th>رابط الصورة</th>
                <th>رابط الترخيص</th>
                <th>تاريخ الاضافة</th>
                <th>اجراءات</th>
              </tr>
            </thead>
            <tbody>
              {licenses.map((license, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <Link
                      style={{ color: "var(--main-color)" }}
                      to={license.image}
                      target="_blank"
                    >
                      رابط الصورة
                    </Link>
                  </td>
                  <td>
                    <Link
                      style={{ color: "var(--main-color)" }}
                      to={license.pdf}
                      target="_blank"
                    >
                      رابط الترخيص
                    </Link>
                  </td>
                  <td>
                    {license
                      ? format(new Date(license.createdAt), "yyyy/M/d", {
                          locale: ar,
                        })
                      : ""}
                  </td>
                  <td className="action-icons">
                    <div>
                      <Link to={`/licenses`}>
                        <i className="uil uil-eye show-exam"></i>
                      </Link>
                      <form>
                        <button onClick={(e) => handleDelete(e, license._id)}>
                          <i className="uil uil-trash-alt delete-exam"></i>
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowAllLicenses;
