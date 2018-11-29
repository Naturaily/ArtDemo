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
                <Link to="https://artinfodemo.naturaily.eu/katalogi-aukcyjne" className="link--muted">Aukcje</Link>
                <Link to="https://artinfodemo.naturaily.eu/wyniki-aukcji" className="link--muted">Wyniki</Link>
                <Link to="/aktualnosci" className="link--muted">Aktualnosci</Link>
              </div>
            </div>
            <div className="col-sm-2 ml-auto app__user-panel pr-sm-0">
              <a href="/logowanie" className="link--muted">Logowanie</a>
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
