import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Hero from './Components/Hero'
import Expertise from '../../../Components/Expertise/Expertise'
import About from './Components/About'

class AMP extends Component {
  render() {
    return (
      <section>
        <Helmet>
          <title>AMP showcase</title>
          <meta name="description" content="Take a look at my work with AMP" />
        </Helmet>

        <Hero />

        <Expertise expertise={['Handlebars JS', 'Vanilla JS', 'SCSS']} />

        <About />
      </section>
    )
  }
}

export default AMP
