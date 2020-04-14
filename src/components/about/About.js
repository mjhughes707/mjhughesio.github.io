import React from "react";

import AboutHeader from "./AboutHeader";
import AboutIntro from "./AboutIntro";
import AboutSkills from "./AboutSkills";
import AboutHobbies from "./AboutHobbies";
import Resume from "./Resume";

function About() {
  return (
    <div id="about" className="about-grid item-about">
      <AboutHeader />
      <AboutIntro />
      <AboutHobbies />
      <AboutSkills />
      <Resume />
    </div>
  );
}

export default About;
