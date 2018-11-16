import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from 'react-static'
import Routes from 'react-static-routes'

class Search extends React.Component {

  render() {
    return (
      <section>
        <div className="search__header text-center"><h2>Czego szukasz?</h2></div>
        <div className="row">
          <div className="col-sm-12">
            <div className="global-search" data-search="global">
              <div className="global-search__input">
                <input id="searchInput" type="text" placeholder="Wpisz interesujące Cię frazy oddzielone spacjami..."/>
                <a href="#" data-clear-search="" className="search__clear-input search__clear-input--hidden" title="Wpisz interesujące Cię frazy oddzielone spacjami...">
                  <span className="icon-close-big"></span>
                </a>
              </div>
              <div className="global-search__actions">
                <button type="submit" className="btn-oval btn-oval--orange" title="Wyszukaj">
                  <span className="icon icon-search"></span>
                </button>
               </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default () => (
  <Search/>
)
