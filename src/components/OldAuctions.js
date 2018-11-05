import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class OldAuctions extends React.Component {
  state = {
    latestAuctions: []
  }

  componentDidMount() {
    axios.get(`https://artinfo.naturaily.eu/api/v1/finished/auctions_catalogs`)
      .then(res => {
        const latestAuctions = res.data.data.slice(0, 5).map(obj => obj);
        this.setState({ latestAuctions });
      });
  }

  render() {
    return (

      <div className="container flex-column">
        <h3 className="auctions_category-title ">Aukcje sztuki dawnej i współczesnej</h3>
        <div className="auctions_category-auctions flex-row">
          {this.state.latestAuctions.map(auction => (
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
          <div className="auctions_category-more">
            <span className="auctions_category-auction--more">

            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default () => (
  <OldAuctions/>
)
