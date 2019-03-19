import React, { Component } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'

class Home extends Component {
  render() {
    return (
      <section>
        <Hero />

        <About />

        <Work />
      </section>
    )
  }
}

export default Home
