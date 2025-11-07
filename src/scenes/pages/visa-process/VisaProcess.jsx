import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import WhyChoose from "../../components/WhyChoose";
import ContactUsServices from "../../components/ContactUsServices";
import Map from "../../components/Map";

import "./VisaProcess.css";

import visaProccess from "../../../assets/visa-process-img.png";
import visaProccess2 from "../../../assets/step-2-img.png";
import visaProccess3 from "../../../assets/step-3-img.png";

export default function VisaProcess() {
  const navigate = useLocation();

  useEffect(() => {
    if (navigate.pathname === "/visa-process") {
      document.querySelector("body").classList.add("visa-process-page");
    }

    return () => {
      document.body.classList.remove("visa-process-page");
    };
  }, [navigate.pathname]);

  return (
    <>
      <section id="visa_process">
        <div className="container">
          <h1>How Our Visa & Passport Process Works</h1>
          <p>
            Applying for a U.S. passport or visa doesn’t have to be stressful.
            We’ve designed a simple, secure, and fast 3-step process to help you
            get your documents without the hassle of long lines or confusing
            paperwork.
          </p>
          <div className="visa-process-steps">
            <div className="vis-proccess-steps-inner">
              <div className="visa-process-step-single visa-process-step-single-1">
                <div className="row">
                  <div className="col-12 col-md-5">
                    <div className="visa-process-img">
                      <img src={visaProccess} alt="visa process" />
                    </div>
                  </div>
                  <div className="col-12 col-md-7">
                    <div className="visa-process-content">
                      <h2>
                        Start Your <br /> Application
                      </h2>
                      <p>
                        Begin by completing our quick and secure online
                        application form.
                      </p>
                      <ul>
                        <li>
                          Enter your personal details, travel information, and
                          any required background information.
                        </li>
                        <li>
                          Our system is designed to make the process simple,
                          guiding you step by step.
                        </li>
                        <li>
                          You’ll also receive a checklist of supporting
                          documents needed for your application.
                        </li>
                      </ul>
                      <p>
                        👉 This step usually takes just 10–15 minutes to
                        complete.
                      </p>
                      <div className="visa-process-btn-wrapper">
                        <Link className="btn-all" to="/us-passport">
                          Passports
                        </Link>
                        <Link className="btn-all" to="/visas">
                          Visas
                        </Link>
                        <Link className="btn-all" to="/e-visas">
                          eVisas
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="visa-process-step-single visa-process-step-single-2">
                <div className="row">
                  <div className="col-12 col-md-5">
                    <div className="visa-process-img">
                      <img src={visaProccess2} alt="visa process" />
                    </div>
                  </div>
                  <div className="col-12 col-md-7">
                    <div className="visa-process-content">
                      <h2>
                        Submit Your <br /> Documents
                      </h2>
                      <p>
                        Once your application is complete, upload or deliver
                        your required documents for verification.
                      </p>
                      <p>
                        Our team reviews each submission carefully to ensure
                        accuracy and compliance with all government requirements
                        before proceeding to the next stage.
                      </p>
                      <div className="visa-process-btn-wrapper">
                        <Link className="btn-all" to="/us-passport">
                          Passports
                        </Link>
                        <Link className="btn-all" to="/visas">
                          Visas
                        </Link>
                        <Link className="btn-all" to="/e-visas">
                          eVisas
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="visa-process-step-single visa-process-step-single-3">
                <div className="row">
                  <div className="col-12 col-md-5">
                    <div className="visa-process-img">
                      <img src={visaProccess3} alt="visa process" />
                    </div>
                  </div>
                  <div className="col-12 col-md-7">
                    <div className="visa-process-content">
                      <h2>
                        Receive Your <br /> Passport or Visa
                      </h2>
                      <p>
                        After approval, you’ll receive your passport or visa
                        quickly and securely — either by mail or in person,
                        depending on your preference.
                      </p>
                      <p>
                        We’ll notify you at every stage so you know exactly when
                        your documents are ready for collection.
                      </p>
                      <div className="visa-process-btn-wrapper">
                        <Link className="btn-all" to="/us-passport">
                          Passports
                        </Link>
                        <Link className="btn-all" to="/visas">
                          Visas
                        </Link>
                        <Link className="btn-all" to="/e-visas">
                          eVisas
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChoose />
      <ContactUsServices bg="#F8F9FD" />
      <Map />
    </>
  );
}
