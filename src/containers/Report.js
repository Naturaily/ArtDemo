import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'

//

export default withRouteData(({ report }) => (
  <div className="blog-post">
    <Link to="/aktualnosci/">{'<'} Back</Link>
    <br />
    <h3>{report.data.title}</h3>
    {/* <Moment format="MMMM Do, YYYY">{report.data.date}</Moment> */}
    <img className="image" src={report.data.image} alt="" />
    <Markdown source={report.content} escapeHtml={false} />
  </div>
))
