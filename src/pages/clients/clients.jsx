import "./clients.css";
import MainTitle from "../../components/title/MainTitle";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";

const Clients = () => {
  return (
    <>
      <ClientsSection />
    </>
  );
};
function ClientsSection() {
  const [clients, setClients] = useState([]);
  const [lang, setLang] = useState(localStorage.getItem("lang") || `"ar"`);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("/clients");
        setClients(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClients();

    const handleStorageChange = () => {
      setLang(localStorage.getItem("lang") || `"ar"`);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const [t] = useTranslation("global");

  return (
    <section className="clients-section">
      <MainTitle text={t("header.clients")} />
      <div className="container">
        {clients.map((client, index) => (
          <Client
            title={lang === `"ar"` ? client?.name : client?.enName}
            description={
              lang === `"ar"` ? client?.description : client?.enDescription
            }
            image={client?.image}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
export function Client({ title, description, image }) {
  return (
    <div className="client">
      <img alt={"client"} src={image} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
export default Clients;
