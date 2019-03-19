import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="s-header">
      <div className="s-header__wrapper">
        <NavLink to="/" className="a-headerLogo">
          mshowcase.
        </NavLink>

        <nav className="m-nav">
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/showcase">showcase</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
