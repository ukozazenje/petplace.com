import React from "react"
import "../sass/main.sass"
import logoImg from "../images/logo.svg"
import { Link } from "gatsby"
import AdvertorialHero from "../static/images/cost-of-owning-a-puppy/costOfPuppyHero"
import avatarImg from "../images/author.svg"
import facebook from "../images/facebookIcon.svg"
import pintrest from "../images/pinterestIcon.svg"
import twitter from "../images/twitterIcon.svg"
import emailIcon from "../images/emailIcon.svg"
import AdvertorialImg1 from "../images/cost-of-puppy/vaccine-ico.svg"
import AdvertorialImg2 from "../images/cost-of-puppy/home-ico.svg"
import AdvertorialImg3 from "../images/cost-of-puppy/food-ico.svg"
import AdvertorialImg4 from "../images/cost-of-puppy/health-ico.svg"
import AdvertorialImg5 from "../images/cost-of-puppy/toys-ico.svg"
import AdvertorialImg6 from "../images/cost-of-puppy/support-ico.svg"
import AdvertorialArrow from "../images/advertorial-arrow.svg"
import AvgChartMobImg1 from "../images/cost-of-puppy/avg-chart-100-600-mob.svg"
import AvgChartMobImg2 from "../images/cost-of-puppy/avg-chart-300-5000-mob.svg"
import AvgChartMobImg3 from "../images/cost-of-puppy/avg-chart-100-300-mob.svg"
import AvgChartMobImg4 from "../images/cost-of-puppy/avg-chart-200-2000-mob.svg"
import AvgChartImg1 from "../images/cost-of-puppy/avg-chart-100-600.svg"
import AvgChartImg2 from "../images/cost-of-puppy/avg-chart-300-5000.svg"
import AvgChartImg3 from "../images/cost-of-puppy/avg-chart-100-300.svg"
import AvgChartImg4 from "../images/cost-of-puppy/avg-chart-200-2000.svg"
import SEO from "../components/seo"

const CostOfPuppy = () => {
  return (
    <>
      <SEO
        title="The Cost of Owning a Puppy: Months 1-6 - PetPlace"
        description="Read on for a closer look at the average costs of caring for a puppy throughout their first six months. During this period, pet parents are responsible for a range of one-time costs, as well as recurring expenses they’ll face throughout their dog’s lifetime."
        image="/images/cost-of-puppy-hero.jpg"
      />
      <nav className="advertorial-navbar">
        <div className="container is-fullhd">
          <div className="advertorial-navigation-wrapper phone-number-navigation">
            <div className="advertorial-logo">
              <img src={logoImg} alt="logo" />
            </div>
            <div className="phone-wrapper">
              <span>Give us a call to discuss your options:</span>{" "}
              <a className="tel-link" href="tel:18559285348">
                1-855-928-5348
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="is-hidden-desktop advertorial-mobile-heading">
        <h1>
          <span>The Cost of Owning a Puppy: Months 1-6</span>
        </h1>
      </div>

      <AdvertorialHero />

      <section className="advertorial-main-content cost-of-puppy">
        <div className="container is-fullhd">
          <div className="columns">
            <div className="column is-one-quarter advertorial-sidebar">
              <div className="advertorial-info">
                <div className="author-wrapper">
                  <img className="author-img" src={avatarImg} alt="avatar" />
                  <div className="author-info">
                    <p className="author-name">PetPlace Staff</p>
                    <p className="post-date">26 Feb 2021</p>
                  </div>
                </div>
                <div className="share-icons-horizontal">
                  <a
                    className={`facebook-/cost-of-owning-a-puppy/`}
                    href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.GATSBY_WEB_SITE_URL}/cost-of-owning-a-puppy/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={`facebook-/cost-of-owning-a-puppy/`}
                      src={facebook}
                      alt="facebook"
                    />
                  </a>
                  <a
                    className={`twitter-/cost-of-owning-a-puppy/`}
                    href={`https://twitter.com/intent/tweet?url=${process.env.GATSBY_WEB_SITE_URL}/cost-of-owning-a-puppy/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={`twitter-/cost-of-owning-a-puppy/`}
                      src={twitter}
                      alt="twitter"
                    />
                  </a>
                  <a
                    className={`pinterest-/cost-of-owning-a-puppy/`}
                    href={`https://pinterest.com/pin/create/button/?url=${process.env.GATSBY_WEB_SITE_URL}/images/cost-of-puppy-hero.jpg`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <img
                      className={`pinterest-/cost-of-owning-a-puppy/`}
                      src={pintrest}
                      alt="pinterest"
                    />
                  </a>
                  <a
                    className={`mail-/cost-of-owning-a-puppy/`}
                    href={`mailto:info@petplace.com?&subject=The Cost of Owning a Puppy: Months 1-6&body=${process.env.GATSBY_WEB_SITE_URL}/cost-of-owning-a-puppy/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={`mail-/cost-of-owning-a-puppy/`}
                      src={emailIcon}
                      alt="email"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="column">
              <p className="petpartners-disclosure">
                The following is advertorial content.{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.petpartners.com/"
                >
                  PetPartners, Inc.
                </a>{" "}
                is an indirect corporate affiliate of PetPlace.com. PetPlace may
                be compensated when you click on or make a purchase using the
                links in this article.
              </p>
              <p>
                Ready to bring a new puppy into your life? There is so much
                excitement around welcoming a new pup into your home that
                critical aspects of pet parenthood might get overlooked. This is
                especially true when it comes to the cost of care for your new
                pet.
              </p>
              <p>
                Read on for a closer look at the average costs of caring for a
                puppy throughout their first six months. During this period, pet
                parents are responsible for a range of one-time costs, as well
                as recurring expenses they’ll face throughout their dog’s
                lifetime.{" "}
              </p>
              <h3>Weeks 1 - 8: Your Puppy’s First Days</h3>
              <p className="p-subtitle">Medical Needs</p>
              <div className="advertorial-image-content img-right column-reverse">
                <div className="advertorial-content">
                  <p>
                    <strong>DAPP Vaccine (1 of 3):</strong> At six to eight
                    weeks of age, your puppy will get their first dose of the
                    DAPP vaccine. Considered a core vaccination, this shot
                    protects your pup against four different common viruses:
                    Canine Distemper Virus, Canine Adenovirus, Canine
                    Parainfluenza, and Canine Parvovirus. This initial dose is a
                    primer intended to boost your dog’s immune system in
                    anticipation of the full vaccine. {" "}
                    <a
                      href="https://www.akc.org/expert-advice/health/puppy-shots-complete-guide/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      It usually costs between <strong>$20 and $30</strong> for each dose
                    </a>
                    . The cost of this first dose may be included
                    in your adoption or purchase fee.
                  </p>
                </div>
                <div className="advertorial-img">
                  <img src={AdvertorialImg1} />
                </div>
              </div>
              <p className="p-subtitle">Pet Care Essentials</p>
              <p>
                <strong>Food:</strong> When your puppy stops nursing between
                four and six weeks old, their breeder or caretaker will begin
                serving them soft puppy food. A month’s supply typically costs
                between{" "}
                <strong>
                  <a
                    href="https://www.thesprucepets.com/the-cost-of-dog-ownership-1117321#:~:text=It%20is%20important%20to%20feed,the%20quality%20of%20the%20food."
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    $20 and $60
                  </a>
                </strong>
                . This will become a regular expense once your puppy comes home
                and it may be included in your purchase or adoption fee.
              </p>
              <div className="avg-chart-image">
                <img src={AvgChartMobImg1} className="is-hidden-tablet" />
                <img src={AvgChartImg1} className="is-hidden-mobile" />
              </div>
              <h3>Weeks 8 - 12: Bringing Home Your New Pup</h3>
              <p className="p-subtitle">Purchasing or Adopting a Dog</p>
              <p>
                Depending on the breed, purchasing a purebred dog from a breeder
                could cost anywhere between{" "}
                <strong>a few hundred and several thousand dollars</strong>.
              </p>
              <div className="advertorial-image-content">
                <div className="advertorial-img">
                  <img src={AdvertorialImg2} />
                </div>
                <div className="advertorial-content">
                  <p>
                    Some shelters and adoption centers may offer pets for free,
                    but prospective pet parents should expect to pay{" "}
                    <a
                      href="https://money.usnews.com/money/personal-finance/articles/costs-to-consider-when-adopting-a-pet"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <strong>as much as $500</strong>
                    </a>
                    , since adoption fees often help cover costs associated with
                    vaccination, microchipping, and other pet ownership
                    essentials.
                  </p>
                  <p>
                    Whichever option you choose, you probably won’t bring home
                    your new dog until they’ve reached eight weeks of age. In
                    some cases, breeders and shelters may wait until the pup has
                    reached 12 weeks. That means you’ll miss out on a few key
                    milestones (like their first baby teeth) and some early
                    expenses like the ones listed in the previous section.
                  </p>
                </div>
              </div>
              <p className="p-subtitle">Medical Needs</p>
              <p>
                <strong>Initial Veterinary Visit:</strong> Within the first week
                of bringing your puppy home, you should make your first trip to
                the vet. New dog owners could pay around{" "}
                <a
                  href="https://www.akcpetinsurance.com/blog/the-big-day-puppys-first-vet-visit"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <strong>$75 to $100</strong>
                </a>{" "}
                for this introductory visit. The vet will conduct a general
                examination to identify signs of congenital disorders or
                infections. They’ll also review your puppy’s vaccination history
                (expect to be charged if they haven’t had that first DAPP dose
                at this visit) and assess their stool to check for intestinal
                parasites. Don’t forget to bring along any medical records you
                have, a stool sample (if applicable), and any burning questions.
              </p>
              <p>
                <strong>Heartworm Prevention:</strong> The American Heartworm
                Society encourages pet owners to begin treating their dogs with
                preventive medicine against heartworm when they’re around eight
                weeks of age. Treatment types vary, and your veterinarian may
                suggest oral, topical, or injectable preventive treatments.
                Typically, they recommend that pets undergo these treatments
                throughout the entire year. Depending on your dog’s weight,
                preventing heartworm will cost{" "}
                <a
                  href="https://www.petmd.com/dog/parasites/how-much-does-heartworm-treatment-cost-dogs"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <strong>between $35 and $75</strong>
                </a>{" "}
                each year. If you’re on the fence about whether or not this is a
                necessary expense, keep this in mind: a single bite from an
                infected mosquito can cause heartworm, and preventing them is
                typically much less expensive than getting rid of them.
              </p>
              <p>
                <strong>Bordetella Vaccine:</strong> The vaccine against
                Bordetella (also known as kennel cough) is optional, but some
                pet care establishments like dog daycares and overnight boarding
                facilities require pets to be vaccinated. It costs{" "}
                <a
                  href="https://www.akc.org/expert-advice/health/puppy-shots-complete-guide/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <strong>between $20 and $45</strong>
                </a>{" "}
                on average. If you choose to vaccinate your dog, it can be
                administered concurrently with their first dose of heartworm
                prevention medicine and the DAPP vaccine.
              </p>
              <p>
                <strong>Canine Coronavirus Vaccine:</strong> Not to be confused
                with the vaccine for COVID-19, this vaccine protects pooches
                against a different type of respiratory illness. Sometimes, this
                vaccine is included with the DAPP vaccination, but as a
                stand-alone vaccination, it costs between{" "}
                <a
                  href="https://www.akc.org/expert-advice/health/puppy-shots-complete-guide/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <strong>$15 and $20</strong>.
                </a>
              </p>
              <div className="advertorial-image-content img-right column-reverse">
                <div className="advertorial-content">
                  <p className="p-subtitle">Pet Care Essentials</p>
                  <p>
                    <strong>Food and Treats:</strong> Your puppy needs
                    specially-formulated food to thrive and you’ll most likely
                    want treats to both show affection and aid in training.
                    Depending on your dog’s size and energy level, you’ll likely
                    pay between <strong>$20 and $60</strong> on food each month.
                  </p>
                  <p>
                    <strong>Gear:</strong> Before your puppy arrives, you’ll
                    want to visit the pet store for must-haves like{" "}
                    <a
                      href="https://money.usnews.com/money/personal-finance/articles/costs-to-consider-when-adopting-a-pet"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      bowls for food and water (<strong>$10 - $30</strong>), a
                      leash, harness (<strong>$10 - $40</strong>) or collar (
                      <strong>$5 - $20</strong>), and a crate (
                      <strong>$40 - $200</strong>)
                    </a>
                    . If you have a small dog, you may need to purchase a
                    carrier for trips to and from the vet, and other travel.
                  </p>
                </div>
                <div className="advertorial-img">
                  <img src={AdvertorialImg3} />
                </div>
              </div>
              <p>
                <strong>Identification:</strong> Once you’ve picked out a name
                for your pup, don’t forget to put it on their{" "}
                <a
                  href="https://www.chewy.com/b/id-tags-accessories-348"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  identification tag (<strong>$5 - $10</strong>)
                </a>
                .
              </p>
              <p>
                <strong>Toys:</strong> Toys aren’t just about fun and games.
                They're useful for teaching basic commands, helping keep pets
                physically and mentally fit, and building a strong bond. As your
                puppy’s first set of 28 teeth begin to fall out and their new
                set of 42 adult teeth grow in, they’ll need plenty of toys to
                soothe their sore gums. You’ll want to keep them comfortable
                while keeping them away from your shoes, rugs, and furniture.
                Plan on spending{" "}
                <a
                  href="https://money.usnews.com/money/personal-finance/articles/costs-to-consider-when-adopting-a-pet"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <strong>at least $20</strong> on their initial set of toys and
                  as much <strong>as $100 during their first year</strong>
                </a>
                .
              </p>
              <p>
                <strong>Pet Insurance:</strong> At eight weeks of age, your
                puppy may be eligible to{" "}
                <a
                  href="https://www.petpartners.com/pet-insurance/frequently-asked-questions"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  enroll in pet insurance
                </a>
                . Like traditional health insurance, pet insurance provides
                reimbursement for both emergency and routine expenses.{" "}
                <a
                  href="https://www.petpartners.com/pet-insurance/frequently-asked-questions"
                  target="_blank"
                >
                  Plans start as low as $15 per month for basic accident and
                  illness coverage
                </a>
                . Pet insurance companies offer more benefits for additional
                fees and give pet owners the option to customize plans to meet
                their pet’s needs.
              </p>
              <div className="avg-chart-image">
                <img src={AvgChartMobImg2} className="is-hidden-tablet" />
                <img src={AvgChartImg2} className="is-hidden-mobile" />
              </div>
              <div className="advertorial-free-quote-wrapper">
                <span>
                  Want to learn more about pet insurance from the comfort of
                  your home?
                </span>{" "}
                <img src={AdvertorialArrow} />{" "}
                <a
                  href="https://www.petpartners.com/enroll?p=PPFB2020"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Your Free Quote
                </a>
              </div>
              <h3>Weeks 12 - 16: Keeping Puppy Happy & Healthy</h3>
              <p className="p-subtitle">Medical Needs</p>
              <p>
                <strong>Routine Checkup:</strong> Your vet will take another
                look at your puppy to ensure they’re growing into a healthy
                young dog. These routine visits will happen twice-a-year and
                typically cost between{" "}
                <a
                  href="https://www.carecredit.com/vetmed/costs/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <strong>$45 and $55</strong>
                </a>{" "}
                for a wellness check. This will be a recurring expense
                throughout your dog’s life.
              </p>
              <p>
                <strong>DAPP Vaccine (2 of 3):</strong> About three weeks after
                their first DAPP shot, it’s time for your puppy to receive dose
                #2, which is{" "}
                <a
                  href="https://www.akc.org/expert-advice/health/puppy-shots-complete-guide/"
                  target="_blank"
                >
                  another <strong>$20 to $30 expense</strong>
                </a>
                .
              </p>
              <div className="advertorial-image-content img-left">
                <div className="advertorial-img">
                  <img src={AdvertorialImg4} />
                </div>
                <div className="advertorial-content">
                  <p>
                    <strong>Rabies Vaccine:</strong> Your dog will need a rabies
                    vaccine to protect them from this deadly and widespread
                    virus. The initial dose costs{" "}
                    <a
                      href="https://www.akc.org/expert-advice/health/puppy-shots-complete-guide/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <strong>around $15 to $20</strong>
                    </a>{" "}
                    and your dog will get it somewhere between 12 and 16 weeks
                    of age. Remember that your dog will need additional rabies
                    boosters to keep up their immunity in the coming years.
                  </p>
                  <p>
                    <strong>Flea and Tick Prevention:</strong> After they’ve
                    reached eight weeks of age, it’s safe for puppies to be
                    treated with pest-prevention medications. If you live in a
                    high-risk area, these treatments may be a year-round
                    necessity. On average, a three-month supply of medication{" "}
                    <a
                      href="https://www.chewy.com/b/flea-tick-381"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      costs <strong>around $55.</strong>
                    </a>
                  </p>
                </div>
              </div>
              <p className="p-subtitle">Pet Care Essentials</p>
              <p>
                <strong>Microchipping:</strong> Around 12 weeks of age,{" "}
                <a
                  href="https://www.petplace.com/article/general/pet-care/microchip-pet-month/#section2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  pets can be microchipped
                </a>
                . The process is quick, effectively painless, and costs{" "}
                <a
                  href="https://www.petfinder.com/dogs/lost-and-found-dogs/microchip-faqs/#:~:text=A%3A%20The%20average%20cost%20to,may%20already%20have%20a%20microchip."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  about <strong>$45</strong> on average.
                </a>{" "}
                You may need to pay an additional fee (
                <a
                  href="https://pets.thenest.com/much-cost-microchip-dog-9117.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <strong>around $20</strong> 
                </a> 
                ) to register your dog’s microchip in a nationwide database.
              </p>
              <p>
                <strong>Food and Treats:</strong> Unless you bought in bulk or
                placed an autoship subscription, you’ll probably have to make at
                least one trip to the pet store to spend{" "}
                <a
                  href="https://money.usnews.com/money/personal-finance/articles/costs-to-consider-when-adopting-a-pet"
                  target="_blank"
                >
                  another <strong>$20 to $60</strong> on dog food and treats.
                </a>
              </p>
              <div className="avg-chart-image">
                <img src={AvgChartMobImg3} className="is-hidden-tablet" />
                <img src={AvgChartImg3} className="is-hidden-mobile" />
              </div>

              <h3>Weeks 16 - 20: A Growing Pup</h3>
              <p className="p-subtitle">Medical Needs</p>
              <p>
                <strong>DAPP Vaccine (3 of 3):</strong> About three weeks after
                shot #2, your puppy needs their third and final dose of the DAPP
                vaccine and you’ll need to pay another{" "}
                <a
                  href="https://www.akc.org/expert-advice/health/puppy-shots-complete-guide/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <strong>$20 to $30</strong>.
                </a>
              </p>
              <p>
                <strong>Leptospirosis Vaccination:</strong> Your vet may
                recommend vaccinating your puppy against Leptospirosis around
                this age. This disease of the kidneys and liver is mostly spread
                by infected rodents and is treatable with antibiotics. As with
                other canine illnesses, prevention is often less expensive than
                treatment. The vaccine costs between{" "}
                <a
                  href="https://www.akc.org/expert-advice/health/puppy-shots-complete-guide/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <strong>$75 and $100</strong> on average.
                </a>
              </p>
              <p>
                <strong>Lyme Vaccination:</strong> This{" "}
                <a
                  href="https://www.petmd.com/dog/parasites/does-your-dog-need-lyme-vaccine"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  non-core, yearly vaccination
                </a>{" "}
                is often recommended for active dogs who live in particularly
                high-risk parts of the country. If you plan to spend a lot of
                time hiking or outdoors with your pet, it may be a wise
                decision. However, keep in mind that indoor dogs are still
                vulnerable to ticks and Lyme disease. If you opt to vaccinate
                your pet against Lyme, you’ll likely pay between{" "}
                <a
                  href="https://www.akc.org/expert-advice/health/puppy-shots-complete-guide/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <strong>$20 and $40</strong> each year.
                </a>
              </p>
              <p className="p-subtitle">Pet Care Essentials</p>
              <p>
                <strong>Food and Treats:</strong> Still more food and treats and
                another{" "}
                <a
                  href="https://money.usnews.com/money/personal-finance/articles/costs-to-consider-when-adopting-a-pet"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  bill around <strong>$20 to $60</strong>.
                </a>{" "}
                Continue using treats as positive reinforcement to encourage
                good behavior and consult your veterinarian about any adverse
                reactions.{" "}
              </p>
              <div className="avg-chart-image">
                <img src={AvgChartMobImg3} className="is-hidden-tablet" />
                <img src={AvgChartImg3} className="is-hidden-mobile" />
              </div>
              <h3>Weeks 20 - 24: Sit. Stay. Roll Over.</h3>
              <p className="p-subtitle">Medical Needs</p>
              <p>
                <strong>Spaying or Neutering:</strong> Small-breed dogs should
                be{" "}
                <a
                  href="https://www.aaha.org/your-pet/pet-owner-education/ask-aaha/spay-or-neuter/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  spayed or neutered
                </a>{" "}
                around six months of age. For larger breeds, surgery takes place
                later. Regardless of your dog’s size and breed,{" "}
                <a
                  href="https://www.petfinder.com/cats/cat-health/low-cost-spay-neuter/#:~:text=These%20routine%20surgeries%20typically%20cost,spay%2Fneuter%20programs%20and%20clinics."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  the procedure can cost as much as $500
                </a>
                .{" "}
              </p>
              <p>
                <strong>Pest Prevention:</strong> Depending on your pet’s
                schedule, it may be time to purchase another round of preventive
                medications{" "}
                <a href="https://www.chewy.com/b/flea-tick-381" target="_blank" rel="noopener noreferrer">
                  for <strong>around $55</strong>.
                </a>
              </p>
              <p className="p-subtitle">Pet Care Essentials</p>
              <p>
                <strong>Food and Treats:</strong> By now, you’ve hopefully
                learned to spot deals on your puppy’s preferred food and treats.
                Plan to spend another {" "}
                <a
                  href="https://money.usnews.com/money/personal-finance/articles/costs-to-consider-when-adopting-a-pet"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                   <strong>$20 to $60</strong> 
                </a>{" "}
                this month and make sure to consult your veterinarian before making
                any updates to your dog’s diet.
              </p>
              <div className="advertorial-image-content img-left">
                <div className="advertorial-img">
                  <img src={AdvertorialImg5} />
                </div>
                <div className="advertorial-content">
                  <p>
                    <strong>Replacement Gear and Toys:</strong> Depending on
                    their breed, your puppy may have already outgrown their
                    first collar or harness. Be prepared to purchase
                    replacements if necessary. Chances are that any dog will
                    have chewed through their fair share of toys by this point
                    as well, since many will continue teething until they reach
                    eight months of age. By now, you’ve hopefully learned how to
                    identify toys that can withstand heavy biting and chewing.
                  </p>
                </div>
              </div>
              <p>
                <strong>Training:</strong> Though you’ve likely been training
                your dog at home, first-time dog owners in particular may
                benefit from professional guidance. The experience won’t just
                promote obedience, it’ll also help socialize your dog and
                strengthen their bond with you. Private training sessions can cost {" "}
                <a
                  href="https://www.rover.com/blog/how-much-does-dog-training-cost/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <strong>hundreds of dollars an hour</strong>  
                </a>
                , but group training could cost{" "}
                <strong>just over $100 for several weeks of sessions</strong>.
              </p>
              <div className="avg-chart-image">
                <img src={AvgChartMobImg4} className="is-hidden-tablet" />
                <img src={AvgChartImg4} className="is-hidden-mobile" />
              </div>
              <h3>What Costs Pet Insurance May Cover</h3>
              <p>
                Pet ownership can run up quite a bill. It’s not too late to
                think about the protection pet insurance can offer. Depending on
                the level of coverage you select, you may be able to help pay
                for expenses like:
              </p>
              <div className="advertorial-image-content img-right column-reverse">
                <div className="advertorial-content">
                  <ul>
                    <li>Vaccines</li>
                    <li>Flea, tick, and heartworm prevention</li>
                    <li>Wellness exams</li>
                    <li>Dental cleaning</li>
                    <li>Treatment for accidents and sudden illnesses</li>
                    <li>Treatment for chronic and inherited conditions</li>
                    <li>End-of-life expenses like burial fees</li>
                  </ul>
                </div>
                <div className="advertorial-img">
                  <img src={AdvertorialImg6} />
                </div>
              </div>
              <p>
                Purchasing a plan shortly after bringing home your puppy can
                even help you pay for microchipping and spaying or neutering.
              </p>
              <div className="advertorial-free-quote-wrapper">
                <span>
                  Want to learn more about pet insurance from the comfort of
                  your home?
                </span>{" "}
                <img src={AdvertorialArrow} />{" "}
                <a
                  href="https://www.petpartners.com/enroll?p=PPFB2020"
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

export default CostOfPuppy
