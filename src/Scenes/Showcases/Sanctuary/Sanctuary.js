import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Linebreak from '../../../Components/Linebreak/Linebreak'

// import ShowcasesWEBP_dash  from '../../../img/showcase/sanctuary/laptop-dashboard.webp'
import ShowcasesPNG_dash from '../../../img/showcase/sanctuary/laptop-dashboard.png'

class Sanctuary extends Component {
  render() {
    return (
      <section>
        <Helmet>
          <title>Sanctuary showcase</title>
          <meta
            name="description"
            content="Take a look at my work with Sanctuary"
          />
        </Helmet>

        <div className="o-wrapper">
          <h3 className="u-text-align--center">Overview</h3>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <p>
                Let's say you work as a fire warden for a medium to large
                company and there's a fire. Amidst the panic, you forget the
                roll call. Now you don't know if all the employees got out
                safely and you need to inform the fire department. How about if
                you work in HR and there's been an attack on the subway, how are
                you meant to know if all the employees are okay?
              </p>
            </div>

            <Linebreak />
          </div>
        </div>

        <div className="o-wrapper">
          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1 u-1/2@tablet">
              <h3 className="u-text-align--center">The problem</h3>

              <p>
                Currently using Apple / Android Pay subscription payments via an
                app links a personal account, something we thought not many
                managers / fire wardens would be keen on doing. There's also a
                chance uninstalling the app could cause a payment to get
                cancelled, not great if someone leaving the company could mean
                the company losing the app.
              </p>
            </div>

            <div className="o-layout__item u-1/1 u-1/2@tablet">
              <h3 className="u-text-align--center">The solution</h3>

              <p>
                Sanctuary's web app is dedicated to registering a new company,
                creating an admin account and to managing the employees in a
                really simple way.
              </p>
            </div>
          </div>

          <Linebreak />
        </div>

        <div className="o-wrapper">
          <h3 className="u-text-align--center">Key features</h3>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <ol>
                <li>
                  <b>Staff management.</b> Remove users, change email address /
                  password & ability to convert employees to Moderators.
                </li>
                <li>
                  <b>Registration.</b> Add a company to website.
                </li>
                <li>
                  <b>Information.</b> Document app features and user guides.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="o-wrapper">
          <div className="o-layout u-text-align--center">
            <div className="o-layout__item u-1/1">
              <img
                ref={img => (this.img = img)}
                src={ShowcasesPNG_dash}
                onError={() => (this.img.src = ShowcasesPNG_dash)}
                alt="Sanctuary dashboard"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Sanctuary
