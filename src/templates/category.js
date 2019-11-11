import React, { useState } from 'react'
import Helmet from 'react-helmet'
import {graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import PostList from '../components/categories/PostList'
import Pagination from '../components/Pagination'
import PopularPosts from '../components/categories/PopularPosts'
import HeroSection from '../components/categories/categoryHero'
import MostPopularTags from '../components/mostPopularTags'
const Category = props => {
  const { data, pageContext } = props
  const { edges: posts } = data.allWordpressPost
  const { edges: subCategories } = data.allWordpressCategory
  // const { edges: tags } = data.allWordpressTag
  const { title: siteTitle } = data.site.siteMetadata
  const { name: category } = pageContext
  const [ menu, setMenuState ] = useState(false);
  return (
    <Layout>
      <Helmet title={`${category} | ${siteTitle}`} />
      <HeroSection title={category} />
      <section className="section category-posts">
        <div className="container is-widescreen">
          <div className="columns categories-columns">
            <div className="column is-one-quarter-widescreen side-bar">
              <div className="filter-btn" onClick={() => setMenuState((menu) => !menu)}>
                <span>Filters</span>
              </div>
              <div className={`category-filters ${menu ? 'is-active' : ''}`}>
                <div className="subcategories">
                  <h3>Sub Categories</h3>
                  <div className="subcategories-wrapper">
                    {subCategories.map(({ node: subCategory }) => (
                    <button type="button" key={subCategory.id} className="subcategories-btn">
                      <Link to={subCategory.path}>
                        {subCategory.name.replace(/&amp;/g, '&')}
                      </Link>
                    </button>
                    )) }
                  </div>
                </div>
                <div className="tags">
                  <h3>Most popular Tags</h3>
                  <MostPopularTags />
                  {/* {
                    tags.map(({ node: tag }) => (
                      <Link to="">{tag.name.replace(/&amp;/g, '&')}</Link>
                    ))
                  } */}
                </div>
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
