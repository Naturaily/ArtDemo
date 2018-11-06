import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from 'react-static'
import Routes from 'react-static-routes'

class BlogNavigation extends React.Component {
  state = {
    latestAuctions: []
  }

  componentDidMount() {
  }

  render() {
    return (

      <div className="container">
        <ul className="tabs flex-row">
          <li>
            <Link to={`/aktualnosci`}>Wszystkie</Link>
          </li>
          <li>
            <Link to={`/wydarzenia`}>Wydarzenia</Link>
          </li>
          <li>
            <Link to={`/relacje`}>Relacje</Link>
          </li>
          <li>
            <Link to={`/artinformacje`}>Artinformacje</Link>
          </li>
          <li>
            <Link to={`/targi`}>Targi</Link>
          </li>
        </ul>

      </div>
    );
  }
}

export default () => (
  <BlogNavigation/>
)
