import React from 'react'
import Layout from '../components/layout'
import ContactUs from '../components/homepage/contact-us'
import Helmet from "react-helmet"
import logo from "../images/PPlogo.jpg"
const Page = ({location, data}) => {
  const page = data.wordpressPage
  return (
    <Layout>
      <Helmet>
        {/* inline script elements */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "headline": "${page.title}",
            "description": "${page.yoast_meta.yoast_wpseo_metadesc}",
            "author": {
              "@type": "Organization",
              "name": "PetPlace Staff"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://${process.env.GATSBY_WEB_SITE_URL}${page.path}"
            },  
            "publisher": {
              "@type": "Organization",
              "name": "PetPlace",
              "logo": {
                "@type": "ImageObject",
                "url": "https://${process.env.GATSBY_WEB_SITE_URL}${logo}",
                "width": 236,
                "height": 45
              }
            },
            "datePublished": "2020-01-23",
            "dateModified" : "2020-01-23"
          }
        `}</script>
      </Helmet>
      <section className={(`section page-content ` + `${location.pathname.replace(/\//g, "")}`)}>
        <div className="container is-fullhd">
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
      path
      yoast_meta {
        yoast_wpseo_metadesc
        yoast_wpseo_canonical
        yoast_wpseo_title
      }
    }
  }
`