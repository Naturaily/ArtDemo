import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import Carousel from 'react-flex-carousel'
import IncommingAuctions from '../components/IncommingAuctions'
import PromotedAuctions from '../components/PromotedAuctions'
import OldAuctions from '../components/OldAuctions'
import Search from '../components/Search'

//

export default withRouteData(({ landing, posts, events }) => (

  <main>
    <div className="container container--no-padding">
      <div className="flex-row">
        <Carousel autoPlayInterval={4000} indicator={false} switcher={false} className="news_carousel">
          {landing.data.news_list.map((object, index) => (
            <div key={index} style={{ backgroundImage: `url(${object.news.background})` }} className="news_carousel-element">
              <div>
                <span className="news_carousel-box flex-column">
                  <small>Artinforamcje</small>
                  <h2>{object.news.title}</h2>
                  <a href={object.news.link}>czytaj więcej</a>
                </span>
              </div>
            </div>
          ))}
        </Carousel>
        <IncommingAuctions/>
      </div>
    </div>

    <div className="container container--adw flex-column">
      <a href={landing.data.advert_first.advert_first_link} className="adw_top" target="_blank" style={{ backgroundImage: `url(${landing.data.advert_first.advert_first_image})` }}></a>
    </div>

    <h3 className="search_box-title">Czego szukasz?</h3>
    <Search/>

    <PromotedAuctions/>

    <OldAuctions/>

    {posts.slice(0, 1).map((singleEvent, index) => (
      <div key={index} className={`blog_posts-post ${index === 0 ? 'blog_posts-first_post' : ''}`}>
        <Link to={`/aktualnosci/${singleEvent.data.slug}`} className="blog_posts-image">
          <img
            className="image"
            src={singleEvent.data.image}
            alt="" />
        </Link>
        <span className="blog_posts-box text-center flex-column">
          <Link to={`/aktualnosci/${singleEvent.data.slug}`}>
            <small>Artinforamcje <br/> 10.10.10</small>
          </Link>
          <h2 className="blog_posts-title">{singleEvent.data.title}</h2>
          <p>{singleEvent.data.description}</p>
          <Link to={`/aktualnosci/${singleEvent.data.slug}`} className="blog_posts-more">Więcej</Link>
        </span>
      </div>
    ))}


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
