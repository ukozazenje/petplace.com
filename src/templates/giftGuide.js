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
import GiftImg1 from "../images/gift-box/gift-box-1.png"
import GiftImgNew1 from "../images/gift-box/gift-box-1-new.jpg"
import GiftImg2 from "../images/gift-box/gift-box-2.jpg"
import GiftImg3 from "../images/gift-box/gift-box-3.png"
import GiftImg4 from "../images/gift-box/gift-box-4.png"
import GiftImgNew4 from "../images/gift-box/gift-box-4-new.jpg"
import GiftImg5 from "../images/gift-box/gift-box-5.png"
import GiftImg6 from "../images/gift-box/gift-box-6.png"
import GiftImg7 from "../images/gift-box/gift-box-7.png"
import GiftImg8 from "../images/gift-box/gift-box-8.png"
import GiftImg8New from "../images/gift-box/gift-box-8-new.jpg"
import GiftImg9 from "../images/gift-box/gift-box-9.png"
import GiftImg10 from "../images/gift-box/gift-box-10.png"
import GiftImg11 from "../images/gift-box/gift-box-11.png"
import GiftImg12 from "../images/gift-box/gift-box-12.png"
import GiftImg13 from "../images/gift-box/gift-box-13.png"
import GiftImg14 from "../images/gift-box/gift-box-14.png"
import GiftImg15 from "../images/gift-box/gift-box-15.png"
import GiftImg16 from "../images/gift-box/gift-box-16.png"
import GiftImg17 from "../images/gift-box/gift-box-17.png"
import GiftImg18 from "../images/gift-box/gift-box-18.png"
import GiftFooterImg from "../images/gift-box/gift-box-last-image.png"
import BannerImageDesktop from "../images/gift-box/banner-background.jpg"
import BannerImageMobile from "../images/gift-box/banner-background-mobile.jpg"

import PawsomeContent from "../components/PawsomeFallStyleReportContent"
import GiftBox from "../components/GiftBox"
const GiftGuide = ({ data }) => {
  const post = data.wordpressPost
  return (
    <Layout hideHolidayBanner>
      <Seo
        title={`${post.yoast_meta.yoast_wpseo_title}`}
        description={post.yoast_meta.yoast_wpseo_metadesc}
        image="/images/banner-background.jpg"
      />
      <div className="gift-guide-page">
        <div className="gift-guide-hero-image">
          <div className="container is-fullhd">
            <h1>2020 Holiday Gift Guide for Pets and Pet Lovers</h1>
            <p>
              Although 2020 has been a ruff year, there is some pawsitive news:
              The holidays have NOT been cancelled!
            </p>
          </div>
        </div>
        <section className="section gift-guide-section blue-section padding-top-0">
          <div className="container is-fullhd">
            <p className="gift-guide-intro">
              Make your 2020 holiday season extra festive and memorable by
              including your furry family members in the merriment. Our curated
              items will elevate your ho-ho-home celebration, and bring howliday
              joy to both the pets and pet lovers in your life. So don’t be a
              “hum-pug” and hop to below:{" "}
            </p>
            <p className="sponsored-paragraph">
              Content Sponsored by Chewy, Inc., Honest Paws, LLC, Peter Bogyo,
              The Quarto Group, Paw5, and PetPartners, Inc.
            </p>
            <h3>Who’s My Favorite Fur Baby?: Gifts Under $25</h3>

            <GiftBox
              style={{ borderRadius: "8px" }}
              title="Goody Box for Dogs"
              img={GiftImgNew1}
            >
              <p>
                Hand-picked by pet parents, this pawsome collection of top-rated
                stocking stuffers comes bundled together in a fun Chewy Goody
                Box. Inside, there are a selection of tasty treats, a dinosaur
                dog toy, and custom bandana. It's the ultimate gift box for your
                furry friend!
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.chewy.com/goody-box-dog-toys-treats-apparel/dp/244386?utm_source=partnerize&utm_medium=affiliates&utm_campaign=1011l110390&utm_content=0&clickref=1100lcZ3679W&utm_term=1100lcZ3679W"
                className="gift-box-btn"
              >
                Buy on Chewy.com
              </a>
              {/* <p>Shopping for your cat?</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://prf.hn/click/camref:1101l9vcZ/destination:https%3A%2F%2Fwww.chewy.com%2Fgoody-box-holiday-toys-treats-cats%2Fdp%2F249006"
                className="gift-box-btn"
              >
                Chewy has something for you too
              </a> */}
            </GiftBox>

            <GiftBox title="Calm Bites" img={GiftImg2}>
              <p>
                With 2020 being one of the most stressful years in recent
                history, both humans and pups can probably use a little help
                chilling out right now. That’s where Honest Paws’ Calm Bites
                come in. These CBD-infused peanut butter dog treats are a
                wonderful, all-natural way to soothe an anxious pup’s nerves and
                lower stress levels. They also happen to be delicious!{" "}
                <strong>
                  As a special gift to PetPlace readers, Honest Paws is offering
                  20% off sitewide when you use the code PETPLACE20 at checkout.
                </strong>
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.kmtrak.com/KZDWFR/3K45H3R/?uid=732"
                className="gift-box-btn"
              >
                Buy on Honest Paws.com
              </a>
            </GiftBox>

            <GiftBox title="Book: A Dog’s Life by Peter Bogyo" img={GiftImg3}>
              <p>
                Written in the form of tongue-in-cheek obituaries, these loving
                and heartfelt tributes to real dogs (with accompanying photos)
                deftly capture a wide variety of unforgettable characters. They
                will have you loling and wiping away a tear or two.{" "}
              </p>
              <p>
                A glorious celebration of man's best friend, A Dog's Life is the
                perfect holiday gift for any dog lover.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://adogslifebook.com/"
                className="gift-box-btn"
              >
                Buy Now
              </a>
            </GiftBox>

            <GiftBox
              title="Jungle Pals Plush & Rope Dog Toy Variety Pack"
              img={GiftImgNew4}
              style={{ borderRadius: "8px" }}
            >
              <p>
                Look at what Santa Paws is bringing to town! This fun collection
                of toys is sure to delight your doggo. Featuring a variety of
                textures, sounds, and materials, you can play fetch, tug-of-war,
                or toss with them for hours of fun. Before you know it, your fur
                baby will be ready for a nice snooze, dreaming of a winter
                wonderland.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.chewy.com/frisco-plush-rope-bundle-dog-toy-6/dp/204504?utm_source=partnerize&utm_medium=affiliates&utm_campaign=1011l110390&utm_content=0&clickref=1101lcYBZzxQ&utm_term=1101lcYBZzxQ"
                className="gift-box-btn"
              >
                Buy on Chewy.com
              </a>
            </GiftBox>

            <GiftBox title="Cat Toy Variety Pack with Catnip" img={GiftImg5}>
              <p>
                It’s not always all about the dogs in the house. Give your kitty
                all the excitement that comes with 20 assorted toys, bundled
                together into one fun-filled pack. The play possibilities are
                virtually endless with so many toys in one package, including
                feathers, crinkly textures, fuzzy mice, rolling balls, and a
                wand. It even comes with a play tunnel for hide-and-seek... or
                just chilling. Some toys even have catnip for some extra fun.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://prf.hn/click/camref:1101l9vcZ/destination:https%3A%2F%2Fwww.chewy.com%2Ffrisco-plush-teaser-ball-tri-tunnel%2Fdp%2F204840"
                className="gift-box-btn"
              >
                Buy on Chewy.com
              </a>
            </GiftBox>

            <GiftBox title="Personalized “Woof” Mug" img={GiftImg6}>
              <p>
                Everybody knows and loves a pet-crazy person who always posts
                ridiculously adorable pictures of their pet. Here is a
                thoughtful gift that they will cherish with every sip: a
                one-of-a-kind ceramic mug featuring their pet’s photo. It’s
                unique swag for the proud pet parent with a strong caffeine
                habit.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://prf.hn/click/camref:1101l9vcZ/destination:https%3A%2F%2Fwww.chewy.com%2Ffrisco-personalized-woof-white-coffee%2Fdp%2F246364"
                className="gift-box-btn"
              >
                Buy on Chewy.com
              </a>
            </GiftBox>

            <GiftBox
              title="Book: The Joy of Dog Training by Kyra Sundance"
              img={GiftImg7}
            >
              <p>
                Have you adopted a pandemic puppy or know someone who did? Here
                is the perfect book for at-home dog training, offering fun ways
                to teach your pup 30 different tricks. You’ll also learn the
                core concepts of training and achieve a stronger human-animal
                bond. Sit. Stay. Done!{" "}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.quartoknows.com/books/9781631599705/The-Joy-of-Dog-Training.html?direct=1"
                className="gift-box-btn"
              >
                Buy Now
              </a>
            </GiftBox>
          </div>
        </section>
        <section className="section gift-guide-section white-section">
          <div className="container is-fullhd">
            <h3>Purrrfect Presents: Gifts Under $50</h3>
            <GiftBox
              style={{ borderRadius: "8px" }}
              title="American Classic Food Set Squeaky Plush Dog Toy"
              img={GiftImg8New}
            >
              <p>
                Make playtime a little more whimsical for your pup with this
                American Classic Food squeaky toy set, which includes a burger,
                fries, milkshake, hot dog and chicken drumstick. This toy set
                encourages you to forget what your mother always told you as a
                child: we can absolutely play with our food! Or at least our
                pets can.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.chewy.com/ply-pet-lifestyle-you-american/dp/169819?utm_source=partnerize&utm_medium=affiliates&utm_campaign=1011l110390&utm_content=0&clickref=1101lcXppk9S&utm_term=1101lcXppk9S"
                className="gift-box-btn"
              >
                Buy on Chewy.com{" "}
              </a>
            </GiftBox>

            <GiftBox title="Wooly Snuffle Mat" img={GiftImg9}>
              <p>
                According to the glowing reviews for this product, it may be
                “the best invention ever!” Did work-from-home orders actually
                leave you feeling guilty for being glued to your desk all day?
                You can make up for it by giving your fur buddy this snuffle
                mat, designed to engage their amazing sense of smell and make
                them forage their way through dinner or snack time (aka
                keep-them-busy-while-you-work time).
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.kmtrak.com/KZDWFR/3RMG47X/"
                className="gift-box-btn"
              >
                Buy on Paw5.com
              </a>
            </GiftBox>

            <GiftBox title="Mobility Soft Chews" img={GiftImg10}>
              <p>
                If your doggo happens to be both stressed (because, 2020) and
                suffering from joint stiffness, then Mobility Chews from Honest
                Paws are a great gift to give them this holiday season. Filled
                with good stuff like organic full-spectrum hemp oil, chondroitin
                sulfate, glucosamine HCL, hyaluronic acid, and boswellia serrata
                powder, Mobility Soft Chews are a perfect way to naturally
                relieve joint pain for our four-legged friends.{" "}
                <strong>
                  As a special gift to PetPlace readers, Honest Paws is offering
                  20% off sitewide when you use the code PETPLACE20 at checkout.
                </strong>{" "}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.kmtrak.com/KZDWFR/3K45H3R/?uid=733"
                className="gift-box-btn"
              >
                Buy on Honest Paws.com
              </a>
            </GiftBox>

            {/* <GiftBox title="Buffalo Check Pet Bed Gift Set" img={GiftImg11}>
              <p>
                Raise your hand if you agree with my New Year’s Resolution: get
                Spot to sleep in his own bed. This plush bed with cushioned
                bolster edges is the perfect spot to nap and lounge. The bed
                comes with a matching bone-shaped squeak toy that doubles as a
                pillow, and a soft blanket for pets that like to get all wrapped
                up. Plus, the buffalo check print never goes out of style.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://prf.hn/click/camref:1101l9vcZ/destination:https%3A%2F%2Fwww.chewy.com%2Ffrisco-buffalo-check-cuddler-pet-bed%2Fdp%2F192039"
                className="gift-box-btn"
              >
                Buy on Chewy.com{" "}
              </a>
            </GiftBox> */}

            <GiftBox title="Wall Mounted Cat Shelves" img={GiftImg12}>
              <p>
                Treat your favorite feline to a vertical jungle gym. This cool,
                wall-mounted system features two steps, a cat hammock, and a
                plush-lined condo with a sleeping hole for loads of fun kitty
                play and naptime. Each component has sisal surfaces for
                claw-some scratching and gripping, and the included hardware
                lets you arrange the components to your cat’s liking.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://prf.hn/click/camref:1101l9vcZ/destination:https%3A%2F%2Fwww.chewy.com%2Ftrixie-lounger-wall-mounted-cat%2Fdp%2F234071"
                className="gift-box-btn"
              >
                Buy on Chewy.com{" "}
              </a>
            </GiftBox>
          </div>
        </section>
        <section className="section gift-guide-section blue-section">
          <div className="container is-fullhd">
            <h3>Jingle Paw The Way: Gifts Under $100</h3>
            <GiftBox
              title="Arf Pets Automatic Dog & Cat Feeder"
              img={GiftImg13}
            >
              <p>
                A well-fed pet is a happy pet! But maybe your pet has put on
                some pandemic pounds?! Use this feeder to keep your dog or cat
                on a regular feeding schedule, with the right portion size.
                Stuck on Zoom calls all day? You can select up to four meal
                times per day and even record a personal meal call to let your
                buddy know when it’s time to eat!
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://prf.hn/click/camref:1101l9vcZ/destination:https%3A%2F%2Fwww.chewy.com%2Farf-pets-automatic-dog-cat-feeder%2Fdp%2F139369"
                className="gift-box-btn"
              >
                Buy on Chewy.com{" "}
              </a>
            </GiftBox>
            <GiftBox title="Wellness Oil" img={GiftImg14}>
              <p>
                Separation anxiety has been a real problem for pet parents and
                their furry children this year. If you’re looking to help keep
                your pup calm on a daily basis, this organic full-spectrum hemp
                oil CBD tincture from Honest Paws is the ideal—and natural—way
                to do it. As a special gift to PetPlace readers, HonestPaws is
                offering 20% off sitewide when you use the code PETPLACE20 at
                checkout.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.kmtrak.com/KZDWFR/3K45H3R/?uid=734"
                className="gift-box-btn"
              >
                Buy on Honest Paws.com
              </a>
            </GiftBox>
            <GiftBox
              title="Wisdom Panel 3.0 Breed Dog DNA Test"
              img={GiftImg15}
            >
              <p>
                Puzzled about the breed of your rescue pup? As a responsible pet
                owner, knowing their lineage can help you to better understand
                your dog’s unique appearance, training requirements, behaviors,
                and health/wellness needs. This simple kit from Wisdom Panel
                lets you swab your dog’s cheek, send it off in a postage-paid
                box, and discover your dog’s genetic background in just 2 - 3
                weeks. It’s traced back to the great-grandpawrent level, with
                over 250 breeds detected. All of the tests include a predicted
                weight profile and will check for the multi-drug resistance 1
                (MDR1) genetic mutation that may cause severe adverse reactions
                to commonly prescribed drugs.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://prf.hn/click/camref:1101l9vcZ/destination:https%3A%2F%2Fwww.chewy.com%2Fwisdom-panel-30-breed-identification%2Fdp%2F127224"
                className="gift-box-btn"
              >
                Buy on Chewy.com{" "}
              </a>
            </GiftBox>
          </div>
        </section>
        <section className="section gift-guide-section white-section gift-guide-footer-section">
          <div className="container is-fullhd">
            <h3>For the Furry and Bright: Over $100</h3>
            <GiftBox title="Furbo Dog Camera" img={GiftImg16}>
              <p>
                The separation anxiety you’re feeling about returning to a
                semi-normal life after working from home these past few months
                is not in your head—both for you and your beloved dog. Thanks to
                the Furbo Dog Camera, both of you can feel like you’re at home
                even when you’re not. The camera not only lets you see what’s
                going on with your four-legged friend, but also allows you to
                give them a treat from afar. The Furbo Dog Camera has been used
                by over 5,000 vets and professional trainers, has an alert to
                let you know when your dog is barking, and even has a night
                vision setting, which should come in handy during these dark
                winter months.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://prf.hn/click/camref:1101l9vcZ/destination:https%3A%2F%2Fwww.chewy.com%2Ffurbo-dog-camera%2Fdp%2F285306"
                className="gift-box-btn"
              >
                Buy on Chewy.com{" "}
              </a>
            </GiftBox>

            <GiftBox title="Extra Strength Wellness Oil" img={GiftImg17}>
              <p>
                There are two main reasons why you’d want to increase the
                potency of your dog’s CBD regimen: it can be more
                cost-effective, and it provides your pet with a stronger dose of
                CBD (which can be necessary in certain cases). The Extra
                Strength Wellness Tincture has 1000mg of organic full-spectrum
                hemp oil and could be ideal for your doggo, depending on their
                circumstances.{" "}
                <strong>
                  As a special gift to PetPlace readers, HonestPaws is offering
                  20% off sitewide when you use the code PETPLACE20 at checkout.
                </strong>
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.kmtrak.com/KZDWFR/3K45H3R/?uid=735"
                className="gift-box-btn"
              >
                Buy on Honest Paws.com
              </a>
            </GiftBox>

            <GiftBox title="PetPartners Insurance" img={GiftImg18}>
              <p>
                While pet insurance might seem like a strange gift to give for
                the holidays, it’s actually one of the best ways to show your
                pet that you love them. In an emergency, good pet insurance will
                cover medical costs so you never have to choose between going
                into debt and saving your pet’s life. The pet experts over at
                PetPartners are exactly that: experts. They have vet technicians
                and animal lovers on their staff who can walk you through
                exactly what type of coverage you might need for your beloved
                pet.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.petpartners.com/enroll?p=PPSC2020"
                className="gift-box-btn"
              >
                Get Your Quote
              </a>
            </GiftBox>
            <div className="gift-guide-footer">
              <p>
                Content Sponsored by Chewy, Inc., Honest Paws, LLC, Peter Bogyo,
                The Quarto Group, Paw5, and PetPartners, Inc.
              </p>
              <h3>From all of us at PetPlace, Happy Pawlidays!</h3>
              <img src={GiftFooterImg} alt="dog with gift" />
            </div>
          </div>
        </section>
      </div>
      <ContactUsSection />
    </Layout>
  )
}

export default GiftGuide

export const pageQuery = graphql`
  query GiftGuidePage($id: String!) {
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
