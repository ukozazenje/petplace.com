import React, { Component } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import NoImg from "../static/images/noPostImg"
import { categoryColor } from "../components/functions"
import Pagination from "../components/search/pagination"
import HeroSection from "../components/categories/categoryHero"
import SideBar from "../components/categories/sideBar"
import PopularPosts from "../components/categories/PopularPosts"
import Img from "gatsby-image"
import Seo from "../components/seo"
import logo from "../images/PPlogo.jpg"
import Helmet from "react-helmet"
class category extends Component {
  // state = {
  //   posts: this.props.data.wordpressTtgCategories.posts,
  //   currentPosts: [],
  //   currentPage: 1,
  //   totalPages: 0,
  //   limit: 18,
  // }

  // componentDidMount() {
  //   const { limit } = this.state
  //   this.setState({
  //     currentPosts: this.props.data.wordpressTtgCategories.posts.slice(
  //       0,
  //       limit
  //     ),
  //     currentPage: 1,
  //   })
  // }

  // handlePageChange = page => {
  //   const { posts, limit } = this.state
  //   const offset = (page - 1) * limit
  //   const currentPosts = posts.slice(offset, offset + limit)
  //   window.scrollTo({
  //     top: 100,
  //     left: 0,
  //     behavior: "smooth",
  //   })
  //   this.setState({
  //     currentPage: page,
  //     currentPosts,
  //   })
  // }

  render() {
    // const { limit, currentPage, posts } = this.state
    // const total = posts.length
    return <Layout></Layout>
  }
}

export default category
