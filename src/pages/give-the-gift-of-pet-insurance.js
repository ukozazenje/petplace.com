import React from "react"
import "../sass/main.sass"
import logoImg from "../images/logo.svg"
import { Link } from "gatsby"
import AdvertorialHero from "../static/images/petPartnersHero"
import avatarImg from "../images/author.svg"
import facebook from "../images/facebookIcon.svg"
import pintrest from "../images/pinterestIcon.svg"
import twitter from "../images/twitterIcon.svg"
import emailIcon from "../images/emailIcon.svg"
import AdvertorialImg1 from "../images/pet-partners-advertorial/pet-partner-icon-one.svg"
import AdvertorialImg2 from "../images/pet-partners-advertorial/pet-partner-icon-two.svg"
import AdvertorialImg3 from "../images/advertorial-3.svg"
import AdvertorialArrow from "../images/advertorial-arrow.svg"
import { filterAuthorsLink, filterFaqPosts } from "../components/functions"
import Sticky from "react-stickynode"
import SEO from "../components/seo"
const giveTheGiftOfPetInsurance = () => {
  return (
    <>
      <SEO
        title="Give the Gift of Pet Insurance"
        description="Pets can make a great holiday gift, but they come with “some assembly required.” Here why pet insurance is a must for your four-legged-friend"
        image="/images/petpartners-desktop-hero.png"
      />
      <nav className="advertorial-navbar">
        <div className="container is-fullhd">
          <div className="advertorial-navigation-wrapper">
            <div className="advertorial-logo">
              <img src={logoImg} alt="logo" />
            </div>
            <span className="advertorial-navigation-headline">Advertorial</span>
          </div>
        </div>
      </nav>
      <div className="is-hidden-desktop advertorial-mobile-heading">
        <h1>
          Advertorial
          <br />
          <span>Give the Gift of Pet Insurance</span>
        </h1>
      </div>
      <AdvertorialHero />
      <section className="advertorial-main-content gift-pet-insurance">
        <div className="container is-fullhd">
          <div className="columns">
            <div className="column is-one-quarter advertorial-sidebar">
              <div className="advertorial-info">
                <div className="author-wrapper">
                  <img className="author-img" src={avatarImg} alt="avatar" />
                  <div className="author-info">
                    <p className="author-name">PetPlace Staff</p>
                    <p className="post-date">10 Dec 2020</p>
                  </div>
                </div>
                <div className="share-icons-horizontal">
                  <a
                    className={`facebook-/get-pet-insurance-now/`}
                    href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.GATSBY_WEB_SITE_URL}/get-pet-insurance-now/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={`facebook-/get-pet-insurance-now/`}
                      src={facebook}
                      alt="facebook"
                    />
                  </a>
                  <a
                    className={`twitter-/get-pet-insurance-now/`}
                    href={`https://twitter.com/intent/tweet?url=${process.env.GATSBY_WEB_SITE_URL}/get-pet-insurance-now/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={`twitter-/get-pet-insurance-now/`}
                      src={twitter}
                      alt="twitter"
                    />
                  </a>
                  <a
                    className={`pinterest-/get-pet-insurance-now/`}
                    href={`https://pinterest.com/pin/create/button/?url=${process.env.GATSBY_WEB_SITE_URL}/get-pet-insurance-now/&media=&description=An Emergency Vet Bill Left Me with Sticker Shock`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <img
                      className={`pinterest-/get-pet-insurance-now/`}
                      src={pintrest}
                      alt="pinterest"
                    />
                  </a>
                  <a
                    className={`mail-/get-pet-insurance-now/`}
                    href={`mailto:info@petplace.com?&subject=An Emergency Vet Bill Left Me with Sticker Shock&body=${process.env.GATSBY_WEB_SITE_URL}/get-pet-insurance-now/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={`mail-/get-pet-insurance-now/`}
                      src={emailIcon}
                      alt="email"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="column">
              <p className="petpartners-disclosure">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.petpartners.com/"
                >
                  PetPartners, Inc.
                </a>{" "}
                is an indirect corporate affiliate of{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.petplace.com/"
                >
                  PetPlace.com.
                </a>{" "}
                PetPlace may be compensated when you click on or make a purchase
                using the links in this article.
              </p>
              <p>
                Puppies and kittens are a favorite gift every holiday season and
                they should prove even more popular in a year of pandemic
                stress.{" "}
                <a
                  href="https://apnews.com/article/31e3e60e7ea6bc4566b0ee3998ab98a6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adoption numbers have surged
                </a>{" "}
                throughout 2020 and many pet lovers across the country are
                surely adding dogs or cats to their wish lists this year.
              </p>
              <p>
                If a new pet happens to be on your list this holiday season,
                it’s important to plan ahead to ensure that they can make a
                smooth transition into your family.
              </p>
              <h3>Pets as Gifts: Be Prepared</h3>
              <p>
                In a sense, pets are gifts with “some assembly required.”
                Keeping a dog or cat safe, happy, and healthy means purchasing a{" "}
                <a
                  href="https://www.petplace.com/article/dogs/pet-care/10-essential-items-for-new-puppies-part-1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  number of other essentials
                </a>{" "}
                on or before Day 1. Some -- like identification tags or a{" "}
                <a
                  href="https://www.petpartners.com/blog/pet-health-and-safety/4-reasons-to-microchip-your-pet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  microchip
                </a>{" "}
                -- could last your pet’s lifetime. Others will become regular
                purchases and a major component of your pet care budget:
              </p>
              <div className="columns gift-pet-insurance-columns reverse-columns">
                <div className="column">
                  <ul>
                    <li>Bowls for food and water</li>
                    <li>Collar</li>
                    <li>Crate</li>
                    <li>Food that suits your pet’s age and size</li>
                    <li>Identification tags</li>
                    <li>A litter box or training pads</li>
                    <li>Training treats</li>
                    <li>Toys</li>
                  </ul>
                </div>
                <div className="column img-column">
                  <img src={AdvertorialImg1} />
                </div>
              </div>
              <p>
                That’s not to mention all the work that goes into pet-proofing a
                house. While you’re putting up the holiday decorations, look
                around for potential pet safety hazards, because they are more
                abundant than you might expect. Make it fun and invite the whole
                family to help you take the following steps:
              </p>
              <ul>
                <li>Hide or cover electrical cords to prevent chewing</li>
                <li>
                  Remove choking hazards from the floor and other pet-level
                  surfaces
                </li>
                <li>
                  Ensure potentially poisonous foods and products are safely
                  stored
                </li>
                <li>
                  Get in the habit of covering trash cans and closing all
                  appliance doors
                </li>
              </ul>
              <p>
                Watch out for holiday decorations too! Puppies and kittens are
                naturally curious. They’ll bat, jump, and paw at just about
                anything, so make sure to hang those stockings with extra care.
              </p>
              <p>
                Still not sure you’re ready to bring home a new pet? Check out{" "}
                <a
                  href="https://www.petpartners.com/blog/new-pet-owners/easy-steps-towards-pet-adoption"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  these simple steps toward a successful adoption.
                </a>
              </p>
              <h3>Don’t Forget About Pet Insurance!</h3>
              <p>
                When you think of pet essentials, pet insurance often gets
                overlooked. However, like car or health insurance, pet insurance
                provides protection against future costs. It’s also similar to
                human health insurance in the sense that some policies cover
                routine wellness and preventative services.
              </p>
              <p>
                Depending on the type of coverage you choose, pet insurance can
                offer financial assistance for some or all of the following:
              </p>
              <ul>
                <li>
                  <strong>Accidents and Injuries:</strong> Nearly all pet
                  insurance policies offer coverage for medical mishaps like
                  bone and muscle injuries or insect bites. PetPartners plans
                  with{" "}
                  <a
                    href="https://www.petpartners.com/our-plans/accident-illness"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Accident & Illness Coverage
                  </a>{" "}
                  offer reimbursement for a range of diagnostic and emergency
                  services.
                </li>
                <li>
                  <strong>Alternative Treatments and Therapies</strong>: As{" "}
                  <a
                    href="https://www.petplace.com/article/general/pet-care/holistic-pet-care/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    alternative and holistic treatments
                  </a>{" "}
                  like acupuncture and massage therapy have grown more popular,
                  some pet insurance providers have begun reimbursing
                  policyholders for these services.{" "}
                </li>
                <li>
                  <strong>Chronic Conditions</strong>: This is where pet
                  insurance can become a major money-saver. Like humans, pets
                  become more likely to develop chronic conditions as they age.
                  Affecting the joints and organs, these can lead to everyday
                  symptoms and disrupt their quality of life. A pet insurance
                  plan with chronic condition coverage will help you maintain
                  their standard of living without breaking the bank.{" "}
                </li>
                <li>
                  <strong>Illnesses</strong>: Pet insurance may provide coverage
                  for temporary conditions in addition to life-threatening
                  diseases like cancer. The treatments and procedures for these
                  illnesses are typically quite costly, and pet insurance can
                  provide you with financial peace of mind so that you can tend
                  to your four-legged friend during their time of need.{" "}
                </li>
                <li>
                  <strong>Routine and Preventative Care</strong>: Some pet
                  insurance policies, like PetPartners’ Defender and
                  DefenderPlus Wellness plans, offer coverage for regular
                  expenses like pest prevention treatments, vaccines, and exams.
                  While not big-ticket items, these services and treatments can
                  add up quickly. Wellness Plan policyholders can avoid hundreds
                  or thousands in expenses over the lifetime of their pet.
                </li>
              </ul>
              <p>
                An inexpensive pet insurance plan may cover accidents or
                illnesses alone. More comprehensive offerings, on the other
                hand, may include insurance benefits beyond those noted above.
                Your selection of pet insurance plans will vary based on your
                zip code. That will also help to determine how much you’ll pay
                for coverage, along with several other factors.
              </p>
              <h3>Benefits of Pet Insurance</h3>
              <p>
                A dog or cat would probably rather tear into some treats, but
                they’d thank you for purchasing a pet insurance policy if they
                could. Insurance boasts benefits that make it an ideal present
                for pets and pet parents alike:
              </p>
              <ul>
                <li>
                  <strong>Pet Insurance Saves Money</strong>: Pet care isn’t
                  cheap. Both routine and emergency expenses add up fast and
                  sometimes force pet parents to make impossible decisions. With
                  pet insurance, you’ll never have to make the choice between
                  your pet’s health and your own financial well-being.
                </li>
                <li>
                  <strong>Pet Insurance Fits Your Needs</strong>: Nobody likes
                  paying for things they don’t want or need. Fortunately, pet
                  insurance plans don’t saddle policyholders with unexpected or
                  unnecessary expenses. Plans are flexible to your pet’s
                  specific needs, as well as your own budget concerns.{" "}
                </li>
                <li>
                  <strong>Pet Insurance Provides Peace of Mind</strong>: Any dog
                  or cat owner will tell you to expect the unexpected.
                  Accidents, injuries, and other pet health emergencies can
                  occur at any moment. Pet insurance can’t eliminate stress, but
                  it can certainly help you keep a cooler head in these
                  instances. As you seek out veterinary care, you’ll be able to
                  act with confidence, secure in the knowledge that your
                  provider has you covered.{" "}
                </li>
              </ul>
              <h3>Give the Gift of Pet Insurance This Holiday Season</h3>
              <div className="columns gift-pet-insurance-columns">
                <div className="column">
                  <p>
                    Looking for a holiday gift that truly shows that special
                    someone how much you care? Consider purchasing pet insurance
                    for a friend or loved one with a new pet. Simply put, pet
                    insurance is the gift that keeps on giving long after the
                    holidays are over.{" "}
                  </p>
                  <img className="is-hidden-tablet" src={AdvertorialImg2} />
                  <p>
                    A pet insurance policy can keep expenses manageable, ease
                    your mind, and even help save a pet’s life. Insurance can’t
                    prevent pet health emergencies or eliminate the need for
                    routine care, but it can dramatically reduce the financial
                    and emotional toll of both. What’s a better gift than that?
                  </p>
                </div>
                <div className="column img-column">
                  <img className="is-hidden-mobile" src={AdvertorialImg2} />
                </div>
              </div>

              {/* <div className="advertorial-free-quote-wrapper">
                <span>Get Your Free Quote</span> <img src={AdvertorialArrow} />{" "}
                <a
                  href="https://www.petpartners.com/enroll?p=PPNA2020"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Your Free Quote
                </a>
              </div> */}
              <div className="gift-pet-insurance-cta">
                <p>
                  Want to learn more about pet insurance from the comfort of
                  your home?
                </p>
                <div className="cta">
                  <h4>Check out PetPartners today for a quote.</h4>
                  <a
                    href="https://www.petpartners.com/enroll?p=PPNA202"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Your Free Quote
                  </a>
                </div>
              </div>
              <hr className="bottom-line" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default giveTheGiftOfPetInsurance
