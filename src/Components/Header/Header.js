import React, { Component } from 'react'
import { NavLink }          from 'react-router-dom';


class Header extends Component {

  render() {

    return (

      <header className="c-header">
        <div className="o-wrapper">

          <NavLink to="/" className="c-header__logo">
            <span>M</span>
          </NavLink>

          <nav>
            <ul>
              <li><NavLink to="/showcase">Showcase</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>

        </div>
      </header>

    )

  }

}

export default Header;
