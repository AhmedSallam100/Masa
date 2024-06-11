import "./clients.css";
import MainTitle from "../../components/title/MainTitle";
import { clientsData } from "../../components/data/clientsData";
const Clients = () => {
  return (
    <>
      <ClientsSection />
    </>
  );
};
function ClientsSection() {

  return (
    <section className="clients-section">
      <MainTitle text={"عملائنا"} />
      <div className="container">
        {clientsData.map((el, index) => (
          <Client obj={el} key={index} />
        ))}
      </div>
    </section>
  );
}
export function Client({ obj = '' }) {
  return (
    <div className="client">
      <img alt={obj.header} src={obj.src} />
      <h1>{obj.header}</h1>
      <p>{obj.title}</p>
    </div>
  );
}
export default Clients;
