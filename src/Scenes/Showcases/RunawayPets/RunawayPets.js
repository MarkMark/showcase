import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Hero from "./Components/Hero";
import Linebreak from "../../../Components/Linebreak/Linebreak";

import ShowcasesPNG_hand from "../../../img/showcase/runaway-pets/runaway-pets-hand.png";
// import ShowcasesWEBP_hand from "../../../img/showcase/runaway-pets/runaway-pets-hand.webp";
// import ShowcasesPNG_mobile  from '../../../img/showcase/runaway-pets/runaway-pets-mobile-3d.png'
// import ShowcasesWEBP_mobile from '../../../img/showcase/runaway-pets/runaway-pets-mobile-3d.webp'
// import ShowcasesPNG_notifi  from '../../../img/showcase/runaway-pets/runaway-pets-notification.png'

class Runaway extends Component {
  render() {
    return (
      <section>
        <Helmet>
          <title>Runaway Pets showcase</title>
          <meta
            name="description"
            content="Take a look at my work with Runaway Pets"
          />
        </Helmet>

        <Hero />

        <div className="o-wrapper">
          <h3 className="u-text-align--center">Overview</h3>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <p>
                So what do you do when you lose a pet? There’s not really a
                manual written for something like this. A quick google search
                will tell you to contact shelters, vets, etc. Then start posting
                on social media and hope it catches someone's attention.
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
                Continuously posting on social media, heading to shelters &
                putting up flyers takes cash, effort & time you just don't have.
              </p>
            </div>

            <div className="o-layout__item u-1/1 u-1/2@tablet">
              <h3 className="u-text-align--center">The solution</h3>

              <p>
                By creating an app where users can upload an image, description
                & the last seen location of the pet they're able to contact
                local shelters and other users in the area via a push
                notification.
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
        </div>

        <div className="o-wrapper u-text-align--center">
          <img
            ref={img => (this.img = img)}
            src={ShowcasesPNG_hand}
            onError={() => (this.img.src = ShowcasesPNG_hand)}
            alt="Runaway pets mobile"
          />
        </div>
      </section>
    );
  }
}

export default Runaway;
