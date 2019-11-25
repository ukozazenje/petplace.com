import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Layout from '../components/layout'
import SearchResults from "../components/Search"

const SearchPage = ({location}) => (
  <StaticQuery
    query={graphql`
      query SearchIndexPagesQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <Layout>
        <SearchResults searchIndex={data.siteSearchIndex.index} location={location}/>
      </Layout>
    )}
  />
)

export default SearchPage