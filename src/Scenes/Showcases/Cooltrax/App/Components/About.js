import React from 'react'

import LineBreak from '../../../../../Components/LineBreaks/LineBreak'
import Img from '../../../../../Components/Image/Img'

import CooltraxSettings from '../Images/CooltraxSettings.png'

export default function About() {
  return (
    <section className="s-skew u-padding-vertical">
      <div className="o-wrapper">
        <div className="o-layout">
          <div className="o-col--12 o-col--6@tablet">
            <h3>About the Project</h3>

            <p>
              Cooltrax's app is an iOS & Android app built for the technicians
              working with the company BevWizz. BevWizz needed a way to know
              what job a technician was currently doing and or going to do in
              that day. They also needed to know how long the job would take,
              what was the problem, how much would/ did it cost to complete the
              work, where they currently were, etc. Before the app was built the
              only way the staff could find out all these answers was to
              physically call the technician and ask them, which was a huge
              drain on time & resources.
            </p>
          </div>

          <div className="o-col--12 o-col--6@tablet">
            <h3>My Role</h3>

            <p>
              As the senior Front-end developer, it was my job to build, test,
              oversee and advise on all things front-end related. Which
              included;
            </p>

            <ol>
              <li>Setting out the development structure of the project</li>
              <li>Defining naming conventions</li>
              <li>Utilising the best framework</li>
              <li>Ensuring well written, manageable code</li>
              <li>Utilising automated scripting</li>
              <li>And much more</li>
            </ol>
          </div>
        </div>

        <LineBreak />

        <div className="o-layout">
          <div className="o-col">
            <h3>Project must-haves</h3>

            <p>
              Cooltrax the app needed to be lightweight, easy to use & reliable.
              We needed to make sure it worked on all devices; tablets &
              mobiles. But most importantly, it needed to do the following
              things;
            </p>

            <ol>
              <li>
                <b>Take photos:</b> So BevWizz could clearly see the issues that
                the tech was facing.
              </li>
              <li>
                <b>Get location:</b> BevWizz wanted to know where technicians
                were so they could easily send them new jobs that were closest
                to them.
              </li>
              <li>
                <b>Push notifications:</b> When jobs were offered we needed to
                alert the tech of this.
              </li>
              <li>
                <b>Auto update:</b> This may seem like a small deal, however,
                Cooltrax the App wasn't hosted on the Play or App store. So we
                needed to manually check if the techs app version was up to date
                & if not trigger an auto update.
              </li>
            </ol>
          </div>
        </div>

        <LineBreak />

        <div className="o-layout">
          <div className="o-col">
            <h3>Initial thoughts</h3>

            <p>
              When I first came to BevWizz as a consultant, Cooltrax the App was
              already being used by the technicians out in the field. BevWizz
              knew the App was really their selling point to getting new
              technicians & clients on board. As work needed to be approved by
              BevWizz and the client, this would really give the client peace of
              mind & not to mention everything being logged for everyone’s
              safety. However the overall view by the technicians using the app
              and the staff was simply that, “it works”. We wanted to create
              something better. Not only improving the look of the app but also
              the user's experience on the app.
            </p>

            <p>We wanted techs to say, “this is great”.</p>
          </div>
        </div>

        <LineBreak />

        <div className="o-layout">
          <div className="o-col--12 o-col--6@tablet">
            <h3>Front-end framework</h3>

            <p>
              My team at BevWizz was a small & due to our limited size and
              resources it was out of the question to build a native app. We
              chose to build the app utilising Cordova. Cordova is an
              open-source, cross-device mobile development platform that allowed
              us to create mobile apps using JavaScript, HTML, and CSS that can
              be deployed to each device, rather than programming in each
              device's native language. Cordova also provides a way for us
              access the core mobile hardware like accelerometer, camera,
              contacts, and GPS. For an app like Cooltrax, we needed a solid
              framework that could handle the advanced tasks that we were faced
              with. We needed to be able to break down large chunks of layout
              and code then inject them multiple times across the site, while
              also using a language that everyone is familiar with. For this, we
              chose Google’s own, AngularJS. Arguably the most powerful
              framework on the market at this current time. With its seamless
              integration with Cooltrax's existing backend and it's easy to use
              syntax, it was a unanimous decision.
            </p>
          </div>

          <div className="o-col--12 o-col--6@tablet">
            <h3>UI & UX</h3>

            <p>
              Cooltrax's app originally was a very dark, there was a lot of dark
              blues, blacks and greys. What this did was give the app a very
              corporate look and feel, and sometimes hard to read important text
              on the screen. As there was no designer for this project I took
              inspiration from Google’s own material design, to create a
              familiar and easy to use app. I also relied heavily on icons for a
              user's association with an action, this allowed the user to
              quickly know what to do without cluttering up the view with too
              many words. Some key principles that I took using Google’s
              material design were to use different opacity on text to
              distinguish the importance of that text. For example, the primary
              text should be at 87% while secondary text should be displayed at
              54%. I used opacity over grey as black or white text that is
              transparent remains legible and vibrant against background
              colours, which makes it more flexible than grey.
            </p>
          </div>
        </div>

        <LineBreak />

        <div className="o-layout">
          <div className="o-col" />
        </div>

        <div className="o-layout">
          <div className="o-col">
            <h3>The results</h3>

            <p>
              From day one the techs loved the new clean app. The overall time
              that it took a tech to complete each job was drastically cut.
              Techs could now navigate all jobs and manage them easier. To this
              day around 98% of all BevWizz techs are using the new app. There
              was also a plus side for new developers joining BevWizz. They were
              better able to navigate the project, add new features and to bug
              test.
            </p>
          </div>
        </div>

        <div className="o-layout">
          <div className="o-col u-text-align--center">
            <Img src={CooltraxSettings} alt={'Cooltrax app setting scene'} />
          </div>
        </div>
      </div>
    </section>
  )
}
