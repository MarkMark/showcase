import React from 'react'

import Mobile from '../../../Components/Devices/Mobile'

import HeroImg from '../Images/runaway-pets-list.png'

export default function Hero() {
  return (
    <section className="m-hero m-hero--homepage">
      <div className="m-hero__content">
        <div>
          <span>Web & app</span>
          <h1 className="u-weight--medium">Front end developer</h1>
        </div>

        <div className="u-flex u-text-align--center">
          <Mobile classes="m-hero__device" src={HeroImg} />
        </div>
      </div>

      <div className="m-hero__social">
        <a
          className="a-socialLink a-icon--stackoverflow"
          href="https://stackoverflow.com/users/1893067/mark"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          className="a-socialLink a-icon--github"
          href="https://github.com/markschwa"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          className="a-socialLink a-icon--linkedin"
          href="https://www.linkedin.com/in/markschwanethal/"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </section>
  )
}
