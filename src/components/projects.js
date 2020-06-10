import React from "react"
import "./projects.css"

const Projects = () => (
  <section className="project-grid">
    <a
      href="https://book-queue.herokuapp.com"
      className="single-project react-project"
    >
      <h3 className="project-name">BookQueue</h3>
      <div className="description">
        BookQueue is an application allowing users to find popular books by
        category and save them to their shelf for future reading.
        <p class="stack-info">React &amp; Redux</p>
        <div class="triangle react-triangle" />
      </div>
    </a>
    <a
      href="https://github.com/tspeed90/tab-snooze"
      className="single-project vanilla-project"
    >
      <h3 className="project-name">TabSnooze</h3>
      <div className="description">
        Chrome extension to keep tab clutter down and remind you of the pages
        you want to revisit at a later time
        <p class="stack-info">Javascript (no framework)</p>
        <div class="triangle vanilla-triangle" />
      </div>
    </a>
    <a
      href="https://taha-quiz.netlify.com"
      className="single-project react-project"
    >
      <h3 className="project-name">Trivia Game</h3>
      <div className="description">
        Timed trivia game using the Open Trivia DB API with 6 different trivia
        categories.
        <p class="stack-info">React &amp; Redux</p>
        <div class="triangle react-triangle" />
      </div>
    </a>
    <a
      href="https://tspeed90.github.io/guess-the-number"
      className="single-project vanilla-project"
    >
      <h3 className="project-name">Guess The Number</h3>
      <div className="description">
        Try to guess the chosen random number in as few guesses as possible!
        <p class="stack-info">Javascript (no framework)</p>
        <div class="triangle vanilla-triangle" />
      </div>
    </a>
    <a
      href="https://local-weather-forecast.herokuapp.com/"
      className="single-project handlebars-project"
    >
      <h3 className="project-name">How's the Weather?</h3>
      <div className="description">
        Get the current temperature and weather conditions for your location or
        a city of your choice.
        <p class="stack-info">Javascript with Handlebars</p>
        <div class="triangle handlebars-triangle" />
      </div>
    </a>
    <a
      href="https://tspeed90.github.io/js-calculator/"
      className="single-project vanilla-project"
    >
      <h3 className="project-name">Calculator</h3>
      <div className="description">
        Simple web calculator
        <p class="stack-info">Javascript (no framework)</p>
        <div class="triangle vanilla-triangle" />
      </div>
    </a>
  </section>
)

export default Projects
