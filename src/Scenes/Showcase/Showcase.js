import React, { Component } from 'react';
import { Helmet } from 'react-helmet'

import Hero from './Components/Hero'
import Thumb from '../../Components/Thumb/Thumb'

import { Thumbs } from '../../Services/Doc/Thumb'


class Showcase extends Component {
  render() {
    return (
      <section>
        <Helmet>
          <title>Showcase</title>
          <meta name="description" content="View my past work" />
        </Helmet>

        <Hero />

        <div className="o-wrapper">
          <h3>Latest work</h3>

          <div className="o-wrapper">
            <div className="m-grid">
              { Thumbs.map((object, i) =>
                <Thumb data={object} key={i} />
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Showcase;
