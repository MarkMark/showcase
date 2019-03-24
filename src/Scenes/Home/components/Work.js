import React from 'react'

import Thumb from '../../../Components/Thumb/Thumb'
import Btn from '../../../Components/Button/Btn'

import { Thumbs } from '../../../Services/Doc/Thumb'

export default function Work() {
  return (
    <section>
      <div className="o-wrapper u-padding-vertical-huge">
        <div className="o-layout">
          {Thumbs.map(
            (work, i) =>
              i <= 3 && (
                <div
                  key={i}
                  className="o-col--12 o-col--6@tablet o-col--3@desktop"
                >
                  <Thumb data={work} />
                </div>
              )
          )}
        </div>

        <div className="o-layout">
          <div className="o-col u-text-align--right">
            <Btn
              classes={'a-buttonFlat'}
              text={'View more'}
              href={'/showcase'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
