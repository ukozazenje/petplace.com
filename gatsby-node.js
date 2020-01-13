const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')
const axios = require("axios")
const sharp = require('sharp');
sharp.cache(false);
sharp.simd(false);

const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')

const getCategoryPosts = (edges, id) =>
  _.filter(edges, ({ node }) => node.categories && _.find(node.categories, ['id', id] ) )

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

    return graphql(`
      {
        allWordpressTtgCategories {
          edges {
            node {
              id
              path
              slug
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
      _.each(result.data.allWordpressTtgCategories.edges, ({ node: cat }) => {
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
            path: `/article/category/just-for-fun/videos/`,
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
            nextPostSlug: postsPublished[key + 1] ? postsPublished[key + 1].node.slug : postsPublished[0].node.slug,
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
        if(page.slug === 'privacy-policy' || page.slug === 'about-us' || page.slug === 'prnews' || page.slug === 'terms-of-use') {
          createPage({
            path: `${page.path}`,
            component: pageTemplate,
            context: {
              id: page.id,
            },
          })
        }
      })
    })
    .then(() => {
      return graphql(`
        {
          allWordpressTtgTags(sort: {fields: count, order: DESC}, limit: 10) {
            edges {
              node {
                id
                name
                count
                slug
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

      const tagsTemplate = path.resolve(`./src/templates/tags.js`)

      // In production builds, filter for only published posts.
      const allTags = result.data.allWordpressTtgTags.edges

      // Iterate over the array of posts
      _.each(allTags, ({ node: tag }, key) => {
        // Create the Gatsby page for this WordPress post
        createPage({
          path: `/tags/${tag.slug}`,
          component: tagsTemplate,
          context: {
            id: tag.id,
          },
        })
      })
    })
    .then(() => {
      return axios.get('http://staging.ppl.torchte.ch/wp-json/ttg/v2/vetlocator').then( res => res.data)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
      const storesTemplate = path.resolve(`./src/templates/store.js`)
      _.each(result, ( pet_store , key) => {
        // Create the Gatsby page for this WordPress post
        createPage({
          path: `/pet-stores/${pet_store.post_name}`,
          component: storesTemplate,
          context: {
            id: pet_store.id || 'no-id',
            post_title: pet_store.post_title || 'no-title',
            post_name: pet_store.post_name || 'no-post-name',
            address: pet_store.address || 'no-address',
            city: pet_store.city || 'no-city',
            state: pet_store.state || 'no-state',
            zip: pet_store.zip || 'no-zip',
            phone: pet_store.phone || 'no-phone',
            lat: pet_store.lat || 'no-lat',
            lng: pet_store.lng || 'no-lng',
            country: pet_store.country || 'no-country',
            country_iso: pet_store.country_iso || 'no-country-iso',
            email: pet_store.email || 'no-email',
            url: pet_store.url || 'no-url',
            post_views_count: pet_store.post_views_count || 'no-post-views-count'
          },
        })
      })
    })
}