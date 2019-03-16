import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Hero from './Components/Hero'
import About from './Components/About'

class Runaway extends Component {
  render() {
    return (
      <section>
        <Helmet>
          <title>Runaway Pets showcase</title>
          <meta
            name="description"
            content="Take a look at my work with Runaway Pets"
          />
        </Helmet>

        <Hero />

        <About />
      </section>
    )
  }
}

export default Runaway
