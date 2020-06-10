import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      marginBottom: `3rem`,
      display: `flex`,
      justifyContent: `space-between`,
    }}
  >
    <h1
      style={{
        margin: `1rem 2rem`,
      }}
    >
      {siteTitle}
    </h1>
    <ul
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        width: `50%`,
        maxWidth: `14rem`,
        margin: `1rem 2rem`,
        listStyle: `none`,
      }}
    >
      <li style={{ margin: 0 }}>
        <a
          href="#about"
          style={{
            textDecoration: `none`,
          }}
        >
          About
        </a>
      </li>
      <li style={{ margin: 0 }}>
        <a
          href="#projects"
          style={{
            textDecoration: `none`,
          }}
        >
          Projects
        </a>
      </li>
      <li style={{ margin: 0 }}>
        <a
          href="#contact"
          style={{
            textDecoration: `none`,
          }}
        >
          Contact
        </a>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
