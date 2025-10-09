import { Link } from "react-router-dom";
import Map from "../../components/Map";
import { evisas } from "../../../data";

import "./Visas.css";

export default function Evisas() {
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
            {evisas.map((visa) => (
              <div className="col-12 col-md-3" key={visa.id}>
                <Link to={`/e-visas/${visa.slug}`}>
                  <div
                    className="city-col-all"
                    style={{
                      backgroundImage: `url(${visa.hero_image})`,
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
                <Link to="/contact-us" className="btn-all">
                  Contact Us for More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Map />
    </>
  );
}
