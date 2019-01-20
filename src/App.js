import React, { Component } from 'react'
import ScrollToTop from './Services/Config/ScrollTop'
import './Services/Config/Modernizr'
import Main from './Main'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Helmet } from 'react-helmet'

class App extends Component {

  render() {
    return (

      <div>

        <Helmet>
          <title>Welcome</title>
          <meta name="description" content="Take a look at my latest work" />
        </Helmet>


        <Header />

        <ScrollToTop>
          <Main />
        </ScrollToTop>

        <Footer />

      </div>

    )
  }

}

export default App;
