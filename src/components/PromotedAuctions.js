import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-static';
import Moment from 'react-moment';
import Truncate from 'react-truncate';
import axios from 'axios';
import Jsona from 'jsona';

const dataFormatter = new Jsona();

class PromotedAuctions extends React.Component {
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

      <section className="">
        <h2 className="section_header">Polecamy</h2>
        <div className="auctions_promoted-auctions row">
          {this.state.latestAuctions.map(auction => (
            <div key={auction.id} className="auctions_promoted-auction col-sm-4">
              <div className="auctions_promoted-image">
                <img src={auction.thumb} />
              </div>
              <div className="auctions_promoted-content">
                <p>
                  <small className="auctions_promoted-date"><span><Moment format="DD.MM.YYYY">{auction.date}</Moment></span>|<span><Moment format="HH.mm">{auction.date}</Moment></span></small>
                  <small className="auctions_promoted-city">{auction.city}</small>
                </p>
                <h3 className="auctions_promoted-title">
                  <Link to={`/katalogi-aukcyjne/${auction.slug}`}>
                    <Truncate>
                      {auction.name}
                    </Truncate>
                  </Link>
                </h3>
                <small className="auctions_promoted-type text--muted">{auction.auction_house}</small>
                <br/>
                <Link to={`/katalogi-aukcyjne/${auction.slug}`} className="btn btn__default">
                  Zobacz Katalog
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default () => (
  <PromotedAuctions/>
)
