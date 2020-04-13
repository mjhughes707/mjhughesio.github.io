import React from "react";
import Social from "./Social";
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Contacts() {
  return (
    <div className="contact-icons">
      <Social link="https://twitter.com/mjhughes707" icon={faTwitter} />
      <Social
        link="https://www.linkedin.com/in/mjhughes707/"
        icon={faLinkedinIn}
      />
      <Social link="https://github.com/mjhughes707" icon={faGithub} />
      <Social link="https://medium.com/@mjhughes707" icon={faMediumM} />
      <Social link="mailto:mjhughes707@gmail.com" icon={faPaperPlane} />
    </div>
  );
}

export default Contacts;
