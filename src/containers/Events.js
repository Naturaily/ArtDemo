import React from 'react'
import { withRouteData, Link } from 'react-static'
import Markdown from 'react-markdown'
import Search from '../components/Search'
import BlogNavigation from '../components/BlogNavigation'

//

export default withRouteData(({ events }) => (
  <main className="container">
    <Search/>
    <BlogNavigation/>
    <div className="row">
      <ul className="blog_posts-latest_posts col-sm-9">
        {events.map((singleEvent, index) => (
          <li key={index} className="blog_posts-latest_post row">
            <Link to={`/${singleEvent.data.category}/${singleEvent.data.slug}`} className="latest_post-image col-sm-4">
              <img
                className=""
                src={singleEvent.data.image}
                alt="" />
            </Link>
            <article className="latest_post-details col-sm-8">
              <span className="latest_post-due">
                {singleEvent.data.end_date &&
                  <small>{singleEvent.data.start_date} - {singleEvent.data.end_date}</small>
                }
              </span>
              <header className="latest_post-header">
                <h2>{singleEvent.data.title}</h2>
              </header>
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
      <aside className="blog_posts-aside col-sm-3">
        <header>
          <h2 className="section_header">Popularne</h2>
        </header>
        <ul className="blog_posts-aside_popular">
          {events.map((singleEvent, index) => (
            <li key={index} className="aside_popular-post row">
              <Link to={`/${singleEvent.data.category}/${singleEvent.data.slug}`} className="aside_popular-image col-sm-4">
                <img src={singleEvent.data.image} alt="" />
              </Link>
              <article className="aside_popular-details col-sm-8">
                <span className="aside_popular-category">
                  {singleEvent.data.category}
                </span>
                <header className="aside_popular-header">
                  <h2>{singleEvent.data.title}</h2>
                </header>
              </article>
            </li>
          ))}
        </ul>
      </aside>
    </div>

  </main>
))
