import { Link } from "react-router-dom";
import "./dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { format, formatDistanceToNowStrict } from "date-fns";
import { ar } from "date-fns/locale";
import { toast } from "react-toastify";

const ShowAllSucesses = () => {
  const [sucesses, srtSucesses] = useState([]);

  useEffect(() => {
    const fetchSucesses = async () => {
      try {
        const response = await axios.get("/sucesses");
        srtSucesses(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSucesses();
  }, []);

  const handleDelete = async (e, sucessId) => {
    e.preventDefault();
    try {
      await axios.delete(`/sucesses/${sucessId}`);
      srtSucesses(sucesses.filter((sucess) => sucess._id !== sucessId));
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
            <h1>عوامل النجاح</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>الرقم</th>
                <th>اسم العامل</th>
                <th>تاريخ الاضافة</th>
                <th>اجراءات</th>
              </tr>
            </thead>
            <tbody>
              {sucesses.map((sucess, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {`${sucess.description
                      .split(" ")
                      .slice(0, 5)
                      .join(" ")}...`}
                  </td>
                  <td>
                    {sucess
                      ? format(new Date(sucess.createdAt), "yyyy/M/d", {
                          locale: ar,
                        })
                      : ""}
                  </td>
                  <td className="action-icons">
                    <div>
                      <Link to={`/about`}>
                        <i className="uil uil-eye show-exam"></i>
                      </Link>
                      <form>
                        <button onClick={(e) => handleDelete(e, sucess._id)}>
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

export default ShowAllSucesses;
