import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from 'react-static'
import Routes from 'react-static-routes'
import siteLogo from '../artinfo.svg'

class SiteHeader extends React.Component {
  render() {
    return (
      <header className="app__header">
        <div className="container">
          <nav className="row app__header-row align-items-center">
            <div className="col">
              <div className="app__logo">
                <Link to="/">
                  <img src={siteLogo} alt="Artinfo logo" />
                </Link>
                <Link to="/katalogi-aukcyjne" className="link--muted">Aukcje</Link>
                <Link to="/wyniki-aukcji" className="link--muted">Wyniki</Link>
                <Link to="/wydarzenia" className="link--muted">Wydarzenia</Link>
              </div>
            </div>
            <div className="col ml-auto app__user-panel pr-sm-0">
              <Link to="/logowanie" className="link--muted">Logowanie</Link>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default () => (
  <SiteHeader/>
)
