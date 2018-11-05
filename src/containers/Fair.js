import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'

//

export default withRouteData(({ fair }) => (
  <div className="blog-post">
    <Link to="/aktualnosci/">{'<'} Back</Link>
    <br />
    <h3>{fair.data.title}</h3>
    {/* <Moment format="MMMM Do, YYYY">{fair.data.date}</Moment> */}
    <img className="image" src={fair.data.image} alt="" />
    <Markdown source={fair.content} escapeHtml={false} />
  </div>
))
