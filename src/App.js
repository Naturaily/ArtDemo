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
      <div className="header">
        <div className="container">
          <nav className="header-nav flex-row">
              <Link to="/" className="header-logo">
                <img src={siteLogo} />
              </Link>
            <div className="header-links">
              <Link to="/blog" className="header-link">Blog</Link>
              <Link to="/" className="header-link">Aktualności</Link>
            </div>
          </nav>
        </div>
      </div>
      <Routes />
    </div>
  </Router>
)

export default hot(module)(App)
