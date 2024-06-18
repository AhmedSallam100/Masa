import { useTranslation } from "react-i18next";
import "./contact.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <ContactUs />
    </>
  );
};
function ContactUs() {
  const [t] = useTranslation("global");
  return (
    <section className="contact-us">
      <div className="container">
        <ContactDetails t={t} />
        <ContactForm t={t} />
      </div>
    </section>
  );
}
function ContactDetails({ t }) {
  return (
    <div className="contact-details">
      <h1>{t("header.contact")}</h1>
      <ul>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
         <Link to={'https://www.facebook.com/people/Gulf-Diamond-Industrial-Factory-Company/61561329802599'}>{t('hero.headerOne')}</Link>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
          </svg>
          <Link to={'https://x.com/gulfdiamondksa'}>{t('hero.headerOne')}</Link>

        </li>

        <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          <Link to={'https://www.linkedin.com/company/gulfdiamond/'}>{t('hero.headerOne')}</Link>
        </li>

        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
          <Link to={'https://wa.me/+966561188855'}>+966 561188855</Link>
        </li>
      </ul>
    </div>
  );
}
function ContactForm({ t }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let contactSubmitHandler = (e) => {
    e.preventDefault();

    if (!name) {
      return toast.error("برجاء كتابة الاسم..!");
    }
    if (!email) {
      return toast.error("برجاء كتابة الايميل..!");
    }
    if (!message) {
      return toast.error("برجاء كتابة الرسالة..!");
    }
  };

  useEffect(() => {
    const contactForm = document.querySelector(".contactus-form");
    let name = document.querySelector(".name-input");
    let email = document.querySelector(".email-input");
    let message = document.querySelector(".message-input");

    contactForm.addEventListener("submit", () => {
      let formData = {
        name: name.value,
        email: email.value,
        message: message.value,
      };

      let xhr = new XMLHttpRequest();

      xhr.open("POST", "http://localhost:3001/send-message");
      xhr.setRequestHeader("content-type", "application/json");

      xhr.onload = function () {
        const responseTxt = JSON.parse(xhr.responseText);
        console.log(responseTxt);
        if (responseTxt.succses === "the message was send sucssefly") {
          toast.success("تم ارسال الرسالة بنجاح");
          name.value = "";
          email.value = "";
          message.value = "";
        } else {
          toast.error("Something went wrong..!");
        }
      };

      xhr.send(JSON.stringify(formData));
    });
  }, []);

  return (
    <div className="contact-form">
      <form className="contactus-form" onSubmit={contactSubmitHandler}>
        <div className="form-group">
          <label>{t("Contact.headerTwo")}</label>
          <input
            className="name-input"
            type="text"
            placeholder={t("Contact.headerThree")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>{t("Contact.headerFour")}</label>
          <input
            className="email-input"
            type="text"
            placeholder={t("Contact.headerFour")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>{t("Contact.headerFive")}</label>
          <textarea
            className="message-input"
            placeholder={t("Contact.headerFive")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">{t("Contact.headerOne")}</button>
      </form>
    </div>
  );
}
export default Contact;
