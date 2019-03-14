import React, { Component } from "react";

// import WEBPzensation        from '../../../../img/showcase/zensation/showcase-feature.webp'
import PNGzensation from "../../../../img/showcase/zensation/showcase-feature.png";

class Hero extends Component {
  render() {
    return (
      <div className="c-hero c-hero--zensation">
        <div className="o-wrapper">
          <h1>Zensation</h1>
          <p>A retrospective showcase</p>

          <div className="u-text-align--center">
            <a
              href="http://zensation.com.au/"
              className="c-button c-button--white"
              target="_blank"
              rel="noopener noreferrer"
            >
              website
            </a>
          </div>

          <img
            ref={img => (this.img = img)}
            src={PNGzensation}
            onError={() => (this.img.src = PNGzensation)}
            alt="Zensation"
          />
        </div>
      </div>
    );
  }
}

export default Hero;
