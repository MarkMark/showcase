import React from 'react'

import Mobile from '../../../../Components/Devices/Mobile'
import Expertise from '../../../../Components/Expertise/Expertise'

import WalmartMobileCard from '../Images/mobile-credit.webp'
import WalmartMobileCardFallback from '../Images/mobile-credit.jpg'

export default function Tech() {
  return (
    <section className="s-skew s-skew--shortTop u-padding-vertical">
      <div className="o-wrapper o-wrapper--medium">
        <div className="o-layout">
          <div className="o-col u-text-align--center">
            <Mobile
              src={WalmartMobileCard}
              fallback={WalmartMobileCardFallback}
              alt="Walmart communication preferences page"
              notch={false}
            />
          </div>
        </div>
      </div>

      <Expertise
        expertise={[
          'Knockout',
          'jQuery',
          'Vanilla JS',
          'Karma',
          'Less',
          'Atomic Design'
        ]}
      />
    </section>
  )
}
