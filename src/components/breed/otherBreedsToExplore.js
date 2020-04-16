import React from 'react'
import { useStaticQuery } from 'gatsby'
import BreedsToExplore from './breedsToExplore'



const OtherBreedsToExplor = () => {
  const {wordpressTtgPages} = useStaticQuery(
    graphql`
      query {
        wordpressTtgPages(title: {eq: "Breeds"}) {
          title
          acf {
            other_breeds_to_explore {
              post_title
              slug
              featured_img {
                source_url
                alt_text
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const other_breeds_to_explore = wordpressTtgPages.acf.other_breeds_to_explore

  return (
    <BreedsToExplore breeds_to_explore={other_breeds_to_explore} />
  )
}

export default OtherBreedsToExplor
