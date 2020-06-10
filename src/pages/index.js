import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landingpage"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section id="landing">
      <Landing />
    </section>
    <section id="about">
      <h2>About Me</h2>
      <About />
    </section>
    <section id="projects">
      <h2>Projects</h2>
      <Projects />
    </section>
    <section id="contact">
      <h2>Contact</h2>
      <Contact />
    </section>
  </Layout>
)

export default IndexPage
