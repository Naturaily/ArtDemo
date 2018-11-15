import React from 'react';
import ReactDOM from 'react-dom';
import { withRouteData, Router, Link } from 'react-static'
import Routes from 'react-static-routes'

class LatestPosts extends React.Component {

  render() {
    return (
      <div>
        <ul className="blog_posts-latest_posts flex-column">
          {events.map((singleEvent, index) => (
            <li key={index} className="blog_posts-latest_post flex-row">
              <Link to={`/${singleEvent.data.category}/${singleEvent.data.slug}`} className="latest_post-image">
                <img
                  className=""
                  src={singleEvent.data.image}
                  alt="" />
              </Link>
              <article className="latest_post-details flex-column">
                <span className="latest_post-due">
                  {singleEvent.data.end_date &&
                    <small>{singleEvent.data.start_date} - {singleEvent.data.end_date}</small>
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
        <aside className="blog_posts-aside flex-column">
          <header>
            <h3 className="section_header">Popularne</h3>
          </header>
          <ul className="blog_posts-aside_popular flex-column">
            {events.map((singleEvent, index) => (
              <li key={index} className="aside_popular-post">
                <Link to={`/${singleEvent.data.category}/${singleEvent.data.slug}`} className="aside_popular-image">
                  <img src={singleEvent.data.image} alt="" />
                </Link>
              </li>
            ))}
          </ul>
          <section className="blog_posts-aside_categories">
            <header>
              <h3 className="section_header">Kategorie</h3>
            </header>
            <ul>
              <li><a>Link</a></li>
              <li><a>Link</a></li>
              <li><a>Link</a></li>
              <li><a>Link</a></li>
              <li><a>Link</a></li>
              <li><a>Link</a></li>
            </ul>
          </section>
        </aside>
      </div>

    );
  }
}

export default () => (
  <LatestPosts/>
)
