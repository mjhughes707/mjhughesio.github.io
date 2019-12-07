import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faPython } from '@fortawesome/free-brands-svg-icons'

function AboutSkills() {
  return (
    <div className="item-about-skills">
      <h3>SKILLS</h3>
      <span className="h3-underline"></span>
      <div className="skill-icons">
        <FontAwesomeIcon className="fab" icon={faHtml5} />
        <FontAwesomeIcon className="fab" icon={faCss3Alt} />
        <FontAwesomeIcon className="fab" icon={faJs} />
        <FontAwesomeIcon className="fab" icon={faPython} />
      </div>
    </div>
  )
}


export default AboutSkills