import React, { Component } from 'react';
import ScrollToTop          from './Services/Config/ScrollTop';
import './Services/Config/Modernizr';
import Main                 from './Main'
import Header               from './Components/Header/Header'
import Footer               from './Components/Footer/Footer'


class App extends Component {

  render() {
    return (

      <div>

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
