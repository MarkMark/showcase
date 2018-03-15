import React, { Component } from 'react'
import { NavLink }          from 'react-router-dom';

import ThumbJPG_zensation   from '../../../img/thumbs/zensation.jpg'
import ThumbJPG_runaway     from '../../../img/thumbs/runaway-pets.jpg'
import ThumbJPG_mendr       from '../../../img/thumbs/mendr.jpg'
import ThumbJPG_cooltraxApp from '../../../img/thumbs/cooltrax-app.jpg'

import Preview              from '../../../Components/Preview/Preview'
import Linebreak            from '../../../Components/Linebreak/Linebreak'


class Previews extends Component {

  render() {

    return (

      <div className="o-wrapper">

        <h3>Latest work</h3>

        <div className="o-layout c-previews">

          <Preview src={ThumbJPG_zensation} company={'Zensation'} desc={`Zensation is a popular Tea House in Redfern, Sydney. Echoing the stylings of a 1920s Shanghai Tea House. It's a truly unique experience to sit down relax and try the best tea in Australia while eating some delicious Yum Cha!`} />

          <Preview src={ThumbJPG_runaway} company={'Runaway pets'} desc={`Over 10 million pets run away every year & only 1 in 10 are ever reunited with their owners. So what do you do when you lose a pet? There’s not really a manual written for something like this. A quick google search will tell you to contact shelters, vets, etc. Then start posting on social media and hope it catches someone's attention. You may even post flyers around your block.`} />

          <Preview src={ThumbJPG_mendr} company={'mendr'} desc={`mendr was formerly trading under the name of BevWizz, where for years they were fixing the big restaurant groups and franchised hospitality business equipment. The mission of its CEO, Justin Morris, was that they wanted to expand this service to cater for everyone, from your huge fast food chain to your local chippy.`} />

          <Preview src={ThumbJPG_cooltraxApp} company={'cooltrax app'} desc={`Cooltrax the app was an iOS &amp; Android app built for the technicians working with the company BevWizz. BevWizz needed a way to know what job a technician was currently doing and or going to do in that day. They also needed to know how long the job would take, what was the problem, how much would/ did it cost to complete the work, where they currently was, etc.`} />

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
