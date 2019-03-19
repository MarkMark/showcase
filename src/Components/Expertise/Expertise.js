import React from 'react'

import Pill from '../Pills/Pill'

export default function Expertise({ expertise = [] }) {
  return (
    <section>
      <div className="o-wrapper o-wrapper--medium">
        <div className="o-layout">
          <div className="o-col">
            <div className="u-text-align--center">
              {expertise.map((skill, i) => {
                return <Pill key={i} text={skill} />
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
