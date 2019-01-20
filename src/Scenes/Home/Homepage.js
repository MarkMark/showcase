import React, { Component } from 'react'
import Hero from './components/Hero'
import Thumb from '../../Components/Thumb/Thumb'
import About from './components/About'
import Linebreak from '../../Components/Linebreak/Linebreak'

import { Thumbs } from '../../Services/Doc/Thumb'


class Home extends Component {

  render() {
    return (
      <section>

        <Hero />

        <Linebreak />

        <About />

        <Linebreak />

        <div className="o-wrapper">
          <div className="m-grid">
            { Thumbs.map((object, i) => i < 4 &&
              <Thumb data={object} key={i} />
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default Home
