import React, { Component } from 'react';
import Hero                 from './Components/Hero'
import Linebreak            from '../../../Components/Linebreak/Linebreak'


import ShowcasesPNG_phone   from '../../../img/showcase/sanctuary-app/white-phone-right.png'


class SanctuaryApp extends Component {

  render() {

    return (

      <section>


        <Hero />


        <div className="o-wrapper">

          <h3>Overview</h3>

          <div className="o-layout u-margin-bottom-large">

            <div className="o-layout__item u-1/1 u-1/2@tablet">
              <h4>About the Project</h4>

              <p>Sanctuary is a new way of making sure all your employees are safe by sending push notifications to your employees and getting a real-time response back.</p>
            </div>

            <div className="o-layout__item u-1/1 u-1/2@tablet">
              <h4>My Role</h4>

              <p>Sanctuary is mine and my business partners company, I handle everything development & design related, which includes;</p>

              <ol>
                  <li>Planning and designing the UI & UX for the app</li>
                  <li>Investigating and exploration of the best frameworks</li>
                  <li>Development of the app</li>
                  <li>Future planning of features </li>
              </ol>
            </div>

          </div>
        </div>


        <Linebreak />


        <div className="o-wrapper">

          <h3>Process, Insight & Solution</h3>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h4>Project background</h4>

              <p>The idea for Sanctuary came out a necessity of the modern world. After the recent terrorist attacks that have happened in London & the rest of Europe, we wanted a way to find out if our work colleagues were okay. Unfortunately, we don't all have a way to contact each other & our managers struggled to contact everyone. So myself and my partner sat down and figured out a simple but effective way for a business to find out all of their employee's statuses in case of an emergency.</p>

            </div>
          </div>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h4>The problem</h4>

              <p>Due to the nature of the app, it needs to work at a moments notice. We can’t deal with having slow servers or notifications not coming through when it’s most needed.</p>

            </div>
          </div>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h4>Framework</h4>

              <p>I chose to use React Native to build the app. What really sets React Native apart from the competition is that the app is built as a native application.</p>

            </div>
          </div>

        </div>


        <Linebreak />


        <div className="o-wrapper">

          <h3>The results</h3>

          <div className="o-layout u-margin-bottom-large">

            <div className="o-layout__item u-1/1">

              <p>So far we're currently in beta testing & are in conversations with some big clients. We're always coming up with new features and improvements that we can include so watch this space.</p>

            </div>

          </div>
        </div>


        <div className="o-wrapper u-text-align--center">
          <img src={ShowcasesPNG_phone} alt="cooltrax app settings" />
        </div>


      </section>

    )

  }

}

export default SanctuaryApp;
