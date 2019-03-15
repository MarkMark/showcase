import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Btn({
  href = '/',
  text = 'Submit',
  classes = 'a-button',
  target = ''
}) {
  let attr = {
    ...(!!target && { target: target }),
    ...(target === '_blank' && { rel: 'noopener noreferrer' })
  }

  return (
    <NavLink className={classes} to={href} {...attr}>
      {text}
    </NavLink>
  )
}
