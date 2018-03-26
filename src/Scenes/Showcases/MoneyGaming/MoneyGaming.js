import React, { Component } from 'react';
import { Helmet }           from 'react-helmet'

// import Hero                 from './Components/Hero'
import Linebreak            from '../../../Components/Linebreak/Linebreak'


// import ShowcasesWEBP_hand   from '../../../img/showcase/cooltrax-app/hand-settings.webp'
// import ShowcasesPNG_hand    from '../../../img/showcase/cooltrax-app/hand-settings.png'


class MoneyGaming extends Component {

  render() {

    return (

      <section className="u-padding-top">

        <Helmet>
          <title>MoneyGaming showcase</title>
          <meta name="description" content="Take a look at my work with MoneyGaming" />
        </Helmet>

        <div className="u-text-align--center">
          <h1>MoneyGaming showcase</h1>

          <Linebreak />

          <p>Coming soon</p>
        </div>


      </section>

    )

  }

}

export default MoneyGaming;
