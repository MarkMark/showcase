import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Hero from "./Components/Hero";
import Linebreak from "../../../Components/Linebreak/Linebreak";

import ShowcasesPNG_mac from "../../../img/showcase/zensation/showcase-mac.png";
// import ShowcasesWEBP_mac from '../../../img/showcase/zensation/showcase-mac.webp'

class Zensation extends Component {
  render() {
    return (
      <section>
        <Helmet>
          <title>Zensation showcase</title>
          <meta
            name="description"
            content="Take a look at my work with Zensation"
          />
        </Helmet>

        <Hero />

        <div className="o-wrapper">
          <h3 className="u-text-align--center">Overview</h3>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <p>
                Let's say you're a tea lover. You cant get enough of Milky
                Oolong, Hibiscus or that classic Lapsang Souchong that Zensation
                specialised in. They've actually been to the mountains where
                these teas are sourced, you cant get that kind of quality from
                anywhere. Zensation is owned by father & daughter team Raymond
                and Christina Leung who want to expand their world-class tea to
                the whole of Australia & soon the world.
              </p>
            </div>

            <Linebreak />
          </div>
        </div>

        <div className="o-wrapper">
          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1 u-1/2@tablet">
              <h3 className="u-text-align--center">The problem</h3>

              <p>
                So you love Zensation Tea but cant make it to the store, what
                then? The only logical solution is to have a website where you
                can actually sell products online which means they need an
                e-commerce platform. By their nature e-commerce websites are a
                lot of work & there are many working parts. Products need to be
                uploaded, good descriptions need to be written and templates
                need to be customisable.
              </p>
            </div>

            <div className="o-layout__item u-1/1 u-1/2@tablet">
              <h3 className="u-text-align--center">The solution</h3>

              <p>
                I built Zensation a simple to use website on top of the popular
                e-commerce platform OpenCart. I created a specific theme based
                on their designs which can be edited by them on the CMS. After
                the completion of the main development, I left a PDF with as
                much info as possible on how to upload products, take good
                photos, edit their theme & more.
              </p>
            </div>
          </div>

          <Linebreak />
        </div>

        <div className="o-wrapper">
          <h3 className="u-text-align--center">Key features</h3>

          <div className="o-layout u-margin-bottom-large">
            <div className="o-layout__item u-1/1">
              <ol>
                <li>
                  <b>CMS.</b> Ability to upload products, images & descriptions.
                </li>
                <li>
                  <b>Edit theme.</b> Ability to change CSS to alter the theme
                  and look of the website.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="o-wrapper u-text-align--center">
          <img
            ref={img => (this.img = img)}
            src={ShowcasesPNG_mac}
            onError={() => (this.img.src = ShowcasesPNG_mac)}
            alt="Zensation homepage on macBook"
          />
        </div>
      </section>
    );
  }
}

export default Zensation;
