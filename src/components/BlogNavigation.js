import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from 'react-static'
import Routes from 'react-static-routes'

class BlogNavigation extends React.Component {
  render() {
    return (

      <div className="tabs main-tabs">
        <ul className="flex-row">
          <li>
            <Link to={`/aktualnosci`}>Wszystkie</Link>
          </li>
          <li>
            <Link to={`/wydarzenia`}>Wydarzenia</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default () => (
  <BlogNavigation/>
)
