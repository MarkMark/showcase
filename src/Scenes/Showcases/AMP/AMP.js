import React, { Component } from 'react';
import { Helmet }           from 'react-helmet'

// import Hero                 from './Components/Hero'
import Linebreak            from '../../../Components/Linebreak/Linebreak'


// import ShowcasesWEBP_hand   from '../../../img/showcase/cooltrax-app/hand-settings.webp'
// import ShowcasesPNG_hand    from '../../../img/showcase/cooltrax-app/hand-settings.png'


class AMP extends Component {

  render() {

    return (

      <section>

        <Helmet>
          <title>AMP showcase</title>
          <meta name="description" content="Take a look at my work with AMP" />
        </Helmet>


        <div className="u-text-align--center">
          <h1>AMP showcase</h1>

          <Linebreak />

          <p>Coming soon</p>
        </div>

      </section>

    )

  }

}

export default AMP;
