import React from "react"
import { Link } from "gatsby"
import "../css/nav.css"

const ListLink = props => (
  <li style={{ display: `inline-block`}}>
    <Link to={props.to} activeClassName="active">{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ }}>
    <header style={{ margin: `0 auto 1rem`, padding: `0 0` }}>
      <ul className="mainNav" style={{ listStyle: `none`, display: `flex`, justifyContent: `space-between` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </header>
    {children}   
  </div>
)