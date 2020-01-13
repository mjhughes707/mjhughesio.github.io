import React from "react";

import Project from "./Project";

import BouncingCube from "../../img/bouncing-cube.png";
import FoodCartCity from "../../img/foodcartcity.png";
import MakeAMeowm from "../../img/make-a-meowm.png";
import Stocker from "../../img/stocker.png";

function Projects() {
  return (
    <div id="projects" className="item-projects">
      <h2>PROJECTS</h2>
      <span className="h2-underline"></span>
      <div className="project-grid">
        <Project
          id="project1"
          image={FoodCartCity}
          alt="Preview of the Food Cart City project"
          overlay="project-overlay-a"
          name="Food Cart City"
          link="https://foodcartcity.pythonanywhere.com"
        />
        <Project
          id="project2"
          image={MakeAMeowm}
          alt="Preview of the Make-A-Meowm project"
          overlay="project-overlay-b"
          name="Make-A-Meowm"
          link="https://matthewjhughes.com/make-a-meowm"
        />
        <Project
          id="project3"
          image={BouncingCube}
          alt="Preview of The Office - Bouncing Cube project"
          overlay="project-overlay-a"
          name="Bouncing Cube"
          link="https://matthewjhughes.com/bouncing-cube"
        />
        <Project
          id="project4"
          image={Stocker}
          alt="Preview of the Stocker project"
          overlay="project-overlay-b"
          name="Stocker"
          link="https://matthewjhughes.com/stocker"
        />
      </div>
    </div>
  );
}

export default Projects;
