import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="s-footer">
        <div className="o-wrapper">
          <p className="a-copy">
            Created by Mark - © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
