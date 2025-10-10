import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import BlogCard from "../../components/BlogCard";
import BlogRecentCard from "../../components/BlogRecentCard";

import { blogsData } from "../../../data";
import ImagePassport from "../../components/ImagePassport";
import Pagination from "../../components/Pagination";

import "./Blog.css";

export default function BlogPage() {
  const recent = blogsData.slice(0, 2);
  const all = blogsData;

  const navigate = useLocation();

  useEffect(() => {
    if (navigate.pathname === "/blog") {
      document.querySelector("body").classList.add("blog-page");
    }

    return () => {
      document.body.classList.remove("blog-page");
    };
  }, [navigate.pathname]);

  return (
    <>
      <section id="blog">
        <div className="container">
          <h1>Blog</h1>

          <h2>Recent blog posts</h2>
          <div className="row">
            <div className="col-12 col-lg-6 md-12">
              <div className="blog-featured-post">
                <BlogCard
                  image={recent[0].featured_image}
                  title={recent[0].title}
                  text={recent[0].excerpt}
                  date={recent[0].date}
                  link={recent[0].slug}
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 md-12">
              <div className="blog-recent-posts">
                {recent.slice(1).map((blog) => (
                  <BlogRecentCard
                    key={blog.id}
                    image={blog.featured_image}
                    title={blog.title}
                    text={blog.excerpt}
                    date={blog.date}
                    link={blog.slug}
                    compact
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="all-blogs-wrapper">
            <h2>All blog posts</h2>
            <div className="row g-4">
              {all.map((blog) => (
                <div key={blog.id} className="col-12 col-lg-4 col-md-6">
                  <BlogCard
                    image={blog.featured_image}
                    title={blog.title}
                    text={blog.excerpt}
                    date={blog.date}
                    link={blog.slug}
                  />
                </div>
              ))}
            </div>
          </div>
          <Pagination />
        </div>
      </section>
      <ImagePassport />
    </>
  );
}
