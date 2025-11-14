import { Link } from "react-router-dom";

import indiaImg from "../../../assets/indian-visa-bg.png";
import brazilImg from "../../../assets/brazil-visa-bg.png";
import chinaImg from "../../../assets/china-visa-bg.png";
import kenyaImg from "../../../assets/kenya-visa-bg.png";

export default function PopularVisas() {
  const visas = [
    {
      title: "Indian Visa",
      image: indiaImg,
      url: "/e-visas/india-evisa",
    },
    {
      title: "Brazil Visa",
      image: brazilImg,
      url: "/visas/brazil",
    },
    {
      title: "China Visa",
      image: chinaImg,
      url: "/visas/china",
    },
    {
      title: "Kenya Visa",
      image: kenyaImg,
      url: "/e-visas/kenya-evisa",
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
              <Link to={visa.url}>
                <div className="visa-card">
                  <img src={visa.image} alt={visa.title} />
                  <div className="visa-info">
                    <h3>{visa.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
