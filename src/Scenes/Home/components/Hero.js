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
          <a className="icon-github" href="https://github.com/markschwa" target="_blank" rel="noopener noreferrer"></a>
          <a className="icon-linkedin" href="https://www.linkedin.com/in/markschwanethal/" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>

    </section>
  )
}

export default Hero;
