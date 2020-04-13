import React, { useState, useEffect } from "react";
import Blog from "./Blog";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  async function fetchBlogs() {
    const res = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mjhughes707"
    );
    res.json().then((res) => setBlogs(res.items));
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div id="blog" className="item-blog">
      <h2>BLOG</h2>
      <span className="h2-underline"></span>
      <div className="blog-grid">
        {blogs.map((blog, idx) => {
          const displayDate = new Date(blog.pubDate);
          return (
            <Blog
              key={idx}
              id={idx + 1}
              url={blog.link}
              image={blog.thumbnail}
              title={blog.title}
              datetime={blog.pubDate}
              date={displayDate.toDateString()}
              preview={`${blog.description
                .replace(/<[a-zA-Z\/][^>]*>/g, "")
                .slice(0, 50)}...`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
