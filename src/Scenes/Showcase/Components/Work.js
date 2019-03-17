import React from 'react'

import Thumb from '../../../Components/Thumb/Thumb'

import { Thumbs } from '../../../Services/Doc/Thumb'

export default function Work() {
  return (
    <section>
      <div className="o-wrapper">
        <div className="o-layout">
          {Thumbs.map((object, i) => (
            <div className="o-col--12 o-col--6@tablet o-col--3@desktop">
              <Thumb data={object} key={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
