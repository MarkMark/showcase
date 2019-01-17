import React from 'react'
import { NavLink } from 'react-router-dom'

import Linebreak from '../../../Components/Linebreak/Linebreak'


function Hero() {
  return (
    <div>
      <div className="c-hero c-hero--home">
        <div className="o-wrapper">

          <h1 className="u-giga">
            Front End
            <span className="u-responsive-hidden--show-mobile u-responsive-hidden--show-mobile--inline"> Dev</span>
            <span className="u-responsive-hidden--hide-mobile u-responsive-hidden--hide-mobile--inline"> Development</span>
          </h1>
          <p>I build startups and companies great <b>websites & apps</b>.</p>

          <NavLink className="c-button" to="/about">
            Learn more
          </NavLink>

        </div>

      </div>

      <Linebreak />
    </div>
  )
}

export default Hero;
