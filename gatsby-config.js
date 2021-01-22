require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const d = new Date()
const pastYear = d.getFullYear() - 1
d.setFullYear(pastYear)
const lastYear = d.toISOString()

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.petplace.com`,
    title: `PetPlace: The Web's #1 Source of Pet Information`,
    description: `Read veterinarian approved pet care articles on PetPlace.com. Find pet health information about your dog, cat and many other animals from our pet experts.`,
    author: `@PetPlaceFans`,
    google_site_verification: `6eUJTvmXxNEIIo_WFK3iWppRstR1aJrzuKaTtqlG4oc`,
    image: "/images/hero-bg.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-instagram-embed`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-twitter`,
    `gatsby-transformer-remark`,
    `@raae/gatsby-remark-oembed`,
    `gatsby-remark-embed-video`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [`/search`, `/tags/*`],
        sitemapSize: 5000,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pet place`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-fav.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: ["title", "category_name", "author_name", "post_tags"],
        // How to resolve each field's value for a supported node type
        resolvers: {
          // For any node of type wordpress__POST, list how to resolve the fields' values
          wordpress__rmh_posts: {
            post_tags: node => node.post_tags,
            title: node => node.title,
            path: node => node.path,
            author_name: node => node.author_name,
            category_name: node => node.category_name,
            category_path: node => node.category_path,
            featured_image: node => node.featured,
            // featured_media: (node, getNodes) =>
            //   getNodes(node.featured_media___NODE)

            // category_name: node => node.category_name,
            // category_path: node => node.category_path,
            // date: node => node.date,
            // author: node => node.author_name,
            // img: node => node.featured_image,
          },
          wordpress__breed_posts: {
            title: node => node.title,
            path: node => node.path,
            author_name: node => node.acf.breed_author_name,
            category_name: node => "Breed Guide",
            category_path: node => "/article/breed/",
            featured_image: node => node.featured_thumbnail,
          },
          wordpress__puppy_diaries_posts: {
            title: node => node.title,
            path: node => node.path,
            author_name: node => node.author_name,
            category_name: node => "Puppy Diaries",
            category_path: node => "/article/puppy-diaries/",
            featured_image: node => node.featured_thumbnail,
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5V3N739",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allWordpressPost } }) => {
              return allWordpressPost.edges.map(edge => {
                let imgUrl =
                  edge.node &&
                  edge.node.featured_media &&
                  edge.node.featured_media.source_url
                    ? `${edge.node.featured_media.source_url.replace(
                        process.env.GATSBY_PP_URL,
                        process.env.GATSBY_WP_URL
                      )}`
                    : `https://${process.env.GATSBY_PP_URL}/images/pet-health.jpg`
                let xmlContent = `<img src="${imgUrl}" alt="PetPlace post" />${edge.node.excerpt}`
                return Object.assign({}, edge.node.allWordpressPost, {
                  description: edge.node.yoast_meta.yoast_wpseo_metadesc,
                  date: edge.node.date,
                  title: edge.node.title,
                  author: edge.node.author.name,
                  url: site.siteMetadata.siteUrl + edge.node.path,
                  guid: site.siteMetadata.siteUrl + edge.node.path,
                  enclosure: {
                    url: imgUrl,
                    length: "1000",
                    type:
                      edge.node &&
                      edge.node.featured_media &&
                      edge.node.featured_media.source_url
                        ? `${edge.node.featured_media.mime_type}`
                        : `image/png`,
                  },
                })
              })
            },
            query: `
              {
                allWordpressPost(filter: {date: {gt: "${lastYear}"}}) {
                  edges {
                    node {
                      id
                      path
                      categories {
                        name
                      }
                      excerpt
                      title
                      author {
                        name
                      }
                      date(formatString: "MMMM DD, YYYY")
                      yoast_meta {
                        yoast_wpseo_metadesc
                      }
                      featured_media {
                        source_url
                        mime_type
                      }
                    }
                  }
                }
              }
            `,
            output: "/feeds/all-posts.xml",
            title: "RSS Feed for PetPlace",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: '^/post/',
          },
          {
            serialize: ({ query: { site, allWordpressPost } }) => {
              return allWordpressPost.edges.map(edge => {
                let imgUrl =
                  edge.node &&
                  edge.node.featured_media &&
                  edge.node.featured_media.source_url
                    ? `${edge.node.featured_media.source_url.replace(
                        process.env.GATSBY_PP_URL,
                        process.env.GATSBY_WP_URL
                      )}`
                    : `https://${process.env.GATSBY_PP_URL}/images/pet-health.jpg`
                let xmlContent = `<img src="${imgUrl}" alt="PetPlace post" />${edge.node.excerpt}`
                return Object.assign({}, edge.node.allWordpressPost, {
                  description: edge.node.yoast_meta.yoast_wpseo_metadesc,
                  date: edge.node.date,
                  title: edge.node.title,
                  author: edge.node.author.name,
                  url: site.siteMetadata.siteUrl + edge.node.path,
                  guid: site.siteMetadata.siteUrl + edge.node.path,
                  enclosure: {
                    url: imgUrl,
                    length: "1000",
                    type:
                      edge.node &&
                      edge.node.featured_media &&
                      edge.node.featured_media.source_url
                        ? `${edge.node.featured_media.mime_type}`
                        : `image/png`,
                  },
                })
              })
            },
            query: `
              {
                allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: "pet-care"}}}, date: {gt: "${lastYear}"}}) {
                  edges {
                    node {
                      id
                      path
                      categories {
                        name
                      }
                      excerpt
                      title
                      author {
                        name
                      }
                      date(formatString: "MMMM DD, YYYY")
                      yoast_meta {
                        yoast_wpseo_metadesc
                      }
                      featured_media {
                        source_url
                        mime_type
                      }
                    }
                  }
                }
              }
            `,
            output: "/feeds/categories/pet-care.xml",
            title: "RSS Feed for Pet Care category",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: '^/post/',
          },
          {
            serialize: ({ query: { site, allWordpressPost } }) => {
              return allWordpressPost.edges.map(edge => {
                let imgUrl =
                  edge.node &&
                  edge.node.featured_media &&
                  edge.node.featured_media.source_url
                    ? `${edge.node.featured_media.source_url.replace(
                        process.env.GATSBY_PP_URL,
                        process.env.GATSBY_WP_URL
                      )}`
                    : `https://${process.env.GATSBY_PP_URL}/images/pet-health.jpg`
                let xmlContent = `<img src="${imgUrl}" alt="PetPlace post" />${edge.node.excerpt}`
                return Object.assign({}, edge.node.allWordpressPost, {
                  description: edge.node.yoast_meta.yoast_wpseo_metadesc,
                  date: edge.node.date,
                  title: edge.node.title,
                  author: edge.node.author.name,
                  url: site.siteMetadata.siteUrl + edge.node.path,
                  guid: site.siteMetadata.siteUrl + edge.node.path,
                  enclosure: {
                    url: imgUrl,
                    length: "1000",
                    type:
                      edge.node &&
                      edge.node.featured_media &&
                      edge.node.featured_media.source_url
                        ? `${edge.node.featured_media.mime_type}`
                        : `image/png`,
                  },
                })
              })
            },
            query: `
              {
                allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: "pet-health"}}}, date: {gt: "${lastYear}"}}) {
                  edges {
                    node {
                      id
                      path
                      categories {
                        name
                      }
                      excerpt
                      title
                      author {
                        name
                      }
                      date(formatString: "MMMM DD, YYYY")
                      yoast_meta {
                        yoast_wpseo_metadesc
                      }
                      featured_media {
                        source_url
                        mime_type
                      }
                    }
                  }
                }
              }
            `,
            output: "/feeds/categories/pet-health.xml",
            title: "RSS Feed for Pet Health category",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: '^/post/',
          },
          {
            serialize: ({ query: { site, allWordpressPost } }) => {
              return allWordpressPost.edges.map(edge => {
                let imgUrl =
                  edge.node &&
                  edge.node.featured_media &&
                  edge.node.featured_media.source_url
                    ? `${edge.node.featured_media.source_url.replace(
                        process.env.GATSBY_PP_URL,
                        process.env.GATSBY_WP_URL
                      )}`
                    : `https://${process.env.GATSBY_PP_URL}/images/pet-health.jpg`
                let xmlContent = `<img src="${imgUrl}" alt="PetPlace post" />${edge.node.excerpt}`
                return Object.assign({}, edge.node.allWordpressPost, {
                  description: edge.node.yoast_meta.yoast_wpseo_metadesc,
                  date: edge.node.date,
                  title: edge.node.title,
                  author: edge.node.author.name,
                  url: site.siteMetadata.siteUrl + edge.node.path,
                  guid: site.siteMetadata.siteUrl + edge.node.path,
                  enclosure: {
                    url: imgUrl,
                    length: "1000",
                    type:
                      edge.node &&
                      edge.node.featured_media &&
                      edge.node.featured_media.source_url
                        ? `${edge.node.featured_media.mime_type}`
                        : `image/png`,
                  },
                })
              })
            },
            query: `
              {
                allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: "pet-behavior-training"}}}, date: {gt: "${lastYear}"}}) {
                  edges {
                    node {
                      id
                      path
                      categories {
                        name
                      }
                      excerpt
                      title
                      author {
                        name
                      }
                      date(formatString: "MMMM DD, YYYY")
                      yoast_meta {
                        yoast_wpseo_metadesc
                      }
                      featured_media {
                        source_url
                        mime_type
                      }
                    }
                  }
                }
              }
            `,
            output: "/feeds/categories/pet-behavior-training.xml",
            title: "RSS Feed for Pet Behavior and Training category",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: '^/post/',
          },
          {
            serialize: ({ query: { site, allWordpressPost } }) => {
              return allWordpressPost.edges.map(edge => {
                let imgUrl =
                  edge.node &&
                  edge.node.featured_media &&
                  edge.node.featured_media.source_url
                    ? `${edge.node.featured_media.source_url.replace(
                        process.env.GATSBY_PP_URL,
                        process.env.GATSBY_WP_URL
                      )}`
                    : `https://${process.env.GATSBY_PP_URL}/images/pet-health.jpg`
                let xmlContent = `<img src="${imgUrl}" alt="PetPlace post" />${edge.node.excerpt}`
                return Object.assign({}, edge.node.allWordpressPost, {
                  description: edge.node.yoast_meta.yoast_wpseo_metadesc,
                  date: edge.node.date,
                  title: edge.node.title,
                  author: edge.node.author.name,
                  url: site.siteMetadata.siteUrl + edge.node.path,
                  guid: site.siteMetadata.siteUrl + edge.node.path,
                  enclosure: {
                    url: imgUrl,
                    length: "1000",
                    type:
                      edge.node &&
                      edge.node.featured_media &&
                      edge.node.featured_media.source_url
                        ? `${edge.node.featured_media.mime_type}`
                        : `image/png`,
                  },
                })
              })
            },
            query: `
              {
                allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: "just-for-fun"}}}, date: {gt: "${lastYear}"}}) {
                  edges {
                    node {
                      id
                      path
                      categories {
                        name
                      }
                      excerpt
                      title
                      author {
                        name
                      }
                      date(formatString: "MMMM DD, YYYY")
                      yoast_meta {
                        yoast_wpseo_metadesc
                      }
                      featured_media {
                        source_url
                        mime_type
                      }
                    }
                  }
                }
              }
            `,
            output: "/feeds/categories/just-for-fun.xml",
            title: "RSS Feed for Just for Fun category",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: '^/post/',
          },
          {
            serialize: ({ query: { site, allWordpressPost } }) => {
              return allWordpressPost.edges.map(edge => {
                let imgUrl =
                  edge.node &&
                  edge.node.featured_media &&
                  edge.node.featured_media.source_url
                    ? `${edge.node.featured_media.source_url.replace(
                        process.env.GATSBY_PP_URL,
                        process.env.GATSBY_WP_URL
                      )}`
                    : `https://${process.env.GATSBY_PP_URL}/images/pet-health.jpg`
                let xmlContent = `<img src="${imgUrl}" alt="PetPlace post" />${edge.node.excerpt}`
                return Object.assign({}, edge.node.allWordpressPost, {
                  description: edge.node.yoast_meta.yoast_wpseo_metadesc,
                  date: edge.node.date,
                  title: edge.node.title,
                  author: edge.node.author.name,
                  url: site.siteMetadata.siteUrl + edge.node.path,
                  guid: site.siteMetadata.siteUrl + edge.node.path,
                  enclosure: {
                    url: imgUrl,
                    length: "1000",
                    type:
                      edge.node &&
                      edge.node.featured_media &&
                      edge.node.featured_media.source_url
                        ? `${edge.node.featured_media.mime_type}`
                        : `image/png`,
                  },
                })
              })
            },
            query: `
              {
                allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: "pet-insurance"}}}, date: {gt: "${lastYear}"}}) {
                  edges {
                    node {
                      id
                      path
                      categories {
                        name
                      }
                      excerpt
                      title
                      author {
                        name
                      }
                      date(formatString: "MMMM DD, YYYY")
                      yoast_meta {
                        yoast_wpseo_metadesc
                      }
                      featured_media {
                        source_url
                        mime_type
                      }
                    }
                  }
                }
              }
            `,
            output: "/feeds/categories/pet-insurance.xml",
            title: "RSS Feed for Pet Insurance category",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: '^/post/',
          },
          {
            serialize: ({ query: { site, allWordpressBreedPosts } }) => {
              return allWordpressBreedPosts.edges.map(edge => {
                let imgUrl =
                  edge.node &&
                  edge.node.featured &&
                  edge.node.featured.source_url
                    ? `${edge.node.featured.source_url.replace(
                        process.env.GATSBY_PP_URL,
                        process.env.GATSBY_WP_URL
                      )}`
                    : `https://${process.env.GATSBY_PP_URL}/images/pet-health.jpg`
                let xmlContent = `<img src="${imgUrl}" alt="PetPlace post" />${edge.node.excerpt}`
                return Object.assign({}, edge.node.allWordpressBreedPosts, {
                  description: edge.node.yoast_meta,
                  date: edge.node.date,
                  title: edge.node.title,
                  author:
                    (edge &&
                      edge.node &&
                      edge.node.acf &&
                      edge.node.acf.breed_author_name) ||
                    "PetPlace Staff",
                  url: site.siteMetadata.siteUrl + edge.node.path,
                  guid: site.siteMetadata.siteUrl + edge.node.path,
                  enclosure: {
                    url: imgUrl,
                    length: "1000",
                    type:
                      edge.node &&
                      edge.node.featured &&
                      edge.node.featured.source_url
                        ? `${edge.node.featured.mime_type}`
                        : `image/png`,
                  },
                })
              })
            },
            query: `
            {
              allWordpressBreedPosts {
                edges {
                  node {
                    acf {
                      breed_author_name
                    }
                    date
                    title
                    yoast_meta
                    path
                    featured {
                      source_url
                      mime_type
                    }
                  }
                }
              }
            }
            `,
            output: "/feeds/categories/breeds.xml",
            title: "RSS Feed for Breed Guide",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: '^/post/',
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
         */
        baseUrl: process.env.GATSBY_WP_URL,
        // The protocol. This can be http or https.
        protocol: process.env.GATSBY_WP_PROTOCOL,
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
        // This feature is untested for sites hosted on wordpress.com.
        // Defaults to true.
        useACF: true,
        // Include specific ACF Option Pages that have a set post ID
        // Regardless if an ID is set, the default options route will still be retrieved
        // Must be using V3 of ACF to REST to include these routes
        // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
        // routes with the ID option_page_1 and option_page_2
        // The IDs provided to this array should correspond to the `post_id` value when defining your
        // options page using the provided `acf_add_options_page` method, in your WordPress setup
        // Dashes in IDs will be converted to underscores for use in GraphQL
        acfOptionPageIds: [],
        auth: {
          // If auth.user and auth.pass are filled, then the source plugin will be allowed
          // to access endpoints that are protected with .htaccess.
          htaccess_user: "your-htaccess-username",
          htaccess_pass: "your-htaccess-password",
          htaccess_sendImmediately: false,

          // If hostingWPCOM is true then you will need to communicate with wordpress.com API
          // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
          // then add your clientId, clientSecret, username, and password here
          // Learn about environment variables: https://www.gatsbyjs.org/docs/environment-variables
          // If two-factor authentication is enabled then you need to create an Application-Specific Password,
          // see https://en.support.wordpress.com/security/two-step-authentication/#application-specific-passwords
          wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          wpcom_app_clientId: "54793",
          wpcom_user: "gatsbyjswpexample@gmail.com",
          wpcom_pass: process.env.WORDPRESS_PASSWORD,

          // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
          // or (https://github.com/jonathan-dejong/simple-jwt-authentication) requires jwt_base_path, path can be found in WordPress wp-api.
          // plugin, you can specify user and password to obtain access token and use authenticated requests against WordPress REST API.
          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD,
          jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
        },
        // Set cookies that should be send with requests to WordPress as key value pairs
        cookies: {},
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems.
        verboseOutput: false,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Search and Replace Urls across WordPress content.
        searchAndReplaceContentUrls: {
          sourceUrl: "https://" + process.env.GATSBY_WP_URL,
          replacementUrl: "https://" + process.env.GATSBY_PP_URL,
        },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        // Set WP REST API routes whitelists
        // and blacklists using glob patterns.
        // Defaults to whitelist the routes shown
        // in the example below.
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]`
        // ` will either include or exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        // Whitelisted routes using glob patterns
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/tags",
          "**/users",
          "**/media",
          "**/most-used-tags",
          "**/yoast",
          "**/allcategories",
        ],
        // Blacklisted routes using glob patterns
        excludedRoutes: ["**/posts/1456"],
        // Set this to keep media sizes.
        // This option is particularly useful in case you need access to
        // URLs for thumbnails, or any other media detail.
        // Defaults to false
        keepMediaSizes: true,
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: `${process.env.GATSBY_WEB_SITE_URL}`,
        policy:
          process.env.GATSBY_STAGE === "staging"
            ? [{ userAgent: "*", disallow: ["/"] }]
            : [{ userAgent: "*", disallow: "/?utm" }],
      },
    },
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     develop: true, // Enable while using `gatsby develop`
    //     // tailwind: true, // Enable tailwindcss support
    //     // whitelist: ['whitelist'], // Don't remove this selector
    //     // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
    //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    //   }
    // }
    // {
    //   resolve: `gatsby-plugin-remote-images`,
    //   options: {
    //     nodeType: "wordpressWpProjects",
    //     imagePath: "https://petplace-staging.mdrkdjq6-liquidwebsites.com/wp-json/wp/v2/media",
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
