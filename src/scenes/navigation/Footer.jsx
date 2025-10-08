import { Link } from "react-router-dom";

import footerLogo from "../../assets/footer-logo.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";
import mailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import locationIcon from "../../assets/location-icon.svg";

export default function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-3 col-md-6">
          <div className="footer-logo">
            <Link to="/">
              <img src={footerLogo} alt="footer logo" />
            </Link>
            <p>
              Chicago Passport & Visa Services – Fast, reliable, and secure
              travel document solutions since day one.
            </p>
            <div className="footer-social-media">
              <Link>
                <img src={linkedinIcon} alt="linkedin" />
              </Link>
              <Link>
                <img src={instagramIcon} alt="instagram" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="footer-col-all">
            <h4>Working Hours</h4>
            <div className="separator"></div>
            <p>Mon–Fri: 8:30am–5:00pm</p>
            <p>Sat–Sun: 10:00am–2:00pm</p>
            <p>Weekends by Appointment</p>
          </div>
        </div>
        <div className="col-12 col-md-4 col-lg-2">
          <div className="footer-col-all">
            <h4>Quick Links</h4>
            <div className="separator"></div>
            <div className="footer-links">
              <Link>Home</Link>
              <Link>US Passport</Link>
              <Link>Visas</Link>
              <Link>E-Visas</Link>
              <Link>UK ETA Visa</Link>
              <Link>Blog</Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="footer-col-all footer-col-all-contact">
            <h4>Contact</h4>
            <div className="separator"></div>
            <div className="footer-info">
              <a
                href="mail:info@chicagopassport-visa.com"
                className="footer-info__single"
              >
                <img src={mailIcon} alt="email" />
                <div className="line"></div>
                <p>info@chicagopassport-visa.com</p>
              </a>
              <a href="tel:(312) 925-3278" className="footer-info__single">
                <img src={phoneIcon} alt="email" />
                <div className="line"></div>
                <p>(312) 925-3278</p>
              </a>
              <div className="footer-info__single">
                <img src={locationIcon} alt="email" />
                <div className="line"></div>
                <p>180 N La Salle Street, Suite 106, Chicago, IL 60601</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-separator"></div>
      <p className="copyright-p">
        © 2025 your awesome website. All rights reserved.
      </p>
    </div>
  );
}
