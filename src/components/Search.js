import React, { Component } from "react"
import { Index } from "elasticlunr"
import {Link} from 'gatsby'
import HomeHeroImg from "../static/images/homeHeroImg"
import MobileHeroImg from "../static/images/mobileHomeHeroImg"
import TabletHeroImg from "../static/images/tabletHomeHeroImg"
import Pagination from "./search/pagination"
import {Formik, Form, Field} from "formik"
import { categoryColor } from '../components/functions'
import NoImg from "../static/images/noSearchPostImg"


const limit = 16
// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      posts: [],
      currentPosts: [],
      currentPage: 1,
      order: 'desc',
      orderby: 'date'
    }
  }

  search = title => {
    // const query = title.target.value
    const query = title
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      posts: this.index
        .search(query, {expand: true})
        // Map over each ID and return the full document
        .map(({ ref }, index) => this.index.documentStore.getDoc(ref)),
    }, () => {
      const posts = [...this.state.posts]
      this.setState({
        currentPosts: posts.slice(0, limit),
        currentPage: 1
      })
      document.getElementById('search-results').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
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

  compareValues = (key, order='asc') => {
    return function(a, b) {
      if(!a.hasOwnProperty(key) ||
         !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA = (typeof a[key] === 'string') ?
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ?
        b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ?
        (comparison * -1) : comparison
      );
    };
  }

  sortBy = (value) => {
    const values = value.split('-')
    const orderBy = values[0]
    const order = values[1]
    const posts = [...this.state.posts]

    let sorted = [...posts.sort(this.compareValues(orderBy, order))]
    this.setState({
      posts: [...sorted],
      currentPosts: posts.slice(0, limit),
      currentPage: 1
    })
  }

  validate = (values) => {
    const errors = {};
    if(!values.title) {
      errors.title =  "Required"
    } else if(values.title.length < 3) {
      errors.title = "Minimum 3 characters"
    }
    return errors
  }

  componentDidMount(){
    this.props.location.state && this.props.location.state.title ? this.search(this.props.location.state.title) : this.search('pet')
  }

  render() {
    const total = this.state.posts.length
    // console.log(this.state.posts)
    return (
    <>
      <div className="flex-container">
        <section className="container is-fullhd search-hero-section-flex">
          <div className="container is-fullhd form-container">
            <div className="form-wrapper">
              <h1>Search Our<br />
              Vet-Approved Articles</h1>
              <p>Our comprehensive library of informative articles covers medical diagnosis, wellness tips, breed bios, and everything in between.</p>
              <Formik
                validate={this.validate}
                initialValues={{title: ""}}
                onSubmit={(values, actions) => {
                  this.search(values.title)
                }}
              >
                {(props) => (
                  <Form>
                    <Field type="text" name="title" placeholder="Search...." className="search-input" />
                    <button type="submit" className="search-button" >Submit</button>
                    {props.errors.title && props.touched.title ? <div className="form-error ">{props.errors.title}</div> : null}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </section>
        <div className="desktop-img">
          <HomeHeroImg />
        </div>
        <div className="tablet-img">
          <TabletHeroImg />
        </div>
        <div className="mobile-img">
          <MobileHeroImg />
        </div>
      </div>
      <section className={`section order-section`} id="search-results">
        <div className="container search-results is-fullhd">
          <div className="columns">
            <div className="column">
              <h2>Search Results</h2>
            </div>
            <div className="column is-3">
              <select className="search-select" name="orderby" onChange={(e)=>this.sortBy(e.target.value) } >
                <option value="">Sort by</option>
                <option value="title-asc">title A-Z</option>
                <option value="title-desc">title Z-A</option>
                <option value="date-asc">date ASC</option>
                <option value="date-desc">date DSC</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <section className="section search-page-section">
        <div className="container is-fullhd">
          <div className="columns search-page-columns">
            <div className="column">
              <div className="columns"style={{flexWrap: 'wrap'}}>
                {
                  this.state.currentPosts.map((post) => (
                    <div key={post.id} className="column is-half-tablet is-one-quarter-desktop">
                      <div className="category-post-card">
                        <div className="card-img">
                          <Link to={post.path}>
                            {
                              post &&
                              post.featured_image &&
                              post.featured_image ?
                              <img src={post.featured_image.replace(process.env.GATSBY_PP_URL, process.env.GATSBY_WP_URL)} alt="" /> :
                              <NoImg />
                            }
                          </Link>
                          <Link
                            to={(post && post.category_path) || '/'}
                            className={`card-category ${categoryColor((post && post.category_name) || 'no category')}`}
                            dangerouslySetInnerHTML={{
                              __html: (post && post.category_name) || 'no category'
                            }} />
                        </div>
                        <div className="card-content">
                          <Link className="card-title" to={post.path}>
                            <h3 dangerouslySetInnerHTML={{
                                __html: post.title
                              }}
                            />
                          </Link>
                          <div className="meta">
                            <span>{post.date || 'no date'}</span>&nbsp;·&nbsp;
                            <span dangerouslySetInnerHTML={{ __html: post.author_name || 'Petplace.com'}} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }

              </div>
              <div className="pagination">
                <Pagination limit={limit} total={total} currentPage={this.state.currentPage} onPageChange={this.handlePageChange} />
              </div>
            </div>
            {/* <PostsList limit={limit} loader={loader} currentPosts={currentPosts} total={this.state.posts.length} currentPage={this.state.currentPage} onPageChange={this.handlePageChange} /> */}
          </div>
        </div>
      </section>
      </>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query posts
        Index.load(this.props.searchIndex)


}
