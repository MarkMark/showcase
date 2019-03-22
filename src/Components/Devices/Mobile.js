import React from 'react'
import classNames from 'classnames'

export default function Mobile({
  shade = 'dark',
  notch = true,
  landscape = false
}) {
  return (
    <div
      className={classNames(
        'm-mobile',
        { 'm-mobile--light': shade === 'light' },
        { 'm-mobile--landscape': landscape }
      )}
    >
      {notch && <span className="m-mobile__notch" />}
      <div className="m-mobile__screen" />
    </div>
  )
}
