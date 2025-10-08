export default function BlogRecentCard({ image, title, text, date, link }) {
  return (
    <div className="blog-recent-single">
      <div className="row">
        <div className="col-6 col-md-4">
          <div className="blog-recent-single__img">
            <img src={image} alt={title} />
          </div>
        </div>
        <div className="col-6 col-md-8">
          <div className="blog-recent-single__content">
            <h5>{title}</h5>
            <p>{text}</p>
            <div className="row">
              <div className="col-7 col-md-7">
                <p>{date}</p>
              </div>
              <div className="col-5 col-md-5">
                <a href={link}>Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
