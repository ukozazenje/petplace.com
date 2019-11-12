import React from 'react'
import {Link} from 'gatsby'
import Pagination from './pagination'
import * as SVGLoaders from 'svg-loaders-react'
import NoImg from "../../static/images/noPostImg"


const postsList = ({loader, currentPosts, total, currentPage, onPageChange}) => {
  return (
    <div className="column">
      <div className="columns"style={{flexWrap: 'wrap'}}>
        { loader ? <div className="loader-wrapper"> <SVGLoaders.Bars fill="#FF7D5A" /></div> : 
          currentPosts.map((post) => (
            <div key={post.id} className="column is-half-tablet is-one-third-desktop">
              <div className="search-card">
                <div className="search-card-img">
                  <Link to={post.link.replace('https://petplace-staging.mdrkdjq6-liquidwebsites.com/', '/')}>
                    { post.featured_image.large ? <img src={post.featured_image.large} alt="post" /> : <NoImg /> }
                  </Link>
                </div>
                <div className="search-card-content">
                  <h3><Link to={post.link.replace('https://petplace-staging.mdrkdjq6-liquidwebsites.com/', '/')}>{post.title || 'No title'}</Link></h3>
                  <div className="meta">
                    <span>{post.date || 'no date'}</span> <span>{post.author_name || 'Petplace.com'}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <Pagination total={total} currentPage={currentPage} onPageChange={onPageChange} />
    </div>
  )
}

export default postsList
