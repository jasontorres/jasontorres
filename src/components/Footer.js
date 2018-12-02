import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="content">
        <h2><Link to="/">Jason Torres</Link></h2>
        <p>Source code of this site is <a href="https://github.com/jasontorres/jasontorres">available here.</a> Copyright 2019</p>
      </div>
    </div>
  </footer>
)

export default Footer
