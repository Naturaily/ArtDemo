import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-static';
import Moment from 'react-moment';
import Truncate from 'react-truncate';
import axios from 'axios';
import Jsona from 'jsona';

const dataFormatter = new Jsona();

class OldAndModernAuctions extends React.Component {
  state = {
    latestAuctions: [],
    store: []
  }

  componentDidMount() {

    const apiUrl = "https://artinfo.naturaily.eu/api/v1/landing_page/upcoming/auctions_catalogs"

    axios.get(apiUrl)
    .then(response => dataFormatter.deserialize(response.data))
    .then(response => response.slice(0, 4).map(auction => (
      {
        id: auction.id,
        state:         auction.state,
        name:          auction.name,
        thumb:         auction.image_thumb_url,
        date:          auction.start_date,
        type:          auction.auction_type,
        city:          auction.address.city,
        auction_house: auction.auction_house.name,
        slug:          auction.slug

      })))
    .then(auctionData => this.setState({latestAuctions: auctionData}))
    .catch(error => alert(error))
  }

  render() {
    return (

      <section>
        <h2 className="section_header">Najnowsze aukcje</h2>
        <div className="auctions_category-auctions row">
          {this.state.latestAuctions.map(auction => (
            <div key={auction.id} className="auctions_category-auction col-sm-2">
              <div className="auctions_category-image ">
                <img src={auction.thumb} />
              </div>
              <div className="auctions_category-content flex-column justify-between">
                <small className="auctions_category-date flex-row justify-between">
                  <span><Moment format="DD.MM.YYYY">{auction.date}</Moment></span>|<span><Moment format="HH.mm">{auction.date}</Moment></span>
                </small>
                <h3 className="auctions_category-house">
                  <Truncate>
                    {auction.auction_house}
                  </Truncate>
                </h3>
                <small className="auctions_category-title">
                  <Truncate>
                    {auction.name}
                  </Truncate>
                </small>
                <small className="auctions_category-city ">{auction.city}</small>
              </div>
            </div>
          ))}
          <div className="auctions_category-more">
            <div className="auctions_category-more--auction">
              <a href="/katalogi-aukcyjne" className="btn-oval btn-oval--orange icon icon-calendar">
                <span>Pokaż pełne kalendarium</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default () => (
  <OldAndModernAuctions/>
)
