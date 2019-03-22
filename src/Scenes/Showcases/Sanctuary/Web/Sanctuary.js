import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Hero from './Components/Hero'
import Expertise from '../../../../Components/Expertise/Expertise'
import About from './Components/About'

class Sanctuary extends Component {
  render() {
    return (
      <section>
        <Helmet>
          <title>Sanctuary showcase</title>
          <meta
            name="description"
            content="Take a look at my work with Sanctuary"
          />
        </Helmet>

        <Hero />

        <Expertise
          expertise={[
            'React',
            'Redux',
            'Jest',
            'Async/Await',
            'Vanilla JS',
            'JSX',
            'HTML',
            'SCSS',
            'Atomic Design',
            'NodeJS',
            'Firebase'
          ]}
        />

        <About />
      </section>
    )
  }
}

export default Sanctuary
