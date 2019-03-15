import React from 'react'
import Pill from '../../../Components/Pills/Pill'

export default function About() {
  const EXPERTISE = [
    'React',
    'React Native',
    'Angular',
    'Vanilla JS',
    'HTML',
    'CSS',
    'SCSS',
    'LESS'
  ]

  return (
    <section className="o-wrapper u-padding-vertical-huge s-skew">
      <div className="o-layout o-layout--centered">
        <div className="o-col o-col--medium">
          <div className="u-margin-bottom-large">
            <p>Hey I’m Mark.</p>
            <p>
              Developing websites & apps is my passion. I specialise in
              front-end development, focusing on all responsive viewport sizes
              while using the latest tools & frameworks to improve speed and
              quality of a project.
            </p>
          </div>

          <div className="u-text-align--center">
            {EXPERTISE.map((skill, i) => {
              return <Pill key={i} text={skill} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
