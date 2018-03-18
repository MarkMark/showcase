import React, { Component } from 'react'
import { NavLink }          from 'react-router-dom'
import classNames           from 'classnames'


class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      navActive: false
    };
  }

  render() {

    let { navActive } = this.state

    return (

      <header className="c-header">
        <div className="o-wrapper">

          <NavLink to="/" className="c-header__logo">
            <span>M</span>
          </NavLink>

          <i className="o-icon--menu c-header__icon" onClick={ () => this.setState({ navActive: !navActive }) }></i>

          <nav className={classNames(
            { 'active': navActive }
          )}>
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
