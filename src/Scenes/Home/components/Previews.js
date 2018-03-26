import React, { Component } from 'react'
import { NavLink }          from 'react-router-dom';

import ThumbJPG_sanctuary   from '../../../img/thumbs/sanctuary.jpg'
import ThumbJPG_sanctuaryApp from '../../../img/thumbs/sanctuary-app.jpg'
import ThumbJPG_zensation   from '../../../img/thumbs/zensation.jpg'
import ThumbJPG_runaway     from '../../../img/thumbs/runaway-pets.jpg'

import Preview              from '../../../Components/Preview/Preview'
import Linebreak            from '../../../Components/Linebreak/Linebreak'


class Previews extends Component {

  render() {

    return (

      <div className="o-wrapper">

        <h3>Latest work</h3>

        <div className="o-layout c-previews">

          <Preview src={ThumbJPG_sanctuaryApp} company={'Sanctuary app'} desc={`Sanctuary is a new way of making sure all your employees are safe by sending push notifications to your employees and getting a real-time response back.`} />

          <Preview src={ThumbJPG_sanctuary} company={'Sanctuary'} desc={`Sanctuary is a new way of making sure all your employees are safe by sending push notifications to your employees and getting a real-time response back.`} />

          <Preview src={ThumbJPG_zensation} company={'Zensation'} desc={`Zensation is a popular Tea House in Redfern, Sydney. Echoing the stylings of a 1920s Shanghai Tea House. It's a truly unique experience to sit down relax and try the best tea in Australia while eating some delicious Yum Cha!`} />

          <Preview src={ThumbJPG_runaway} company={'Runaway pets'} desc={`Over 10 million pets run away every year & only 1 in 10 are ever reunited with their owners. So what do you do when you lose a pet? There’s not really a manual written for something like this. A quick google search will tell you to contact shelters, vets, etc. Then start posting on social media and hope it catches someone's attention. You may even post flyers around your block.`} />

        </div>


        <div className="u-alignment u-alignment--center">

          <NavLink className="c-button" to="/showcase">
            See more
          </NavLink>

        </div>

        <Linebreak />

      </div>

    )

  }

}

export default Previews;
