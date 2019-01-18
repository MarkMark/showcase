import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'


class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      navActive  : false,
      navAnimate : false
    };
  }

  // triggerNav () {
  //   let { navActive, navAnimate } = this.state

  //   if ( !navActive ) {
  //     this.setState({ navActive: !navActive })

  //     setTimeout(() => {
  //       this.setState({ navAnimate: !navAnimate })
  //     }, 60)

  //   } else {
  //     this.setState({ navAnimate: !navAnimate })

  //     setTimeout(() => {
  //       this.setState({ navActive: !navActive })
  //     }, 60)
  //   }
  // }

  render() {

    let { navActive, navAnimate } = this.state

    return (

      <header className="c-header">
        <div className="c-header__wrapper">

          <NavLink to="/" className="c-header__logo">
            mshowcase.
          </NavLink>

          {/* <i className="o-icon--menu c-header__icon" onClick={ () => this.triggerNav() }></i> */}

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

}

export default Header;
