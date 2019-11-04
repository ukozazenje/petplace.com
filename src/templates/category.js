import React from 'react'
import Helmet from 'react-helmet'
import {graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/categories/PostList'
import Pagination from '../components/Pagination'
import PopularPosts from '../components/categories/PopularPosts'
import HeroSection from '../components/categories/images/categoryHero'
const Category = props => {
  const { data, pageContext } = props
  const { edges: posts, totalCount } = data.allWordpressPost
  const { edges: subCategories } = data.allWordpressCategory
  // const { edges: tags } = data.allWordpressTag
  const { title: siteTitle } = data.site.siteMetadata
  const { name: category } = pageContext
  return (
    <Layout>
      <Helmet title={`${category} | ${siteTitle}`} />
      <HeroSection title={category} />
      <section className="section category-posts">
        <div className="container is-widescreen">
          <div className="columns">
            <div className="column is-one-quarter side-bar">
              <div className="filter">
                <h3>Filter by date</h3>
                <input type="checkbox" />Show all Stories<br />
                <input type="checkbox" />Last 24 hours<br />
                <input type="checkbox" checked />Last 48 Hours<br />
                <input type="checkbox" />Past week<br />
                <input type="checkbox" />Past month<br />
                <input type="checkbox" checked />Specify date range<br />
              </div>
              <div className="subcategories">
                <h3>Categories</h3>
                {subCategories.map(({ node: subCategory }) => (
                <button type="button" key={subCategory.id}>
                  <Link to={subCategory.path}>
                    {subCategory.name}
                  </Link>
                </button>
                )) }
              </div>
              <div className="tags">
                <h3>Filter by tag</h3>
                {/* {
                  tags.map(({ node: tag }) => (
                    <Link to="">{tag.name.replace(/&amp;/g, '&')}</Link>
                  ))
                } */}
              </div>
            </div>
            <div className="column">
              <PostList posts={posts} title={category.replace(/&amp;/g, '&')} />
              <Pagination pageContext={pageContext} pathPrefix="/" />
            </div>
          </div>
        </div>
      </section>
      
      <PopularPosts />
          
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query CategoryPage($catPath: String!, $limit: Int!, $skip: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressPost(filter: {categories: {elemMatch: {path: {eq: $catPath}}}}, limit: $limit, skip: $skip) {
      totalCount
      edges {
        node {
          ...PostListFields
        }
      }
    }
    allWordpressCategory(filter: {parent_element: {path: {eq: $catPath}}}) {
      edges {
        node {
          id
          name
          path
        }
      }
    }
  }
`
