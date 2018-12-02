import React from 'react'
import Helmet from 'react-helmet'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="React, Ruby on Rails, Elixir Developer in Manila Philippines | Jason Torres">
      <script src="/scripts/app.js" />
    </Helmet>
    <div>{children}</div>
    <Contact />
    <Footer />
  </div>
)

export default TemplateWrapper
