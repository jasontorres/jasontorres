import React from 'react'
import { Link } from 'gatsby'

const HeroFoot = () => (
  <div className="container">
    <div className="columns is-desktop">
      <div className="column is-one-third-desktop feature">
        <Link to="#projects">
          <h3 className="title">Projects</h3>
          <p>Projects I've worked on</p>
        </Link>
      </div>
      <div className="column is-one-third-desktop feature">
        <Link to="#notes">
          <h3 className="title">Notes</h3>
          <p>My notes about work, running companies, building teams, and more.</p>
        </Link>
      </div>
      <div className="column is-one-third-desktop feature">
        <Link to="/contact">
          <h3 className="title">Work with me</h3>
          <p>Work with our team</p>
        </Link>
      </div>
    </div>
  </div>
)

export default HeroFoot
