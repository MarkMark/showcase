import React, { Component } from 'react'
import { NavLink }          from 'react-router-dom';


class Preview extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {

    let { src, srcFallback, company, desc } = this.props

    return (

      <div className="o-layout__item u-1/2 u-1/4@tablet">
        <NavLink className="c-previews__preview" to={`showcase/${company.toLowerCase().replace(/\s/g, '-')}`}>
          <div className="c-previews__preview__screenshot">

            <div className="c-previews__preview__desc">
              <div>
                <h4>{ company }</h4>
                <p>{ desc }</p>
              </div>
            </div>

            <img
              ref={img => this.img = img}
              src={src}
              onError={() => this.img.src = srcFallback}
              alt={` ${company} thumbnail`}
            />

          </div>
          <p>{ company }</p>

        </NavLink>
      </div>

    )

  }

}

export default Preview;
