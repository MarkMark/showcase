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

  if (href[0] === '/') {
    return (
      <NavLink className={classes} to={href} {...attr}>
        {text}
      </NavLink>
    )
  } else {
    return (
      <a className={classes} href={href} {...attr}>
        {text}
      </a>
    )
  }
}
