import React from 'react'
import { NavLink } from 'react-router-dom'

import Img from '../Image/Img'

function Preview({ data = {} }) {
  return (
    <div className="m-thumb">
      <NavLink
        className="m-thumb__wrapper"
        to={`showcase/${data.name.toLowerCase().replace(/\s/g, '-')}`}
      >
        <div className="a-aspect a-aspect--16/9 m-thumb__img">
          <Img
            src={data.src}
            fallback={data.srcFallback}
            alt={`${data.name} thumbnail`}
          />
        </div>
        <div className="m-thumb__title">
          <h3>{data.name}</h3>
        </div>
        {!!data.desc && (
          <div className="m-thumb__desc">
            <h4>{data.name}</h4>
            <p>{data.desc}</p>
          </div>
        )}{' '}
      </NavLink>
    </div>
  )
}

export default Preview
