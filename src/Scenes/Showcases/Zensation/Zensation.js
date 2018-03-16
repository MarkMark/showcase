import React, { Component } from 'react';
import Hero                 from './Components/Hero'
import Linebreak            from '../../../Components/Linebreak/Linebreak'

import ShowcasesPNG_devices from '../../../img/showcase/zensation/showcase-responsive-2.png'
import ShowcasesPNG_mac     from '../../../img/showcase/zensation/showcase-mac.png'

class Zensation extends Component {

  render() {

    return (

      <section>


        <Hero />


        <div className="o-wrapper">

          <h3>Overview</h3>

          <div className="o-layout u-margin-bottom-large">

            <div className="o-layout__item u-1/1 u-1/2@tablet">
              <h4>About the Project</h4>

              <p>Zensation is a popular Tea House in <b>Redfern, Sydney</b>. Echoing the stylings of a 1920s Shanghai Tea House. It's a truly unique experience to sit down relax and try the <b>best tea</b> in Australia while eating some delicious <b>Yum Cha</b>!</p>

              <p>The company is owned by father & daughter team Raymond and Christina Leung who want to expand their world-class tea to the whole of Australia & soon the World!</p>
            </div>

            <div className="o-layout__item u-1/1 u-1/2@tablet">
              <h4>My Role</h4>

              <p>I was approached by Raymond & Christina to design and develop an E-commerce shop that was simple to use yet powerful enough to allow them to go-wrapper and develop as there needs change.</p>


              <ol>
                  <li>Designing the UI & UX for the company</li>
                  <li>Deciding on Ecommerce packages based on clients needs</li>
                  <li>Setting up the config for the branding guidelines</li>
                  <li>Developing the website</li>
                  <li>Continuous support & future feature development</li>
                  <li>browser support</li>
              </ol>
            </div>

          </div>
        </div>


        <Linebreak />


        <div className="u-border--bottom u-margin-bottom-large">
          <div className="o-wrapper u-text-align--center">
            <img src={ShowcasesPNG_devices} alt="Zensation devices" />
          </div>
        </div>


        <div className="o-wrapper">

          <h3>Process, Insight & Solution</h3>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h4>Branding, UI & UX</h4>

              <p>I worked closely with Zensation during the branding, UI & UX planning stage.</p>

              <p>Needing to know exactly what they wanted and how they wanted the design to look. After the initial designs were completed and signed off I was ready to start the development.</p>

            </div>
          </div>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h4>Frameworks & Ecommerce packages</h4>

              <p>As I mentioned before building an E-commerce website is a lot of work. With so many great E-commerce packages available it makes no sense to start from scratch.</p>

              <p>Taking into consideration Zensations needs & future growth, I decided to use the popular OpenCart software.</p>

              <p>One major downside with OpenCart is that it uses Twitter’s Bootstrap & it’s really ingrained deep. Although after a few hours I was able to remove around 90% of it.</p>

            </div>
          </div>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h4>Fallbacks</h4>

              <p>Using the latest tools available ultimately means that browsers can fall behind. If you’re one of the 5% who still uses IE or Edge then I highly advise you to make the switch to Chrome or Firefox. But some people/ organisations, unfortunately, can't do this, so being able to support these browsers to give the end users a decent viewing experience is important. For this I used a number of Polyfills & SHIV’s, The aim of these packages is to provide the next best thing for the browser. For example the “header” element, the SHIV detects the browser doesn't know what this element is and so it converts it to something that it does know. For advanced styling detection, I used Modernizr which simply tells me if the browser can handle styling related attributes, if it doesn't I can then rewrite my code to fallback to something the browser would know.</p>

            </div>
          </div>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h4>Speed Matters</h4>

              <p>E-commerce websites are usually slow and a bit clunky. <i>They do a hell of a lot though so they can be forgiven.</i> However, I wanted to optimise Zensation’s website as much as possible.</p>

              <p>Utilising Gulp <i>(my javascript task runner of choice)</i> I was able to compress all my stylesheets and scripts to one of each and minified them heavily.</p>

              <p>Also compressing each .tpl file of my theme, along with gzipping & cache management made the website lightning quick!</p>

            </div>
          </div>

        </div>


        <Linebreak />


        <div className="o-wrapper">

          <h3>The results</h3>

          <div className="o-layout u-margin-bottom-large">

            <div className="o-layout__item u-1/1">

            <p>The website has just been made live, but already has a steady flow of clients and orders coming through.</p>

            <p>With a good marketing plan and new products being uploaded every day not to mention more countries being made available to ship to I think Zensation will be huge!</p>

            </div>

          </div>
        </div>

        <div className="o-wrapper u-text-align--center">
          <img src={ShowcasesPNG_mac} alt="Zensation mac" />
        </div>


      </section>

    )

  }

}

export default Zensation;
