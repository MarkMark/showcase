import React, { Component } from 'react'
import { NavLink }          from 'react-router-dom'
import classNames           from 'classnames'


class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      navActive  : false,
      navAnimate : false
    };
  }


  triggerNav () {
    let { navActive, navAnimate } = this.state

    if ( !navActive ) {
      this.setState({ navActive: !navActive })

      setTimeout(() => {
        this.setState({ navAnimate: !navAnimate })
      }, 60)

    } else {
      this.setState({ navAnimate: !navAnimate })

      setTimeout(() => {
        this.setState({ navActive: !navActive })
      }, 60)
    }
  }

  render() {

    let { navActive, navAnimate } = this.state

    return (

      <header className="c-header">
        <div className="o-wrapper">

          <NavLink to="/" className="c-header__logo">
            <span>M</span>
          </NavLink>

          <i className="o-icon--menu c-header__icon" onClick={ () => this.triggerNav() }></i>

          <nav className={classNames(
            { 'active'  : navActive },
            { 'animate' : navAnimate }
          )}>
            <ul>
              <li><NavLink to="/showcase" onClick={ () => this.triggerNav() }>Showcase</NavLink></li>
              <li><NavLink to="/about" onClick={ () => this.triggerNav() }>About</NavLink></li>
              <li><NavLink to="/contact" onClick={ () => this.triggerNav() }>Contact</NavLink></li>
            </ul>
          </nav>

        </div>
      </header>

    )

  }

}

export default Header;
