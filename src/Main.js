import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Scenes/Home/Homepage'
import About from './Scenes/About/About'
import Contact from './Scenes/Contact/Contact'
import Showcase from './Scenes/Showcase/Showcase'

import SanctuaryApp from './Scenes/Showcases/Sanctuary/App/SanctuaryApp'
import SanctuaryWeb from './Scenes/Showcases/Sanctuary/Web/Sanctuary'
import CooltraxWeb from './Scenes/Showcases/Cooltrax/Web/Cooltrax'
import CooltraxApp from './Scenes/Showcases/Cooltrax/App/CooltraxApp'
import Caltex from './Scenes/Showcases/Caltex/Caltex'
import Zensation from './Scenes/Showcases/Zensation/Zensation'
import RunawayPets from './Scenes/Showcases/RunawayPets/RunawayPets'
import Mendr from './Scenes/Showcases/Mendr/Mendr'
import AMP from './Scenes/Showcases/AMP/AMP'
import Betfair from './Scenes/Showcases/Betfair/Betfair'
import Empire from './Scenes/Showcases/Empire/Empire'
import Enracha from './Scenes/Showcases/Enracha/Enracha'
import Fiction from './Scenes/Showcases/Fiction/Fiction'
import Foxwoods from './Scenes/Showcases/Foxwoods/Foxwoods'
import GSC from './Scenes/Showcases/GSC/GSC'
import Jetstar from './Scenes/Showcases/Jetstar/Jetstar'
import KearAndKu from './Scenes/Showcases/KearAndKu/KearAndKu'
import MoneyGaming from './Scenes/Showcases/MoneyGaming/MoneyGaming'
import TchoiDesign from './Scenes/Showcases/TchoiDesign/TchoiDesign'

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/showcase" component={Showcase} />
          <Route path="/showcase/zensation" component={Zensation} />
          <Route path="/showcase/runaway-pets" component={RunawayPets} />
          <Route path="/showcase/mendr" component={Mendr} />
          <Route path="/showcase/cooltrax-app" component={CooltraxApp} />
          <Route path="/showcase/sanctuary-app" component={SanctuaryApp} />
          <Route path="/showcase/sanctuary" component={SanctuaryWeb} />

          <Route path="/showcase/amp" component={AMP} />
          <Route path="/showcase/betfair" component={Betfair} />
          <Route path="/showcase/caltex" component={Caltex} />
          <Route path="/showcase/cooltrax" component={CooltraxWeb} />
          <Route path="/showcase/empire" component={Empire} />
          <Route path="/showcase/enracha" component={Enracha} />
          <Route path="/showcase/fiction-candy-jewellery" component={Fiction} />
          <Route path="/showcase/foxwoods" component={Foxwoods} />
          <Route path="/showcase/gsc" component={GSC} />
          <Route path="/showcase/jetstar" component={Jetstar} />
          <Route path="/showcase/kear-and-ku" component={KearAndKu} />
          <Route path="/showcase/moneygaming" component={MoneyGaming} />
          <Route path="/showcase/tchoi-design" component={TchoiDesign} />
        </Switch>
      </main>
    )
  }
}

export default Main
