import { Link } from "react-router-dom";

export default function BlogCard({ image, title, text, date, link }) {
  return (
    <>
      <div class="blog-card-single">
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <p>{text}</p>
        <div className="date-wrapper">
          <div class="row">
            <div class="col-6 col-md-6">
              <p>{date}</p>
            </div>
            <div class="col-6 col-md-6">
              <div className="read-more-link-wrapper">
                <Link to={`/blog/${link}`}>Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
