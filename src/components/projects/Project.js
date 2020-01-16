import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project({ id, image, alt, overlay, name, link, code }) {
  return (
    <div id={id} className="project-container">
      <img src={image} alt={alt} className="project-image" />
      <div className={overlay}>
        <div className="project-text">
          <h5>{name}</h5>
          <a href={link}>
            <FontAwesomeIcon icon={faDesktop} />
          </a>
          <a href={code}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  overlay: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default Project;
