import React from "react"
import "../sass/main.sass"
import logoImg from "../images/logo.svg"
import { Link } from "gatsby"
import AdvertorialHero from "../static/images/advertorialHero"
import avatarImg from "../images/author.svg"
import facebook from "../images/facebookIcon.svg"
import pintrest from "../images/pinterestIcon.svg"
import twitter from "../images/twitterIcon.svg"
import emailIcon from "../images/emailIcon.svg"
import AdvertorialImg1 from "../images/advertorial-1.svg"
import AdvertorialImg2 from "../images/advertorial-2.svg"
import AdvertorialImg3 from "../images/advertorial-3.svg"
import AdvertorialArrow from "../images/advertorial-arrow.svg"
import { filterAuthorsLink, filterFaqPosts } from "../components/functions"
import Sticky from "react-stickynode"

const getPetInsuranceNow = () => {
  return (
    <>
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
        <h1>Advertorial</h1>
        <h1>An Emergency Vet Bill Left Me $10,000 In Debt</h1>
      </div>
      <AdvertorialHero />
      <section className="advertorial-main-content">
        <div className="container is-fullhd">
          <div className="columns">
            <div className="column is-one-quarter advertorial-sidebar">
              <div className="advertorial-info">
                <div className="author-wrapper">
                  <img className="author-img" src={avatarImg} alt="avatar" />
                  <div className="author-info">
                    <p className="author-name">PetPlace Staff</p>
                    <p className="post-date">23 Oct 2020</p>
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
                    href={`https://pinterest.com/pin/create/button/?url=${process.env.GATSBY_WEB_SITE_URL}/get-pet-insurance-now/&media=&description=An Emergency Vet Bill Left Me $10,000 In Debt`}
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
                    href={`mailto:info@petplace.com?&subject=An Emergency Vet Bill Left Me $10,000 In Debt&body=${process.env.GATSBY_WEB_SITE_URL}/get-pet-insurance-now/`}
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
              {/* <Sticky
                enabled={true}
                top={20}
                bottomBoundary=".single-post-sidebar"
              >
                <div className="share-icons-vertical">
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
                    href={`https://pinterest.com/pin/create/button/?url=${process.env.GATSBY_WEB_SITE_URL}/get-pet-insurance-now/&media=&description=An Emergency Vet Bill Left Me $10,000 In Debt`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <img
                      className={`pintrest-/get-pet-insurance-now/`}
                      src={pintrest}
                      alt="pinterest"
                    />
                  </a>
                  <a
                    className={`mail-/get-pet-insurance-now/`}
                    href={`mailto:info@petplace.com?&subject=An Emergency Vet Bill Left Me $10,000 In Debt&body=${process.env.GATSBY_WEB_SITE_URL}/get-pet-insurance-now/`}
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
              </Sticky> */}
            </div>
            <div className="column">
              <h3>I Went Into Debt Without Pet Insurance</h3>
              <p>
                The definition of an emergency is “a serious, unexpected, and
                often dangerous situation requiring immediate action.” Due to
                its very nature, there is no way to plan for an emergency; they
                can happen at any time, regardless of age or relative
                well-being. This is true for humans and pets.
              </p>
              <p>
                Yet, out of the estimated 85 million Americans who own pets,
                only 2.82 million choose to purchase pet insurance in case of
                emergencies. Many might regret the decision to forgo pet
                insurance when they receive an outrageous vet bill for
                treatment.{" "}
              </p>
              <p>
                We’ve collected a few examples of real-life dog owners who
                experienced sticker shock when faced with a pet health
                emergency. Who better to tell you all the reasons why pet
                insurance is a sound investment than a pet parent?
              </p>
              <h3>Protect Your Wallet from Genetic Conditions</h3>
              <p>
                Adam Price and his family had thought about pet insurance
                multiple times, even getting quotes from several different
                companies. Ultimately, however, they decided against it. Just a
                few months later, they regretted their decision.
              </p>
              <div className="advertorial-image-content img-right column-reverse">
                <div className="advertorial-content">
                  <p>
                    “Sydney, our Goldendoodle, ended up with Addison’s disease,
                    which can be extremely pricey. It cost us over $10,000 in
                    vet visits, emergency vet stays, and an ongoing
                    prescription,” says Price.{" "}
                  </p>
                  <p>
                    Addison’s disease is a rare condition that affects the
                    adrenal glands. As part of the endocrine system, the adrenal
                    glands control hormones that impact appetite, metabolism,
                    and blood pressure. When animals have Addison’s disease,
                    they are at risk of experiencing severe health crises,
                    including going into shock. The disease is very rare in dogs
                    and highly uncommon in cats, but you never know if your pet
                    will be one of the few impacted.
                  </p>
                </div>
                <div className="advertorial-img">
                  <img src={AdvertorialImg1} />
                </div>
              </div>
              <p>
                Although it has taken years, Price and his family have finally
                gotten Sydney’s health under control, but have an expensive
                stack of veterinary bills as a result.
              </p>
              <div className="advertorial-free-quote-wrapper">
                <span>Get Your Free Quote</span> <img src={AdvertorialArrow} />{" "}
                <a
                  href="https://www.petpartners.com/enroll?p=PPNA2020"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Your Free Quote
                </a>
              </div>
              <h3>Even Puppies Have Health Problems</h3>
              <p>
                After moving across the country 8 years ago, Brendan Heffernan
                decided to adopt a new dog. He named her Annie, and loved that
                she got along so well with his other dog. But after three days
                in her new home, little Annie got extremely sick.
              </p>
              <p>
                “I came home on lunch break to find puke everywhere in the
                house,” recalls Heffernan. “As soon as I saw Annie, she puked
                again. I rushed her to the vet to find out she had Parvo. I had
                never heard of it before, but the vet informed me that it was
                pretty serious and would take intense treatment to get her over
                it.”{" "}
              </p>
              <p>
                Parvovirus is a serious condition that often infects
                unvaccinated puppies, attacking the gastrointestinal tract, bone
                marrow, and even the heart muscle tissue. Annie’s treatment
                involved overnight stays at the vet hospital, which weren’t
                cheap.{" "}
              </p>
              <div className="advertorial-image-content img-left">
                <div className="advertorial-img">
                  <img src={AdvertorialImg2} />
                </div>
                <div className="advertorial-content">
                  <p>
                    “It took about 5 days of treatment and monitoring before
                    Annie came out healthy. I was glad she was ok, but I wasn't
                    happy about the vet bill, which came to $1300,” says
                    Heffernan. “On the bright side, she is still alive and is
                    the best dog ever!”
                  </p>
                  <p>
                    Many people think that only senior dogs are capable of
                    racking up high veterinary bills, but puppies can also get
                    seriously ill. Choosing to purchase pet insurance the day
                    that you bring your puppy home can help protect your bank
                    account and provide you with the best monthly premium rates.
                  </p>
                </div>
              </div>
              <h3>Extra Consideration for Large Breeds</h3>
              <p>
                Danielle Muehlenberg is a dog behaviorist and blogger. Although
                she has never personally had any outrageous vet bills, she has
                witnessed clients experience a range of unfortunate, high-cost
                situations.
              </p>
              <p>
                “Pet insurance is worth the investment, especially for large
                breeds that have known issues like hip dysplasia, cherry eye, or
                adventurers that are prone to have accidents,” says Muehlenberg.
              </p>
              <p>
                Hip dysplasia is a common condition in large breed dogs that
                stems from abnormal development of the hip joint and leads to
                weakened, arthritic hips. Breeds such as Labrador Retrievers,
                Golden Retrievers, German Shepherds, and Rottweilers are
                genetically predisposed to hip dysplasia, however, environmental
                factors, such as diet, exercise, and rate of growth, can also
                contribute to the development of the condition.
              </p>
              <h3>Emergency Coverage</h3>
              <div className="advertorial-image-content img-right">
                <div className="advertorial-content">
                  <p>
                    Sharene Mariner likes to err on the side of caution, so when
                    a groomer told her that her dog seemed to have a swollen
                    back leg, she didn’t want to take any chances.{" "}
                  </p>
                  <p>
                    “The groomer didn’t want to continue with service, and
                    suggested that I take him over to a nearby vet,” recalls
                    Mariner. “An exam was done, tests were done, an x-ray was
                    done. He was then sent to his primary vet where blood work
                    was done. All to tell me in the end that they could not find
                    anything that was necessarily wrong with him!”{" "}
                  </p>
                </div>
                <div className="advertorial-img">
                  <img src={AdvertorialImg3} />
                </div>
              </div>
              <p>
                Since he was also behaving normally, Mariner was told that his
                leg was simply built that way. After all was said and done, she
                ended up with a bill of about $700, just to be told that her dog
                was fine.
              </p>
              <h3>The Importance of Pet Insurance</h3>
              <p>
                As you can see, the curveballs that life can throw at you as a
                dog parent can get very expensive. The best way to protect
                yourself from receiving a nightmare vet bill is to invest in pet
                insurance sooner rather than later. Get your pet insurance quote
                from PetPartners today!
              </p>
              <div className="advertorial-free-quote-wrapper">
                <span>Get Your Free Quote</span> <img src={AdvertorialArrow} />{" "}
                <a
                  href="https://www.petpartners.com/enroll?p=PPNA2020"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Your Free Quote
                </a>
              </div>
              <hr className="bottom-line" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default getPetInsuranceNow
