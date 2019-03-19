import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Hero from './Components/Hero'

class Jetstar extends Component {
  render() {
    return (
      <section className="u-padding-top">
        <Helmet>
          <title>Jetstar showcase</title>
          <meta
            name="description"
            content="Take a look at my work with Jetstar"
          />
        </Helmet>

        <div className="u-text-align--center">
          <Hero />

          <p>Coming soon</p>
        </div>
      </section>
    )
  }
}

export default Jetstar
