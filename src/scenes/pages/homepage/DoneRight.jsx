import doneRight from "../../../assets/done-right-img.png";
export default function DoneRight() {
  return (
    <section id="done_right">
      <div className="container">
        <div className="done-right-wrapper">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="done-right-img">
                <img src={doneRight} alt="passport" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="done-right-text">
                <h2>
                  Expedited <br /> Processing,
                  <br /> Done Right
                </h2>
                <p>
                  We can expedite your application in as little as 1–14 days —
                  far faster than traditional government processing times of 5–7
                  weeks. Whether you need same-day service or a 2-week
                  turnaround, we’ve got you covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
