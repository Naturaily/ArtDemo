import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'

//

export default withRouteData(({ information }) => (
  <div className="blog-post">
    <Link to="/aktualnosci/">{'<'} Back</Link>
    <br />
    <h3>{information.data.title}</h3>
    {/* <Moment format="MMMM Do, YYYY">{information.data.date}</Moment> */}
    <img className="image" src={information.data.image} alt="" />
    <Markdown source={information.content} escapeHtml={false} />
  </div>
))
