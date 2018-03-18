import React, { Component } from 'react'


class Footer extends Component {

  render() {

    return (

      <footer className="c-footer">
        <div className="o-wrapper">
          <p>Created by Mark - © { new Date().getFullYear() }</p>
        </div>
      </footer>

    )

  }

}

export default Footer;
