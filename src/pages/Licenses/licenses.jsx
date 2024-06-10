import "./licenses.css";
import MainTitle from "../../components/title/MainTitle";
import { useState } from "react";

const Licenses = () => {
  const [Currpage, setCurrPage] = useState(1);
  return (
    <>
      <LicensesSection Currpage={Currpage} setCurrPage={setCurrPage} />
    </>
  );
};
function LicensesSection({ Currpage, setCurrPage }) {
  return (
    <section className="licenses-section">
      <MainTitle text={"التراخيص"} />
      <div className="container">
        {Currpage === 1 ? (
          <div
            className={`license-page${Currpage}`}
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="license-lists">
              <LicenseBox>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/structures/78c30868-ec8d-4753-a6ad-2fe085a9368c.jpg"
                  }
                  alt=""
                />
                <LicenseBox>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/structures/78c30868-ec8d-4753-a6ad-2fe085a9368c.jpg"
                    }
                    alt=""
                  />
                </LicenseBox>
              </LicenseBox>
              <LicenseBox>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/structures/78c30868-ec8d-4753-a6ad-2fe085a9368c.jpg"
                  }
                  alt=""
                />
              </LicenseBox>
              <LicenseBox>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/structures/78c30868-ec8d-4753-a6ad-2fe085a9368c.jpg"
                  }
                  alt=""
                />
              </LicenseBox>
              <LicenseBox>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/structures/78c30868-ec8d-4753-a6ad-2fe085a9368c.jpg"
                  }
                  alt=""
                />
              </LicenseBox>
              <LicenseBox>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/structures/78c30868-ec8d-4753-a6ad-2fe085a9368c.jpg"
                  }
                  alt=""
                />
              </LicenseBox>
              <LicenseBox>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/structures/78c30868-ec8d-4753-a6ad-2fe085a9368c.jpg"
                  }
                  alt=""
                />
              </LicenseBox>
            </div>
          </div>
        ) : (
          ""
        )}
        {Currpage === 2 ? (
          <div
            className={`license-page${Currpage}`}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="license-lists">
              <LicenseBox>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/iron-department/5af7d4a9-d78f-46eb-8155-39e80185df10.jpg"
                  }
                  alt=""
                />
              </LicenseBox>
              <LicenseBox>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/structures/78c30868-ec8d-4753-a6ad-2fe085a9368c.jpg"
                  }
                  alt=""
                />
              </LicenseBox>
              <LicenseBox>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/structures/78c30868-ec8d-4753-a6ad-2fe085a9368c.jpg"
                  }
                  alt=""
                />
              </LicenseBox>
              <LicenseBox>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/structures/78c30868-ec8d-4753-a6ad-2fe085a9368c.jpg"
                  }
                  alt=""
                />
              </LicenseBox>
              <LicenseBox>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/structures/78c30868-ec8d-4753-a6ad-2fe085a9368c.jpg"
                  }
                  alt=""
                />
              </LicenseBox>
              <LicenseBox>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/structures/78c30868-ec8d-4753-a6ad-2fe085a9368c.jpg"
                  }
                  alt=""
                />
              </LicenseBox>
            </div>
          </div>
        ) : (
          ""
        )}

        {Currpage === 3 ? (
          <div
            className={`license-page${Currpage}`}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="license-lists">
              <LicenseBox>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/iron-department/5af7d4a9-d78f-46eb-8155-39e80185df10.jpg"
                  }
                  alt=""
                />
              </LicenseBox>
              <LicenseBox>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/structures/78c30868-ec8d-4753-a6ad-2fe085a9368c.jpg"
                  }
                  alt=""
                />
              </LicenseBox>
              <LicenseBox>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/structures/78c30868-ec8d-4753-a6ad-2fe085a9368c.jpg"
                  }
                  alt=""
                />
              </LicenseBox>
              <LicenseBox>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/iron-department/5af7d4a9-d78f-46eb-8155-39e80185df10.jpg"
                  }
                  alt=""
                />
              </LicenseBox>
              <LicenseBox>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/iron-department/5af7d4a9-d78f-46eb-8155-39e80185df10.jpg"
                  }
                  alt=""
                />
              </LicenseBox>
              <LicenseBox>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/iron-department/5af7d4a9-d78f-46eb-8155-39e80185df10.jpg"
                  }
                  alt=""
                />
              </LicenseBox>
            </div>
          </div>
        ) : (
          ""
        )}
        <Pagination Currpage={Currpage} setCurrPage={setCurrPage} />
      </div>
    </section>
  );
}
function LicenseBox({ children }) {
  return <div className="license-box">{children}</div>;
}
function Pagination({ Currpage, setCurrPage }) {
  return (
    <div className="pagination">
      <ul>
        <li
          onClick={() =>
            Currpage === 1
              ? setCurrPage(3)
              : setCurrPage((Currpage) => Currpage - 1)
          }
        >
          <i className="uil uil-arrow-left"></i>
        </li>
        <li
          className={Currpage === 1 ? "active" : ""}
          onClick={() => setCurrPage(1)}
        >
          1
        </li>
        <li
          className={Currpage === 2 ? "active" : ""}
          onClick={() => setCurrPage(2)}
        >
          2
        </li>
        <li
          className={Currpage === 3 ? "active" : ""}
          onClick={() => setCurrPage(3)}
        >
          3
        </li>
        <li
          onClick={() =>
            Currpage === 3
              ? setCurrPage(1)
              : setCurrPage((Currpage) => Currpage + 1)
          }
        >
          <i className="uil uil-arrow-right"></i>
        </li>
      </ul>
    </div>
  );
}
export default Licenses;
