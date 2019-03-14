import React, { Component } from "react";

// import WEBPsanctuary        from '../../../img/showcase/showcase/showcase-feature.webp'
import PNGFeature from "../../../img/showcase/showcase/showcase-feature.png";

class Hero extends Component {
  render() {
    return (
      <div className="c-hero c-hero--showcase">
        <div className="o-wrapper">
          <h1>Showcase</h1>
          <p>Checkout my latest work</p>

          <img
            ref={img => (this.img = img)}
            src={PNGFeature}
            onError={() => (this.img.src = PNGFeature)}
            alt="Showcase feature images"
          />
        </div>
      </div>
    );
  }
}

export default Hero;
