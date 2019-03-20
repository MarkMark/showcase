import React from 'react'
import classNames from 'classnames'

export default function Laptop({ shade = 'dark', shadow = true }) {
  return (
    <div
      className={classNames(
        'm-laptop',
        {
          'm-laptop--light': shade === 'light'
        },
        { 'm-laptop--shadow': shadow }
      )}
    >
      <div className="m-laptop__lid">
        <div className="m-laptop__screen" />
      </div>
      <div className="m-laptop__chassis">
        <div className="m-laptop__keyboard" />
        <div className="m-laptop__touchPad" />
      </div>
    </div>
  )
}
