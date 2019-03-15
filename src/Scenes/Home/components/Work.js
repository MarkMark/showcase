import React from 'react'

import Thumb from '../../../Components/Thumb/Thumb'

import { Thumbs } from '../../../Services/Doc/Thumb'

export default function Work() {
  return (
    <section>
      <div className="o-wrapper u-padding-vertical-huge">
        <div className="o-layout">
          {/* <div className="o-col"> */}
          {Thumbs.map(
            (work, i) =>
              i <= 3 && (
                <div className="o-col--6 o-col--1@tablet">
                  <Thumb key={i} data={work} />
                </div>
              )
          )}
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}
