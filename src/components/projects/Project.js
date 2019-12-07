import React from "react"

function Project(props) {
  return (
    <div id={props.id} className="item-project project-container">
      <img
        src={props.image}
        alt={props.alt}
        className="project-image"
      />
      <div className={props.overlay}>
        <div className="project-text">
          <h5>{props.name}</h5>
          <a href={props.link}>Learn More</a>
        </div>
      </div>
    </div>
  )
}


export default Project