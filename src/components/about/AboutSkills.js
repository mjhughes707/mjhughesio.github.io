import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faBootstrap, faPython, faReact, faNodeJs, faVuejs, faGitAlt } from '@fortawesome/free-brands-svg-icons'

function AboutSkills() {
  return (
    <div className="item-about-skills">
      <h3>SKILLS</h3>
      <span className="h3-underline"></span>
      <div className="skill-icons">
        <FontAwesomeIcon className="fab" icon={faNodeJs} />
        <FontAwesomeIcon className="fab" icon={faReact} />
        <FontAwesomeIcon className="fab" icon={faVuejs} />
        <FontAwesomeIcon className="fab" icon={faGitAlt} />
      </div>
      <div className="skill-icons">
        <FontAwesomeIcon className="fab" icon={faPython} />
        <FontAwesomeIcon className="fab" icon={faHtml5} />
        <FontAwesomeIcon className="fab" icon={faCss3Alt} />
        <FontAwesomeIcon className="fab" icon={faBootstrap} />
      </div>
    </div>
  )
}


export default AboutSkills