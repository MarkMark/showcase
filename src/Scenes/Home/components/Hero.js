import React from 'react'
import { NavLink } from 'react-router-dom'

import Linebreak from '../../../Components/Linebreak/Linebreak'


function Hero() {
  return (
    <section className="c-hero">

      <div className="c-hero__wrapper">

        <div className="c-hero__text">
          <div>
            <span>Web & app</span>
            <h1>Front end developer.</h1>
          </div>
        </div>

        <div className="c-hero__social">
          <a className="icon-github"></a>
          <a className="icon-linkedin"></a>
        </div>
      </div>

    </section>
  )
}

export default Hero;
