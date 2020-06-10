import React from "react"
import comp from "../../src/images/landing_icon.svg"
import "../components/landingpage.css"

const Landing = () => (
  <div class="landing">
    <div class="left-side">
      <img src={comp} alt="Tammy" className="computer-icon" />
      <p class="name">Tammy Speed</p>
      <p class="job-title">Developer</p>
    </div>
    <div class="links">
      <a href="#about">About Me</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
)

export default Landing
