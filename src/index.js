import React from 'react'
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './scss/showcase.scss'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
