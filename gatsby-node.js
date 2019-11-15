const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')
const axios = require("axios")

const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')

const getCategoryPosts = (edges, id) =>
  _.filter(edges, ({ node }) => node.categories && _.find(node.categories, ['id', id] ) )

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

    return graphql(`
      {
        allWordpressCategory(filter: { count: { gt: 0 } }) {
          edges {
            node {
              id
              name
              slug
              path
            }
          }
        }
      }
    `)
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const categoriesTemplate = path.resolve(`./src/templates/category.js`)
      const categoriesVideoTemplate = path.resolve(`./src/templates/videoCategory.js`)
      _.each(result.data.allWordpressCategory.edges, ({ node: cat }) => {
        if(cat.slug !== 'videos') {
          createPage({
            path: `${cat.path}`,
            component: categoriesTemplate,
            context: {
              id: cat.id,
              slug: cat.slug,
              title: cat.name
            },
          })
        } else {
          createPage({
            path: `${cat.path}`,
            component: categoriesVideoTemplate,
            context: {
              id: cat.id,
              slug: cat.slug,
              title: cat.name
            },
          })
        }
      })
    })
    .then(() => {
      return graphql(`
        {
          allWordpressPost(sort: {fields: date, order: ASC}) {
            edges {
              node {
                id
                slug
                path
                status
                title
                categories {
                  id
                  name
                  path
                }
                featured_media {
                  source_url
                }
              }
            }
          }
        }
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const postTemplate = path.resolve(`./src/templates/post.js`)

      // In production builds, filter for only published posts.
      const allPublishPosts = result.data.allWordpressPost.edges
      const postsPublished =getOnlyPublished(allPublishPosts)

      // Iterate over the array of posts
      _.each(postsPublished, ({ node: post }, key) => {
        // Create the Gatsby page for this WordPress post
        createPage({
          path: `${post.path}`,
          component: postTemplate,
          context: {
            id: post.id,
            nextPost: postsPublished[key + 1] ? postsPublished[key + 1].node : postsPublished[0].node
          },
        })
      })
    })
    .then(() => {
      return graphql(`
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                wordpress_id
                path
              }
            }
          }
        }
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const pageTemplate = path.resolve(`./src/templates/page.js`)

      // In production builds, filter for only published posts.
      const allPages = result.data.allWordpressPage.edges

      // Iterate over the array of posts
      _.each(allPages, ({ node: page }, key) => {
        // Create the Gatsby page for this WordPress post
        if(page.slug === 'privacy-policy') {
          createPage({
            path: `${page.path}`,
            component: pageTemplate,
            context: {
              id: page.id,
            },
          })
        } else if(page.slug === 'about-us') {
          createPage({
            path: `${page.path}`,
            component: pageTemplate,
            context: {
              id: page.id,
            },
          })
        } else if(page.slug === 'prnews') {
          createPage({
            path: `${page.path}`,
            component: pageTemplate,
            context: {
              id: page.id,
            },
          })
        } else {
          return null
        }
      })
    })
    .then(() => {
      return new Promise((resolve, reject) => {
        axios
          .get("http://dev.ppl.torchte.ch/wp-json/ttg/v2/pages")
          .then(result => {
            const { data } = result
            /**
             * creates a dynamic page with the data received
             * injects the data into the context object alongside with some options
             * to configure js-search
             */
            createPage({
              path: "/search",
              component: path.resolve(`./src/templates/ClientSearchTemplate.js`),
              context: {
                bookData: {
                  allPosts: [],
                  options: {
                    indexStrategy: "Prefix match",
                    searchSanitizer: "Lower Case",
                    TitleIndex: true,
                    AuthorIndex: true,
                    SearchByTerm: true,
                  },
                },
              },
            })
            resolve()
          })
          .catch(err => {
            console.log("====================================")
            console.log(`error creating Page:${err}`)
            console.log("====================================")
            reject(new Error(`error on page creation:\n${err}`))
          })
      })
    })
}