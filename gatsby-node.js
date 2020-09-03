const _ = require("lodash")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { paginate } = require("gatsby-awesome-pagination")
const axios = require("axios")
const sharp = require("sharp")
sharp.cache(false)
sharp.simd(false)

const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === "publish")

const getCategoryPosts = (edges, id) =>
  _.filter(
    edges,
    ({ node }) => node.categories && _.find(node.categories, ["id", id])
  )

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
      const categoriesVideoTemplate = path.resolve(
        `./src/templates/videoCategory.js`
      )
      _.each(result.data.allWordpressTtgCategories.edges, ({ node: cat }) => {
        if (cat.slug !== "videos") {
          createPage({
            path: `${cat.path}`,
            component: categoriesTemplate,
            context: {
              id: cat.id,
              slug: cat.slug,
              title: cat.name,
            },
          })
        } else {
          createPage({
            path: `/article/category/just-for-fun/videos/`,
            component: categoriesVideoTemplate,
            context: {
              id: cat.id,
              slug: cat.slug,
              title: cat.name,
            },
          })
        }
      })
    })
    .then(() => {
      return graphql(`
        {
          allWordpressPost(sort: { fields: date, order: ASC }) {
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
                  slug
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
      const postsPublished = getOnlyPublished(
        result.data.allWordpressPost.edges
      )

      const getNextPost = post => {
        const allPosts = result.data.allWordpressPost.edges
        const postPetType = post.path.split("/")[2]
        const filteredPetType = allPosts.filter(
          ({ node: singlePost }) =>
            postPetType === singlePost.path.split("/")[2] &&
            post.slug !== singlePost.slug
        )
        const filteredCategories = filteredPetType.filter(
          ({ node: singlePost }) =>
            singlePost.categories[0].name === post.categories[0].name
        )
        const sameCategory = allPosts.filter(
          ({ node: currentPost }) =>
            currentPost.slug != post.slug &&
            currentPost.categories[0].name === post.categories[0].name
        )
        if (filteredCategories && filteredCategories.length > 0) {
          return filteredCategories[
            Math.floor(Math.random() * filteredCategories.length)
          ]
        } else if (filteredPetType && filteredPetType.type > 0) {
          return filteredPetType[
            Math.floor(Math.random() * filteredPetType.length)
          ]
        } else {
          return sameCategory[Math.floor(Math.random() * sameCategory.length)]
        }
      }
      // Iterate over the array of posts
      _.each(postsPublished, ({ node: post }, key) => {
        let randomPost = getNextPost(post)
        let randomPostImg =
          (randomPost &&
            randomPost.node &&
            randomPost.node.featured_media &&
            randomPost.node.featured_media.slug) ||
          "no-next-post"
        createPage({
          path: `${post.path}`,
          component: postTemplate,
          context: {
            id: post.id,
            randomPost: randomPost,
            randomPostImg: randomPostImg,
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
        if (
          page.slug === "privacy-policy" ||
          page.slug === "about-us" ||
          page.slug === "newsletter-signup" ||
          page.slug === "prnews" ||
          page.slug === "terms-of-use" ||
          page.slug === "submit-your-stories-and-feedback"
        ) {
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
          allWordpressTtgTags(sort: { fields: count, order: DESC }, limit: 10) {
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
      const drDebraTemplate = path.resolve(`./src/templates/drDebra.js`)
      // In production builds, filter for only published posts.
      const allTags = result.data.allWordpressTtgTags.edges

      // Iterate over the array of posts
      _.each(allTags, ({ node: tag }, key) => {
        // Create the Gatsby page for this WordPress post
        createPage({
          path: `/tags/${tag.slug}`,
          component:
            tag.slug === "ask-dr-debra-common-questions"
              ? drDebraTemplate
              : tagsTemplate,
          context: {
            id: tag.id,
          },
        })
      })
    })
    .then(() => {
      return graphql(`
        {
          allWordpressBreedPosts {
            edges {
              node {
                id
                slug
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

      const breedTemplate = path.resolve(`./src/templates/breed.js`)

      // In production builds, filter for only published posts.
      const allBreeds = result.data.allWordpressBreedPosts.edges

      // Iterate over the array of posts
      _.each(allBreeds, ({ node: breed }, key) => {
        // Create the Gatsby page for this WordPress post
        createPage({
          path: `${breed.path}`,
          component: breedTemplate,
          context: {
            id: breed.id,
          },
        })
      })
    })
    .then(() => {
      return axios
        .get("http://staging.ppl.torchte.ch/wp-json/ttg/v2/vetlocator")
        .then(res => res.data)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
      const storesTemplate = path.resolve(`./src/templates/store.js`)
      _.each(result, (pet_store, key) => {
        // Create the Gatsby page for this WordPress post
        createPage({
          path: `/pet-stores/${pet_store.post_name}/`,
          component: storesTemplate,
          context: {
            post_title: pet_store.post_title || "no-title",
            post_name: pet_store.post_name || "no-post-name",
            address: pet_store.address || "no-address",
            city: pet_store.city || "no-city",
            state: pet_store.state || "no-state",
            zip: pet_store.zip || "no-zip",
            phone: pet_store.phone || "no-phone",
            lat: pet_store.lat || "no-lat",
            lng: pet_store.lng || "no-lng",
            email: pet_store.email || "",
            url: pet_store.url || "no-url",
            post_views_count:
              pet_store.post_views_count || "no-post-views-count",
          },
        })
      })
    })
    .then(() => {
      return graphql(`
        {
          allWordpressTtgUsers {
            edges {
              node {
                id
                img
                slug
                display_name
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

      const authorsTemplate = path.resolve(`./src/templates/author.js`)
      const allAuthors = result.data.allWordpressTtgUsers.edges

      _.each(allAuthors, ({ node: author }, key) => {
        // Create the Gatsby page for this WordPress post
        switch (author.slug) {
          case "stephanie-silberstang-dvm-cva":
          case "alett-mekler-ma-econ-dvm-ccrp-cvma":
          case "dr-debra-primovic-dvm":
          case "carey-hemmelgarn":
          case "kimmi-whitehead-vmd-dacvecc":
          case "rebecca-mount-dvm-dacvd":
          case "danika-sorensen-vmd":
          case "lori-savka":
          case "melissa-evans-lvt-vts-ecc":
          case "carey-hemmelgarn-dvm-dacvecc":
            createPage({
              path: `/authors/${author.slug}`,
              component: authorsTemplate,
              context: {
                id: author.id,
              },
            })
          default:
            null
        }
      })
    })
}
