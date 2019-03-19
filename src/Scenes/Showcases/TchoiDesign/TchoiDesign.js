import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Hero from './Components/Hero'

class TchoiDesign extends Component {
  render() {
    return (
      <section className="u-padding-top">
        <Helmet>
          <title>Tchoi Design showcase</title>
          <meta
            name="description"
            content="Take a look at my work with Tchoi Design"
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

export default TchoiDesign
