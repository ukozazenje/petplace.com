import React, { Component } from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import NoImg from '../static/images/noPostImg'
import {categoryColor} from '../components/functions'
import Pagination from '../components/search/pagination'
import HeroSection from '../components/categories/categoryHero'
import SideBar from '../components/categories/sideBar'
import PopularPosts from '../components/categories/PopularPosts'
import Img from 'gatsby-image'
import Seo from '../components/seo'

class newCategory extends Component  {
  state = {
    posts: this.props.data.wordpressTtgCategories.posts,
    currentPosts: [],
    currentPage: 1,
    totalPages: 0,
    limit: 18
  }

  componentDidMount() {
    const {limit } = this.state;
    this.setState({
      currentPosts: this.props.data.wordpressTtgCategories.posts.slice(0, limit),
      currentPage: 1
    })
  }

  handlePageChange = (page) => {
    const { posts, limit } = this.state;
    const offset = (page - 1) * limit;
    const currentPosts = posts.slice(offset, offset + limit);

    this.setState({
      currentPage: page,
      currentPosts,
    });
  };

  render(){
    const {limit, currentPage, posts} = this.state
    const total = posts.length
    return (
      <Layout>
        <Seo title={`${this.props.data.wordpressTtgCategories.name} | Petplace`} />
        <HeroSection title={this.props.data.wordpressTtgCategories.name} />
        <section className="section category-posts">
          <div className="container is-fullhd">
            <div className="columns categories-columns">
              <SideBar subcategories={this.props.data.wordpressTtgCategories.subcategories} />
              <div className="column">
                  <div className="columns posts-list-container">
                    {
                      this.state.currentPosts.map(post => (
                        <div
                          className="column is-one-third"
                          key={post.wordpress_id}
                        >
                          <div className="category-post-card">
                            <div className="card-img">
                              <Link to={post.path}>
                                {
                                  post.featured_media && post.featured_media.localFile && post.featured_media.localFile.childImageSharp && post.featured_media.localFile.childImageSharp.fluid ?
                                  <Img sizes={{ ...post.featured_media.localFile.childImageSharp.fluid, aspectRatio: 4 / 3 }} alt={(post.featured_media && post.featured_media.alt_text) || 'post image'}  /> :
                                  <NoImg />
                                }
                              </Link>
                              <Link to={post.category_path} className={`card-category ${categoryColor(post.category_name.replace(/&amp;/g, '&'))}`}>
                                {post.category_name.replace(/&amp;/g, '&')}
                              </Link>
                            </div>
                            <div className="card-content">
                              <div className="card-title">
                                <h3>
                                  <Link to={`${post.path}`}>
                                    {post.title.replace(/&amp;/g, '&') || 'title'}
                                  </Link>
                                </h3>
                              </div>
                              <div className="card-author">
                                <span>{post.date || 'date'}   ·  </span><span >{post.author_name || 'author'}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                    <div className="pagination">
                    <Pagination limit={limit} total={total} currentPage={currentPage} onPageChange={this.handlePageChange} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PopularPosts />
      </Layout>

    )
  }
}

export default newCategory

export const pageQuery = graphql`
  query CategoryPage($id: String!){
    wordpressTtgCategories(id: { eq: $id }) {
      path
      name
      id
      subcategories {
        name
        path
      }
      posts {
        title
        author_name
        category_path
        category_name
        date
        path
        wordpress_id
        featured_media {
          source_url
          alt_text
          localFile {
            childImageSharp {
              fluid(maxHeight: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

