import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer class="footer">
    <div className="container">
      <div class="content">
        <h2><Link to="/">Jason Torres</Link></h2>
        <p>Source code of this site is <Link to="https://github.com/jasontorres/jasontorres">available here.</Link> Copyright 2019</p>
      </div>
    </div>
  </footer>
)

export default Footer
