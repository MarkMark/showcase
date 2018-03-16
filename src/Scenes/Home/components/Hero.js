import React, { Component } from 'react'
import { NavLink }          from 'react-router-dom';

import Linebreak            from '../../../Components/Linebreak/Linebreak'


class Hero extends Component {

  render() {

    return (

      <div>
        <div className="c-hero">
          <div className="o-wrapper">

            <h1 className="u-giga">Front End Development</h1>
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

}

export default Hero;