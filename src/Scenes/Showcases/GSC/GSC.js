import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

// import Hero                 from './Components/Hero'
import LineBreak from '../../../Components/LineBreaks/LineBreak'

// import ShowcasesWEBP_hand   from '../../../img/showcase/cooltrax-app/hand-settings.webp'
// import ShowcasesPNG_hand    from '../../../img/showcase/cooltrax-app/hand-settings.png'

class GSC extends Component {
  render() {
    return (
      <section className="u-padding-top">
        <Helmet>
          <title>GSC showcase</title>
          <meta name="description" content="Take a look at my work with GSC" />
        </Helmet>

        <div className="u-text-align--center">
          <h1>GSC showcase</h1>

          <LineBreak />

          <p>Coming soon</p>
        </div>
      </section>
    )
  }
}

export default GSC
