import React from 'react'

const Portfolio = () => (
  <section className="portfolio" id="projects">
    <div className="container">
      <div className="section-header">
        <h2>Recent Works</h2>
        <p>Check out my recent projects</p>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-parent">
          <div className="tile">
            <article className="tile is-child">
              <figure className="image">
                <img src="/img/one-tribe.jpg" className="" />
              </figure>
              <p className="title is-spaced">One Tribe</p>
              <figure className="image">
                <img src="/img/comic-odyssey.jpg" className="" />
              </figure>
              <p className="title">Comic Odyssey</p>
              <p className="subtitle">
                Comics is my passion and I'm an avid comic collector.
              </p>
            </article>
          </div>
        </div>
        <div className="tile is-vertical is-parent is-8">
          <div className="tile">
            <div className="content">
              <img src="/img/control-center.png" className="image" />
              <p className="title">Control Center</p>
              <p className="subtitle">
                Personal side project to track Mashup Garage's operations,
                portfolio and client projects. A weekend project -- turned into
                one of the most important tool I've used in my life.
                <br />
                <br />
                Built using Ruby on Rails
              </p>
            </div>
          </div>
          <div className="tile">
            <div className="tile is-parent is-vertical is-4">
              <article className="tile is-child is-primary">
                <img src="/img/lawadvisor.png" className="image" />
                <p className="title">LawAdvisor</p>
              </article>
            </div>
            <div className="tile is-vertical is-parent">
              <article className="tile is-child">
                <figure className="image">
                  <img src="/img/ticketbase.png" className="" />
                </figure>
                <p className="title">Ticketbase</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Portfolio
