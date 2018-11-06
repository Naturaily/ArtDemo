import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import Search from '../components/Search'
import BlogNavigation from '../components/BlogNavigation'

//

export default withRouteData(({ events }) => (
  <main>
    <Search/>
    <BlogNavigation/>
    <div className="container flex-row blog_posts">
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
      <aside className="blog_posts-aside flex-column">
        <header>
          <h3 className="section_header">Popularne</h3>
        </header>
        <ul className="blog_posts-aside_popular flex-column">
          {events.map((singleEvent, index) => (
            <li key={index} className="aside_popular-post">
              <Link to={`/wydarzenia/${singleEvent.data.slug}`} className="aside_popular-image">
                <img
                  className=""
                  src={singleEvent.data.image}
                  alt="" />
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
  </main>
))
