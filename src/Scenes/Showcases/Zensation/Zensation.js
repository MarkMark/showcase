import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Hero from './Components/Hero'
import Expertise from '../../../Components/Expertise/Expertise'
import About from './Components/About'

class Zensation extends Component {
  render() {
    return (
      <section>
        <Helmet>
          <title>Zensation showcase</title>
          <meta
            name="description"
            content="Take a look at my work with Zensation"
          />
        </Helmet>

        <Hero />

        <Expertise expertise={['OpenCart', 'jQuery', 'SCSS']} />

        <About />
      </section>
    )
  }
}

export default Zensation
