import React, { Component } from 'react'
import { NavLink }          from 'react-router-dom';


import ClientPNG_akqa    from '../../../img/clients/akqa.png'
import ClientPNG_amp     from '../../../img/clients/amp.png'
import ClientPNG_allianz from '../../../img/clients/allianz.png'
import ClientPNG_gan     from '../../../img/clients/gan.png'
import ClientPNG_jetstar from '../../../img/clients/jetstar.png'



class Clients extends Component {

  render() {

    return (

      <div className="o-wrapper c-clients-list">
        <h3>Clients</h3>

        <div className="o-layout u-margin-bottom-large">

          <div className="o-layout__item u-1/5">
            <img src={ClientPNG_akqa} alt="AKQA logo" />
          </div>
          <div className="o-layout__item u-1/5">
            <img src={ClientPNG_amp} alt="AMP logo" />
          </div>
          <div className="o-layout__item u-1/5">
            <img src={ClientPNG_allianz} alt="Allianz logo" />
          </div>
          <div className="o-layout__item u-1/5">
            <img src={ClientPNG_gan} alt="GAN logo" />
          </div>
          <div className="o-layout__item u-1/5">
            <img src={ClientPNG_jetstar} alt="Jetstar logo" />
          </div>

        </div>

        <div className="u-text-align--center">
          <p>Interested in working with me?</p>

          <NavLink className="c-button" to="/contact">
            Contact me
          </NavLink>
        </div>
      </div>


    )

  }

}

export default Clients;
