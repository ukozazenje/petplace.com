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
        if (cat.slug === "videos") {
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
          allWordpressTtgAllcategories {
            edges {
              node {
                categories {
                  id
                  wordpress_id
                  path
                  name
                }
                name
                slug
                wordpress_id
                path
              }
            }
          }
          allWordpressPost(sort: { fields: date, order: ASC }) {
            edges {
              node {
                id
                slug
                path
                title
                categories {
                  id
                  name
                  path
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

      const categoriesNewTemplate = path.resolve(
        `./src/templates/categoryTemplate.js`
      )
      const categoryPosts = result.data.allWordpressPost.edges

      _.each(
        result.data.allWordpressTtgAllcategories.edges,
        ({ node: cat }) => {
          const allCats = cat.categories
            ? cat.categories.map(category => category.path).concat(cat.path)
            : [cat.path]
          const allCategoryPosts = categoryPosts.filter(
            ({ node: posts }) =>
              posts.categories.filter(category =>
                allCats.includes(category.path)
              ).length
          )
          if (cat.slug !== "videos") {
            // createPage({
            //   path: `${cat.path}`,
            //   component: categoriesNewTemplate,
            //   context: {
            //     id: cat.wordpress_id,
            //     categories: cat.categories
            //       ? cat.categories
            //           .map(category => category.wordpress_id)
            //           .concat(cat.wordpress_id)
            //       : [cat.wordpress_id],
            //     cat_name: cat.name,
            //     cat_path: cat.path,
            //     allPosts: categoryPosts.filter(
            //       ({ node: posts }) =>
            //         posts.categories.filter(category =>
            //           allCats.includes(category.path)
            //         ).length
            //     ),
            //   },
            // })
            paginate({
              createPage,
              items: allCategoryPosts,
              itemsPerPage: 18,
              component: categoriesNewTemplate,
              pathPrefix: ({ pageNumber }) =>
                pageNumber === 0 ? cat.path : `${cat.path}page`,
              context: {
                id: cat.wordpress_id,
                categories: cat.categories
                  ? cat.categories
                      .map(category => category.wordpress_id)
                      .concat(cat.wordpress_id)
                  : [cat.wordpress_id],
                cat_name: cat.name,
                cat_path: cat.path,
              },
            })
          }
        }
      )
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
      const redditPostTemplate = path.resolve(`./src/templates/redditPost.js`)
      const giftGuideTemplate = path.resolve(`./src/templates/giftGuide.js`)
      const HolidayDogTreats = path.resolve(
        `./src/templates/HolidayDogTreats.js`
      )
      const HolidayCatTreats = path.resolve(
        `./src/templates/HolidayCatTreats.js`
      )
      const yearInReview = path.resolve(`./src/templates/YearInReview.js`)
      const winterPawProtection = path.resolve(
        `./src/templates/winter-paw-protection-dogs.js`
      )
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
      const customPosts = path => {
        switch (path) {
          case "/article/dogs/just-for-fun/cutest-dog-posts-october-2020/":
            return redditPostTemplate
          case "/article/general/just-for-fun/2020-holiday-gift-guide-for-pets-and-pet-lovers/":
            return giftGuideTemplate
          case "/article/dogs/just-for-fun/holiday-themed-dog-treats/":
            return HolidayDogTreats
          case "/article/cats/just-for-fun/holiday-themed-cat-toys/":
            return HolidayCatTreats
          case "/article/general/just-for-fun/2020-year-in-review/":
            return yearInReview
          case "/article/dogs/just-for-fun/winter-paw-protection-dogs/":
            return winterPawProtection
          default:
            return postTemplate
        }
      }
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
          component: customPosts(post.path),
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
      return graphql(`
        {
          allWordpressPuppyDiariesPosts(
            sort: { order: ASC, fields: wordpress_id }
          ) {
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

      const PuppyDiariesTemplate = path.resolve(`./src/templates/puppyDiary.js`)

      // In production builds, filter for only published posts.
      const allPuppyDiaries = result.data.allWordpressPuppyDiariesPosts.edges

      // Iterate over the array of posts
      _.each(allPuppyDiaries, ({ node: puppyDiary }, key) => {
        // Create the Gatsby page for this WordPress post
        console.log("Key", key)
        createPage({
          path: `${puppyDiary.path}`,
          component: PuppyDiariesTemplate,
          context: {
            post_number: key + 1,
            id: puppyDiary.id,
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
