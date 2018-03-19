import React, { Component } from 'react'
import Hero                 from './components/Hero'
import Previews             from './components/Previews'
import Clients              from './components/Clients'


class Home extends Component {

  render() {

    return (

      <section>

        <Hero />

        <Previews />

        <Clients />

      </section>

    )

  }

}

export default Home;
