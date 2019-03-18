import React from 'react'

import Pill from '../../../../../Components/Pills/Pill'

export default function Expertise() {
  const EXPERTISE = [
    'React Native',
    'Vanilla JS',
    'JSX',
    'Android',
    'iOS',
    'NodeJS',
    'Firebase'
  ]

  return (
    <section>
      <div className="o-wrapper o-wrapper--medium">
        <div className="o-layout">
          <div className="o-col">
            <div className="u-text-align--center">
              {EXPERTISE.map((skill, i) => {
                return <Pill key={i} text={skill} />
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
