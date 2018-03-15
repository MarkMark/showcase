import React, { Component } from 'react';
import Main                 from './Main'
import Footer               from './Components/Footer/Footer'


class App extends Component {

  render() {
    return (

      <div>

        {/*

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

        */}


        <Main />

        <Footer />

      </div>

    )
  }

}

export default App;
