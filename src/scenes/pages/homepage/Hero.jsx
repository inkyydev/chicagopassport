import { useState } from "react";
import { Link } from "react-router-dom";
import glowImg from "../../../assets/green-glow-img.png";
import heroImg from "../../../assets/hero-img.png";

export default function Hero() {
  const [chooseValue, setChooseValue] = useState("passport");
  const [activeIndexValue, setActiveIndexValue] = useState(0);
  const [activeValueVisa, setActiveValueVisa] = useState("");
  const [activeValueEVisa, setActiveValueEVisa] = useState("");

  const handleChange = (e) => {
    setActiveIndexValue(e.target.value);
  };

  const handleVisaChange = (e) => {
    setActiveValueVisa(e.target.value);
  };
  const handleEVisaChange = (e) => {
    setActiveValueEVisa(e.target.value);
  };

  return (
    <section id="hero_section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="hero-content">
              <div className="hero-content__span">
                <img src={glowImg} alt="glow" />
                <p>Fast, Secure & Easy Passport and Visa Solutions</p>
              </div>
              <h1>Chicago Passport & Visa Expedite Services</h1>
              <h4>
                Apply online now or visit our Chicago office to apply in person.
              </h4>
              <p>
                Travel documents made simple - secure, fast, and stress-free
                passport and visa services right here in Chicago. Whether online
                or in person, we get you ready to go without the wait.
              </p>
              <h5>
                Select Your Service Below: USA Passport or Visa Type that you
                Need.
              </h5>
              <form>
                <div className="passport-service-wrapper">
                  <label>
                    <input
                      type="radio"
                      name="service"
                      value="Passport"
                      onChange={(e) => setChooseValue("passport")}
                      defaultChecked
                    />
                    <span>Passport</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="service"
                      value="Visa"
                      onChange={(e) => setChooseValue("visa")}
                    />
                    <span>Visa</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="service"
                      value="E Visa"
                      onChange={(e) => setChooseValue("e-visa")}
                    />
                    <span>E Visa</span>
                  </label>
                </div>
                {chooseValue === "passport" && (
                  <div className="get-started-wrapper">
                    <div className="get-started-wrapper__inner">
                      <select name="" id="" onChange={handleChange}>
                        <option value="" disabled>
                          Choose
                        </option>
                        <option value="0">New Passport</option>
                        <option value="1">Passport Renewal</option>
                        <option value="2">Child Passport</option>
                        <option value="3">Lost Passport</option>
                        <option value="4">Passport Name Change</option>
                        <option value="5">Second Limited Passport</option>
                        <option value="6">
                          Additional Requirements for US Passports
                        </option>
                      </select>
                      <Link
                        to="/us-passport"
                        state={{ activeIndex: Number(activeIndexValue) }}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                )}

                {chooseValue === "visa" && (
                  <div className="get-visa-options">
                    <div className="get-visa-options__all">
                      <div className="get-visa-options__all--single">
                        <span>Citizen Of:</span>
                        <select name="citizen">
                          <option value="usa">USA</option>
                        </select>
                      </div>
                      <div className="get-visa-options__all--single">
                        <span>Residing in:</span>
                        <select name="residing_in">
                          <option value="">Select</option>

                          <option value="alabama">Alabama</option>
                          <option value="alaska">Alaska</option>
                          <option value="arizona">Arizona</option>
                          <option value="arkansas">Arkansas</option>
                          <option value="california">California</option>
                          <option value="colorado">Colorado</option>
                          <option value="connecticut">Connecticut</option>
                          <option value="delaware">Delaware</option>
                          <option value="florida">Florida</option>
                          <option value="georgia">Georgia</option>
                          <option value="hawaii">Hawaii</option>
                          <option value="idaho">Idaho</option>
                          <option value="illinois">Illinois</option>
                          <option value="indiana">Indiana</option>
                          <option value="iowa">Iowa</option>
                          <option value="kansas">Kansas</option>
                          <option value="kentucky">Kentucky</option>
                          <option value="louisiana">Louisiana</option>
                          <option value="maine">Maine</option>
                          <option value="maryland">Maryland</option>
                          <option value="massachusetts">Massachusetts</option>
                          <option value="michigan">Michigan</option>
                          <option value="minnesota">Minnesota</option>
                          <option value="mississippi">Mississippi</option>
                          <option value="missouri">Missouri</option>
                          <option value="montana">Montana</option>
                          <option value="nebraska">Nebraska</option>
                          <option value="nevada">Nevada</option>
                          <option value="new-hampshire">New Hampshire</option>
                          <option value="new-jersey">New Jersey</option>
                          <option value="new-mexico">New Mexico</option>
                          <option value="new-york">New York</option>
                          <option value="north-carolina">North Carolina</option>
                          <option value="north-dakota">North Dakota</option>
                          <option value="ohio">Ohio</option>
                          <option value="oklahoma">Oklahoma</option>
                          <option value="oregon">Oregon</option>
                          <option value="pennsylvania">Pennsylvania</option>
                          <option value="rhode-island">Rhode Island</option>
                          <option value="south-carolina">South Carolina</option>
                          <option value="south-dakota">South Dakota</option>
                          <option value="tennessee">Tennessee</option>
                          <option value="texas">Texas</option>
                          <option value="utah">Utah</option>
                          <option value="vermont">Vermont</option>
                          <option value="virginia">Virginia</option>
                          <option value="washington">Washington</option>
                          <option value="west-virginia">West Virginia</option>
                          <option value="wisconsin">Wisconsin</option>
                          <option value="wyoming">Wyoming</option>

                          <option value="puerto-rico">Puerto Rico</option>
                          <option value="guam">Guam</option>
                          <option value="us-virgin-islands">
                            U.S. Virgin Islands
                          </option>
                          <option value="american-samoa">American Samoa</option>
                          <option value="northern-mariana-islands">
                            Northern Mariana Islands
                          </option>
                          <option value="district-of-columbia">
                            District of Columbia (Washington D.C.)
                          </option>
                        </select>
                      </div>

                      <div className="get-visa-options__all--single">
                        <span>Traveling to:</span>
                        <select name="citizen" onChange={handleVisaChange}>
                          <option value="china">China</option>
                          <option value="ghana">Ghana</option>
                          <option value="brazil">Brazil</option>
                          <option value="uk">UK</option>
                          <option value="nigeria">Nigeria</option>
                        </select>
                      </div>
                    </div>
                    <Link to={`/visas/${activeValueVisa}`}>
                      Get Visa Options
                    </Link>
                  </div>
                )}

                {chooseValue === "e-visa" && (
                  <div className="get-visa-options">
                    <div className="get-visa-options__all">
                      <div className="get-visa-options__all--single">
                        <span>Citizen Of:</span>
                        <select name="citizen">
                          <option value="usa">USA</option>
                          <option value="china">China</option>
                        </select>
                      </div>
                      <div className="get-visa-options__all--single">
                        <span>Traveling to:</span>
                        <select name="citizen" onChange={handleEVisaChange}>
                          <option value="india-evisa">India Visa</option>
                          <option value="brazil-evisa">Brazil Visa</option>
                          <option value="vietnam-evisa">Vietnam Visa</option>
                          <option value="kenya-evisa">Kenya Visa</option>
                          <option value="cambodia-evisa">Cambodia Visa</option>
                        </select>
                      </div>
                    </div>
                    <Link to={`/e-visas/${activeValueEVisa}`}>
                      Get Visa Options
                    </Link>
                  </div>
                )}
              </form>
              <span>
                CALL NOW | Mon-Fri: 8:30am-5:00pm Sat 10:00am - 2:00pm.
                Sun/Holidays: Closed
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="hero-img">
              <img src={heroImg} alt="hero img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
