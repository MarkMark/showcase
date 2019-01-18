import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    <header className="c-header">
      <div className="c-header__wrapper">

        <NavLink to="/" className="c-header__logo">
          mshowcase.
        </NavLink>

        <nav className="c-header__nav">
          <ul>
            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
            <li><NavLink to="/showcase">showcase</NavLink></li>
            <li><NavLink to="/contact">contact</NavLink></li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header
