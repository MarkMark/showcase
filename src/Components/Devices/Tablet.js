import React from 'react'
import classNames from 'classnames'

import Img from '../Image/Img'

import DefaultTablet from './Images/tablet-layout.png'
import DefaultTabletLandscape from './Images/tablet-layout-landscape.png'

export default function Tablet({
  shade = 'dark',
  landscape = false,
  classes = '',
  src = !landscape ? DefaultTablet : DefaultTabletLandscape,
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
        'm-tablet',
        { 'm-tablet--light': shade === 'light' },
        { 'm-tablet--landscape': landscape },
        classes
      )}
    >
      <div className="m-tablet__screen">
        <Img {...imgAttr} />
      </div>
    </div>
  )
}
