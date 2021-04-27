import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AuthorsCoverImg from "../static/images/authorsHeroImg"
import PopularPosts from "../components/categories/PopularPosts"
import { graphql, useStaticQuery } from "gatsby"
import { filterAuthors } from "../components/functions"
import AuthorsCard from "../components/authors/authorsCard"

const AuthorsPage = props => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressTtgUsers {
        edges {
          node {
            id
            img
            display_name
            slug
          }
        }
      }
    }
  `)
  const allAuthors = data.allWordpressTtgUsers.edges
  const authors = allAuthors.filter(({ node: author }) => filterAuthors(author))

  return (
    <Layout noSearch={true}>
      <SEO title="Browse Pet Place Authors" />
      <section className="hero-section">
        <AuthorsCoverImg />
        <div className={`hero-title red-transparent`}>
          <div className="container is-fullhd category-title">
            <h1>Browse Pet Place Authors</h1>
          </div>
        </div>
      </section>
      <section className="section authors-section">
        <div className="container is-fullhd category-title">
          <div className="columns authors-columns">
            {authors.map(({ node: author }) => (
              <AuthorsCard
                id={author.id}
                display_name={author.display_name}
                slug={author.slug}
                img={author.img.replace(
                  /http:\/\/prod.ppl.torchte.ch\//gi,
                  "https://prod.ppl.torchte.ch/"
                )}
              />
            ))}
          </div>
        </div>
      </section>
      <PopularPosts />
    </Layout>
  )
}

export default AuthorsPage
