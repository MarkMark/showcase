import React from 'react'

function Hero() {
  return (
    <section className="c-hero">
      <div className="c-hero__wrapper">
        <div className="c-hero__text">
          <div>
            <span>Web & app</span>
            <h1>Front end developer.</h1>
          </div>
        </div>

        <div className="c-hero__social">
          <a
            className="a-icon--stackoverflow"
            href="https://stackoverflow.com/users/1893067/mark"
            target="_blank"
            rel="noopener noreferrer"
          />
          <a
            className="a-icon--github"
            href="https://github.com/markschwa"
            target="_blank"
            rel="noopener noreferrer"
          />
          <a
            className="a-icon--linkedin"
            href="https://www.linkedin.com/in/markschwanethal/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
