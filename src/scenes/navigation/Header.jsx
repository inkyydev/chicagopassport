import { useEffect } from "react";

import { Link } from "react-router-dom";

import phoneIcon from "../../assets/phone-icon.svg";
import mailIcon from "../../assets/email-icon.svg";
import logo from "../../assets/logo.svg";
import accountIcon from "../../assets/account-icon.svg";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleMenu = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    const body = document.querySelector("body");

    if (isActive && window.innerWidth < 1024) {
      body.classList.add("active");
    } else {
      body.classList.remove("active");
    }

    const handleResize = () => {
      if (isActive && window.innerWidth < 1024) {
        body.classList.add("active");
      } else {
        body.classList.remove("active");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      body.classList.remove("active");
    };
  }, [isActive]);
  return (
    <div className="header-wrapper">
      <div className="header-info-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="walk-ins-wrapper">
                <p>
                  WALK-INS WELCOME - 180 N LASALLE ST #106, CHICAGO, IL 60601,
                  USA
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="header-contact-wrapper">
                <a href="tel:312-925-3278">
                  <img src={phoneIcon} alt="phone" />
                  312-925-3278
                </a>
                <a href="mailto:info@chichagopassport-visa.com">
                  <img src={mailIcon} alt="phone" />
                  INFO@CHICAGOPASSPORT-VISA.COM
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-main-nav">
        <div className="container">
          <div className="main-nav">
            <div className="main-nav__logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="main-nav__items">
              <div
                className={`main-nav__items--links ${isActive ? "active" : ""}`}
              >
                <Link onClick={handleMenu} to="/us-passport">
                  US Passport
                </Link>
                <Link onClick={handleMenu} to="/visas">
                  Visas
                </Link>
                <Link onClick={handleMenu} to="/e-visas">
                  E-Visas
                </Link>
                <Link onClick={handleMenu}>UK ETA Visa</Link>
                <Link onClick={handleMenu} to="/visa-process">
                  Process
                </Link>
              </div>
              <div
                onClick={handleMenu}
                className={`mobile-hamburger ${isActive ? "active" : ""}`}
              >
                <span className="line-1"></span>
                <span className="line-2"></span>
              </div>
            </div>
            <div className="main-nav__account">
              <Link>
                <img src={accountIcon} alt="account" />
              </Link>
              <Link>EN</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
