import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from 'react-static'
import Routes from 'react-static-routes'

class Search extends React.Component {

  render() {
    return (
      <section>
        <div className="text-center"><h2>Czego szukasz?</h2></div>
        <div className="row">
          <div className="col-sm-12">
            <div class="global-search" data-search="global">
              <div class="global-search__input">
                <input id="searchInput" type="text" autocomplete="off" data-search-input="" placeholder="Wpisz interesujące Cię frazy oddzielone spacjami..."/>
                <a href="#" data-clear-search="" class="search__clear-input search__clear-input--hidden" title="Wpisz interesujące Cię frazy oddzielone spacjami...">
                  <span class="icon-close-big"></span>
                </a>
              </div>
              <div class="global-search__actions">
                <button type="submit" class="btn-oval btn-oval--orange" data-search-submit="" title="Wyszukaj">
                    <span class="icon icon-search"></span>
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
