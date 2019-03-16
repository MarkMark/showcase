import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Hero from './Components/Hero'
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

        <About />
      </section>
    )
  }
}

export default Mendr
