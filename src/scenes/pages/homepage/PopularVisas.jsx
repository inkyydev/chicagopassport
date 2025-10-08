import indiaImg from "../../../assets/indian-visa-bg.png";
import brazilImg from "../../../assets/brazil-visa-bg.png";
import chinaImg from "../../../assets/china-visa-bg.png";
import kenyaImg from "../../../assets/kenya-visa-bg.png";

export default function PopularVisas() {
  const visas = [
    {
      title: "Indian Visa",
      image: indiaImg,
    },
    {
      title: "Brazil Visa",
      image: brazilImg,
    },
    {
      title: "China Visa",
      image: chinaImg,
    },
    {
      title: "Kenya Visa",
      image: kenyaImg,
    },
  ];

  return (
    <section id="popular_visas">
      <div className="container text-center">
        <h2 className="visas-title">Most Popular Visas</h2>
        <p className="visas-subtitle">
          Intuitively visualize, review and manage your personal visa
          application instantly.
        </p>

        <div className="row g-4">
          {visas.map((visa, index) => (
            <div className="col-12 col-md-3" key={index}>
              <div className="visa-card">
                <img src={visa.image} alt={visa.title} />
                <div className="visa-info">
                  <h3>{visa.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
