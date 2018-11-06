import React from 'react';
import ReactDOM from 'react-dom';
import { withRouteData, Router, Link } from 'react-static'
import Routes from 'react-static-routes'

class LatestPosts extends React.Component {

  render() {
    return (
      <ul className="blog_posts-latest_posts flex-column">
        {events.map((singleEvent, index) => (
          <li key={index} className="blog_posts-latest_post flex-row">
            <Link to={`/wydarzenia/${singleEvent.data.slug}`} className="latest_post-image">
              <img
                className=""
                src={singleEvent.data.image}
                alt="" />
            </Link>
            <article className="latest_post-details flex-column">
              <span className="latest_post-due">
                {singleEvent.data.to &&
                  <small>{singleEvent.data.from} - {singleEvent.data.to}</small>
                }
              </span>
              <header className="latest_post-header">
                <h2>{singleEvent.data.title}</h2>
              </header>
              {/* <p className="latest_post-location">ShiftExpression | Bielsko-Biała</p> */}
              <section className="latest_post-description">
                <p>
                  {singleEvent.data.description}
                </p>
              </section>
              {/* <small className="latest_post-extra">wernisaż: 12.12.2017, godz. 18.00</small> */}
              <footer className="latest_post-footer">
                <Link>Czytaj więcej</Link>
              </footer>
            </article>
          </li>
        ))}
      </ul>
    );
  }
}

export default () => (
  <LatestPosts/>
)
