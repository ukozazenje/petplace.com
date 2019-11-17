import React, {Component} from 'react'
import {Form, Formik, Field} from 'formik'
import axios from 'axios'
import Layout from '../components/layout'
import OrderBy from './search/orderBy'
import SideBar from './search/sideBar'
import PostsList from './search/postsList'
import HomeHeroImg from "../static/images/homeHeroImg"
import MobileHeroImg from "../static/images/mobileHomeHeroImg"
import TabletHeroImg from "../static/images/tabletHomeHeroImg"

const limit = 18
class Search extends Component {

  state = {
    posts: [],
    loader: true,
    currentPosts: [],
    currentPage: 1,
    totalPages: 0,
    form: {
      numbers: "200",
      days: '3000',
      orderBy: 'date',
      order: 'DSC',
      title: 'dog'
    }
  }


  handleSubmit = (value) => {
    const {numbers, days, order, orderBy} = this.state.form 
    const title = value || this.state.form.title
    this.setState({
      loader:true
    })
    axios.get(`${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}/wp-json/ttg/v2/post/${title}/${orderBy}/${order}/${days}/${numbers}`)
      .then(res => {
        this.setState({
          posts: res.data,
          loader: false,
          currentPosts: res.data.slice(0, limit),
          currentPage: 1,
          form: {
            numbers: numbers,
            days: days,
            orderBy: orderBy,
            order: order,
            title: title
          }
        })
      })
  }

  noSearchTerm = () => {
    this.setState({
      posts: this.props.posts,
      currentPosts: this.props.posts.slice(0, limit),
      loader: false,
    })
  }

  handlePageChange = (page) => {
    // console.log(page)
    window.scrollTo({
      top: 100,
      left: 0,
      behavior: 'smooth'
    });
    const { posts } = this.state;
    const offset = (page - 1) * limit;
    const currentPosts = posts.slice(offset, offset + limit);


    this.setState({
      currentPage: page,
      currentPosts,
    });
  };

  componentDidMount(){
    this.props.location.state && this.props.location.state.title ? this.handleSubmit(this.props.location.state.title) : this.handleSubmit('pet')
  }

  setFormValues = (e) => {
    console.log(e)
    const name = e.target.name
    const value = e.target.value

    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    })
  }

  setOrderBy = (e) => {
    const value = e.target.value
    const title = this.state.form.title
    console.log(e.target.value)
    switch (value) {
      case 'title-a-z':
        return this.setState({
          form: {
            ...this.state.form,
            orderBy: 'title',
            order: 'ASC'
          }
        }, () => this.handleSubmit(title))
      case 'title-z-a':
        return this.setState({
          form: {
            ...this.state.form,
            orderBy: 'title',
            order: 'DSC',
          }
        }, () => this.handleSubmit(title))
      case 'date-asc':
        return this.setState({
          form: {
            ...this.state.form,
            orderBy: 'date',
            order: 'ASC',
          }
        }, () => this.handleSubmit(title))
      case 'date-dsc':
       return  this.setState({
          form: {
            ...this.state.form,
            orderBy: 'date',
            order: 'DSC',
          }
        }, () => this.handleSubmit(title))
      default:
       return  this.setState({
          form: {
            ...this.state.form,
            orderBy: 'date',
            order: 'ASC',
          }
        }, () => this.handleSubmit(title))
    }
  }
  render(){
    const { loader, currentPosts } = this.state
    return (
      <Layout noSearch={true}>
        <div className="grid-container">
          <div className="desktop-img">
            <HomeHeroImg />
          </div>
          <div className="tablet-img">
            <TabletHeroImg />
          </div>
          <div className="mobile-img">
            <MobileHeroImg />
          </div>
        <section className="search-hero-section">
          <div className="container is-fullhd form-container">
            <div className="form-wrapper">
              <h1>Search our<br />
              Vet-Approved Articles</h1>
              <p>Our pets are our furry children, beloved members of our family. Pet Care, Health, Insurance, Behavior, Traning and Pet Breeds </p>
              <Formik
                initialValues={{title: ""}}
                onSubmit={(values, actions) => {
                  this.handleSubmit(values.title)
                }}
              >
                {(props) => (
                  <Form>
                    <Field type="text" name="title" placeholder="Search...." className="search-input" />
                    <button type="submit" className="search-button">Submit</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </section>
        </div>
        <OrderBy onChange={this.setOrderBy} />
        <section className="section search-page-section">
          <div className="container is-fullhd">
            <div className="columns search-page-columns">
              {/* <SideBar days={this.state.form.days} onChange={this.setFormValues} setOrderBy={this.setOrderBy}/> */}
              <PostsList limit={limit} loader={loader} currentPosts={currentPosts} total={this.state.posts.length} currentPage={this.state.currentPage} onPageChange={this.handlePageChange} />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Search
