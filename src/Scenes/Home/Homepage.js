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

        {/* <div className="o-wrapper">
          <div className="m-grid">
            { Thumbs.map((object, i) => i < 4 &&
              <Thumb data={object} key={i} />
            )}
          </div>
        </div> */}
      </section>
    )
  }
}

export default Home
