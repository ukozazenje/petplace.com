import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ pageContext, pathPrefix }) => {
  const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext
  
  return (
    <nav className="pagination" role="navigation">
      {previousPagePath && (
        <Link className="prev" to={previousPagePath} rel="prev"></Link>
      )}
      Page {humanPageNumber} of {numberOfPages}
      {nextPagePath && (
        <Link className="next" to={nextPagePath} rel="next"></Link>
      )}
    </nav>
  )
}

export default Pagination
