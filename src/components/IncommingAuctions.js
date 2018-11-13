import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-static';
import Moment from 'react-moment';
import Truncate from 'react-truncate';
import axios from 'axios';
import Jsona from 'jsona';

const dataFormatter = new Jsona();
class IncommingAuctions extends React.Component {
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
      <div className="latest_auctions flex-column">
        <p className="latest_auctions-heading">Najbliższe aukcje <a href="/katalogi-aukcyjne/" className="text-orange">Więcej</a></p>
        <div className="latest_auctions-wrapper flex-column">
          {this.state.latestAuctions.map(auction => (
            <div key={auction.id} className="latest_auctions-auction">
              <div className="latest_auctions-image">
                <img src={auction.thumb} />
              </div>
              <div className="latest_auctions-content flex-column justify-between">
                <span className="latest_auctions-small flex-row">
                  <small className="left text-left">
                    <Moment format="DD.MM.YYYY">
                        {auction.date}
                    </Moment>
                  </small>
                  <small className="latest_auctions-separator">|</small>
                  {auction.state == "in_progress" ? (
                    <small className="right text-right text-orange">aukcja trwa</small>
                  ) : (
                    <small className="right text-right"><Moment format="HH.mm">{auction.date}</Moment></small>
                  )}
                </span>
                <h3 className="latest_auctions-house">
                  <Link to={`https://artinfo.naturaily.eu/katalogi-aukcyjne/${auction.slug}`}>
                    <Truncate>
                      {auction.name}
                    </Truncate>
                  </Link>
                </h3>
                <p className="latest_auctions-category">{auction.auction_house}</p>
                <span className="latest_auctions-small flex-row">
                  <small className="left text-left">{auction.city}</small>
                  {auction.type == "live" &&
                    <small className="latest_auctions-separator">|</small>
                  }
                  {auction.type == "live" &&
                    <small className="right text-right">
                      relacja LIVE
                    </small>
                  }
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default () => (
  <IncommingAuctions/>
)
