import React from 'react'
import classNames from 'classnames'

export default function Tablet({ shade = 'dark', landscape = false }) {
  return (
    <div
      className={classNames(
        'm-tablet',
        { 'm-tablet--light': shade === 'light' },
        { 'm-tablet--landscape': landscape }
      )}
    >
      <div className="m-tablet__screen" />
    </div>
  )
}
