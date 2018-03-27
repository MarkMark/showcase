import React, { Component } from 'react'
import { NavLink }          from 'react-router-dom';

import ThumbWEBP_sanctuary    from '../../../img/thumbs/sanctuary.webp'
import ThumbJPG_sanctuary     from '../../../img/thumbs/sanctuary.jpg'

import ThumbWEBP_sanctuaryApp from '../../../img/thumbs/sanctuary-app.webp'
import ThumbJPG_sanctuaryApp  from '../../../img/thumbs/sanctuary-app.jpg'

import ThumbWEBP_zensation    from '../../../img/thumbs/zensation.webp'
import ThumbJPG_zensation     from '../../../img/thumbs/zensation.jpg'

import ThumbJPG_amp           from '../../../img/thumbs/amp.jpg'
import ThumbWEBP_amp          from '../../../img/thumbs/amp.webp'


import Preview                from '../../../Components/Preview/Preview'
import Linebreak              from '../../../Components/Linebreak/Linebreak'


class Previews extends Component {

  render() {

    return (

      <div className="o-wrapper">

        <h3>Latest work</h3>

        <div className="o-layout c-previews">

          <Preview src={ThumbWEBP_sanctuaryApp} srcFallback={ThumbJPG_sanctuaryApp} company={'Sanctuary app'} desc={`Sanctuary is a new way of making sure all your employees are safe by sending push notifications to your employees and getting a real-time response back.`} />

          <Preview src={ThumbWEBP_sanctuary} srcFallback={ThumbJPG_sanctuary} company={'Sanctuary'} desc={`Sanctuary is a new way of making sure all your employees are safe by sending push notifications to your employees and getting a real-time response back.`} />

          <Preview src={ThumbWEBP_amp} srcFallback={ThumbJPG_amp} company={'AMP'} desc={`AMP Capital is Australias largest retail and corporate pension providers & own around 30 shopping malls across Australia & New Zealand`} />

          <Preview src={ThumbWEBP_zensation} srcFallback={ThumbJPG_zensation} company={'Zensation'} desc={`Zensation is a popular Tea House in Redfern, Sydney. Echoing the stylings of a 1920s Shanghai Tea House. It's a truly unique experience to sit down relax and try the best tea in Australia while eating some delicious Yum Cha!`} />

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
