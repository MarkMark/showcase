import React, { Component } from 'react';
import { Helmet }           from 'react-helmet'


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

              <p>Interested in working with me?</p>

              <p>You can contact me <a href="mailto:markschwanethal@gmail.com" target="_blank" rel="noopener noreferrer">here</a>.</p>

            </div>
          </div>

        </div>


      </section>

    )

  }

}

export default Contact;
