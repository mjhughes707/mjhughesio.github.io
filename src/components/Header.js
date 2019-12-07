import React from "react"

import NavFlex from "./nav/NavFlex"
import NavContacts from "./nav/NavContacts"

import Ngorongoro from "../img/matt-ngorongoro-sq.png"

function Header() {
  return (
    <header className="item-header canvas-back">
      <NavFlex />
      <NavContacts />
      <div className="header-img-div">
        <h1 className="header-name">Matthew J. Hughes</h1>
        <img
          src={Ngorongoro}
          alt="Matt at the Ngorongoro Crater in Tanzania"
          className="header-image"
        />
        <h1 className="header-title">Web Developer</h1>
      </div>
    </header>
  )
}


export default Header