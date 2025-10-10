import { Link } from "react-router-dom";

import checkIcon from "../../../assets/check-icon.svg";
import xIcon from "../../../assets/x-icon.svg";
import chicagoLogo from "../../../assets/chicago-logo.svg";

export default function ComparisonTable() {
  const rows = [
    { label: "Processing Times", ours: "Guaranteed", theirs: "Not Guaranteed" },
    {
      label: "Next Business Day",
      ours: " 24 Hours",
      theirs: " Not Offered",
    },
    {
      label: "Urgent",
      ours: " 3 – 5 Business Days",
      theirs: " Not Offered",
    },
    {
      label: "Express",
      ours: " 5 – 7 Business Days",
      theirs: " Not Offered",
    },
    {
      label: "Rush",
      ours: " 7 – 8 Business Days",
      theirs: " 10 – 13 Business Days",
    },
    {
      label: "Standard",
      ours: " 8 – 11 Business Days",
      theirs: " 10 – 15 Business Days",
    },
    {
      label: "Case Manager",
      ours: " Caring Specialist",
      theirs: " Not Offered",
    },
    {
      label: "Convenience",
      ours: " Simplicity",
      theirs: " Hassle, Long Lines",
    },
    {
      label: "Phone Support",
      ours: " Speak to a Real Person",
      theirs: " Updates via Mail",
    },
    {
      label: "White Glove Handling",
      ours: " VIP Premium",
      theirs: "Not Offered",
    },
  ];

  return (
    <section id="comparison_section">
      <div className="container">
        <div className="text-center">
          <h2>
            Get Faster Turnaround <br /> and Better Service Than the Post Office
          </h2>
          <p>
            Same-day and next-day services available, open 7 days a week,
            including holidays.
          </p>
        </div>

        <div className="table-responsive">
          <table className="table comparison-table align-middle">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">
                  <div className="brand-name">
                    <img src={chicagoLogo} alt="chichago" />
                  </div>
                </th>
                <th scope="col">
                  <div className="brand-name">Post Office</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td className="label">{row.label}</td>
                  <td className="ours">
                    <div className="our-wrapper">
                      <img src={checkIcon} alt="check" />
                      {row.ours}
                    </div>
                  </td>
                  <td className="theirs">
                    <div className="theirs-wrapper">
                      <img src={xIcon} alt="x" />
                      {row.theirs}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <Link className="btn-all" to="/us-passport">
            Start My Application
          </Link>
        </div>
      </div>
    </section>
  );
}
