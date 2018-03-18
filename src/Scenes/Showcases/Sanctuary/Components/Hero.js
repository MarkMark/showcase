import React, { Component } from 'react';
import PNGsanctuary         from '../../../../img/showcase/sanctuary/laptop.png'


class Hero extends Component {

  render() {

    return (

        <div className="c-hero c-hero--sanctuary">

          <div className="o-wrapper">
            <h1>Sanctuary</h1>
            <p>A retrospective showcase</p>

            <div className="u-text-align--center u-margin-bottom-large">
              <a href="https://sanctec.com/" className="c-button c-button--white" target="_blank" rel="noopener noreferrer">
                website
              </a>
            </div>

            <img src={PNGsanctuary} alt="Sanctuary" />
          </div>

        </div>

    )

  }

}

export default Hero;
