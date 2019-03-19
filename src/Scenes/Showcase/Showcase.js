import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Hero from './Components/Hero'
import Work from './Components/Work'

class Showcase extends Component {
  render() {
    return (
      <section>
        <Helmet>
          <title>Showcase</title>
          <meta name="description" content="View my past work" />
        </Helmet>

        <Hero />

        <Work />
      </section>
    )
  }
}

export default Showcase
