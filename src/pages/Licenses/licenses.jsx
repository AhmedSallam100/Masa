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
                  src={process.env.PUBLIC_URL + "/assets/licence/licence-1.png"}
                  alt=""
                />
                <div className="btns">
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/licence-1.png"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    عرض
                  </a>
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/licence-1.pdf"
                    }
                    target="_blank"
                    rel="noreferrer"
                    download={true}
                  >
                    تحميل
                  </a>
                </div>
              </LicenseBox>
              <LicenseBox>
                <img
                  src={process.env.PUBLIC_URL + "/assets/licence/licence-2.png"}
                  alt=""
                />
                <div className="btns">
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/licence-2.png"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    عرض
                  </a>
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/licence-2.pdf"
                    }
                    target="_blank"
                    rel="noreferrer"
                    download={true}
                  >
                    تحميل
                  </a>
                </div>
              </LicenseBox>
              <LicenseBox>
                <img
                  src={process.env.PUBLIC_URL + "/assets/licence/licence-3.png"}
                  alt=""
                />
                <div className="btns">
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/licence-3.png"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    عرض
                  </a>
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/licence-3.pdf"
                    }
                    target="_blank"
                    rel="noreferrer"
                    download={true}
                  >
                    تحميل
                  </a>
                </div>
              </LicenseBox>
              <LicenseBox>
                <img
                  src={process.env.PUBLIC_URL + "/assets/licence/عنوان مصنع ماس الخليج.jpg"}
                  alt="عقد عنوان مصنع ماس الخليج"
                />
                <div className="btns">
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/عنوان مصنع ماس الخليج.jpg"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    عرض
                  </a>
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/عنوان مصنع ماس الخليج.pdf"
                    }
                    target="_blank"
                    rel="noreferrer"
                    download={true}
                  >
                    تحميل
                  </a>
                </div>
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
                  src={process.env.PUBLIC_URL + "/assets/licence/عقد تاسيس مصنع ماس الخليج-images-1.jpg"}
                  alt="عقد تاسيس مصنع ماس الخليج"
                />
                <div className="btns">
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/عقد تاسيس مصنع ماس الخليج-images-1.jpg"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    عرض
                  </a>
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/عقد تاسيس مصنع ماس الخليج.pdf"
                    }
                    target="_blank"
                    rel="noreferrer"
                    download={true}
                  >
                    تحميل
                  </a>
                </div>
              </LicenseBox>
              <LicenseBox>
                <img
                  src={process.env.PUBLIC_URL + "/assets/licence/عقد مدن مصنع ماس الخليج-images-0.jpg"}
                  alt="عقد مدن مصنع ماس الخليج"
                />
                <div className="btns">
                  <a
                    href={process.env.PUBLIC_URL + "/assets/licence/عقد مدن مصنع ماس الخليج-images-0.jpg"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    عرض
                  </a>
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/عقد مدن مصنع ماس الخليج.pdf"
                    }
                    target="_blank"
                    rel="noreferrer"
                    download={true}
                  >
                    تحميل
                  </a>
                </div>
              </LicenseBox>
              <LicenseBox>
                <img
                  src={process.env.PUBLIC_URL + "/assets/licence/Modon مصنع ماس الخليج 7680-images-0.jpg"}
                  alt="Modon مصنع ماس الخليج 7680"
                />
                <div className="btns">
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/Modon مصنع ماس الخليج 7680-images-0.jpg"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    عرض
                  </a>
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/Modon مصنع ماس الخليج 7680.pdf"
                    }
                    target="_blank"
                    rel="noreferrer"
                    download={true}
                  >
                    تحميل
                  </a>
                </div>
              </LicenseBox>
           
              <LicenseBox>
                <img
                  src={process.env.PUBLIC_URL + "/assets/licence/شهادة اشتراك المنشأة - شركة مصنع ماس الخليج للصناعه.jpg"}
                  alt="شهادة اشتراك المنشأة - شركة مصنع ماس الخليج للصناعه"
                />
                <div className="btns">
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/شهادة اشتراك المنشأة - شركة مصنع ماس الخليج للصناعه.jpg"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    عرض
                  </a>
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/شهادة اشتراك المنشأة - شركة مصنع ماس الخليج للصناعه.pdf"
                    }
                    target="_blank"
                    rel="noreferrer"
                    download={true}
                  >
                    تحميل
                  </a>
                </div>
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
                  src={process.env.PUBLIC_URL + "/assets/licence/licence-5.png"}
                  alt=""
                />
                <div className="btns">
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/licence-5.png"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    عرض
                  </a>
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/licence-5.pdf"
                    }
                    target="_blank"
                    rel="noreferrer"
                    download={true}
                  >
                    تحميل
                  </a>
                </div>
              </LicenseBox>
              <LicenseBox>
                <img
                  src={process.env.PUBLIC_URL + "/assets/licence/licence-6.png"}
                  alt=""
                />
                <div className="btns">
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/licence-6.png"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    عرض
                  </a>
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/licence-6.pdf"
                    }
                    target="_blank"
                    rel="noreferrer"
                    download={true}
                  >
                    تحميل
                  </a>
                </div>
              </LicenseBox>
              <LicenseBox>
                <img
                  src={process.env.PUBLIC_URL + "/assets/licence/licence-7.png"}
                  alt=""
                />
                <div className="btns">
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/licence-7.png"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    عرض
                  </a>
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/licence-7.pdf"
                    }
                    target="_blank"
                    rel="noreferrer"
                    download={true}
                  >
                    تحميل
                  </a>
                </div>
              </LicenseBox>
              <LicenseBox>
                <img
                  src={process.env.PUBLIC_URL + "/assets/licence/licence-8.png"}
                  alt=""
                />
                <div className="btns">
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/licence-8.png"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    عرض
                  </a>
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/licence/licence-8.pdf"
                    }
                    target="_blank"
                    rel="noreferrer"
                    download={true}
                  >
                    تحميل
                  </a>
                </div>
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
export function LicenseBox({ children }) {
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
