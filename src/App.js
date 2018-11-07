import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import siteLogo from './artinfo.svg'
import './app.scss'

const App = () => (
  <Router>
    <div>
      <header className="header">
        <div className="container">
          <nav className="header-nav flex-row">
            <Link to="/" className="header-logo">
              <img src={siteLogo} />
            </Link>
            <div className="header-links">
              <Link to="/aktualnosci" className="header-link">Aktualności</Link>
            </div>
          </nav>
        </div>
      </header>
      <Routes />
    </div>
  </Router>
)

export default hot(module)(App)
