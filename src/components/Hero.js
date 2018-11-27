import React from 'react'
import Navbar from '../components/Navbar'
import HeroFoot from '../components/HeroFoot'

const Hero = () => (
  <section className="hero">
    <div className="hero-head">
      <Navbar logoVisible={false} />
    </div>
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Jason Torres</h1>
        <h2 className="subtitle">
          I'm a technical founder. I build teams for startups and enterprises.
        </h2>
      </div>
    </div>
    <div className="hero-foot">
      <HeroFoot />
    </div>
  </section>
)

export default Hero
