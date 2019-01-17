import React, { Component } from 'react';

import WEBPamp              from '../../../../img/showcase/amp/amp-feature.webp'
import PNGamp               from '../../../../img/showcase/amp/amp-feature.png'


class Hero extends Component {

  render() {

    return (

        <div className="c-hero c-hero--amp">

          <div className="o-wrapper">
            <h1>AMP shopping centres</h1>
            <p>A retrospective showcase</p>

            <div className="u-text-align--center u-margin-bottom-large">
              <a href="https://www.pacificfair.com.au/" className="c-button c-button--white" target="_blank" rel="noopener noreferrer">
                Pacific Fair
              </a>

              <a href="https://www.macquariecentre.com.au" className="c-button c-button--white" target="_blank" rel="noopener noreferrer">
                macquarie centre
              </a>
            </div>


            <img
              ref={img => this.img = img}
              src={WEBPamp}
              onError={() => this.img.src = PNGamp}
              alt="AMP"
            />

          </div>

        </div>

    )

  }

}

export default Hero;
