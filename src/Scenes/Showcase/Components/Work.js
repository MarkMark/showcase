import React from 'react'

import Thumb from '../../../Components/Thumb/Thumb'

import { Thumbs } from '../../../Services/Doc/Thumb'

export default function Work() {
  return (
    <section>
      <div className="o-wrapper">
        <div className="o-layout">
          <div className="m-grid">
            {Thumbs.map((object, i) => (
              <Thumb data={object} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
