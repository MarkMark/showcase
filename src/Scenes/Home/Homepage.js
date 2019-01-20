import React, { Component } from 'react'
import Hero from './components/Hero'
import Preview from '../../Components/Preview/Preview'
import About from './components/About'
import Linebreak from '../../Components/Linebreak/Linebreak'

import { Thumbs } from '../../Services/Doc/Thumb'


class Home extends Component {

  render() {

    console.log('Thumbs', Thumbs)

    return (
      <section>

        <Hero />

        <Linebreak />

        <About />

        <Linebreak />

        <div className="o-wrapper">
          <div className="m-grid">
            { Thumbs.map((object, i) => i < 4 &&
              <Preview data={object} key={i} />
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default Home
