import React from 'react'
import { withRouteData } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
//

export default withRouteData(({ landing }) => (

  <div>
    <div className="auctions-latest">
      <h3 className="auctions-latest_heading">
        Najbliższe aukcje
        <a href="#" className="auctions-latest__more">Więcej</a>
      </h3>
      <ul id="latestAuctions"></ul>
    </div>
    <div className="wrapper">
      <div className="adv-wrapper">
        <a href={landing[0].data.title} className="adv">
          {landing[0].data.description}
        </a>
      </div>
    </div>
    <Markdown source={landing[0].content} escapeHtml={false} />
  </div>
))
