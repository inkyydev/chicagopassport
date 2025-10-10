import ImagePassport from "../../components/ImagePassport";

import navIcon from "../../../assets/navigation-icon.svg";
import phoneIcon from "../../../assets/phone-contact-icon.svg";
import emailIcon from "../../../assets/contact-email-icon.svg";

import "./Contact.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Contact() {
  const navigate = useLocation();

  useEffect(() => {
    if (navigate.pathname === "/contact-us") {
      document.querySelector("body").classList.add("contact-us-page");
    }

    return () => {
      document.body.classList.remove("contact-us-page");
    };
  }, [navigate.pathname]);

  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="contact-info">
                <h1>Get In Touch With Us Today!</h1>
                <p>
                  We are registered and authorized by the US Government and
                  foreign embassies to expedite your US passport and foreign
                  visa. We charge an additional fee to expedite your application
                  in 1-10 days.
                </p>

                <ul className="contact-details">
                  <li>
                    <img src={navIcon} alt="nav" />
                    <span>
                      180 N La Salle Street, Suite 106, Chicago, IL 60601
                    </span>
                  </li>
                  <li>
                    <img src={phoneIcon} alt="phone" />
                    <a href="tel:312-525-3278">(312) 525-3278</a>
                  </li>
                  <li>
                    <img src={emailIcon} alt="email" />
                    <a href="mailto:info@chicagopassport-visa.com">
                      info@chicagopassport-visa.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="contact-form">
                <form>
                  <div>
                    <label htmlFor="name">Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone">Phone*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Your Phone"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message">Message*</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-all">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImagePassport />
    </>
  );
}
