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

      <div className="container flex-column">
        <ul className="blog-tabs">
          <li>Wszystkie</li>
          <li>Wydarzenia</li>
          <li>Relacje</li>
          <li>Artinformacje</li>
          <li>Targi</li>
        </ul>
      </div>
    );
  }
}

export default () => (
  <BlogNavigation/>
)
