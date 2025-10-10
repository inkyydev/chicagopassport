import { Link } from "react-router-dom";

export default function BlogRecentCard({ image, title, text, date, link }) {
  return (
    <div className="blog-recent-single">
      <div className="row">
        <div className="col-12 col-md-5">
          <div className="blog-recent-single__img">
            <img src={image} alt={title} />
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="blog-recent-single__content">
            <h4>{title}</h4>
            <p>{text}</p>
            <div className="recent-date-wrapper">
              <div className="row">
                <div className="col-7 col-md-7">
                  <p>{date}</p>
                </div>
                <div className="col-5 col-md-5">
                  <div className="recent-link-wrapper">
                    <Link to={`/blog/${link}`}>Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
