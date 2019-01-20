import React from 'react'
import { NavLink } from 'react-router-dom'


function Preview({ data = {} }) {
  return (
    <div className="c-previews">
      <NavLink className="c-previews__preview" to={`showcase/${data.name.toLowerCase().replace(/\s/g, '-')}`}>
        <div className="c-previews__preview__screenshot">
          <div className="c-previews__preview__desc">
            <div>
              <h4>{data.name}</h4>
              <p>{data.desc}</p>
            </div>
          </div>

          <img
            ref={img => data.img = img}
            src={data.src}
            onError={() => data.img.src = data.srcFallback}
            alt={`${data.name} thumbnail`}
          />
        </div>
        <p>{data.name}</p>
      </NavLink>
    </div>
  )
}

export default Preview;
