import React, { Component } from 'react';
import Main                 from './Main'
import Header               from './Components/Header/Header'
import Footer               from './Components/Footer/Footer'


class App extends Component {

  render() {
    return (

      <div>

        <Header />

        <Main />

        <Footer />

      </div>

    )
  }

}

export default App;
