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
import ProdImg1 from "../images/holiday-treats-for-dogs/prod-box-1.jpg"
import ProdImg2 from "../images/holiday-treats-for-dogs/prod-box-2.jpg"
import ProdImg3 from "../images/holiday-treats-for-dogs/prod-box-3.jpg"
import ProdImg4 from "../images/holiday-treats-for-dogs/prod-box-4.jpg"
import ProdImg5 from "../images/holiday-treats-for-dogs/prod-box-5.jpg"
import ProdImg6 from "../images/holiday-treats-for-dogs/prod-box-6.jpg"
import ProdImg7 from "../images/holiday-treats-for-dogs/prod-box-7.jpg"
import ProdImg8 from "../images/holiday-treats-for-dogs/prod-box-8.jpg"
import ProdImg9 from "../images/holiday-treats-for-dogs/prod-box-9.jpg"
import ProdImg10 from "../images/holiday-treats-for-dogs/prod-box-10.jpg"
import ProdImg11 from "../images/holiday-treats-for-dogs/prod-box-11.jpg"
import ProdImg12 from "../images/holiday-treats-for-dogs/prod-box-12.jpg"

import PawsomeContent from "../components/PawsomeFallStyleReportContent"
import GiftBox from "../components/GiftBox"
const HolidayDogTreats = ({ data }) => {
  const post = data.wordpressPost
  return (
    <Layout>
      <Seo
        title={`${post.yoast_meta.yoast_wpseo_title}`}
        description={post.yoast_meta.yoast_wpseo_metadesc}
        image="/images/holiday-dog-treats-background.jpg"
      />
      <div className="holiday-treats-page">
        <div className="holiday-treats-hero-image">
          <div className="container is-fullhd">
            <h1>12 Holiday-Themed Treats for Dogs</h1>
            <p>
              According to our latest{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.petplace.com/article/general/just-for-fun/2020-pet-parent-survey/"
              >
                reader survey
              </a>
              , the majority of pet parents (79.4% to be exact) give holiday
              presents to their four-legged family members. Whether they’ve been
              naughty or nice, here is a selection of limited-edition seasonal
              treats for your favorite furball, all of which are made in the
              U.S. of A. These are paw-fect gifts for your beloved pooch!
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
            <h3>Crunchy Treats</h3>
            <p className="section-subtitle">
              Your dog will love chomping on these crunchy and tasty treats!
            </p>

            <GiftBox title="Bocce’s Bakery Santa’s Cookies" img={ProdImg1}>
              <p>
                Wheat-free and baked with real ingredients, Bocce’s treats are a
                perennial hit in our home. These seasonal Santa Cookies are no
                exception. Grab a bag or two before they disappear!
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://smile.amazon.com/Bocces-Bakery-Treats-Santas-Cookies/dp/B07TBBCRM3/"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>

            <GiftBox title="Blue Buffalo Santa Snacks" img={ProdImg2}>
              <p>
                Oatmeal and cinnamon snacks get four-paws up for their yummy
                goodness. These meat and wheat-free treats come in fun holiday
                shapes too.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/gp/product/B08C7F24PV/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B08C7F24PV&linkCode=as2&tag=petplace07-20&linkId=05b2227759883af13dcf63db2307a3b6"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>

            <GiftBox title="Buddy Biscuits Assorted Flavors" img={ProdImg3}>
              <p>
                Buddy Biscuits use just 5 ingredients and are oven baked to
                perfection. This variety pack includes Roasted Chicken, Grilled
                Beef, and Sharp Cheddar flavors in a fun, gingerbread man
                “buddy” shape.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://smile.amazon.com/Cloud-Star-Original-Buddy-Biscuits/dp/B0846P6N5Q"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>

            <GiftBox title="Custom Milk-Bone® Box" img={ProdImg4}>
              <p>
                Here’s something extra festive: customize your next box of
                Milk-Bone® treats with your favorite picture of your doggo or
                any photo and text. Click on the link below and select the
                Milk-Bone® icon to get started.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://shop.smucker.com/sweetpics"
                className="gift-box-btn"
              >
                Buy Now
              </a>
            </GiftBox>

            <GiftBox title="Bonnet Et Filou Combo Gift Pack" img={ProdImg5}>
              <p>
                These handmade, macaron-shaped treats are a unique and tasty way
                to spoil your fur baby. Choose from lavender, strawberry, mint,
                rose, and vanilla flavors all made from human-grade, non-GMO
                ingredients.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://bowtie.mailbutler.io/tracking/hit/6bb781f1-7551-453d-88ce-7ae17133f25d/2d93daae-ff1c-4975-91ca-07a22f523663"
                className="gift-box-btn"
              >
                Buy Now
              </a>
            </GiftBox>
          </div>
        </section>
        <section className="section products-section white-section">
          <div className="container is-fullhd">
            <h3>Soft Treats</h3>
            <p className="section-subtitle">
              Got a new puppy, or does your small-sized or older fur buddy
              prefer a softer texture? Either way, we’ve got you covered.
            </p>
            <GiftBox title="Zuke’s Mini Naturals" img={ProdImg6}>
              <p>
                These tender, turkey and cranberry morsels may be the key to
                training your pup. Each seasonal bite-sized, tree-shaped,
                wholesome treat is a delicious way to guide your pooch on the
                path to puppy trick mastery.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/gp/product/B07KB9QR7B/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07KB9QR7B&linkCode=as2&tag=petplace07-20&linkId=8ed2e3686e14281594d5f045535a80b5"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>

            <GiftBox
              title="Buddy Biscuits Bacon & Cheese Soft & Chewy Treats"
              img={ProdImg7}
            >
              <p>
                No one, I mean, no dog can resist bacon and cheese-flavored
                anything! Buddy Biscuits’ soft and chewy treats are low calorie,
                but promise “gobs of flavor” in each bite. Just like their
                crunchy treats, these are made with natural ingredients and just
                right for puppies or older dogs that prefer a soft texture.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/gp/product/B0013N3S8E/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0013N3S8E&linkCode=as2&tag=petplace07-20&linkId=d261565a2ff3fbb618da5523aabf71c7"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>

            <GiftBox title="Three Dog Bakery Assort “Mutt” Trio" img={ProdImg8}>
              <p>
                This soft-baked assortment is 3 pounds of Oats and Apple, Peanut
                Butter, and Vanilla cookies. Baked slowly using only the
                highest-quality ingredients, these are good enough to share with
                Santa Paws, with more than enough to spare for your hungry pups.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/gp/product/B08JFBV3TY/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B08JFBV3TY&linkCode=as2&tag=petplace07-20&linkId=fa84b9724ca8c30ea941b73078ab46a3"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>

            <GiftBox
              title="Blue Buffalo Santa Sampler Gift Pack"
              img={ProdImg9}
            >
              <p>
                The sampler pack is great for stocking up on these howliday
                treats. It contains Tasty Chicken Bits, Sizzlers Bacon-Style
                Treats, and Stix Pepperoni-Style Treats.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/gp/product/B073D1J7B7/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B073D1J7B7&linkCode=as2&tag=petplace07-20&linkId=0aceb2b6001a3ac6fd9ae374dc52501f"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>
          </div>
        </section>
        <section className="section products-section blue-section">
          <div className="container is-fullhd">
            <h3>Dental Chew Sticks</h3>
            <p className="section-subtitle">
              Cookies, chews, and treats are great, but how about sneaking in
              dental care? These chew sticks help reduce plaque and tartar,
              while satisfying your dog’s cravings.{" "}
            </p>
            <GiftBox
              title="Get Naked Super Antioxidant Dental Sticks"
              img={ProdImg10}
            >
              <p>
                Grain-free sticks pack an extra punch with a special blend of
                antioxidant-rich super fruits and veggies. While providing
                dental health and big flavor, they also sneakily support overall
                canine wellness.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/gp/product/B01JONKIAU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01JONKIAU&linkCode=as2&tag=petplace07-20&linkId=2c4631a8dc033b00e47d2db52774617a"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>
            <GiftBox
              title="Merrick Fresh Kisses Double Brush Mint-Flavored Breath Strips"
              img={ProdImg11}
            >
              <p>
                Minty puppy kisses? Yes, please! These tasty chews have a
                special blend of coconut, peppermint, lemongrass, and rosemary
                oils to keep Fido’s breath minty fresh. They also feature a
                double-brush design to serve double duty as plaque and tartar
                fighter.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/gp/product/B071DWKDH6/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B071DWKDH6&linkCode=as2&tag=petplace07-20&linkId=4a305491746d764d54e38b0c71f73ba1"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>
            <GiftBox
              title="Greenies Seasonal Gingerbread Flavor Dental Treats"
              img={ProdImg12}
            >
              <p>
                Crafted with all-natural ingredients, the seasonal gingerbread
                flavor in these treats kicks it up a notch in time for the
                howlidays. Dog approved and vet recommended, each chew stick
                helps maintain healthy gums and teeth while freshening doggy
                breath.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/gp/product/B07RF28WNC/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07RF28WNC&linkCode=as2&tag=petplace07-20&linkId=11ab576d6b9b06960693c8e9357c0103"
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

export default HolidayDogTreats

export const pageQuery = graphql`
  query HolidayDogTreats($id: String!) {
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
