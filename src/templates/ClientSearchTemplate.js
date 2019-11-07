import React from "react"
import Search from "../components/Search"
const SearchTemplate = props => {
  const { pageContext } = props
  const { bookData } = pageContext
  const { allPosts } = bookData
  return (
    <Search posts={allPosts} location={props.location}/>
  )
}
export default SearchTemplate