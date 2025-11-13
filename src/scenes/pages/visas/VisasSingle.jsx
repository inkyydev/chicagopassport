import { useState } from "react";
import { visas } from "../../../data";

import ImagePassport from "../../components/ImagePassport";
import ContactUsServices from "../../components/ContactUsServices";
import SelectVisaType from "../../components/SelectVisaType";
import RequirementsAccordion from "../../components/RequirementsAccordion";

export default function VisasSingle() {
  const [activeVisaIndex, setActiveVisaIndex] = useState(0);
  const [activePassportIndex, setActivePassportIndex] = useState(0);

  const visa = visas[activeVisaIndex];

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

          <SelectVisaType
            activePassportIndex={activePassportIndex}
            setActivePassportIndex={setActivePassportIndex}
            title="Select Visa Type that you Need"
          />

          <RequirementsAccordion
            country={visa.country}
            requirements={visa.requirements}
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
