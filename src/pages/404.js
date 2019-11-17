import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <center>
      <h1>We can't seem to find what you're looking for</h1>
      <p>This page either doesn't exist, or it moved somewhere else.</p>
      <p>If you think this is an error, please let us know so we can fix it, Or return to our <a href="/">home page</a>.</p>
    </center>
  </Layout>
)

export default NotFoundPage
