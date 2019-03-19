import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Hero from './Components/Hero'
import Expertise from '../../../Components/Expertise/Expertise'
import About from './Components/About'

class Mendr extends Component {
  render() {
    return (
      <section>
        <Helmet>
          <title>Mendr showcase</title>
          <meta
            name="description"
            content="Take a look at my work with Mendr"
          />
        </Helmet>

        <Hero />

        <Expertise expertise={['Angular', 'Vanilla JS', 'SCSS', 'gulp']} />

        <About />
      </section>
    )
  }
}

export default Mendr
