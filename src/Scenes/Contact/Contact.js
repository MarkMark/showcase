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

        <div className="o-wrapper u-o-wrapper--medium u-padding-top-large u-padding-bottom-huge">
          <div className="o-layout">
            <div className="o-col u-text-align--center">
              <h1>Contact me</h1>
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
