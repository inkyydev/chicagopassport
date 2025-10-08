export default function ProcessSection() {
  return (
    <section id="process">
      <div className="container">
        <h2 className="process-title">
          How the <br /> Process Works
        </h2>

        <div className="row row-col-mb">
          <div className="col-12 col-md-4">
            <div className="process-card">
              <div className="step-number">1</div>
              <h3>Submit Your Application</h3>
              <p className="max-width-custom">
                Fill out our simple online form with your details.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="process-card">
              <div className="step-number">2</div>
              <h3>We Handle the Documents</h3>
              <p>
                Send your documents to us, and our team works directly with the
                U.S. Passport Agency on your behalf.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="process-card">
              <div className="step-number red">3</div>
              <h3>Receive Your Passport or Visa</h3>
              <p className="max-width-custom">
                Get your passport or visa securely delivered, expedited in as
                little as 1–14 days.
              </p>
            </div>
          </div>
        </div>
        <div className="start-btn-wrapper text-center">
          <a href="#" className="btn-all">
            Start Your Application
          </a>
        </div>
      </div>
    </section>
  );
}
