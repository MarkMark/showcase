import React from 'react'
import classNames from 'classnames'

export default function Mobile({
  shade = 'dark',
  notch = true,
  landscape = false
}) {
  const ATTR = {
    ...(shade === 'dark'
      ? { className: 'm-device' }
      : { className: 'm-device m-device--light' }),
    ...(landscape && { className: 'm-device--landscape' })
  }

  return (
    <div
      className={classNames(
        'm-device',
        { 'm-device--light': shade === 'light' },
        { 'm-device--landscape': landscape }
      )}
    >
      {notch && <span className="m-device__notch" />}
      <div className="m-device__screen" />
    </div>
  )
}
