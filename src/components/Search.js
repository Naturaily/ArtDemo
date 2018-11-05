import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from 'react-static'
import Routes from 'react-static-routes'

class Search extends React.Component {
  state = {
    latestAuctions: []
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="container container--search flex-column">
        <form className="search_box">
          <input type="text" name="name" className="search_box-input" placeholder="Wpisz interesujące Cię frazy oddzielone spacjami..."/>
          <button>O</button>
        </form>
      </div>
    );
  }
}

export default () => (
  <Search/>
)
