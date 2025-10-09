import { useParams } from "react-router-dom";
import { evisas } from "../../../data";

import Map from "../../components/Map";

export default function EvisasSingle() {
  const { slug } = useParams();
  const evisa = evisas.find((v) => v.slug === slug);

  if (!evisa) return <p>eVisa not found.</p>;

  const form = evisa.application_form;

  return (
    <>
      <section id="evisa_single_hero">
        <div className="container">
          <div className="evisa-single-header text-center">
            <h1>{evisa.hero_title}</h1>
            <p>{evisa.hero_description}</p>
            <img src={evisa.hero_image} alt={evisa.hero_title} />
          </div>
        </div>
      </section>

      {form && (
        <section id="evisa_form" className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">{form.title}</h2>

            <form className="evisa-application-form">
              <div className="row row-gap">
                {form.fields.map((field, i) => (
                  <div
                    key={i}
                    className={`col-12 ${
                      field.fullWidth ? "col-md-12" : "col-md-6"
                    }`}
                  >
                    <label>
                      {field.label}{" "}
                      {field.required && (
                        <span style={{ color: "red" }}>*</span>
                      )}
                    </label>

                    {(() => {
                      switch (field.type) {
                        case "select":
                          return (
                            <select
                              className="form-control"
                              name={field.name}
                              required={field.required}
                            >
                              <option value="">Select {field.label}</option>
                              {field.options?.map((opt, idx) => (
                                <option key={idx} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          );

                        case "radio":
                          return (
                            <div className="d-flex gap-4 flex-wrap radio-wrapper">
                              {field.options?.map((opt, idx) => (
                                <label key={idx}>
                                  <input
                                    type="radio"
                                    name={field.name}
                                    value={opt}
                                    required={field.required}
                                  />{" "}
                                  {opt}
                                </label>
                              ))}
                            </div>
                          );

                        case "textarea":
                          return (
                            <textarea
                              className="form-control"
                              name={field.name}
                              rows={field.rows || 3}
                              required={field.required}
                            ></textarea>
                          );

                        default:
                          return (
                            <input
                              type={field.type}
                              name={field.name}
                              className="form-control"
                              required={field.required}
                            />
                          );
                      }
                    })()}
                  </div>
                ))}
              </div>

              <div className="text-center form-button-wrapper">
                <button type="submit" className="btn-all">
                  {form.cta_button?.text || "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      <Map />
    </>
  );
}
