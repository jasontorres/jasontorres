import React from 'react'
import { Link } from 'gatsby'
import '../styles/components/contact.scss'

const Contact = () => (
  <div className="contact-section hero">
    <div className="containerx">
      <div className="columns">
        <div className="column is-half contact-me">
          <h2 className="title">Looking for a technical lead?</h2>
          <p className="subtitle">A technical founder? A CTO? someone you can trust your business with? I'm always
          on the lookout for interesting things to work with.</p>
          <Link to="/" className="button is-link is-inverted is-outlined">Contact Me</Link>
        </div>
        <div className="column is-half contact-team">
          <h2 className="title">Looking for a team?</h2>
          <p className="subtitle">Work with Mashup Garage</p>
          <Link to="https://www.mashupgarage.com" className="button is-link is-inverted is-outlined">Contact Us</Link>
        </div>
      </div>
    </div>
  </div>
)

export default Contact
