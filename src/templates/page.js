import React from 'react'
import Layout from '../components/layout'
import ContactUs from '../components/homepage/contact-us'
const Page = ({data}) => {
  const page = data.wordpressPage
  return (
    <Layout>
      <section className="section page-content">
        <div className="container is-fullhd">
          <h1>{page.title}</h1>
          <div className="single-post-content" 
              dangerouslySetInnerHTML={{
                __html: page.content
              }}
            />
        </div>
      </section>
      <ContactUs />
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query Page($id: String!){
    wordpressPage(id: { eq: $id }) {
      id
      content
      title
    }
  }
`