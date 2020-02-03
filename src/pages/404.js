import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PopularPosts from '../components/categories/PopularPosts'
import ContactUsSection from "../components/homepage/contact-us"


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="page-404">
      <div className="hero">
        <div className="image"></div>
        <div className="copy">
          <h1>Error 404 - Page&nbsp;Not&nbsp;Found</h1>  
          <p>But don’t be sad! We have many other pages you can visit.</p>
        </div>   
      </div>
      <PopularPosts />
      <ContactUsSection />
    </div>
  </Layout>
)

export default NotFoundPage
