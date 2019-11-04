const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')

const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')

const getCategoryPosts = (edges, id) =>
  _.filter(edges, ({ node }) => node.categories && node.categories[0].id == id )

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

    return graphql(`
      {
        allWordpressPost {
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
          allWordpressPost {
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
      _.each(postsPublished, ({ node: post }) => {
        // Create the Gatsby page for this WordPress post
        createPage({
          path: `${post.path}`,
          component: postTemplate,
          context: {
            id: post.id,
          },
        })
      })
    })
    // .then(() => {
    //   return graphql(`
    //     {
    //       allWordpressPage(filter: {slug: {eq: "home"}}) {
    //         edges {
    //           node {
    //             acf {
    //               category_rows {
    //                 category
    //                 posts {
    //                   post {
    //                     wordpress_id
    //                     post_author
    //                   }
    //                 }
    //               }
    //               featured_posts {
    //                 featured_post {
    //                   post_title
    //                   wordpress_id
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   `)
    // })
    // .then((result) => {
    //   if (result.errors) {
    //     result.errors.forEach(e => console.error(e.toString()))
    //     return Promise.reject(result.errors)
    //   }
    //   const homeTemplate = path.resolve(`./src/templates/post.js`)
    //   const category_rows = result.data.allWordpressPage.edges[0].node.acf.category_rows
    //   const categories = category_rows.map((category_row) => category_row.category)
    //   const acf_posts = category_rows.map((category_row) => category_row.posts)
    //   createPage({
    //     path: `/home`,
    //     component: homeTemplate,
    //     context: {
    //       categories: categories,
    //       acf_posts: acf_posts
    //     },
    //   })
    // })
}