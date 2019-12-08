import React from "react"

function Project(props) {
  return (
    <div id={props.id} className="project-container">
      <img
        src={props.image}
        alt={props.alt}
        className="project-image"
      />
      <div className={props.overlay}>
        <div className="project-text">
          <h5>{props.name}</h5>
          <a href={props.link}>View Live</a>
        </div>
      </div>
    </div>
  )
}


export default Project