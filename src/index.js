import React                 from 'react';
// import ReactDOM              from 'react-dom';
import { render }            from 'react-dom';
import { BrowserRouter }     from 'react-router-dom';
import App                   from './App';
import registerServiceWorker from './registerServiceWorker';

import './main.css'

// ReactDOM.render(<App />, document.getElementById('root'));

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
