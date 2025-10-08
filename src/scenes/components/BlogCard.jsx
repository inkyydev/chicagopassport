export default function BlogCard({ image, title, text, date, link }) {
  return (
    <>
      <div class="blog-card-single">
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <p>{text}</p>
        <div class="row">
          <div class="col-6 col-md-6">
            <p>{date}</p>
          </div>
          <div class="col-6 col-md-6">
            <a href={link}>Read More</a>
          </div>
        </div>
      </div>
    </>
  );
}
