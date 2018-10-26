import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ posts }) => (
  <main>
    <div className="container container--search flex-column">
      <form className="search_box">
        <input type="text" name="name" className="search_box-input" placeholder="Wpisz interesujące Cię frazy oddzielone spacjami..."/>
        <button>O</button>
      </form>
    </div>
    <div className="container">
      <ul className="blog_posts">
        {posts.map((post, index) => (
          <li key={post.data.slug} className={`blog_posts-post ${index === 0 ? 'blog_posts-post--first' : ''}`}>
            <Link to={`/aktualnosci/${post.data.slug}`} className="blog_posts-image">
              <img
                className="image"
                src={post.data.image}
                alt="" />
            </Link>
            <span className="blog_posts-box text-center flex-column">
              <Link to={`/aktualnosci/${post.data.slug}`}>
                <small>Artinforamcje <br/> 10.10.10</small>
              </Link>
              <h2 className="blog_posts-title">{post.data.title}</h2>
              <p>{post.data.description}</p>
              <Link to={`/aktualnosci/${post.data.slug}`} className="blog_posts-more">Więcej</Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  </main>
))
