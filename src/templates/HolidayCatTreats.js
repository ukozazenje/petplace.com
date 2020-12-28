import React, { Component } from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import avatarImg from "../images/author.svg"
import facebook from "../images/facebookIcon.svg"
import pintrest from "../images/pinterestIcon.svg"
import twitter from "../images/twitterIcon.svg"
import emailIcon from "../images/emailIcon.svg"
import downloadIcon from "../images/download.svg"
import SimilarPosts from "../components/post/SimilarPosts"
import NoHeroPostImg from "../static/images/noPostHeroImg"
import NoMobileHeroPostImg from "../static/images/noPostHeroMobileImg"
import NextPost from "../components/post/NextPost"
import Seo from "../components/seo"
import Sticky from "react-stickynode"
import Breadcrumbs from "../components/Breadcrumbs"
import AdSet from "../components/AdSet"
import AdMobile from "../components/AdMobile"
import { Link } from "gatsby"
import { filterAuthorsLink, filterFaqPosts } from "../components/functions"
import { isMobile, isMobileOnly } from "react-device-detect"
import LikeArticleWidget from "../components/LikeArticleWidget"
import axios from "axios"
import ContactUsSection from "../components/homepage/contact-us"
import ProdImg1 from "../images/holiday-treats-for-cats/prod-box-1.jpg"
import ProdImg2 from "../images/holiday-treats-for-cats/prod-box-2.jpg"
import ProdImg3 from "../images/holiday-treats-for-cats/prod-box-3.jpg"
import ProdImg4 from "../images/holiday-treats-for-cats/prod-box-4.jpg"
import ProdImg5 from "../images/holiday-treats-for-cats/prod-box-5.jpg"
import ProdImg6 from "../images/holiday-treats-for-cats/prod-box-6.jpg"
import ProdImg7 from "../images/holiday-treats-for-cats/prod-box-7.jpg"
import ProdImg8 from "../images/holiday-treats-for-cats/prod-box-8.jpg"
import ProdImg9 from "../images/holiday-treats-for-cats/prod-box-9.jpg"
import ProdImg10 from "../images/holiday-treats-for-cats/prod-box-10.jpg"

import PawsomeContent from "../components/PawsomeFallStyleReportContent"
import GiftBox from "../components/GiftBox"
const HolidayCatTreats = ({ data }) => {
  const post = data.wordpressPost
  return (
    <Layout>
      <Seo
        title={`${post.yoast_meta.yoast_wpseo_title}`}
        description={post.yoast_meta.yoast_wpseo_metadesc}
        image="/images/holiday-cat-treats-background.jpg"
      />
      <div className="holiday-treats-cats-page">
        <div className="holiday-treats-hero-image holiday-treats-cats-hero-image">
          <div className="container is-fullhd">
            <h1>10 Purrfect Holiday Toys for Cats</h1>
            <p>
              We found some extra special toys to delight even the finickiest
              feline. With these nifty gifts under the tree, you are sure to be
              the cat’s meow!
            </p>
          </div>
        </div>
        <section className="section products-section blue-section padding-top-0">
          <div className="container is-fullhd">
            <p className="sponsored-paragraph">
              All products featured in this article were independently selected
              by our editorial team. As an Amazon Associate, PetPlace will earn
              if you click on the provided links and/or purchase a qualifying
              product from Amazon.
            </p>

            <div className="section-subtitle"></div>

            <GiftBox title="Savvy Tabby Holiday Chew Toys Set" img={ProdImg1}>
              <p>
                Even a kitty that’s ‘a little naughty’ deserves a fun holiday
                present! This toy box is a collection of feline favorites: 10
                toys that roll, rattle, crinkle, or contain catnip, in two
                different assortments of colors and shapes. Packaged in a pretty
                holiday box, complete with ribbon and a tag, it is ready for
                holiday gifting!
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/gp/product/B00HAQZ06Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00HAQZ06Q&linkCode=as2&tag=petplace07-20&linkId=19744eabf1ec844f3058f7c97e0021ed"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>

            <GiftBox title="Santa Mouse Toy Treat Dispenser" img={ProdImg2}>
              <p>
                This tumbling toy is made of non-toxic, high-quality plastic
                that will entertain your cat for hours. Dressed up in a fancy
                party hat, this mouse tumbles to give out treats, which is
                purr-fect for rewarding your nice kitty during the holidays.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/gp/product/B07V33LXB9/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07V33LXB9&linkCode=as2&tag=petplace07-20&linkId=07ecf8839baca7c40cf5194231357e4f"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>

            <GiftBox
              title="Springy Teaser Mouse Toy on Roller Track with Catnip"
              img={ProdImg3}
            >
              <p>
                A busy cat is a happy cat! This whimsical track toy is designed
                to stimulate your cat’s senses and hunting instincts. It’s a
                2-in-1 plaything that features a detachable mouse teaser that
                can be used separately from the roller track bottom.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/gp/product/B07X2WNZ8W/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07X2WNZ8W&linkCode=as2&tag=petplace07-20&linkId=3370f690063bb6e9d79cbdc51814e44a"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>

            <GiftBox title="4-Piece Sushi Toy Set" img={ProdImg4}>
              <p>
                Using non-toxic, soft, and plush materials, this super fun sushi
                set features organic catnip, crinkle paper bell, and rattle.
                Nothing fishy here, just a well-designed and pet-safe toy you
                can feel good gifting to your furball.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/munchiecat-Kittens-Non-Toxic-Friendly-Materials/dp/B077Z1WD52/?pldnSite=1"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>

            <GiftBox title="Tower of Tracks Cat Toy" img={ProdImg5}>
              <p>
                This interactive cat toy has almost 30,000 positive reviews! It
                is designed with 3 levels of tracks and 3 brightly-colored
                moving balls to engage kitty’s attention and keep them moving!
                Watch your kitty bat, swat, and pounce on the brightly-colored,
                non-slip, sturdy track toy.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/gp/product/B00DT2WL26/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00DT2WL26&linkCode=as2&tag=petplace07-20&linkId=7069135a208f7ab32764b2e33c2b10e9"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>

            <GiftBox title="Magic Cat Track and Ball Toy" img={ProdImg6}>
              <p>
                A track and ball toy of a different kind, the Magic Cat Track
                consists of 82 pieces of flexible track and 2 balls. The track
                can be laid out in several different shapes and configurations.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/gp/product/B01M05Y5PQ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01M05Y5PQ&linkCode=as2&tag=petplace07-20&linkId=ef6f601035535d26d4a9ed4da3785955"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>

            <GiftBox title="Interactive Running Mouse Cat Toy" img={ProdImg7}>
              <p>
                This battery-operated toy features a cunning mouse that runs in
                and out of the hole to play hide-and-seek with kitty. Tired from
                all that hunting? The felt top also serves as a comfortable
                place for your kitten to rest.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/gp/product/B01IP4MXUW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01IP4MXUW&linkCode=as2&tag=petplace07-20&linkId=142450983118c053850a416a0a7b3d63"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>

            <GiftBox
              title="SmartyKat Hot Pursuit Concealed Motion Toy"
              img={ProdImg8}
            >
              <p>
                This genius toy replicates the movement of hidden prey with
                lights and a wand hidden under a durable fabric cover. With
                adjustable speeds, it will entertain and keep your cat in hot
                pursuit of their “prey,” satisfying the natural instinct to
                hunt.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/gp/product/B06WP7F8YC/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06WP7F8YC&linkCode=as2&tag=petplace07-20&linkId=e6512fc5d43e855fca32013a2a4bb89f"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>

            <GiftBox title="Interactive Cat Toothbrush Chew Toy" img={ProdImg9}>
              <p>
                Move over, tuna breath! This chew toy eliminates odor, germs,
                and bacteria from your fur buddy's mouth. The unique texture of
                the non-toxic rubber, hidden catnip, and bell make it an
                irresistible, new favorite plaything.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/gp/product/B07Z91ZD69/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07Z91ZD69&linkCode=as2&tag=petplace07-20&linkId=4bce6a7c8db76e0546c3b70333730670"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>

            <GiftBox
              title="Self-Warming 2-in-1 Triangle Cat Tent and Bed"
              img={ProdImg10}
            >
              <p>
                After all that playing with their new toys, your cutie cat will
                need a snooze in this cozy, soft enclosed space. This classic,
                tent-shaped cat house boasts a very cute fabric design to
                compliment your holiday decor and please your fur baby.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/gp/product/B07V6GRG4S/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07V6GRG4S&linkCode=as2&tag=petplace07-20&linkId=e8a9d83991b73ff91d98ed6b108dfb7e"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>
            <p className="sponsored-paragraph sponsored-paragraph-bottom">
              All products featured in this article were independently selected
              by our editorial team. As an Amazon Associate, PetPlace will earn
              if you click on the provided links and/or purchase a qualifying
              product from Amazon.
            </p>
          </div>
        </section>
      </div>
      <ContactUsSection />
    </Layout>
  )
}

export default HolidayCatTreats

export const pageQuery = graphql`
  query HolidayCatTreats($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      excerpt
      content
      wordpress_id
      author {
        name
        slug
      }
      date(formatString: "MMMM DD, YYYY")
      slug
      path
      categories {
        id
        path
        name
        slug
      }
      yoast_meta {
        yoast_wpseo_canonical
        yoast_wpseo_metadesc
        yoast_wpseo_title
      }
      featured_media {
        source_url
        alt_text
        localFile {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid_tracedSVG
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
