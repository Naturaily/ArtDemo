import React from 'react';
import ReactDOM from 'react-dom';
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
    .then(response => response.map(auction => (
      {
        id: auction.id,
        state: auction.state,
        name: auction.name,
        thumb: auction.image_thumb_url,
        date: auction.start_date,
        type: auction.auction_type,
        city: auction.address.city,
        auction_house: auction.auction_house.name

      })))
    .then(auctionData => this.setState({latestAuctions: auctionData}))
    .catch(error => alert(error))
  }

  render() {
    return (
      <div className="latest_auctions flex-column">
        <p className="latest_auctions-heading">Najbliższe aukcje <a href="https://artinfo.naturaily.eu/" target="_blank">Więcej</a></p>
        <div className="latest_auctions-wrapper flex-column">
          {this.state.latestAuctions.map(auction => (
            <div key={auction.id} className="latest_auctions-auction">
              <div className="latest_auctions-image">
                <img src={auction.thumb} />
              </div>
              <div className="latest_auctions-content flex-column justify-between">
                <span className="flex-row justify-between">
                  <small className="left text-left">{auction.date}</small>
                  <small>|</small>
                  <small className="right text-right text-orange">{auction.state}</small>
                </span>
                <h3 className="latest_auctions-house">{auction.name}</h3>
                <p className="latest_auctions-category">{auction.auction_house}</p>
                <span className="flex-row justify-between">
                  <small className="left text-left">{auction.city}</small>
                  {auction.type == "live" &&
                    <small>|</small>
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
