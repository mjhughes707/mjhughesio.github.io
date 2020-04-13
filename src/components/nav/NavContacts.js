import React from "react";
import Social from "../contact/Social";
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function NavContacts() {
  return (
    <div className="nav-contacts">
      <div className="nav-icons">
        <Social link="https://twitter.com/mjhughes707" icon={faTwitter} />
        <Social
          link="https://www.linkedin.com/in/mjhughes707/"
          icon={faLinkedinIn}
        />
        <Social link="https://github.com/mjhughes707" icon={faGithub} />
        <Social link="https://medium.com/@mjhughes707" icon={faMediumM} />
        <Social link="mailto:mjhughes707@gmail.com" icon={faPaperPlane} />
      </div>
    </div>
  );
}

export default NavContacts;
