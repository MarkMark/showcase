import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Hero from './Components/Hero'

class Fiction extends Component {
  render() {
    return (
      <section className="u-padding-top">
        <Helmet>
          <title>Fiction showcase</title>
          <meta
            name="description"
            content="Take a look at my work with Fiction"
          />
        </Helmet>

        <Hero />

        <div className="u-text-align--center">
          <p>Coming soon</p>
        </div>
      </section>
    )
  }
}

export default Fiction
