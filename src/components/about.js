import React, { Fragment } from "react"
import tammy from "../images/tammy.jpg"
import "./about.css"

const About = () => (
  <div class="about-content">
    <img src={tammy} alt="Tammy" className="image-self" />
    <p>Hello, I'm Tammy! I love building for the web.</p>
    <p>
      I am a developer located in San Francisco. Presently, I am working with
      the nonprofit,{" "}
      <a href="https://www.simplythebasics.org">Simply the Basics</a> to launch
      an online marketplace that connects donors with nonprofit organizations to
      help direct donations to where they are needed most.
    </p>
    <p>
      I have a special interest in web accessibility. I'm very interested in
      opportunities that allow me to improve the accessibility of a product or
      platform and dig deeper into making things more usable for people of all
      abilities.
    </p>
    <p>
      I enjoy mentoring coding students and have experience mentoring with
      several organization in London. I often coached at Codebar, Founders and
      Coders, and with students at SOAS University of London.
    </p>
    <p>
      Personal interests include exploring my city (only when there aren't
      active pandemics), board games, going on walks with my partner and{" "}
      <a href="cutestpup">my dog</a>, playing ukulele, baking, and reading.
    </p>

    <p>
      Some of my personal projects can be found on my{" "}
      <a href="https://github.com/tspeed90">Github.</a>
    </p>
  </div>
)

export default About
