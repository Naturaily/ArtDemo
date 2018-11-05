import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import Search from '../components/Search'
import BlogNavigation from '../components/BlogNavigation'

//

export default withRouteData(({ events }) => (
  <div className="container flex-column">
    <Search/>
    <BlogNavigation/>
    <ul className="blog_posts-promoted flex-row">
      {events.map((singleEvent, index) => (
        <li key={index} className="blog_posts-promoted_post">
          <Link to={`/wydarzenia/${singleEvent.data.slug}`} className="blog_posts-image">
            <img
              className="image"
              src={singleEvent.data.image}
              alt="" />
          </Link>
        </li>
      ))}
    </ul>
  </div>
))
