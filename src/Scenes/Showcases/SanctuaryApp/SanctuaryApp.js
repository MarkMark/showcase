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

          <h3 className="u-text-align--center">Overview</h3>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">

              <p>Let's say you work as a fire warden for a medium to large company and there's a fire. Amidst the panic, you forget the roll call. Now you don't know if all the employees got out safely and you need to inform the fire department. How about if you work in HR and there's been an attack on the subway, how are you meant to know if all the employees are okay?</p>

            </div>

            <Linebreak />

          </div>
        </div>


        <div className="o-wrapper">
          <div className="o-layout u-margin-bottom-large">

            <div className="o-layout__item u-1/1 u-1/2@tablet">
              <h3 className="u-text-align--center">The problem</h3>

              <p>Roll calls are outdated. Having a sheet of paper which could have thousands of names on it, getting all the employees to congregate in a certain area and then trying to figure out if the missing employees are sick or out of office at a business meeting. What a nightmare.</p>
            </div>

            <div className="o-layout__item u-1/1 u-1/2@tablet">
              <h3 className="u-text-align--center">The solution</h3>

              <p>At Sanctuary we've simplified this experience. Each employee has a profile, which takes around 2 minutes to create. Now if there is a fire, with one step you can send a push notification to everyone. All your employees need to do is mark themselves either as safe or not safe. By doing this you can get a real-time response from all of the employee's whether they're in the office or not.</p>

            </div>
          </div>

          <Linebreak />
        </div>



        <div className="o-wrapper">
          <h3 className="u-text-align--center">Key features</h3>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">

              <ol>
                <li><b>Push Notifications.</b> Due to the possibility that employees may be out of the office, we need to alert them that an active event has been triggered.</li>
                <li><b>Custom Events.</b> Sanctuary has a preset of 3 events which are Fire, Flood & an Act of Terror. However, you can create a fully customisable event.</li>
                <li><b>Real-Time Response.</b> Whilst there is an active event you can view your complete employee list. Next to each users name is an indication of if the employee is safe, unsafe or has not yet responded. There's also a counter at the top of the page for a full overview.</li>
              </ol>

            </div>
          </div>
        </div>

        <div className="o-wrapper">
          <div className="o-layout u-text-align--center">
            <div className="o-layout__item u-1/1">
              <img src={ShowcasesPNG_phone} alt="Sanctuary on mobile" />
            </div>
          </div>
        </div>

      </section>

    )

  }

}

export default SanctuaryApp;
