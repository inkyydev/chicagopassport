import { Link } from "react-router-dom";

export default function ContactUsServices({ bg }) {
  return (
    <section id="contact_us_services" style={bg ? { background: bg } : {}}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="contact-us-services-title">
              <h2>Contact Us for Various Chicago Passport Services</h2>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="contact-us-services-text">
              <p>
                Chicago Passport & Visa Services, registered with U.S. Passport
                Agencies under the name A Rush Passport & Visa Services, is a
                private company authorized to provide hand-carry commercial
                courier services for U.S. citizens in need of passports. From
                taking passport photos to assisting with document preparation,
                we offer a full suite of services designed to streamline the
                passport application process and support U.S. citizens in
                obtaining their passports quickly and securely.
              </p>
              <Link to="/contact-us" className="btn-all">
                Contact Us today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
