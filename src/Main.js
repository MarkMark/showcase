import React, { Component }  from 'react';
import { Switch, Route  }    from 'react-router-dom'


import Home                  from './Scenes/Home/Homepage'
import About                 from './Scenes/About/About'
import Contact               from './Scenes/Contact/Contact'
import Showcase              from './Scenes/Showcase/Showcase'
import Showcase_zensation    from './Scenes/Showcases/Zensation/Zensation'
import Showcase_runawayPets  from './Scenes/Showcases/RunawayPets/RunawayPets'
import Showcase_mendr        from './Scenes/Showcases/Mendr/Mendr'
import Showcase_cooltraxApp  from './Scenes/Showcases/CooltraxApp/CooltraxApp'
import Showcase_sanctuaryApp from './Scenes/Showcases/SanctuaryApp/SanctuaryApp'
import Showcase_sanctuary    from './Scenes/Showcases/Sanctuary/Sanctuary'


class Main extends Component {

  render() {
    return (

      <main style={{minHeight: window.innerHeight - (121 + 51)}}>
        <Switch>

          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/showcase' component={Showcase}/>
          <Route path='/showcase/zensation' component={Showcase_zensation}/>
          <Route path='/showcase/runaway-pets' component={Showcase_runawayPets}/>
          <Route path='/showcase/mendr' component={Showcase_mendr}/>
          <Route path='/showcase/cooltrax-app' component={Showcase_cooltraxApp}/>
          <Route path='/showcase/sanctuary-app' component={Showcase_sanctuaryApp}/>
          <Route path='/showcase/sanctuary' component={Showcase_sanctuary}/>

        </Switch>
      </main>

    )
  }

}

export default Main;
