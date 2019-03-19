import React from 'react'

import Linebreak from '../../../../Components/Linebreak/Linebreak'

export default function About() {
  return (
    <section className="s-skew u-padding-vertical">
      <div className="o-wrapper">
        <div className="o-layout">
          <div className="o-col">
            <h3>Overview</h3>

            <p>
              AMP is one of Australias largest bank / insurance company. They
              also own and manage around 30 shopping centres. So what happens
              when you're in one of their shopping centres and you need to get
              one from one store to another but have no idea how to do find it &
              there is no centre information nearby?
            </p>
          </div>
        </div>

        <Linebreak />

        <div className="o-layout">
          <div className="o-col--12 o-col--6@tablet">
            <h3>The problem</h3>

            <p>
              Shopping centres can be huge, there's so many floors, areas and
              stores and it's not always convenient to find an information desk
              or a store directory. Either way, it's not a great experience for
              your customers & the store owners.
            </p>
          </div>

          <div className="o-col--12 o-col--6@tablet">
            <h3>The solution</h3>

            <p>
              Along with a full website rebuild with a fresh new UI, we also
              utilised Micello & leaflet's SDK to build a wayfinding solution.
              By simply searching for where you want to go & where you currently
              are we provide a step by step route to your destination. To put it
              simply, it's Google Maps for shopping malls. This needed to be
              implemented across all shopping centres so it needed to be
              customisable both with the UI but also with which centre & stores
              would get loaded.
            </p>
          </div>
        </div>

        <Linebreak />

        <div className="o-layout">
          <div className="o-col">
            <h3>Key features</h3>

            <ol>
              <li>
                <b>Navigation.</b> A quick and easy way to navigate around the
                website, either via the navigation or by quickly scanning the
                website.
              </li>
              <li>
                <b>Store to store navigation.</b> Abilty to quickly search for
                the store you want to get to and have step by step directions to
                it.
              </li>
              <li>
                <b>Information.</b> Events, new stores & discounts were to name
                just a few of the information wanting to be displaid in a and
                clear way.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
