import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Hero from './Components/Hero'
import Expertise from '../../../../Components/Expertise/Expertise'
import About from './Components/About'

class Zensation extends Component {
  render() {
    return (
      <section>
        <Helmet>
          <title>Cooltrax's App showcase</title>
          <meta
            name="description"
            content="Take a look at my work with Cooltrax"
          />
        </Helmet>

        <Hero />

        <Expertise
          expertise={[
            'Angular',
            'TypeScript',
            'Cordova',
            'SCSS',
            'Android',
            'iOS'
          ]}
        />

        <About />
      </section>
    )
  }
}

export default Zensation
