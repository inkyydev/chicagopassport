import { Link } from "react-router-dom";
import Map from "../../components/Map";
import { visas } from "../../../data";

import "./Visas.css";

export default function Visas() {
  return (
    <>
      <section id="visas" className="visas-section-all">
        <div className="container">
          <h1>We Offer Visas for Various Countries</h1>
          <p>
            Browse through each country to learn the various visa requirements
            and document types.
          </p>

          <div className="row row-gap">
            {visas.map((visa) => (
              <div className="col-12 col-md-3" key={visa.id}>
                <Link to={`/visas/${visa.slug}`}>
                  <div
                    className="city-col-all"
                    style={{
                      backgroundImage: `url(${visa.image})`,
                    }}
                  >
                    <div className="city-col-all__content">
                      <h3>{visa.country}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            <div className="col-12 col-md-6">
              <div className="other-div-all">
                <h3>Other Countries Visa</h3>
                <Link className="btn-all">Contact Us for More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Map />
    </>
  );
}
