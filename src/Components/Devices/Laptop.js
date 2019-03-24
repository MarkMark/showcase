import React from 'react'
import classNames from 'classnames'

import Img from '../Image/Img'

import LaptopDefault from './Images/laptop-layout.png'

export default function Laptop({
  shade = 'dark',
  shadow = true,
  classes = '',
  src = LaptopDefault,
  fallback = '',
  imgClasses = '',
  alt = ''
}) {
  let imgAttr = {
    ...{ src: src },
    ...(!!fallback && { fallback: fallback }),
    ...(!!imgClasses && { classes: imgClasses }),
    ...(!!alt && { alt: alt })
  }

  return (
    <div
      className={classNames(
        'm-laptop',
        {
          'm-laptop--light': shade === 'light'
        },
        { 'm-laptop--shadow': shadow },
        classes
      )}
    >
      <div className="m-laptop__lid">
        <div className="m-laptop__screen">
          <Img {...imgAttr} />
        </div>
      </div>
      <div className="m-laptop__chassis">
        <div className="m-laptop__keyboard" />
        <div className="m-laptop__touchPad" />
      </div>
    </div>
  )
}
