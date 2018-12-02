import React from 'react'
import Navbar from '../components/Navbar'
import HeroFoot from '../components/HeroFoot'

const Hero = () => (
  <section className="hero is-fullheight">
    <div className="hero-head">
      <Navbar logoVisible={false} />
    </div>
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Jason Torres</h1>
        <h2 className="subtitle">
          I'm a technical founder. I build teams for startups and enterprises.
          <br/>
          12 years Ruby on Rails developer. 10 years as a CTO.

          <br/>
          <br/> 
          I'm the CEO of Mashup Garage.
          A 50+ member full stack development company
          based in Manila, Philippines.
        </h2>
      </div>
    </div>
    <div className="hero-foot">
      <HeroFoot />
    </div>
  </section>
)

export default Hero
