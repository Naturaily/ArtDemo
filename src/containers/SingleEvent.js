import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'

//

export default withRouteData(({ singleEvent }) => (
  <div className="blog-post">
    <Link to="/aktualnosci/">{'<'} Back</Link>
    <br />
    <h3>{singleEvent.data.title}</h3>
    {/* <Moment format="MMMM Do, YYYY">{singleEvent.data.date}</Moment> */}
    <img className="image" src={singleEvent.data.image} alt="" />
    <Markdown source={singleEvent.content} escapeHtml={false} />
  </div>
))
