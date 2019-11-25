import React, { Component } from "react"
import { Index } from "elasticlunr"
import {Link} from 'gatsby'
import HomeHeroImg from "../static/images/homeHeroImg"
import MobileHeroImg from "../static/images/mobileHomeHeroImg"
import TabletHeroImg from "../static/images/tabletHomeHeroImg"
import Pagination from "./search/pagination"
import {Formik, Form, Field} from "formik"
import {formatDate} from '../components/functions'
import NoImg from "../static/images/noPostImg"


const limit = 18
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

  // handleSubmit = () => {
  //   const query = title.target.value
  //   // const query = title
  //   this.index = this.getOrCreateIndex()
  //   this.setState({
  //     query,
  //     // Query the index with search string to get an [] of IDs
  //     posts: this.index
  //       .search(query, {expand: true})
  //       // Map over each ID and return the full document
  //       .map(({ ref }, index) => this.index.documentStore.getDoc(ref)),
  //   }, () => {
  //     const posts = [...this.state.posts]
  //     this.setState({
  //       currentPosts: posts.slice(0, limit)
  //     })
  //   })
  // }

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
        (order == 'desc') ? 
        (comparison * -1) : comparison
      );
    };
  }
  
  sortTitle = () => {
    
    const posts = [...this.state.posts]
    console.log('Unsorted--->', this.state.posts)
    let sorted = [...posts.sort(this.compareValues('date', 'asc'))]
    this.setState({
      posts: [...sorted],
      currentPosts: posts.slice(0, limit),
      currentPage: 1
    })
  }
  // componentDidMount(){
  //   this.props.location.state && this.props.location.state.title ? this.search(this.props.location.state.title) : this.search('pet')
  // }

  render() {
    const total = this.state.posts.length
    console.log(this.state.posts)
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
                initialValues={{title: ""}}
                onSubmit={(values, actions) => {
                  this.search(values.title)
                }}
              >
                {(props) => (
                  <Form>
                    <Field type="text" name="title" placeholder="Search...." className="search-input" />
                    {/* <Filed className="search-input" type="text" className="search-input" /> */}
                    {/* <input type="text" className="search-input" value={this.state.query} onChange={this.search} /> */}
                    <button type="submit" className="search-button" >Submit</button>
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
      <section className={`section order-section`}>
        <div className="container search-results is-fullhd">  
          <div className="columns">
            <div className="column">
              <h2>Search Results</h2>
            </div>
            <div className="column is-3">
              <button onClick={this.sortTitle}>Sort</button>
              <select className="search-select" name="orderby" >
                <option value="title-a-z">Sort by</option>
                <option value="title-a-z">title A-Z</option>
                <option value="title-z-a">title Z-A</option>
                <option value="date-asc">date ASC</option>
                <option value="date-dsc">date DSC</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <section className="section search-page-section">
        <div className="container is-fullhd">
          <div className="columns search-page-columns">
            {/* <SideBar days={this.state.form.days} onChange={this.setFormValues} setOrderBy={this.setOrderBy}/> */}
            <div className="column">
              <div className="columns"style={{flexWrap: 'wrap'}}>
                
                { 
                  this.state.currentPosts.map((post) => (
                    <div key={post.id} className="column is-half-tablet is-one-quarter-desktop">
                      <div className="search-card">
                        <div className="search-card-img">
                          {/* <Link to={post.link.replace(`${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}/`, '/')}>
                            { post.featured_image.large ? <img src={post.featured_image.large} alt="post" /> : <NoImg /> }
                          </Link> */}
                          <Link to={post.path}>
                            {/* {
                              post && 
                              post.featured_media &&  
                              post.featured_media.media_details && 
                              post.featured_media.media_details.sizes && 
                              post.featured_media.media_details.sizes.post_thumbnail  ? 
                              <img src={post.featured_media.media_details.sizes.post_thumbnail.source_url} alt="" /> :
                              <NoImg />
                            } */}
                            {
                              post && 
                              post.featured_image &&  
                              post.featured_image.post_thumbnail ? 
                              <img src={post.featured_image.post_thumbnail} alt="" /> :
                              <NoImg />
                            }
                          </Link>
                        </div>
                        <div className="search-card-content">
                          <Link to={post.path}>
                            <h3 dangerouslySetInnerHTML={{
                                __html: post.title
                              }}
                            /> 
                          </Link>
                          {/* <h3><Link to={post.link.replace(`${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}/`, '/')}>{post.title || 'No title'}</Link></h3> */}
                          <div className="meta">
                            <span>{formatDate(post.date) || 'no date'}</span> <span>{post.author || 'Petplace.com'}</span>
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

      <div>
        {/* <input type="text" value={this.state.query} onChange={this.search} /> */}
        <ul>
          {this.state.posts.map(page => (
            <li key={page.id}>
              {/* <Link to={"/" + page.path}>{page.title}</Link>
              {": " + page.tags.join(`,`)} */}
              {/* <img src={page.featured_media.source_url} /> */}
            </li>
          ))}
        </ul>
      </div>

      </>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query posts
        Index.load(this.props.searchIndex)

  
}