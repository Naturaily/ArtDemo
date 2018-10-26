import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import Carousel from 'react-flex-carousel'

//

export default withRouteData(({ landing, latestAuctions, posts }) => (

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
        <div className="latest_auctions flex-column">
          <p className="latest_auctions-heading">Najbliższe aukcje <a href="https://artinfo.naturaily.eu/" target="_blank">Więcej</a></p>
          <div className="latest_auctions-wrapper flex-column">
            {latestAuctions.data.slice(0, 4).map(auction => (
              <div key={auction.id} className="latest_auctions-auction">
                <div className="latest_auctions-image">
                  <img src={auction.attributes.image_preview_url} />
                </div>
                <div className="latest_auctions-content flex-column justify-between">
                  <span className="flex-row justify-between">
                    <small className="left text-left">{auction.id}</small>
                    <small>|</small>
                    <small className="right text-right">aukcja trwa</small>
                  </span>
                  <h3 className="latest_auctions-house">{auction.attributes.name}</h3>
                  <p className="latest_auctions-category">13 Aukcja Sztuka Dawnej</p>
                  <span className="flex-row justify-between">
                    <small className="left text-left">Warszawa</small>
                    <small>|</small>
                    <small className="right text-right">relacja LIVE</small>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
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

    <div className="container flex-column">
      <h3 className="auctions_promoted-title">Polecane</h3>
      <div className="auctions_promoted-auctions flex-row">
        {latestAuctions.data.slice(0, 6).map(auction => (
          <div key={auction.id} className="auctions_promoted-auction flex-column">
            <div className="auctions_promoted-image">
              <img src={auction.attributes.image_preview_url} />
            </div>
            <div className="auctions_promoted-content flex-column">
              <p>
                <small className="auctions_promoted-date"><span>{auction.id}</span>|<span>12:12</span></small>
                <small className="auctions_promoted-city">Warszawa</small>
              </p>
              <h4>{auction.attributes.name}</h4>
              <small className="auctions_promoted-type">13 Aukcja Sztuka Dawnej</small>
              <button className="button">Zobacz Katalog</button>
            </div>
          </div>
        ))}
      </div>
    </div>


    <div className="container flex-column">
      <h3 className="auctions_category-title ">Aukcje sztuki dawnej i współczesnej</h3>
      <div className="auctions_category-auctions flex-row">
        {latestAuctions.data.slice(0, 5).map(auction => (
          <div key={auction.id} className="auctions_category-auction flex-column">
            <div className="auctions_category-image ">
              <img src={auction.attributes.image_preview_url} />
            </div>
            <div className="auctions_category-content flex-column justify-between">
              <small className="auctions_category-date flex-row justify-between"><span>{auction.id}</span>|<span>12:12</span></small>
              <h4>{auction.attributes.name}</h4>
              <small>13 Aukcja Sztuka Dawnej</small>
              <small className="auctions_category-city ">Warszawa</small>
            </div>
          </div>
        ))}
        <div className="auctions_category-auction auctions_category-auction--more">KEK</div>
      </div>
    </div>

    {posts.slice(0, 1).map((post, index) => (
      <div key={post.data.slug} className={`blog_posts-post ${index === 0 ? 'blog_posts-post--first' : ''}`}>
        <Link to={`/aktualnosci/${post.data.slug}`} className="blog_posts-image">
          <img
            className="image"
            src={post.data.image}
            alt="" />
        </Link>
        <span className="blog_posts-box text-center flex-column">
          <Link to={`/aktualnosci/${post.data.slug}`}>
            <small>Artinforamcje <br/> 10.10.10</small>
          </Link>
          <h2 className="blog_posts-title">{post.data.title}</h2>
          <p>{post.data.description}</p>
          <Link to={`/aktualnosci/${post.data.slug}`} className="blog_posts-more">Więcej</Link>
        </span>
      </div>
    ))}
    {/* <Markdown source={landing.content} escapeHtml={false} /> */}
  </main>
))
