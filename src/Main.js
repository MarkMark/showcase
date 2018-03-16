import React, { Component } from 'react';
import { Switch, Route  }   from 'react-router-dom'


import Home                 from './Scenes/Home/Homepage'
import Showcase             from './Scenes/Showcase/Showcase'


class Main extends Component {

  render() {
    return (

      <main>
        <Switch>

          <Route exact path='/' component={Home}/>
          <Route exact path='/showcase' component={Showcase}/>

        </Switch>
      </main>

    )
  }

}

export default Main;
