import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { evisas } from "../../../data";
import Plans from "../../components/Plans";

import ImagePassport from "../../components/ImagePassport";
import ContactUsServices from "../../components/ContactUsServices";
import Map from "../../components/Map";

export default function EvisasSingle() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find initial index based on slug
  const initialIndex = evisas.findIndex((v) => v.slug === slug);
  const [activeIndex, setActiveIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0
  );

  // Update URL on switch
  useEffect(() => {
    navigate(`/e-visas/${evisas[activeIndex].slug}`, { replace: true });
  }, [activeIndex]);

  const evisa = evisas[activeIndex];

  if (!evisa) return <p>eVisa not found.</p>;

  return (
    <>
      {/* Hero Section */}
      <section id="evisa_single_hero">
        <div className="container">
          <div className="evisa-single-header text-center">
            <h1>{evisa.hero_title}</h1>
            <p>{evisa.hero_description}</p>
            <a href="#get_started" className="btn-all">
              Get Started Today
            </a>
            <img src={evisa.hero_image} alt={evisa.hero_title} />
          </div>

          {/* Country Switch */}
          <div id="get_started" className="button-switch-all-passport">
            <h2>Select eVisa Country</h2>
            <div className="passport-wrapper-all">
              {evisas.map((v, index) => (
                <label key={index} className="passport-radio-label">
                  <input
                    type="radio"
                    name="evisa-country"
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

          {/* Requirements */}
          {evisa.requirements && evisa.requirements.length > 0 && (
            <div className="requirements-wrapper-single-visa">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="requirements-single-visa-heading requirements-single-evisa-heading">
                    <h2>{evisa.country} Requirements</h2>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="requirements-single-visa-all accordion-all">
                    {evisa.requirements.map((req, i) => (
                      <Accordion
                        key={`${activeIndex}-${i}`}
                        title={req.section_title}
                        content={req.content}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <div className="visa-single-bg-full"></div>
      {/* Reusable sections */}
      <ContactUsServices />
      <ImagePassport />
    </>
  );
}

function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`accordion-single ${open ? "open" : ""}`}>
      <div className="accordion-single__title" onClick={() => setOpen(!open)}>
        <span>{open ? "−" : "+"}</span>
        <h3>{title}</h3>
      </div>

      {open && (
        <div className="accordion-single__text">
          {content?.text && <p>{content.text}</p>}
          {content?.list && (
            <ul>
              {content.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
