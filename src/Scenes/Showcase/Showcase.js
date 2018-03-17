import React, { Component } from 'react';

import Preview              from '../../Components/Preview/Preview'

import ThumbJPG_zensation    from '../../img/thumbs/zensation.jpg'
import ThumbJPG_runaway      from '../../img/thumbs/runaway-pets.jpg'
import ThumbJPG_mendr        from '../../img/thumbs/mendr.jpg'
import ThumbJPG_cooltraxApp  from '../../img/thumbs/cooltrax-app.jpg'

import ThumbJPG_sanctuaryApp from '../../img/thumbs/sanctuary-app.jpg'
import ThumbJPG_cooltrax     from '../../img/thumbs/cooltrax.jpg'
import ThumbJPG_betfair      from '../../img/thumbs/betfair.jpg'
import ThumbJPG_empire       from '../../img/thumbs/empire.jpg'
import ThumbJPG_enracha      from '../../img/thumbs/enracha.jpg'
import ThumbJPG_fiction      from '../../img/thumbs/fiction-candy.jpg'
import ThumbJPG_foxwoods     from '../../img/thumbs/foxwoods.jpg'
import ThumbJPG_jetstar      from '../../img/thumbs/jetstar.jpg'
import ThumbJPG_kearandku    from '../../img/thumbs/kear-and-ku.jpg'
import ThumbJPG_moneyGaming  from '../../img/thumbs/money-gaming.jpg'
import ThumbJPG_tchoi        from '../../img/thumbs/tchoidesign.jpg'


class Showcase extends Component {

  render() {

    return (

      <section className="u-padding-top-large">

        <div className="o-wrapper">

          <h3>Latest work</h3>

          <div className="o-layout c-previews">

            <Preview src={ThumbJPG_sanctuaryApp} company={'Sanctuary app'} desc={`Sanctuary is a new way of making sure all your employees are safe by sending push notifications to your employees and getting a real-time response back.`} />

            <Preview src={ThumbJPG_zensation} company={'Zensation'} desc={`Zensation is a popular Tea House in Redfern, Sydney. Echoing the stylings of a 1920s Shanghai Tea House. It's a truly unique experience to sit down relax and try the best tea in Australia while eating some delicious Yum Cha!`} />

            <Preview src={ThumbJPG_runaway} company={'Runaway pets'} desc={`Over 10 million pets run away every year & only 1 in 10 are ever reunited with their owners. So what do you do when you lose a pet? There’s not really a manual written for something like this. A quick google search will tell you to contact shelters, vets, etc. Then start posting on social media and hope it catches someone's attention. You may even post flyers around your block.`} />

            <Preview src={ThumbJPG_mendr} company={'mendr'} desc={`mendr was formerly trading under the name of BevWizz, where for years they were fixing the big restaurant groups and franchised hospitality business equipment. The mission of its CEO, Justin Morris, was that they wanted to expand this service to cater for everyone, from your huge fast food chain to your local chippy.`} />

            <Preview src={ThumbJPG_cooltraxApp} company={'cooltrax app'} desc={`Cooltrax the app was an iOS & Android app built for the technicians working with the company BevWizz. BevWizz needed a way to know what job a technician was currently doing and or going to do in that day. They also needed to know how long the job would take, what was the problem, how much would/ did it cost to complete the work, where they currently was, etc.`} />


            <Preview src={ThumbJPG_cooltrax} company={'cooltrax'} desc={``} />

            <Preview src={ThumbJPG_jetstar} company={'Jetstar'} desc={`Jetstar Airways Pty Ltd, trading as Jetstar, is an Australian low-cost airline headquartered in Melbourne. It is a wholly owned subsidiary of Qantas, created in response to the threat posed by low-cost airline Virgin Australia.`} />

            <Preview src={ThumbJPG_tchoi} company={'Tchoi design'} desc={`Tchoi design is my ex colleague and good friend, Jeremie Erimitchoi’s, web design portfolio. Myself and Jeremie worked together at GameAccount Network in London, where Jeremie was my front-end teams web designer. Jeremie approached me in 2015 to build him a simple and clean website where he could showcase all his web and logo design work.`} />

            <Preview src={ThumbJPG_betfair} company={'Betfair'} desc={`Betfair Casino New Jersey offers a variety of fun NJ online caisno gambling games from Blackjack tables, to slots and Roulette. Join today for your chance to win big.`} />

            <Preview src={ThumbJPG_empire} company={'Empire'} desc={`Empire City Online Casino is free to play and built for entertainment, so you can experience real casino games for free, in the comfort of your own home.`} />

            <Preview src={ThumbJPG_foxwoods} company={'Foxwoods'} desc={`Since 1992, Foxwoods Resort Casino has offered guests The Wonder Of It All as the premier resort destination in the Northeast. As the largest resort casino in North America, Foxwoods offers a vast array of gaming in seven casinos; AAA Four-Diamond hotels, restaurants from gourmet to quick service, world-renowned spas, award-winning golf, state-of-the-art theaters, exclusive retailers and free-to-play online casino games at FoxwoodsONLINE.com.`} />

            <Preview src={ThumbJPG_enracha} company={'Enracha'} desc={`Enracha. Rank's community-based gaming business for the Spanish market. The brand offers a range of popular community games like bingo as well as electronic roulette and slot machine games, sports betting and food, drink and live entertainment.`} />

            <Preview src={ThumbJPG_moneyGaming} company={'MoneyGaming'} desc={`MoneyGaming.com is one of the UK’s most popular casino gaming websites, online since 2005 and part of the GameAccount Network group of companies since 2010. Established in 2002, GameAccount Network is a UK company headquartered in London, United Kingdom and ranked 29th fastest-growing UK technology company in 2011 by the Sunday Times newspaper.`} />


            <Preview src={ThumbJPG_fiction} company={'Fiction candy jewellery'} desc={``} />

            <Preview src={ThumbJPG_kearandku} company={'Kear and ku'} desc={``} />

          </div>

        </div>


      </section>

    )

  }

}

export default Showcase;
