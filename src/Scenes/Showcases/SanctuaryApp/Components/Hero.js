import React, { Component } from 'react';

import WEBPsanctuaryApp     from '../../../../img/showcase/sanctuary-app/mobiles.webp'
import PNGsanctuaryApp      from '../../../../img/showcase/sanctuary-app/mobiles.png'


class Hero extends Component {

  render() {

    return (

        <div className="c-hero c-hero--sanctuary-app">

          <div className="o-wrapper">
            <h1>Sanctuary App</h1>
            <p>A retrospective showcase</p>

            <div className="u-text-align--center u-margin-bottom-large">
              <a href="https://itunes.apple.com/au/app/sanctuary-safety/id1249776374?mt=8" className="c-button c-button--white" target="_blank" rel="noopener noreferrer">
                App store
              </a>

              <a href="https://play.google.com/store/apps/details?id=com.foxstrike.sanctuary" className="c-button c-button--white" target="_blank" rel="noopener noreferrer">
                Play store
              </a>
            </div>

            <img
              ref={img => this.img = img}
              src={WEBPsanctuaryApp}
              onError={() => this.img.src = PNGsanctuaryApp}
              alt="Sanctuary's app screens"
            />

          </div>

        </div>

    )

  }

}

export default Hero;
