import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Btn from '../../Components/Button/Btn'

class Contact extends Component {
  render() {
    return (
      <section className="u-padding-top-large">
        <Helmet>
          <title>Contact me</title>
          <meta name="description" content="Want to get in touch?" />
        </Helmet>

        <div className="o-wrapper u-max-width--500">
          <h1 className="u-text-align--center u-margin-bottom-large">
            Contact me
          </h1>

          <div className="o-layout">
            <div className="o-layout__item u-1/1 u-text-align--center">
              <p>
                I really enjoy helping business & start-ups build great
                websites, web apps & mobile applications.
              </p>

              <p>Interested in working with me?</p>

              <Btn
                href={'mailto:markschwanethal@gmail.com'}
                text={'Contact me'}
                target={'_blank'}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
