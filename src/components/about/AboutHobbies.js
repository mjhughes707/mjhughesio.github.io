import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHiking, faBookReader, faCat, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'

function AboutHobbies() {
  return (
    <div className="item-about-hobbies">
      <h3>HOBBIES</h3>
      <span className="h3-underline"></span>
      <div className="hobbies-icons">
        <FontAwesomeIcon className="fas" icon={faHiking} />
        <FontAwesomeIcon className="fas" icon={faBookReader} />
        <FontAwesomeIcon className="fas" icon={faCat} />
        <FontAwesomeIcon className="fas" icon={faPlaneDeparture} />
      </div>
    </div>
  )
}


export default AboutHobbies