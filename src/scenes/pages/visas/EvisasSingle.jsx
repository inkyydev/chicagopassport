import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { evisas } from "../../../data";
import SelectVisaType from "../../components/SelectVisaType";

import ImagePassport from "../../components/ImagePassport";
import ContactUsServices from "../../components/ContactUsServices";
import RequirementsAccordion from "../../components/RequirementsAccordion";

export default function EvisasSingle() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const initialIndex = evisas.findIndex((v) => v.slug === slug);

  const [activeVisaIndex, setActiveVisaIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0
  );
  const [activePassportIndex, setActivePassportIndex] = useState(0);

  useEffect(() => {
    navigate(`/e-visas/${evisas[activeVisaIndex].slug}`, { replace: true });
  }, [activeVisaIndex]);

  const evisa = evisas[activeVisaIndex];

  if (!evisa) return <p>eVisa not found.</p>;

  return (
    <>
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

          <SelectVisaType
            activePassportIndex={activePassportIndex}
            setActivePassportIndex={setActivePassportIndex}
            title="Select Visa Type that you Need"
          />

          <RequirementsAccordion
            country={evisa.country}
            requirements={evisa.requirements}
            activeVisaIndex={activeVisaIndex}
          />
        </div>
      </section>
      <div className="visa-single-bg-full"></div>
      <ContactUsServices />
      <ImagePassport />
    </>
  );
}
