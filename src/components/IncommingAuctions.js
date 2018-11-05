import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class IncommingAuctions extends React.Component {
  state = {
    latestAuctions: []
  }

  componentDidMount() {
    axios.get(`https://artinfo.naturaily.eu/api/v1/finished/auctions_catalogs`)
      .then(res => {
        const latestAuctions = res.data.data.slice(0, 4).map(obj => obj);
        this.setState({ latestAuctions });
      });
  }

  render() {
    return (
      <div className="latest_auctions flex-column">
        <p className="latest_auctions-heading">Najbliższe aukcje <a href="https://artinfo.naturaily.eu/" target="_blank">Więcej</a></p>
        <div className="latest_auctions-wrapper flex-column">
          {this.state.latestAuctions.map(auction => (
            <div key={auction.id} className="latest_auctions-auction">
              <div className="latest_auctions-image">
                <img src={auction.attributes.image_preview_url} />
              </div>
              <div className="latest_auctions-content flex-column justify-between">
                <span className="flex-row justify-between">
                  <small className="left text-left">{auction.id}</small>
                  <small>|</small>
                  <small className="right text-right text-orange">aukcja trwa</small>
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
    );
  }
}

export default () => (
  <IncommingAuctions/>
)
