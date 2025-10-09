import { useState } from "react";
import { Link } from "react-router-dom";
import { visas, evisas } from "../../../data";
import btnRed from "../../../assets/btn-red.svg";

export default function TravelService() {
  const [activeTab, setActiveTab] = useState("passport");

  const renderVisaContent = (data, type) => {
    if (!data || data.length === 0) return null;
    const [featured, ...rest] = data;

    return (
      <div className={`switch-content-all switch-content-all-${type}`}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div
              className={`travel-service-featured-div travel-service-featured-div-${type}`}
            >
              <h3>{featured.country}</h3>
              <div className="travel-service-featured-div__link">
                <Link
                  to={`/${type === "visa" ? "visas" : "evisas"}/${
                    featured.slug
                  }`}
                >
                  <img src={btnRed} alt="btn" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="row row-gap">
              {rest.map((item) => (
                <div className="col-12 col-md-6" key={item.id}>
                  <div className="trabel-service-single-all">
                    <h3>{item.country}</h3>
                    <div className="travel-service-single-all__link">
                      <Link
                        to={`/${type === "visa" ? "visas" : "evisas"}/${
                          item.slug
                        }`}
                      >
                        <img src={btnRed} alt="btn" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="travel_service">
      <div className="container">
        <div className="travel-service-header">
          <h2>Choose the Travel Service That Fits Your Needs</h2>
          <p>
            Our travel specialists guide you through the entire process,
            ensuring your documents are delivered securely and quickly.
          </p>

          <div className="travel-button-wrapper">
            <button
              className={activeTab === "passport" ? "active" : ""}
              onClick={() => setActiveTab("passport")}
            >
              Passport
            </button>
            <button
              className={activeTab === "visa" ? "active" : ""}
              onClick={() => setActiveTab("visa")}
            >
              Visa
            </button>
            <button
              className={activeTab === "evisa" ? "active" : ""}
              onClick={() => setActiveTab("evisa")}
            >
              E Visa
            </button>
          </div>
        </div>

        <div className="switch-content-wrapper">
          {/* PASSPORT */}
          {activeTab === "passport" && (
            <div className="switch-content-all switch-content-all-passport">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="travel-service-featured-div travel-service-featured-div-passport">
                    <h3>New Passport</h3>
                    <div className="travel-service-featured-div__link">
                      <Link>
                        <img src={btnRed} alt="btn" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="row row-gap">
                    {[
                      "Passport Renewal",
                      "Lost/Stolen Passport",
                      "Damaged Passport",
                      "Passport Card",
                      "Child Passport",
                      "Passport Name Change",
                    ].map((label, i) => (
                      <div className="col-12 col-md-6" key={i}>
                        <div className="trabel-service-single-all">
                          <h3>
                            {label.includes(" ") ? (
                              <>
                                {label.split(" ")[0]} <br />{" "}
                                {label.split(" ").slice(1).join(" ")}
                              </>
                            ) : (
                              label
                            )}
                          </h3>
                          <div className="travel-service-single-all__link">
                            <Link>
                              <img src={btnRed} alt="btn" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VISA */}
          {activeTab === "visa" && renderVisaContent(visas, "visa")}

          {/* E VISA */}
          {activeTab === "evisa" && renderVisaContent(evisas, "evisa")}
        </div>
      </div>
    </section>
  );
}
