import { useState } from "react";
import SelectVisaType from "../../components/SelectVisaType";
import ukImg from "../../../assets/uk-img.png";
import { ukEtaRequirements } from "../../../data";
import RequirementsAccordion from "../../components/RequirementsAccordion";
import ContactUsServices from "../../components/ContactUsServices";
import ImagePassport from "../../components/ImagePassport";

export default function UkEtaVisa() {
  const [activePassportIndex, setActivePassportIndex] = useState(0);

  return (
    <>
      <section id="visa_single" className="uk-visa-section">
        <div className="container">
          <div className="visa-single-header">
            <h1>UK ETA Visa</h1>
            <h3>(UK Electronic Travel Authorization)</h3>
            <p>
              The ETA is a fast online travel authorization that strengthens
              U.K. border security. It’s required for travelers from visa-exempt
              countries, including the U.S., visiting for tourism, business, or
              short-term study. The system streamlines processing and
              pre-screens travelers before they arrive
            </p>
            <div className="text-center">
              <a href="#get_started" className="btn-all">
                Get Started Today
              </a>
            </div>
            <div class="visa-single-header__img">
              <img src={ukImg} alt="uk" />
            </div>
          </div>

          <SelectVisaType
            activePassportIndex={activePassportIndex}
            setActivePassportIndex={setActivePassportIndex}
          />

          <RequirementsAccordion
            country="UK ETA"
            requirements={ukEtaRequirements[0].requirements}
            activeIndex={activePassportIndex}
          />
        </div>
      </section>
      <div className="visa-single-bg-full"></div>
      <ContactUsServices />
      <ImagePassport />
    </>
  );
}
