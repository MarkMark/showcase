import React from 'react'

import Linebreak from '../../../../../Components/Linebreak/Linebreak'
import Img from '../../../../../Components/Image/Img'

import SanctuaryDashboard from '../Images/SanctuaryDashboard.png'

export default function About() {
  return (
    <section>
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
              Roll calls are outdated. Having a sheet of paper which could have
              thousands of names on it, getting all the employees to congregate
              in a certain area and then trying to figure out if the missing
              employees are sick or out of office at a business meeting. What a
              nightmare.
            </p>
          </div>

          <div className="o-col--12 o-col--6@tablet">
            <h3>The solution</h3>

            <p>
              At Sanctuary we've simplified this experience. Each employee has a
              profile, which takes around 2 minutes to create. Now if there is a
              fire, with one step you can send a push notification to everyone.
              All your employees need to do is mark themselves either as safe or
              not safe. By doing this you can get a real-time response from all
              of the employee's whether they're in the office or not.
            </p>
          </div>
        </div>

        <Linebreak />

        <div className="o-layout">
          <div className="o-col">
            <h3>Key features</h3>
            <ol>
              <li>
                <b>Push Notifications.</b> Due to the possibility that employees
                may be out of the office, we need to alert them that an active
                event has been triggered.
              </li>
              <li>
                <b>Custom Events.</b> Sanctuary has a preset of 3 events which
                are Fire, Flood & an Act of Terror. However, you can create a
                fully customisable event.
              </li>
              <li>
                <b>Real-Time Response.</b> Whilst there is an active event you
                can view your complete employee list. Next to each users name is
                an indication of if the employee is safe, unsafe or has not yet
                responded. There's also a counter at the top of the page for a
                full overview.
              </li>
            </ol>
          </div>
        </div>

        <div className="o-layout">
          <div className="o-col u-text-align--center">
            <Img
              src={SanctuaryDashboard}
              alt={'Sanctuary mobile application dashboard'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
