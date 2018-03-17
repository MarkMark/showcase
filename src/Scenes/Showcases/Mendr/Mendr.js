import React, { Component }    from 'react';
import Hero                    from './Components/Hero'
import Linebreak               from '../../../Components/Linebreak/Linebreak'


import ShowcasesPNG_mac        from '../../../img/showcase/mendr/showcase-mac-mendr.png'
import ShowcasesPNG_macbook    from '../../../img/showcase/mendr/showcase-macbook-mendr.png'
import ShowcasesPNG_responsive from '../../../img/showcase/mendr/showcase-responsive-full.png'


class Mendr extends Component {

  render() {

    return (

      <section>


        <Hero />


        <div className="o-wrapper">

          <h3>Overview</h3>

          <div className="o-layout u-margin-bottom-large">

            <div className="o-layout__item u-1/1 u-1/2@tablet">
              <h4>About the Project</h4>

              <p>mendr was formerly trading under the name of BevWizz, where for years they were fixing the big restaurant groups and franchised hospitality business equipment.</p>

              <p>The mission of its CEO, Justin Morris, was that they wanted to expand this service to cater for everyone, from your huge fast food chain to your local chippy.</p>

              <p>It needed to be as easy & fast as possible to get your broken item fixed.</p>
            </div>

            <div className="o-layout__item u-1/1 u-1/2@tablet">
              <h4>My Role</h4>

              <p>As the senior Front-End developer, it was my responsibility to build, test, oversee and advise on all things front-end related. This included;</p>


              <ol>
                  <li>Setting out the development structure of the project</li>
                  <li>Defining naming conventions</li>
                  <li>Utilising the best framework</li>
                  <li>Ensuring well written, manageable code</li>
                  <li>Utilising automated scripting</li>
                  <li>Browser support</li>
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
              <p>Relying on technicians is scary & it's not something I thought about before working with mendr. In an industry where so much relies on your fridge, oven, etc & to have that break down can be the end of your business. Then having to find a reliable tech who won't overcharge you or just won't show up is a very real problem that businesses deal with every day.</p>

                <p>So to have an industry leader such as mendr, accessible to every business. To have them there to help you and to ensure that you won't be overcharged or left in the cold, that kind of service is priceless.</p>
            </div>
          </div>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h5>The Problem</h5>

              <p>mendr is groundbreaking, there isn't a company out there that offer the service that they do. So when building a modern website for a modern company there's always a problem with older browsers & or non-tech savvy customers.</p>

              <p>We wanted to make mendr as accessible and open to use to everyone and make their user journey as pleasant and easy as possible. Understanding that the customers would already be under pressure & stressed due to a broken item & we didn't want to add to that.</p>
            </div>
          </div>

          <div className="o-layout u-margin-bottom-large u-text-align--center">
            <div className="o-layout__item u-1/1">
              <img src={ShowcasesPNG_macbook} alt="Mendr macbook" />
            </div>
          </div>
        </div>


        <Linebreak />


        <div className="o-wrapper">

          <h3>Process, Insight & Solution</h3>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h4>The Benefits of Starting From Scratch</h4>

              <p>The web has changed drastically and truly for the better in such a short amount of time. The mobile product notoriously was treated primarily as a companion to the main product, the web. Most features were designed and built for desktop first and later integrated into the handheld application. We needed to flip this old way of thinking on its head and we built mobile up.</p>

            </div>
          </div>

          <div className="o-layout u-margin-bottom-large u-text-align--center">
            <div className="o-layout__item u-1/1">
              <img src={ShowcasesPNG_responsive} alt="Mendr macbook" />
            </div>
          </div>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h4>Frameworks</h4>

              <p>For a website/ web app like mendr, we needed a solid framework that could handle the advanced tasks that we were faced with. We needed to be able to break down large chunks of layout and code then inject them multiple times across the site, while also using a language that everyone is familiar with.</p>

              <p>For this, we chose Google’s own, <b>AngularJS</b>. Arguably the most powerful framework on the market at this current time. With its seamless integration with mendr’s existing backend and it's easy to use syntax, it was a unanimous decision.</p>

            </div>
          </div>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h4>Languages</h4>

              <p><b>JS:</b> Due to our choice of using <b>AngularJS</b>, it was a no-brainer to use <b>TypeScript</b>. Being able to write the latest <b>ES6</b> scripts, utilising modules, classes & its built-in static type-checking, reduced missed bugs and kept our code clean & <span title="Don't Repeat Yourself">DRY</span>.</p>

              <p><b>CSS:</b> My personal opinion is that <b>SCSS</b> is the best preprocessor. Using advanced features which include variables, mixins, functions and maps, I was able to give mendr a truly bespoke and individual look. Organising SCSS is really important as spreadsheets can quickly grow and get out of hand so utilising <b>BEM</b> naming convention and organising the folder structure into the popular inverted triangle methodology kept the development area as clean and as <span title="Don't Repeat Yourself">DRY</span> as possible.</p>

            </div>
          </div>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h4>Organisation</h4>

              <p>Laying out a project is usually one of the most overlooked aspects but is one of the most important areas to think about.</p>

              <p>Creating an easy to understand project drastically speeds up development, whether you're a junior developer or a senior if you can't easily navigate your way around a project you're going to have problems in the future.</p>

              <p>Keeping that in mind I created a highly organised and clean working environment by keeping the folder structure small and highly purposed to languages & tasks which meant navigating around the project became simple and effective.</p>

            </div>
          </div>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h4>Fallbacks</h4>

              <p>Using the latest tools available ultimately means that browsers can fall behind. If you’re one of the 5% who still uses IE or Edge then I highly advise you to make the switch to <b>Chrome</b> or <b>Firefox</b>. But some people/ organisations, unfortunately, can't do this, so being able to support these browsers to give the end users a decent viewing experience is important. For this I used a number of <b>Polyfills</b> & <b>SHIV’s</b>, The aim of these packages is to provide the next best thing for the browser. For example the “header” element, the <b>SHIV</b> detects the browser doesn't know what this element is and so it converts it to something that it does know. For advanced styling detection, I used <b>Modernizr</b> which simply tells me if the browser can handle styling related attributes, if it doesn't I can then rewrite my code to fallback to something the browser would know.</p>

            </div>
          </div>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h4>Speed Matters</h4>

              <p>Everyone who has ever used the internet knows how irritating a slow website is. On average, if a website takes more than 3 seconds to load, you will lose customers.</p>

              <p>I combatted this issue using <b>Gulp</b> by compressing everything. Every time a developer hits save on a file, a compressed version of that file gets generated.</p>

              <p>mendr is very image heavy and notoriously images take a long time to load. So we needed a solution on how to show clear crisp images but being able to load them at the fraction of the speed. Utilising Google’s new image format <b>WebP</b> made a huge performance increase with mendr’s load speed. mendr’s classic “hero image” on the home page is a testament to that, a compressed JPG is 1.3MB large where the same WebP image is 118KB which is a ridiculous 90% smaller file size & saving around 10 seconds of load speed, may not seem like much but that really adds up.</p>

              <p>Combine that with minifying and concatenating all HTML, CSS & JavaScript sitewide we reduced the size of the entire project from 18.5MB to 13MB & by enabling server caching the website loads like a flash.</p>

            </div>
          </div>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h4>Automation</h4>

              <p>mendr’s a huge project and without utilising <b>Gulp</b>, which is a console javascript task runner. We simply wouldn't have had the manpower to build it.</p>

              <p>An essential part of building a website is to ensure all developers code to a high standard. Basic tests and code reviews is a full-time job by itself. To do this I set up strict rules for all <b>TS</b> & <b>SCSS</b> changes. Some were simple styling rules, where all developers had to indent their code by two spaces while others were there to stop potential bugs from happening, such as wrapping an “if” statement with curly braces. Every time a developer would hit save, <b>Gulp</b> would check their work & would not let the developer continue if there were issues with their code.</p>

              <p>Gulp was also tasked with concatenating and compressing every file from the dev folder and moving it to the distribution folder, converting high-quality images to <b>WebP</b> format and compressing the fallbacks - all at a blink of an eye.</p>

            </div>
          </div>


          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <h4>Revision Control</h4>

              <p>Working in a team can be challenging. One of the key problems web developers face is that we can break everything, and it's all too easy to do this. Combine that with a whole team of developers all with various degrees of skills and there’s a high chance the websites is just not going to work.</p>

              <p>To combat this, I introduced the revision control of <b>Git</b>, and specifically the tool of <b>Git Flow</b>. What this allows is a developer to “branch off” the main development workflow and to implement their new “feature”. Not until their new feature is 100% completed, tested and reviewed can they merge back into the main development branch. Working like this keeps the main development branch safe.</p>

              <p>Developers while checking in their changes, are required to write short messages that are available to be seen by all developers. By implementing  <b>AngularJS</b> commit naming convention allowed us to see if a developer was working on a; Feat, Fix, Doc, Style, Refactor, Test or Chore. By simply doing this, it allowed us to quickly scan development change history.</p>

            </div>
          </div>

        </div>


        <Linebreak />


        <div className="o-wrapper">

          <h3>The results</h3>

          <div className="o-layout u-margin-bottom-large">

            <div className="o-layout__item u-1/1">

            <p>It’s still early days for mendr & it is still in the beta phase. Even so, already they have a steady stream of clients & with adverts and a real release date on the horizon it won't be long until every business owner will be using them.</p>

            </div>

          </div>

          <div className="o-layout u-text-align--center">
            <div className="o-layout__item u-1/1">
              <img src={ShowcasesPNG_mac} alt="Mendr macbook" />
            </div>
          </div>

        </div>

      </section>

    )

  }

}

export default Mendr;
