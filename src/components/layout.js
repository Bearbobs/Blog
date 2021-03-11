import React from "react"
import { Link } from "gatsby"

import useDarkMode from 'use-dark-mode';
import DarkModeToggle from "react-dark-mode-toggle";

import '../styles/global.css'
import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const darkMode = useDarkMode(false);
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  const style = { "text-align": "center" }
  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <div style={{
        position: 'fixed',
        top: '0',
        left: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '15px',
        marginLeft : "40px",
      }}>
        
      </div>
      <DarkModeToggle
          onChange={darkMode.toggle}
          checked={darkMode.value}
          size={80}
        />
      <header>{header}</header>
      <main>{children}</main>
      <footer style={style}>
        © {new Date().getFullYear()},
        {` `}
        <a href="https://github.com/Bearbobs/my-exp-with-SDE">My Escapades With Tech</a>
      </footer>
    </div>
  )
}

export default Layout
