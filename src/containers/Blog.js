import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ posts }) => (
  <div className="container">
    <h1>Najnowsze wpisy</h1>
    <ul>
      {posts.map(post => (
        <li key={post.data.slug}>
          <Link to={`/blog/post/${post.data.slug}`}>
            <img className="image" src={post.data.image} alt="" />
          </Link>
          <br/>
          <h2>
            <Link to={`/blog/post/${post.data.slug}`}>{post.data.title}</Link>
          </h2>
        </li>
      ))}
    </ul>
  </div>
))
