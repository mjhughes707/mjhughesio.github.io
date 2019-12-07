import React from "react"

import NavLink from "./NavLink"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome } from '@fortawesome/free-solid-svg-icons'

function NavFlex() {
  return (
    <nav className="nav-flex">
      <ul>
        <NavLink link="#about" title="ABOUT" />
        <NavLink link="#projects" title="PROJECTS" />
        <NavLink link="#blog" title="BLOG" />
        <NavLink link="#contact" title="CONTACT" />
      </ul>
    </nav>
  )
}


export default NavFlex