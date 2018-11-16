import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import Search from '../components/Search'

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
        {singleEvent.data.event_main_point.main_point_name}: {singleEvent.data.event_main_point.main_point_datetime}
      </div>
      <figure className="post-image col-sm-12">
        <img className="image" src={singleEvent.data.image} alt="" />
      </figure>
    </div>
    <div className="post-main">
      <div className="row">
        <div className="post-body col-sm-12">
          <p className="text-muted"><Markdown source={singleEvent.content} escapeHtml={false} /></p>
        </div>
      </div>
      <div className="post-footer row">
        <div className="col-sm-6 ">
          <p className="post-footer-date"><strong>{singleEvent.data.event_main_point.main_point_name}:</strong>{singleEvent.data.event_main_point.main_point_datetime}</p>
        </div>
        <div className="post-media col-sm-6 text-right">
          <p>patronat medialny: </p><img className="image" src={singleEvent.data.patronage} alt="" />
        </div>
      </div>
    </div>

  </main>
))
