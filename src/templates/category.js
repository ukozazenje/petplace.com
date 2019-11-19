import React, { useState, Component } from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import axios from 'axios'
import NoImg from '../static/images/noPostImg'
import {categoryColor} from '../components/functions'
import Pagination from '../components/search/pagination'
import HeroSection from '../components/categories/categoryHero'
import SideBar from '../components/search/sideBar'
import * as SVGLoaders from 'svg-loaders-react'
import PopularPosts from '../components/categories/PopularPosts'
import Seo from '../components/seo'

class Category extends Component {

  state = {
    posts: [],
    loader: true,
    currentPosts: [],
    currentPage: 1,
    totalPages: 0,
    form: {
      numbers: "60",
      days: '365',
      orderBy: 'date',
      order: 'DSC',
    }
  }

  getPosts = () => {
    const {orderBy, order, days, numbers} = this.state.form
    axios.get(`${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}/wp-json/ttg/v2/selected-category/${this.props.pageContext.slug}/${orderBy}/${order}/${days}/${numbers}`).then((res) => {
      this.setState({
        posts: res.data,
        loader: false,
        currentPosts: res.data.slice(0, 6),
        currentPage: 1,
      })
    })
  }

  handlePageChange = (page) => {
    const { posts } = this.state;
    const offset = (page - 1) * 6;
    const currentPosts = posts.slice(offset, offset + 6);

    this.setState({
      currentPage: page,
      currentPosts,
    });
  };

  setFormValues = (e) => {
    console.log(e)
    const name = e.target.name
    const value = e.target.value
    this.setState({
      loader: true
    })
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    }, ()=> this.getPosts())
  }

  setOrderBy = (e) => {
    this.setState({
      loader: true
    })
    const value = e.target.value
    console.log(e.target.value)
    switch (value) {
      case 'title-a-z':
        return this.setState({
          form: {
            ...this.state.form,
            orderBy: 'title',
            order: 'DSC'
          }
        }, ()=> this.getPosts())
      case 'title-z-a':
        return this.setState({
          form: {
            ...this.state.form,
            orderBy: 'title',
            order: 'ASC',
          }
        }, ()=> this.getPosts())
      case 'date-asc':
        return this.setState({
          form: {
            ...this.state.form,
            orderBy: 'date',
            order: 'ASC',
          }
        }, ()=> this.getPosts())
      case 'date-dsc':
       return  this.setState({
          form: {
            ...this.state.form,
            orderBy: 'date',
            order: 'DSC',
          }
        }, ()=> this.getPosts())
      default:
       return  this.setState({
          form: {
            ...this.state.form,
            orderBy: 'date',
            order: 'ASC',
          }
        }, ()=> this.getPosts())
    }
  }

  componentDidMount(){
    this.getPosts()
  }
  render(){
    return(
      <Layout>
        <Seo title={this.props.pageContext.title} />
        <HeroSection title={this.props.pageContext.title} />
        <section className="section category-posts">
          <div className="container is-fullhd">
            <div className="columns categories-columns">
              <SideBar days={this.state.form.days} onChange={this.setFormValues} setOrderBy={this.setOrderBy} />
              <div className="column">
                <div className="columns posts-list-container">
                  { this.state.loader ?
                  <div className="loader-wrapper"> <SVGLoaders.Bars fill="#FF7D5A" /></div> :
                  this.state.currentPosts.map((post) => (
                    <div
                      className="column is-one-third"
                      key={post.id}
                    >
                      <div className="category-post-card">
                        <div className="card-img">
                          <Link to={post.link.replace(`${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}/`, '/')}>
                            { (post && post.featured_image && post.featured_image.large) ? <img src={post.featured_image.large} alt="post" /> : <NoImg /> }
                          </Link>
                          <Link to={post && post.category_link.replace(`${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}/`, '/')} className={`card-category ${categoryColor(post.category && post.category.cat_name)}`}>
                            {post.category && post.category.cat_name.replace(/&amp;/g, '&')}
                          </Link>
                        </div>

                        <div className="card-content">
                          <div className="card-title">
                            <h3>
                              <Link to={post.link.replace(`${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}/`, '/')}>
                                {post.title}
                              </Link>
                            </h3>
                          </div>
                          <div className="card-author">
                            <span>{post.date || 'date'}   ·  </span><span >{post ? post.author_name || 'author' : null }</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="pagination">
                    <Pagination total={this.state.posts.length} currentPage={this.state.currentPage} onPageChange={this.handlePageChange} />
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

export default Category
