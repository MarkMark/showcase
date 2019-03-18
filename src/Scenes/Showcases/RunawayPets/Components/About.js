import React from 'react'

import Linebreak from '../../../../Components/Linebreak/Linebreak'
import Img from '../../../../Components/Image/Img'

import RunawayPetsDetails from '../Images/RunawayPetsDetails.png'

export default function About() {
  return (
    <section className="s-skew u-padding-vertical">
      <div className="o-wrapper">
        <div className="o-layout">
          <div className="o-col">
            <h3>Overview</h3>

            <p>
              So what do you do when you lose a pet? There’s not really a manual
              written for something like this. A quick google search will tell
              you to contact shelters, vets, etc. Then start posting on social
              media and hope it catches someone's attention.
            </p>
          </div>
        </div>

        <Linebreak />

        <div className="o-layout">
          <div className="o-col--12 o-col--6@tablet">
            <h3>The problem</h3>

            <p>
              Continuously posting on social media, heading to shelters &
              putting up flyers takes cash, effort & time you just don't have.
            </p>
          </div>

          <div className="o-col--12 o-col--6@tablet">
            <h3>The solution</h3>

            <p>
              By creating an app where users can upload an image, description &
              the last seen location of the pet they're able to contact local
              shelters and other users in the area via a push notification.
            </p>
          </div>
        </div>

        <Linebreak />

        <div className="o-layout">
          <div className="o-col">
            <h3>Key features</h3>

            <ol>
              <li>
                <b>Push Notifications.</b> Being able to let local shelters,
                vets or other users in the area know that your pet has gone
                missing.
              </li>
              <li>
                <b>Maps.</b> Being able to select the location the user's pet
                was last seen.
              </li>
              <li>
                <b>Authentication.</b> By creating an account the user allows
                themselves to be contactable by other users.
              </li>
            </ol>
          </div>
        </div>

        <div className="o-layout">
          <div className="o-col u-text-align--center">
            <Img
              src={RunawayPetsDetails}
              alt={'Runaway pets app details scene'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
