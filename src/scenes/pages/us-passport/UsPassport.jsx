import { useState } from "react";

import ContactUsServices from "../../components/ContactUsServices";
import Map from "../../components/Map";

import usPassportImg from "../../../assets/us-passport-img.png";

import { passportSections } from "../../../data";

import "./UsPassport.css";

export default function UsPassport() {
  const [activeIndex, setActiveIndex] = useState(0);
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
          <div className="button-switch-all-passport">
            {passportSections.map((item, index) => (
              <button
                key={index}
                className={activeIndex === index ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                {item.title}
              </button>
            ))}
          </div>
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
      <ContactUsServices bg="#F8F9FD" />
      <Map />
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
