import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import SiteHeader from './components/SiteHeader'
import './app.scss'

const App = () => (
  <Router>
    <div>
      <SiteHeader />
      <Routes />
    </div>
  </Router>
)

export default hot(module)(App)
