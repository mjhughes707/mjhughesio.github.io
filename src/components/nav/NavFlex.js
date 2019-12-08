import React from "react"

import NavLink from "./NavLink"

function NavFlex() {
  return (
    <nav className="nav-flex">
      <ul>
        <NavLink link="#home" title="HOME" />
        <NavLink link="#about" title="ABOUT" />
        <NavLink link="#projects" title="PROJECTS" />
        <NavLink link="#blog" title="BLOG" />
        <NavLink link="#contact" title="CONTACT" />
      </ul>
    </nav>
  )
}


export default NavFlex