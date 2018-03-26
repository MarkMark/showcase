import React, { Component } from 'react';
import { Helmet }           from 'react-helmet'

// import Hero                 from './Components/Hero'
import Linebreak            from '../../../Components/Linebreak/Linebreak'


// import ShowcasesWEBP_hand   from '../../../img/showcase/cooltrax-app/hand-settings.webp'
// import ShowcasesPNG_hand    from '../../../img/showcase/cooltrax-app/hand-settings.png'


class Jetstar extends Component {

  render() {

    return (

      <section>

        <Helmet>
          <title>Jetstar showcase</title>
          <meta name="description" content="Take a look at my work with Jetstar" />
        </Helmet>

        <div className="u-text-align--center">
          <h1>Jetstar showcase</h1>

          <Linebreak />

          <p>Coming soon</p>
        </div>


      </section>

    )

  }

}

export default Jetstar;
