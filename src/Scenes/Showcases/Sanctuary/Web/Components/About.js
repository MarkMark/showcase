import React from 'react'

import Linebreak from '../../../../../Components/Linebreak/Linebreak'
import Img from '../../../../../Components/Image/Img'

import SanctuaryWebDashboard from '../Images/SanctuaryWebDashboard.png'

export default function About() {
  return (
    <section className="s-skew u-padding-vertical">
      <div className="o-wrapper">
        <div className="o-layout">
          <div className="o-col">
            <h3>Overview</h3>

            <p>
              Let's say you work as a fire warden for a medium to large company
              and there's a fire. Amidst the panic, you forget the roll call.
              Now you don't know if all the employees got out safely and you
              need to inform the fire department. How about if you work in HR
              and there's been an attack on the subway, how are you meant to
              know if all the employees are okay?
            </p>
          </div>
        </div>

        <Linebreak />

        <div className="o-layout">
          <div className="o-col--12 o-col--6@tablet">
            <h3>The problem</h3>

            <p>
              Currently using Apple / Android Pay subscription payments via an
              app links a personal account, something we thought not many
              managers / fire wardens would be keen on doing. There's also a
              chance uninstalling the app could cause a payment to get
              cancelled, not great if someone leaving the company could mean the
              company losing the app.
            </p>
          </div>
          <div className="o-col--12 o-col--6@tablet">
            <h3>The solution</h3>

            <p>
              Sanctuary's web app is dedicated to registering a new company,
              creating an admin account and to managing the employees in a
              really simple way.
            </p>
          </div>
        </div>

        <Linebreak />

        <div className="o-layout">
          <div className="o-col">
            <h3>Key features</h3>
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

        <Img src={SanctuaryWebDashboard} alt="Sanctuary website dashboard" />
      </div>
    </section>
  )
}
