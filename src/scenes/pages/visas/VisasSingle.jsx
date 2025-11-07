import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { visas } from "../../../data";

import ImagePassport from "../../components/ImagePassport";
import ContactUsServices from "../../components/ContactUsServices";
import Plans from "../../components/Plans";

export default function VisasSingle() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const initialIndex = visas.findIndex((v) => v.slug === slug);
  const [activeIndex, setActiveIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0
  );

  useEffect(() => {
    navigate(`/visas/${visas[activeIndex].slug}`, { replace: true });
  }, [activeIndex]);

  const visa = visas[activeIndex];

  if (!visa) return <p>Visa not found.</p>;

  return (
    <>
      <section id="visa_single">
        <div className="container">
          <div className="visa-single-header">
            <h1>{visa.hero_title}</h1>
            <p>{visa.hero_description}</p>
            <div className="text-center">
              <a href="#get_started" className="btn-all">
                Get Started Today
              </a>
            </div>
            <div className="visa-single-header__img">
              <img src={visa.image} alt={visa.country} />
            </div>
          </div>

          <div id="get_started" className="button-switch-all-passport">
            <h2>Select Visa Type that you Need</h2>
            <div className="passport-wrapper-all">
              {visas.map((v, index) => (
                <label key={index} className="passport-radio-label">
                  <input
                    type="radio"
                    name="visa-country"
                    checked={activeIndex === index}
                    onChange={() => setActiveIndex(index)}
                  />
                  <div>
                    <span>{v.country}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
          <Plans />

          <div className="requirements-wrapper-single-visa">
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="requirements-single-visa-heading">
                  <h2>{visas[activeIndex].country} Requirements</h2>
                </div>
              </div>

              <div className="col-12 col-md-7">
                <div className="requirements-single-visa-all accordion-all">
                  {visa.requirements && visa.requirements.length > 0 ? (
                    visa.requirements.map((req, i) => (
                      <Accordion
                        key={`${activeIndex}-${i}`}
                        title={req.section_title}
                        content={req.content}
                        cta={req.cta_button}
                        defaultOpen={i === 0}
                      />
                    ))
                  ) : (
                    <p>No requirements available for this visa.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="visa-single-bg-full"></div>

      <ContactUsServices />
      <ImagePassport />
    </>
  );
}

function Accordion({ title, content, cta, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`accordion-single ${open ? "open" : ""}`}>
      <div className="accordion-single__title" onClick={() => setOpen(!open)}>
        <span>{open ? "−" : "+"}</span>
        <h3>{title}</h3>
      </div>

      {open && (
        <div className="accordion-single__text">
          {typeof content === "string" && <p>{content}</p>}

          {typeof content === "object" && (
            <>
              {content.text && <p>{content.text}</p>}
              {content.list && (
                <ul>
                  {content.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </>
          )}

          {cta && (
            <a href={cta.link} className="btn-all mt-2">
              {cta.text}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
