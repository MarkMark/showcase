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

import Showcase_AMP          from './Scenes/Showcases/AMP/AMP'
import Showcase_betfair      from './Scenes/Showcases/Betfair/Betfair'
import Showcase_caltex       from './Scenes/Showcases/Caltex/Caltex'
import Showcase_cooltrax     from './Scenes/Showcases/Cooltrax/Cooltrax'
import Showcase_empire       from './Scenes/Showcases/Empire/Empire'
import Showcase_enracha      from './Scenes/Showcases/Enracha/Enracha'
import Showcase_fiction      from './Scenes/Showcases/Fiction/Fiction'
import Showcase_foxwoods     from './Scenes/Showcases/Foxwoods/Foxwoods'
import Showcase_GSC          from './Scenes/Showcases/GSC/GSC'
import Showcase_jetstar      from './Scenes/Showcases/Jetstar/Jetstar'
import Showcase_kearAndKu    from './Scenes/Showcases/KearAndKu/KearAndKu'
import Showcase_moneyGaming  from './Scenes/Showcases/MoneyGaming/MoneyGaming'
import Showcase_tchoiDesign  from './Scenes/Showcases/TchoiDesign/TchoiDesign'


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

          <Route path='/showcase/amp' component={Showcase_AMP}/>
          <Route path='/showcase/betfair' component={Showcase_betfair}/>
          <Route path='/showcase/caltex' component={Showcase_caltex}/>
          <Route path='/showcase/cooltrax' component={Showcase_cooltrax}/>
          <Route path='/showcase/empire' component={Showcase_empire}/>
          <Route path='/showcase/enracha' component={Showcase_enracha}/>
          <Route path='/showcase/fiction-candy-jewellery' component={Showcase_fiction}/>
          <Route path='/showcase/foxwoods' component={Showcase_foxwoods}/>
          <Route path='/showcase/gsc' component={Showcase_GSC}/>
          <Route path='/showcase/jetstar' component={Showcase_jetstar}/>
          <Route path='/showcase/kear-and-ku' component={Showcase_kearAndKu}/>
          <Route path='/showcase/moneygaming' component={Showcase_moneyGaming}/>
          <Route path='/showcase/tchoi-design' component={Showcase_tchoiDesign}/>

        </Switch>
      </main>

    )
  }

}

export default Main;
