import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import Carousel from 'react-flex-carousel'
import IncommingAuctions from '../components/IncommingAuctions'
import PromotedAuctions from '../components/PromotedAuctions'
import OldAuctions from '../components/OldAuctions'

//

export default withRouteData(({ landing, posts }) => (

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

    <div className="container container--search flex-column">
      <h3 className="search_box-title">Czego szukasz?</h3>
      <div className="search_box">
        <input type="text" name="" className="search_box-input" placeholder="Wpisz interesujące Cię frazy oddzielone spacjami..."/>
        <button>O</button>
      </div>
    </div>

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
    {/* <Markdown source={landing.content} escapeHtml={false} /> */}
  </main>
))
