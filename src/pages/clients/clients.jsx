import "./clients.css";
import MainTitle from "../../components/title/MainTitle";
import { useTranslation } from "react-i18next";

const Clients = () => {
  return (
    <>
      <ClientsSection />
    </>
  );
};
function ClientsSection() {
  const [t] = useTranslation("global");
  let clientsData = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVh1jny9HE2IDBz_0eu1Hvcvyk7XpE9HnbQ&s",
      Clientsheader: `${t("clients.clientone")}`,
      Clientstitle: `${t("clients.clientDesc1")}`,
    },
    {
      src: "https://www.alrashed-steel.com/img/logo.png",
      Clientsheader: `${t("clients.clientTwo")}`,
      Clientstitle: `${t("clients.clientDesc2")}`,
    },
    {
      src: "https://pbs.twimg.com/profile_images/1387684984899657730/D5CoXADH_400x400.jpg",
      Clientsheader: `${t("clients.clientThree")}`,
      Clientstitle: `${t("clients.clientDesc3")}`,
    },
    {
      src: "https://pbs.twimg.com/media/EU6zljXXgAA6c_J.jpg",
      Clientsheader: `${t("clients.clientFour")}`,
      Clientstitle: `${t("clients.clientDesc4")}`,
    },
    {
      src: "https://maaal.com/wp-content/uploads/2023/08/%D8%A7%D9%84%D8%B9%D8%AB%D9%8A%D9%85-1.jpg",
      Clientsheader: `${t("clients.clientNine")}`,
      Clientstitle: `${t("clients.clientDesc5")}`,
    },
    {
      src: "https://i2.wp.com/alsaudialyaum.com/images//2023/11/%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%A3%D8%AC%D9%8A%D8%A7%D9%84-%D9%85%D9%88%D9%84-%D8%A7%D9%84%D9%85%D8%AC%D9%85%D8%B9-%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF-%D9%81%D9%8A-%D8%AD%D9%8A-%D8%A3%D8%AC%D9%8A%D8%A7%D9%84-%D8%A7%D9%84%D8%B3%D9%83%D9%86%D9%8A-%D8%A8%D8%A7%D9%84%D8%B8%D9%87%D8%B1%D8%A7%D9%86-1700658278-2.jpg",
      Clientsheader: `${t("clients.clientEight")}`,
      Clientstitle: `${t("clients.clientDesc6")}`,
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiF8SQt2fk6n2ZLemboRYkWzu9d4jZgkV68A&s",
      Clientsheader: `${t("clients.clientSeven")}`,
      Clientstitle: `${t("clients.clientDesc7")}`,
    },
    {
      src: "https://pbs.twimg.com/profile_images/1660671327328452615/Bgsb-8M__400x400.jpg",
      Clientsheader: `${t("clients.clientFive")}`,
      Clientstitle: `${t("clients.clientDesc8")}`,
    },
    {
      src: "https://www.aljarida.com/uploads/imported_images/images/1635866841782604400/1635869588000/1280x960.jpg",
      Clientsheader: `${t("clients.clientTwilTwo")}`,
      Clientstitle: `${t("clients.clientDesc9")}`,
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY12PFwp3wn_6yzPM1rPhXYRazdpWCrVBcPg&s",
      Clientsheader: `${t("clients.clienttwilOne")}`,
      Clientstitle: `${t("clients.clientDesc10")}`,
    },
    {
      src: "https://mgmt.manhom.com/images/74028/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A7%D9%84%D8%A8%D9%88%D8%A7%D8%B1%D8%AF%D9%8A-%D9%84%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D8%A7%D8%AA-%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AF%D9%8A%D8%A9.jpg",
      Clientsheader: `${t("clients.clientTwil")}`,
      Clientstitle: `${t("clients.clientDesc11")}`,
    },
    {
      src: "https://yt3.googleusercontent.com/LEcX_HfkxYE0SXw_a5h6xliZ_G-mQjctfWnGAQvj5weabxU8BJ-giGaV4hAhJfcYZORDNrgi=s176-c-k-c0x00ffffff-no-rj",
      Clientsheader: `${t("clients.clientTen")}`,
      Clientstitle: `${t("clients.clientDesc12")}`,
    },
  ];
  return (
    <section className="clients-section">
      <MainTitle text={t("header.clients")} />
      <div className="container">
        {clientsData.map((el, index) => (
          <Client obj={el} key={index} />
        ))}
      </div>
    </section>
  );
}
export function Client({ obj = "" }) {
  return (
    <div className="client">
      <img alt={obj.Clientsheader} src={obj.src} />
      <h1>{obj.Clientsheader}</h1>
      <p>{obj.Clientstitle}</p>
    </div>
  );
}
export default Clients;
