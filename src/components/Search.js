import React, {Component} from 'react'
import {Form, Formik, Field} from 'formik'
import axios from 'axios'
import Layout from '../components/layout'
import NoImg from "../static/images/noPostImg"
import HeroImg from '../static/images/homeHeroImg'
import Pagination from "react-paginating";
class Search extends Component {

  state = {
    posts: [],
    loader: true,
    currentPosts: [],
    currentPage: 1,
    totalPages: 0
  }

  handleSubmit = (value) => {
    this.setState({
      loader:true
    })
    axios.get(`http://staging.ppl.torchte.ch/wp-json/ttg/v2/post/${value}`)
      .then(res => {
        // console.log(res.data)
        this.setState({
          posts: res.data,
          loader: false,
          currentPosts: res.data.slice(0, 6),
          currentPage: 1
        })
      })
  }

  noSearchTerm = () => {
    this.setState({
      posts: this.props.posts,
      currentPosts: this.props.posts.slice(0, 6),
      loader: false,
    })
  }

  handlePageChange = (page, e) => {
    console.log(page)
    const { posts, currentPage } = this.state;

    const offset = (page - 1) * 6;
    const currentPosts = posts.slice(offset, offset + 6);

    
    this.setState({
      currentPage: page,
      currentPosts,
    });
  };

  componentDidMount(){
    this.props.location.state && this.props.location.state.title ? this.handleSubmit(this.props.location.state.title) : this.noSearchTerm()
  }
  
  render(){
    const { posts, loader, currentPosts } = this.state
    return (
    <Layout>
      <section className="search-hero-section">
        {/* <HeroImg className="hero-img" /> */}
        <div className="container is-widescreen form-container">
          <div className="form-wrapper">
            <h1>Search our<br /> 
            Vet-Approved Articles</h1>
            <p>Our pets are our furry children, beloved members of our family.  Pet Care, Health, Insurance, Behavior, Traning and Pet Breeds </p>
            <Formik
              initialValues={{ title: '' }}
              onSubmit={(values, actions) => {
                this.handleSubmit(values.title)
              }}
              render={(props) => (
                <Form>
                  <Field type="text" name="title" placeholder="Search...." className="search-input" />
                  <button type="submit" className="search-button">Submit</button>
                </Form>
              )}
            />
          </div>
        </div>
      </section>
      <section className="section search-page-section">
        <div className="container is-widescreen">
          <div className="columns">
            <div className="column is-one-quarter side-bar">
              <div className="categories">
                <h2>Categories</h2>
              </div>
              <div>
                <h2>Tags</h2>
              </div>
            </div>
            <div className="column">
              <div className="columns"style={{flexWrap: 'wrap'}}>
                { loader ? 
                <h1>loading...</h1> : 
                currentPosts.map((post) => (
                  <div key={post.id} className="column is-one-third">
                    <div className="search-card">
                      <div className="search-card-img">
                        { post.featured_image.large ? <img src={post.featured_image.large} /> : <NoImg /> }
                      </div>
                      <div className="search-card-content">
                        <h3>{post.title || 'No title'}</h3>
                        <div className="meta">
                          <span>{post.date || 'no date'}</span><span>{post.author_name || 'Petplace.com'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
              </div>
              <Pagination
                  total={this.state.posts.length}
                  limit={6}
                  pageCount={3}
                  currentPage={this.state.currentPage}
                >
                  {({
                    pages,
                    currentPage,
                    hasNextPage,
                    hasPreviousPage,
                    previousPage,
                    nextPage,
                    totalPages,
                    getPageItemProps
                  }) => (
                    <div>
                      {hasPreviousPage && (
                        <button
                          {...getPageItemProps({
                            pageValue: previousPage,
                            onPageChange: this.handlePageChange
                          })}
                        >
                          {"<"}
                        </button>
                      )}
                        Page: {currentPage} of {totalPages}
                      {hasNextPage && (
                        <button
                          {...getPageItemProps({
                            pageValue: nextPage,
                            onPageChange: this.handlePageChange
                          })}
                        >
                          {">"}
                        </button>
                      )}
                    </div>
                  )}
                </Pagination>
            </div>
          </div>
        </div>
        </section>
      </Layout>
    )
  }
}


export default Search
