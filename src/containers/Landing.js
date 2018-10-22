import React from 'react'
import { withRouteData } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import Carousel from 'react-flex-carousel'

//

export default withRouteData(({ landing, latestAuctions }) => (

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
          <p className="latest_auctions-heading">Najbliższe aukcje <a href="#">Więcej</a></p>
          <div className="latest_auctions-wrapper flex-column">
            {latestAuctions.data.slice(0, 4).map(auction => (
              <div key={auction.id} className="latest_auctions-auction">
                <div className="latest_auctions-image">
                  <img src="/uploads/image.jpg" />
                </div>
                <div className="latest_auctions-content">
                  <h3>{auction.id}</h3>
                  <span>{auction.title}</span>
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
        <input type="text" name="" value="" className="search_box-input" placeholder="Wpisz interesujące Cię frazy oddzielone spacjami..."/>
        <button>O</button>
      </div>
    </div>
    {/* <Markdown source={landing.content} escapeHtml={false} /> */}
  </main>
))
