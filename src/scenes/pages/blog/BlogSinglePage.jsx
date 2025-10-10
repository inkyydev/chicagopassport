import { Link, useParams } from "react-router-dom";
import { blogsData } from "../../../data";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import BlogRecentCard from "../../components/BlogRecentCard";
import BlogCard from "../../components/BlogCard";
import ImagePassport from "../../components/ImagePassport";

export default function BlogSinglePage() {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);
  const navigate = useLocation();

  useEffect(() => {
    if (navigate.pathname === `/blog/${slug}`) {
      document.querySelector("body").classList.add("blog-page");
    }

    return () => {
      document.body.classList.remove("blog-page");
    };
  }, [navigate.pathname]);

  if (!blog) return <p>Blog not found.</p>;

  const relatedPosts = blogsData.filter((b) => b.id !== blog.id).slice(0, 4);
  const latestNews = blogsData.slice(0, 3);

  return (
    <>
      <section id="blog_single">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7">
              <div className="blog-single-hero">
                <img src={blog.featured_image} alt={blog.title} />
              </div>

              <div className="blog-single-meta">
                <div className="row align-items-center">
                  <div className="col-6 col-md-6">
                    <div className="author-wrapper">
                      <img src={blog.author.avatar} alt={blog.author.name} />
                      <span>{blog.author.name}</span>
                    </div>
                  </div>
                  <div className="col-6 col-md-6">
                    <div className="blog-single-date">
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="blog-single-content">
                <h1 className="blog-single-title">{blog.title}</h1>

                <div
                  className="blog-single-content"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                <div className="blog-comment-form">
                  <h3>Leave a Comment</h3>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <form>
                    <div className="row g-3">
                      <div className="col-12 col-md-6">
                        <input type="text" placeholder="Name" required />
                      </div>
                      <div className="col-12 col-md-6">
                        <input type="email" placeholder="Email" required />
                      </div>
                      <div className="col-12">
                        <textarea
                          rows="4"
                          placeholder="Your comment..."
                          required
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn-all">
                      Leave a Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5 col-sidebar-blog">
              <aside className="blog-sidebar">
                <div className="row gy-4">
                  {relatedPosts.map((post) => (
                    <div className="col-12">
                      <BlogRecentCard
                        key={post.id}
                        image={post.featured_image}
                        title={post.title}
                        text={post.excerpt}
                        date={post.date}
                        link={post.slug}
                      />
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>

          <div className="latest-news">
            <h2>Latest News</h2>
            <div className="row g-4">
              {latestNews.map((news) => (
                <div className="col-12 col-md-6 col-lg-4" key={news.id}>
                  <BlogCard
                    image={news.featured_image}
                    title={news.title}
                    text={news.excerpt}
                    date={news.date}
                    link={news.slug}
                  />
                </div>
              ))}
            </div>

            <div className="text-center view-all-blogs">
              <Link className="btn-all" to="/blog">
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ImagePassport />
    </>
  );
}
