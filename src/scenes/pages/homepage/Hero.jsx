import { useState } from "react";
import glowImg from "../../../assets/green-glow-img.png";
import heroImg from "../../../assets/hero-img.png";

export default function Hero() {
  const [chooseValue, setChooseValue] = useState("passport");

  return (
    <section id="hero_section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="hero-content">
              <div className="hero-content__span">
                <img src={glowImg} alt="glow" />
                <p>Fast, Secure & Easy Passport Solutions</p>
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
                Select Your Service and Passport or Visa Type that you Need:
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
                      <select name="" id="">
                        <option value="" disabled selected>
                          Choose
                        </option>
                        <option value="">Option 1</option>
                        <option value="">Option 2</option>
                        <option value="">Option 3</option>
                      </select>
                      <button type="submit">Get Started</button>
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
                          <option value="china">China</option>
                        </select>
                      </div>
                      <div className="get-visa-options__all--single">
                        <span>Residing in:</span>
                        <select name="citizen">
                          <option value="usa">USA</option>
                          <option value="china">China</option>
                        </select>
                      </div>
                      <div className="get-visa-options__all--single">
                        <span>Traveling to:</span>
                        <select name="citizen">
                          <option value="usa">USA</option>
                          <option value="china">China</option>
                        </select>
                      </div>
                    </div>
                    <button type="submit">Get Visa Options</button>
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
                        <select name="citizen">
                          <option value="usa">USA</option>
                          <option value="china">China</option>
                        </select>
                      </div>
                    </div>
                    <button type="submit">Get Visa Options</button>
                  </div>
                )}
              </form>
              <span>CALL NOW | Mon-Fri: 8:30am-5:00pm Sat-Sun: Closed</span>
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
