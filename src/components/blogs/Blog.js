import React from "react";

function Blog(props) {
  return (
    <div id={props.id} className="blogs">
      <a href={props.url}>
        <img src={props.image} alt={props.alt} className="blog-image" />
        <div className="blog-copy">
          <h4>{props.title}</h4>
          <p className="publish-date">
            <time dateTime={props.datetime}>{props.date}</time>
          </p>
          <span className="blog-underline"></span>
          <p>{props.preview}</p>
        </div>
      </a>
    </div>
  );
}

export default Blog;
