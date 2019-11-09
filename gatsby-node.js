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
        allWordpressPost(sort: {fields: date, order: ASC}) {
          edges {
            node {
              id
              slug
              status
              categories {
                id
                slug
              }
            }
          }
        }
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

      const allPosts = result.data.allWordpressPost.edges
      const posts = getOnlyPublished(allPosts)

      _.each(result.data.allWordpressCategory.edges, ({ node: cat }) => {
        paginate({
          createPage,
          items: getCategoryPosts(posts, cat.id),
          itemsPerPage: 6,
          pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `${cat.path}` : `${cat.path}page`),
          component: categoriesTemplate,
          context: {
            catPath: cat.path,
            name: cat.name,
          }
        })
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
            nextPostId: postsPublished[key + 1] ? postsPublished[key + 1].node.id : postsPublished[0].node.id
          },
        })
      })
    })
    .then(() => {
      return new Promise((resolve, reject) => {
        axios
          .get("http://dev.ppl.torchte.ch/wp-json/wp/v2/posts?per_page=5")
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