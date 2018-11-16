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

    const apiUrl = "/api/v1/landing_page/upcoming/auctions_catalogs"

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
      <div className="col-lg-4">
        <div className="latest_auctions row align-content-center flex-column">
          <p className="latest_auctions-heading col-sm-11 justify-content-between">Najbliższe aukcje <a href="/katalogi-aukcyjne/" className="text-orange">Więcej</a></p>
          <div className="latest_auctions-wrapper col-sm-11 d-flex flex-column">
            {this.state.latestAuctions.map(auction => (
              <div key={auction.id} className="latest_auctions-auction row">
                <div className="latest_auctions-image col-sm-3">
                  <img src={auction.thumb} />
                </div>
                <div className="latest_auctions-content col-sm-9 d-flex flex-column justify-content-between">
                  <span className="latest_auctions-small text--muted flex-row">
                    <small className="text-left">
                      <Moment format="DD.MM.YYYY">{auction.date}</Moment>
                    </small>
                    <small className="latest_auctions-separator">|</small>
                    {auction.state == "in_progress" ? (
                      <small className="text-right text-orange">aukcja trwa</small>
                    ) : (
                      <small className="text-right"><Moment format="HH.mm">{auction.date}</Moment></small>
                    )}
                  </span>
                  <h3 className="latest_auctions-house">
                    <Link to={`/katalogi-aukcyjne/${auction.slug}`}>
                      <Truncate>
                        {auction.name}
                      </Truncate>
                    </Link>
                  </h3>
                  <p className="latest_auctions-category">{auction.auction_house}</p>
                  <span className="latest_auctions-small text--muted flex-row">
                    <small className="text-left">{auction.city}</small>
                    {auction.type == "live" &&
                      <small className="latest_auctions-separator">|</small>
                    }
                    {auction.type == "live" &&
                      <small className="text-right">
                        relacja LIVE
                      </small>
                    }
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default () => (
  <IncommingAuctions/>
)
