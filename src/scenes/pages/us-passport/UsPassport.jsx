import { useState } from "react";
import { useLocation } from "react-router-dom";

import ContactUsServices from "../../components/ContactUsServices";
import ImagePassport from "../../components/ImagePassport";

import usPassportImg from "../../../assets/us-passport-img.png";

import { passportSections } from "../../../data";
import SelectVisaType from "../../components/SelectVisaType";

import "./UsPassport.css";

export default function UsPassport() {
  const location = useLocation();
  const defaultIndex = location.state?.activeIndex || 0;
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const activeItem = passportSections[activeIndex];

  return (
    <>
      <section id="us_passport">
        <div className="container">
          <div className="us-passport-header">
            <h1>Everything You Need for a US Passport</h1>
            <p>
              We offer same-day passports, as well as passports in 3-5 days, 5-7
              days, 7-10 days, 10-14 days, and 3-4 weeks.
            </p>
            <img src={usPassportImg} alt="us passport" />
          </div>
          <SelectVisaType
            activePassportIndex={activeIndex}
            setActivePassportIndex={setActiveIndex}
          />
          <div className="switch-content-all-passport">
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="passport-content-text">
                  <h2>{activeItem.title}</h2>
                  <p>{activeItem.description}</p>
                </div>
              </div>

              <div className="col-12 col-md-7">
                <div className="accordion-all">
                  {activeItem.accordions.map((acc, i) => (
                    <Accordion
                      key={`${activeIndex}-${i}`}
                      title={acc.title}
                      text={acc.text}
                    />
                  ))}
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

function Accordion({ title, text }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`accordion-single ${open ? "open" : ""}`}>
      <div className="accordion-single__title" onClick={() => setOpen(!open)}>
        <span>{open ? "−" : "+"}</span>
        <h3>{title}</h3>
      </div>
      {open && (
        <div
          className="accordion-single__text"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
    </div>
  );
}
