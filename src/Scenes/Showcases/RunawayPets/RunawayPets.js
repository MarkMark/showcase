import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Hero from './Components/Hero'
import Expertise from '../../../Components/Expertise/Expertise'
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

        <Expertise
          expertise={[
            'React Native',
            'Redux',
            'ES6',
            'Await/Async',
            'Jest',
            'Vanilla JS',
            'JSX',
            'Android',
            'iOS',
            'NodeJS',
            'Firebase'
          ]}
        />

        <About />
      </section>
    )
  }
}

export default Runaway
