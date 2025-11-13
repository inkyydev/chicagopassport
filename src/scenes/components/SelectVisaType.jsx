import Plans from "./Plans";
import { passportSections } from "../../data";

export default function SelectVisaType({
  activePassportIndex,
  setActivePassportIndex,
  title,
}) {
  return (
    <>
      <div id="get_started">
        <div className="button-switch-all-passport">
          <h2>{title || "Select passport type"}</h2>

          <div className="us-passport-type-wrapper passport-wrapper-all">
            {passportSections.map((item, index) => (
              <label key={index} className="passport-radio-label">
                <input
                  type="radio"
                  name="passport-section"
                  checked={activePassportIndex === index}
                  onChange={() => setActivePassportIndex(index)}
                />
                <div>
                  <span>{item.title}</span>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      <Plans isShown={activePassportIndex === 1 || activePassportIndex === 4} />
    </>
  );
}
