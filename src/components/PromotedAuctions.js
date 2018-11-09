import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class PromotedAuctions extends React.Component {
  state = {
    latestAuctions: []
  }

  componentDidMount() {
    axios.get(`https://artinfo.naturaily.eu/api/v1/landing_page/upcoming/auctions_catalogs`)
      .then(res => {
        const latestAuctions = res.data.data.slice(0, 6).map(obj => obj);
        this.setState({ latestAuctions });
      });
  }

  render() {
    return (

      <div className="container flex-column">
        <h3 className="section_header">Polecane</h3>
        <div className="auctions_promoted-auctions flex-row">
          {this.state.latestAuctions.map(auction => (
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
    );
  }
}

export default () => (
  <PromotedAuctions/>
)
