import React, { Component } from 'react'
import { Helmet } from 'react-helmet'


class Contact extends Component {
  render() {
    return (
      <section className="u-padding-top-large">

        <Helmet>
          <title>Contact me</title>
          <meta name="description" content="Want to get in touch?" />
        </Helmet>


        <div className="o-wrapper u-max-width--500">
          <h1 className="u-text-align--center u-margin-bottom-large">Contact me</h1>

          <div className="o-layout">
            <div className="o-layout__item u-1/1 u-text-align--center">

              <p>I really enjoy helping business & start-ups build great websites, web apps & mobile applications.</p>

              <p>Interested in working with me?</p>

              <a href="mailto:markschwanethal@gmail.com" className="c-button" target="_blank" rel="noopener noreferrer">Contact me</a>

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;
