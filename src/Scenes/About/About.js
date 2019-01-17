import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'

import WEBPme from '../../img/misc/mark.webp'
import PNGme from '../../img/misc/mark.jpg'


class About extends Component {

  render() {

    return (
      <section className="u-padding-top-large">

        <Helmet>
          <title>About me</title>
          <meta name="description" content="Want to know more about me?" />
        </Helmet>


        <div className="o-wrapper u-max-width--500 u-margin-bottom-large">

          <h1 className="u-text-align--center u-margin-bottom-large">About me</h1>

          <div className="o-layout">
            <div className="o-layout__item u-1/1">
              <div className="c-circle c-circle--150">
                <img
                  ref={img => this.img = img}
                  src={WEBPme}
                  onError={() => this.img.src = PNGme}
                  alt="Mark Schwanethal"
                />
              </div>
            </div>

            <div className="o-layout__item u-1/1">

              <p>Hey, hows it going? I'm Mark Schwanethal and I like building things!</p>

              <p>I'm originally from South Wales in the UK but I've worked & lived in London, Sydney & now <b>Toronto</b>.</p>

              <p>I've been building websites since I was 14, sitting on a Windows 95 PC on notepad saving HTML files. My process and tools have changed but I'm still as passionate about what I do now as I was back then.</p>

              <p className="u-text-align--center">Interested in working with me?</p>
            </div>

            <div className="o-layout__item u-1/1 u-text-align--center">

              <NavLink className="c-button" to="/contact">
                Contact me
              </NavLink>

            </div>
          </div>

        </div>

      </section>
    )
  }
}

export default About;
