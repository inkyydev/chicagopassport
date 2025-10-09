import { useParams } from "react-router-dom";
import { visas } from "../../../data";

import Map from "../../components/Map";
import ContactUsServices from "../../components/ContactUsServices";

export default function VisasSingle() {
  const { slug } = useParams();

  const visa = visas.find((v) => v.slug === slug);

  if (!visa) {
    return <p>Visa not found.</p>;
  }

  return (
    <>
      <section id="visa_single">
        <div className="container">
          <div className="visa-single-header">
            <h1>{visa.hero_title}</h1>
            <p>{visa.hero_description}</p>
            <div className="visa-single-header__img">
              <img src={visa.image} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="visa_single_requirements">
        <div className="container">
          <div className="visa-requirements">
            {visa.requirements?.map((req, i) => (
              <div key={i} className="visa-requirement">
                <div className="visa-requirement__title">
                  <h3>{req.section_title}</h3>
                </div>
                <div className="visa-requirement__text">
                  {req.content && (
                    <>
                      {typeof req.content === "string" && <p>{req.content}</p>}

                      {typeof req.content === "object" && (
                        <>
                          {req.content.text && <p>{req.content.text}</p>}
                          {Array.isArray(req.content.list) && (
                            <ul>
                              {req.content.list.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </>
                  )}

                  {req.cta_button && (
                    <a href={req.cta_button.link} className="btn-all">
                      {req.cta_button.text}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactUsServices />
      <Map />
    </>
  );
}
