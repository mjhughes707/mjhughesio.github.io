import React from "react";

import Project from "./Project";

import PodGuild from "../../img/pod-guild.png";
import FoodCartCity from "../../img/foodcartcity.png";
import StatesGame from "../../img/states-game.png";
import Stocker from "../../img/stocker.png";
import MakeAMeowm from "../../img/make-a-meowm.png";
import BouncingCube from "../../img/bouncing-cube.png";

function Projects() {
  return (
    <div id="projects" className="item-projects">
      <h2>PROJECTS</h2>
      <span className="h2-underline"></span>
      <div className="project-grid">
        <Project
          id="project1"
          image={PodGuild}
          alt="Preview of the Pod Guild project"
          overlay="project-overlay-a"
          name="Pod Guild"
          link="https://matthewjhughes.com/"
          code="https://github.com/mjhughesio/podguild"
        />
        <Project
          id="project2"
          image={FoodCartCity}
          alt="Preview of the Food Cart City project"
          overlay="project-overlay-b"
          name="Food Cart City"
          link="https://foodcartcity.pythonanywhere.com"
          code="https://github.com/mjhughesio/foodcartcity"
        />
        <Project
          id="project3"
          image={StatesGame}
          alt="Preview of Chandler's Dumb States Game"
          overlay="project-overlay-a"
          name="States Game"
          link="https://matthewjhughes.com/states-game"
          code="https://github.com/mjhughesio/states-game"
        />
        <Project
          id="project4"
          image={Stocker}
          alt="Preview of the Stocker project"
          overlay="project-overlay-b"
          name="Stocker"
          link="https://matthewjhughes.com/stocker"
          code="https://github.com/mjhughesio/stocker"
        />
        <Project
          id="project5"
          image={MakeAMeowm}
          alt="Preview of the Make-A-Meowm project"
          overlay="project-overlay-a"
          name="Make-A-Meowm"
          link="https://matthewjhughes.com/make-a-meowm"
          code="https://github.com/mjhughesio/make-a-meowm"
        />
        <Project
          id="project6"
          image={BouncingCube}
          alt="Preview of The Office - Bouncing Cube project"
          overlay="project-overlay-b"
          name="Bouncing Cube"
          link="https://matthewjhughes.com/bouncing-cube"
          code="https://github.com/mjhughesio/bouncing-cube"
        />
      </div>
    </div>
  );
}

export default Projects;
