import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Hero from './Components/Hero'
import Tech from './Components/Tech'

export default class Walmart extends Component {
  render() {
    return (
      <section>
        <Helmet>
          <title>Walmart showcase</title>
          <meta
            name="description"
            content="Take a look at my work with Walmart"
          />
        </Helmet>

        <Hero />

        <Tech />

        <div className="o-wrapper o-wrapper--medium">
          <div className="o-layout">
            <div className="o-col u-text-align--center">
              <p>Coming soon</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
