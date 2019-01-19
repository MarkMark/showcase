import React, { Component } from 'react'
import Hero from './components/Hero'
import Previews from './components/Previews'
import About from './components/About'
import Clients from './components/Clients'
import Linebreak from '../../Components/Linebreak/Linebreak'


class Home extends Component {

  render() {
    return (
      <section>

        <Hero />

        <Linebreak />

        <About />

        <Linebreak />

        <Previews />
        {/* <Clients /> */}

      </section>
    )
  }
}

export default Home
