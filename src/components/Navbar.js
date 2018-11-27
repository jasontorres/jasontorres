import React from 'react'
import PropTypes from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { menuToggled: false }
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  menuVisible() {
    return this.state.menuToggled ? 'navbar-menu is-active' : 'navbar-menu'
  }
  toggleMenu() {
    this.setState(state => ({
      menuToggled: !state.menuToggled,
    }))
  }
  logo() {
    if (this.props.logoVisible) {
      return (
        <div className="navbar-logo">
          <Link to="/">
            <h1 className="title">Jason Torres</h1>
          </Link>
          <h2 className="subtitle">
            I'm a technical founder. I build teams for startups and enterprises.
          </h2>
        </div>
      )
    }
  }
  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            {this.logo()}
            <a
              onClick={this.toggleMenu}
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="main-menu"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="main-menu" className={this.menuVisible()}>
            <div className="navbar-end">
              {/* <Link className="navbar-item" to="/about">
                About
              </Link> */}
              {/* <Link className="navbar-item" to="/products">
                Posts
              </Link> */}
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <a
                className="navbar-item"
                href="https://github.com/jasontorres"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {
  logoVisible: PropTypes.bool,
}
