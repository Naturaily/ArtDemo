import React from 'react'
import { withRouteData, Link } from 'react-static'
import BlogNavigation from '../components/BlogNavigation'
import Search from '../components/Search'
//

export default withRouteData(({ posts }) => (
  <main>
    <Search/>
    <BlogNavigation/>
    {posts.slice(0, 1).map((post, index) => (
      <div key={post.data.id} className="blog_posts-first_post">
        <Link to={`/aktualnosci/${post.data.slug}`} className="blog_posts-image">
          <img
            className="image"
            src={post.data.image}
            alt="" />
        </Link>
        <span className="blog_posts-box text-center flex-column">
          <Link to={`/aktualnosci/${post.data.slug}`}>
            <small>{post.data.category} <br/> 10.10.10</small>
          </Link>
          <h2 className="blog_posts-title">{post.data.title}</h2>
          <p>{post.data.description}</p>
          <Link to={`/aktualnosci/${post.data.slug}`} className="blog_posts-more">Więcej</Link>
        </span>
      </div>
    ))}
    <div className="container">
      <h4 className="blog_posts-promoted_title">POLECANE</h4>
      <ul className="blog_posts-promoted flex-row">
        {posts.slice(1, 4).map((post, index) => (
          <li key={post.data.id} className="blog_posts-promoted_post">
            <Link to={`/aktualnosci/${post.data.slug}`} className="blog_posts-image">
              <img
                className="image"
                src={post.data.image}
                alt="" />
            </Link>
            <span className="blog_posts-box text-center flex-column">
              <Link to={`/aktualnosci/${post.data.category}`}>
                <small>{post.data.category} <br/> 10.10.10</small>
              </Link>
              <h2 className="blog_posts-title">{post.data.title}</h2>
              <Link to={`/aktualnosci/${post.data.slug}`} className="blog_posts-more">Więcej</Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  </main>
))
