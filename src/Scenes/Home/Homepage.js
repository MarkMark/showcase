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

        {/*
          <div className="o-wrapper">

            <h3>About me</h3>

            <p>My names Mark Schwanethal & building high-quality bespoke websites & apps has been a passion of mine for the last 10 years.</p>

            <p>Originally I'm from South Wales in the UK, but have worked & lived in London, Sydney & now Toronto.</p>

            <p>I've worked with small startups to large banks using a vast array of technologies and always learning new skills and keeping up to date with current trends.</p>

          </div>
        */}

      </section>

    )

  }

}

export default Home;
