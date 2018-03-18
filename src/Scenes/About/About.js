import React, { Component } from 'react';
import { Helmet }           from 'react-helmet'


class About extends Component {

  render() {

    return (

      <section className="u-padding-top-large">

        <Helmet>
          <title>About me</title>
          <meta name="description" content="Want to know more about me?" />
        </Helmet>


        <div className="o-wrapper u-max-width--500">

          <h1 className="u-text-align--center u-margin-bottom-large">About me</h1>

          <div className="o-layout">
            <div className="o-layout__item u-1/1">

              <p>Developing websites, web apps & mobile applications is my passion. I specialise in front-end development, focusing on all responsive viewport sizes while using the latest tools to improve speed and quality of a project.</p>

              <p>I really enjoy working with small to medium size companies or start-ups as I truly enjoy helping the company grow to its full potential</p>

            </div>
          </div>

        </div>


      </section>

    )

  }

}

export default About;
