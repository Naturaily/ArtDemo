import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import Search from '../components/Search'
import siteLogo from '../artinfo.svg'

//

export default withRouteData(({ singleEvent }) => (
  <main className="container">
    <Search/>
    <div className="post row">
      <div className="post-pre col-sm-12 text-center">
        <small>{singleEvent.data.category} | {singleEvent.data.city}</small>
      </div>
      <div className="post-title col-sm-12 text-center">
        <h1>{singleEvent.data.title}</h1>
      </div>
      <div className="post-date col-sm-12 text-center">
        <span>{singleEvent.data.start_date} - {singleEvent.data.end_date}</span>
      </div>
      <div className="post-event col-sm-12 text-center">
        Wernisaż: {singleEvent.data.vernissage_date}
      </div>
      <figure className="post-image col-sm-12">
        <img className="image" src={singleEvent.data.main_image} alt="" />
      </figure>
    </div>
    <div className="post-main">
      <div className="row">
        <div className="post-body col-sm-12">
          <p className="text-muted"><Markdown source={singleEvent.body} escapeHtml={false} /></p>
        </div>
      </div>
      <div className="post-footer row">
        <div className="col-sm-6 ">
          <p className="post-footer-date"><strong>Wernisaż:</strong>{singleEvent.data.vernissage_date}</p>
        </div>
        <div className="post-media col-sm-6 text-right">
          <p>patronat medialny: </p><img className="image" src={siteLogo} alt="" />
        </div>
      </div>
    </div>

  </main>
))
