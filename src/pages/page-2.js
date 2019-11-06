import React, { Component } from "react"
import { Link, query, useStaticQuery } from "gatsby"
import Search from '../components/Search'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Formik, Field, Form} from 'formik'
import heroImg from '../components/categories/images/heroImage'
import Img from 'gatsby-image'
import ImageNo from '../components/image'
class SecondPage extends Component {

  render(){

    return(
    <Layout>
      <ImageNo />
    </Layout>
    )
  }
}
export default SecondPage
