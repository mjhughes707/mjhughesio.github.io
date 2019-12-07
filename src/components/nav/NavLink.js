import React from "react"

function NavLink(props) {
  return (
    <li className="nav-links">
      <a href={props.link}>{props.title}</a>
    </li>
  )
}


export default NavLink