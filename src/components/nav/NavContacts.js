import React from "react"

import Social from "../contact/Social"

import { faTwitter, faLinkedinIn, faGithub, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


function NavContacts() {
  return (
    <div className="nav-contacts">
      <div className="nav-icons">
        <Social link="https://twitter.com/mjhughesio" icon={faTwitter} />
        <Social link="https://www.linkedin.com/in/mjhughesio/" icon={faLinkedinIn}  />
        <Social link="https://github.com/mjhughesio" icon={faGithub}  />
        <Social link="https://medium.com/@mjhwrites" icon={faMediumM}  />
        <Social link="mailto:mjhughes707@gmail.com" icon={faPaperPlane}  />
      </div>
    </div>
  )
}


export default NavContacts