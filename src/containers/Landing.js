import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import Truncate from 'react-truncate';
import Carousel from 'react-flex-carousel'
import IncommingAuctions from '../components/IncommingAuctions'
import PromotedAuctions from '../components/PromotedAuctions'
import OldAndModernAuctions from '../components/OldAndModernAuctions'
import Search from '../components/Search'

//

export default withRouteData(({ landing, posts, events }) => (

  <main className="container">
    <div className="row">
      <Carousel autoPlayInterval={4000} indicator={false} switcher={false} className="news_carousel col-lg-8 no-padding">
        {landing.data.news_list.map((object, index) => (
          <div key={index} style={{ backgroundImage: `url(${object.background})` }} className="news_carousel-element">
            <div>
              <span className="news_carousel-box flex-column">
                <small>Artinforamcje</small>
                <h2>{object.title}</h2>
                <a href={object.link}>czytaj więcej</a>
              </span>
            </div>
          </div>
        ))}
      </Carousel>
      <IncommingAuctions/>
    </div>

    <div className="row">
      <a href={landing.data.advert_first.advert_first_link} className="adw_top" target="_blank" style={{ backgroundImage: `url(${landing.data.advert_first.advert_first_image})` }}></a>
    </div>

    <Search/>

    <PromotedAuctions/>

    <OldAndModernAuctions/>

    {posts.slice(0, 1).map((singleEvent, index) => (
      <div key={index} className={`blog_posts-post ${index === 0 ? 'blog_posts-first_post' : ''}`}>
        <Link to={`/${singleEvent.data.category}/${singleEvent.data.slug}`} className="blog_posts-image">
          <img
            className="image"
            src={singleEvent.data.image}
            alt="" />
        </Link>
        <span className="blog_posts-box text-center flex-column">
          <Link to={`/${singleEvent.data.category}/${singleEvent.data.slug}`}>
            <small>Artinforamcje <br/> 10.10.10</small>
          </Link>
          <h2 className="blog_posts-title">{singleEvent.data.title}</h2>
          <p>{singleEvent.data.description}</p>
          <Link to={`/${singleEvent.data.category}/${singleEvent.data.slug}`} className="blog_posts-more">Więcej</Link>
        </span>
      </div>
    ))}


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
        <section className="blog_posts-aside_categories">
          <header>
            <h3 className="section_header">Kategorie</h3>
          </header>
          <ul>
            {posts.map((singleEvent, index) => (
              <li key={index}>
                <a>{singleEvent.data.category}</a>
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  </main>
))
