import React, { Component } from 'react';
import { Helmet }           from 'react-helmet'

import Hero                 from './Components/Hero'
import Linebreak            from '../../../Components/Linebreak/Linebreak'

import ShowcasesPNG_hand    from '../../../img/showcase/runaway-pets/runaway-pets-hand.png'
import ShowcasesPNG_mobile  from '../../../img/showcase/runaway-pets/runaway-pets-mobile-3d.png'
import ShowcasesWEBP_hand   from '../../../img/showcase/runaway-pets/runaway-pets-hand.webp'
import ShowcasesWEBP_mobile from '../../../img/showcase/runaway-pets/runaway-pets-mobile-3d.webp'
// import ShowcasesPNG_notifi  from '../../../img/showcase/runaway-pets/runaway-pets-notification.png'


class Runaway extends Component {

  render() {

    return (

      <section>

        <Helmet>
          <title>Runaway Pets showcase</title>
          <meta name="description" content="Take a look at my work with Runaway Pets" />
        </Helmet>


        <Hero />


        <div className="o-wrapper">

          <h3>Overview</h3>

          <div className="o-layout u-margin-bottom-large">

            <div className="o-layout__item u-1/1 u-1/2@tablet">
              <h4>About the Project</h4>

              <p>Over 10 million pets run away every year & only 1 in 10 are ever reunited with their owners. That statistic hit me pretty hard & I personally wanted to help get those numbers up.</p>

              <p>I sat down and started to plot out the best way to achieve this goal and how to reach the most people and to build an app was the best solution.</p>
            </div>

            <div className="o-layout__item u-1/1 u-1/2@tablet">
              <h4>My Role</h4>

              <p>This was my personal project so I had the following tasks to do;</p>


              <ol>
                  <li>Design the brand identity (colour schemes, logo & the look and feel of the app)</li>
                  <li>Decide on the best front-end frameworks & languages to use</li>
                  <li>Decide on the best back-end frameworks & languages to use</li>
                  <li>Device support</li>
                  <li>Market the app & create marketing material</li>
                  <li>And much more</li>
              </ol>
            </div>

          </div>
        </div>


        <Linebreak />


        <div className="o-wrapper">
          <h3>The Challenge</h3>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h4>Project Background.</h4>

              <p>So what do you do when you lose a pet? There’s not really a manual written for something like this. A quick google search will tell you to contact shelters, vets, etc. Then start posting on social media and hope it catches someone's attention. You may even post flyers around your block.</p>

              <p>But to do all of this is hard work and takes a lot of time, a lot of effort and potentially a lot of cash.</p>

              <p>I just wanted to make it easier and quicker.</p>

            </div>
          </div>


          <div className="o-layout u-text-align--center">
            <div className="o-layout__item u-1/1">

              <img
                ref={img => this.img = img}
                src={ShowcasesWEBP_mobile}
                onError={() => this.img.src = ShowcasesPNG_mobile}
                alt="Runaway pets mobile"
              />

            </div>
          </div>


          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h4>The Problem</h4>

              <p>Creating an app like this requires one thing. Users. Without users, nobody gets notified of your lost pet.</p>

              <p>We use the poster (which is the person who has either lost or found a pet), to advertise for us. With one click of a button, they can share their post with all their social media friends.</p>

              <p>We also encourage users of the app to rate once the post is complete.</p>

            </div>
          </div>

        </div>


        <Linebreak />


        <div className="o-wrapper">

          <h3>Process, Insight & Solution</h3>
          <h4>App Must-Haves</h4>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">

              <h5>Mapping</h5>
              <p>Firstly we need to know where the pet was last seen. Using Google Maps was always going to be the best bet as the added features and support they provide is second to none. So with a simple touch on the map, we knew the street, city, post/ zip code & country, where the pet was last seen.</p>

            </div>
          </div>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">

              <h5>Camera/ Image upload</h5>
              <p>We need to know what the lost or found pet looks like so being able to use the phone's camera or internal storage was a must.</p>

            </div>
          </div>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">

              <h5>Notifications</h5>
              <p>When a lost or found post has been created, we want to let everyone in that area know. We do this via push notifications & a simple click on the notification will give you the pets detail.</p>

            </div>
          </div>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">

              <h5>Communication</h5>
              <p>We utilise the phone's built-in communication methods to contact posters. One touch of a button and up pops your email client or a method to call the poster.</p>

            </div>
          </div>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">

              <h5>Social</h5>
              <p>We wanted to make it super simple to get the word out that your pet is either missing or has been found. So in one touch you can share your pet's detail on either facebook, twitter or Instagram & pre hashtagged to make it even easier!</p>

            </div>
          </div>


          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h4>Front-End Frameworks</h4>

              <p>Runaway Pets needed a solid framework that could handle the advanced tasks that were needed for the app. I needed to be able to split up large chunks of layout and code and reuse modules across the entire app.</p>

              <p>For this, I decided to use Google's own, AngularJS.</p>

            </div>
          </div>


          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h4>Back-End Frameworks</h4>

              <p>Apart from the odd tinkering around with a WordPress or Magento website, I’ve usually kept my hands clean from the back-end languages and processes. So naturally, I decided to go with a language I know extremely well. JavaScript.</p>

              <p>NodeJS was my go-to for creating a REST API due to the fact that I know JavaScript, (ES6). Node is also insanely fast due to its ‘V8 Engine’ that was developed by Google & another huge bonus for me was how many plugins have been written to manage so many tasks, such as pagination, IAP validation, etc. This alone probably saved me hundreds of development hours.</p>

            </div>
          </div>


          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h4>Platforms</h4>

              <p>I decided to release the app on the two most popular platforms, iOS and Android.</p>

            </div>
          </div>

        </div>


        <Linebreak />


        <div className="o-wrapper">

          <h3>The results</h3>

          <div className="o-layout u-margin-bottom-large">

            <div className="o-layout__item u-1/1">

            <p>It's still early days for Runaway Pets, with new features and improvements in the wire. Even still we’re getting a steady flow of users posting, a healthy following on social media & great rating on both Apple & Android app stores.</p>

            </div>

          </div>
        </div>


        <div className="o-wrapper u-text-align--center">

          <img
            ref={img => this.img = img}
            src={ShowcasesWEBP_hand}
            onError={() => this.img.src = ShowcasesPNG_hand}
            alt="Runaway pets mobile"
          />
        </div>

      </section>

    )

  }

}

export default Runaway;
