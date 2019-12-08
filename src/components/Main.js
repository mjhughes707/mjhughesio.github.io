import React from "react"

import About from "./about/About"
import Projects from "./projects/Projects"
import Blogs from "./blogs/Blogs"
import Contact from "./contact/Contact"

function Main() {
  return (
    <main className="main-grid item-main">
      <About />
      <Projects />
      <Blogs />
      <Contact />
      <a href="#home" className="back-to-top">
        <i className="fas fa-angle-double-up"></i>
      </a>
    </main>
  )
}


export default Main