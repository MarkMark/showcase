import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Hero from './Components/Hero'
import Expertise from './Components/Expertise'
import About from './Components/About'

class SanctuaryApp extends Component {
  render() {
    return (
      <section>
        <Helmet>
          <title>Sanctuary's App showcase</title>
          <meta
            name="description"
            content="Take a look at my work with Sanctuary"
          />
        </Helmet>

        <Hero />

        <Expertise />

        <About />
      </section>
    )
  }
}

export default SanctuaryApp
