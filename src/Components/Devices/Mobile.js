import React from 'react'
import classNames from 'classnames'

import Img from '../Image/Img'

import DefaultMobile from './Images/mobile-layout.png'
import DefaultMobileLandscape from './Images/mobile-layout-landscape.png'

export default function Mobile({
  shade = 'dark',
  notch = true,
  landscape = false,
  classes = '',
  src = !landscape ? DefaultMobile : DefaultMobileLandscape,
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
        'm-mobile',
        { 'm-mobile--light': shade === 'light' },
        { 'm-mobile--landscape': landscape },
        classes
      )}
    >
      {notch && <span className="m-mobile__notch" />}
      <div className="m-mobile__screen">
        <Img {...imgAttr} />
      </div>
    </div>
  )
}
