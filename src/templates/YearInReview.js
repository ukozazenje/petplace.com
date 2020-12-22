import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PetConImg from "../static/images/year-in-review/PetConImg"
import PetPlaceChatImg from "../static/images/year-in-review/PetPlaceChatImg"
import PetsMakeADifferenceImg from "../static/images/year-in-review/PetsMakeADifferenceImg"
import DogShowImg from "../static/images/year-in-review/DogShowImg"
import DogDocImg from "../static/images/year-in-review/DogDocImg"
import FunActivitiesImg from "../static/images/year-in-review/FunActivitiesImg"
import RoadTrippingImg from "../static/images/year-in-review/RoadTrippingImg"
import ServiceDogsImg from "../static/images/year-in-review/ServiceDogsImg"
import CovidGuideImg from "../static/images/year-in-review/CovidGuideImg"
import PuppyChecklistImg from "../static/images/year-in-review/PuppyChecklistImg"
import GuidedLearningImg from "../static/images/year-in-review/GuidedLearningImg"
import BrusselsSproutImg from "../static/images/year-in-review/BrusselsSproutImg"
import MeatballImg from "../static/images/year-in-review/MeatballImg"
import BackyardChickensImg from "../static/images/year-in-review/BackyardChickensImg"
import WorkAfterLockdownImg from "../static/images/year-in-review/WorkAfterLockdownImg"
import TravelGuideImg from "../static/images/year-in-review/TravelGuideImg"
import DoggosDoingThingsImg from "../static/images/year-in-review/DoggosDoingThingsImg"
import BreedGuideImg from "../static/images/year-in-review/BreedGuideImg"
import InitiativeImg from "../static/images/year-in-review/InitiativeImg"
import StyleReportImg from "../static/images/year-in-review/StyleReportImg"
import AnimalShelterImg from "../static/images/year-in-review/AnimalShelterImg"
import CatsDogsImg from "../static/images/year-in-review/CatsDogsImg"
import NationalDogShowImg from "../static/images/year-in-review/NationalDogShowImg"
import GiftGuideImg from "../static/images/year-in-review/GiftGuideImg"
import TravelGuideCard from "../components/travelGuideCard"
import HeroImage from "../images/year-in-review/dog-with-toys-img.png"

const YearInReview = ({ data }) => {
  const post = data.wordpressPost
  return (
    <Layout>
      <SEO
        title={`${post.yoast_meta.yoast_wpseo_title}`}
        description={post.yoast_meta.yoast_wpseo_metadesc}
        image="/images/2020-year-in-review.jpg"
      />
      <section className="section travel-guide-hero-section year-in-review-hero-section">
        <div className="container is-fullhd">
          <div className="hero-content-wrapper">
            <div className="hero-content-heading">
              <h1>PetPlace 2020: Year In Review</h1>
              <p>
                2020 was quite a year. We started off strong, but soon ran out of toilet paper 
                and weren’t allowed to leave the house. We were laid off from jobs, struggled 
                to pay bills, and had to make tough decisions.
              </p>
            </div>
            {/* <HeroImage /> */}
            <img className="travel-guide-hero-img" src={HeroImage} />
          </div>
        </div>
      </section>
      <section className="section travel-guide-intro-section intro-wrapper-intro-section">
        <div className="container is-fullhd">
          <div className="travel-guide-intro-wrapper">
            <p>
              However, 2020 also gave us reasons to celebrate. We held drive-by birthday parades for friends 
              and loved ones, got creative about keeping in touch with those who mattered most, and figured out
              how to use Zoom for everything. We adopted new pets, spent more time outside (socially distanced, 
              of course!), baked endless trays of brownies, loaves of banana bread and sourdough from scratch, 
              and some of us even got to finally work from home. 
            </p>
            <p>
              At PetPlace, we are celebrating our favorite stories from the past year. Here’s a look at our 
              <br />year in review:
            </p>
            
          </div>
        </div>
      </section>

      <TravelGuideCard
        title="The Pets of PetCon: Special Needs Dogs"
        cities={false}
        cityImage={<PetConImg />}
        link="/article/dogs/just-for-fun/the-pets-of-petcon-special-needs-dogs/"
      >
        <p>
          We had a pawsome experience attending PetCon before the world shut down, 
          getting up close and personal with some of Instagram’s most famous pets. 
          In addition to being super cute, some of these celeb pets included 
          special needs pups that warmed our hearts.
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="PetPlace Chat: Meet NatGeo’s Newest Celeb Vets"
        cities={false}
        cityImage={<PetPlaceChatImg />}
        className="blue-gradient"
        link="/article/general/just-for-fun/chat-heartland-docs/"
      >
        <p>
          We had the pleasure of interviewing the husband and wife veterinarian team 
          behind NatGeo WILD’s <em>Heartland Docs</em>. Doctors Ben and Erin Schroeder spoke 
          to us about the highs and lows of being farm town veterinarians, as well 
          as how they navigate working together as a married couple.
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="The Impact of WeatherTech’s #PetsMakeADifference Campaign"
        cities={false}
        cityImage={<PetsMakeADifferenceImg />}
        link="/article/dogs/just-for-fun/pets-make-a-difference-superbowl-ad/"
      >
        <p>
          Super Bowl 54 seems like a lifetime ago, but one commercial stood apart from the rest 
          for us. It starred Scout, the beloved family golden retriever of WeatherTech’s CEO, 
          who had been diagnosed with a rare heart tumor, but survived thanks to the dedicated 
          team of doctors at the University of Wisconsin School of Veterinary Medicine. We had 
          the pleasure of speaking with the Dean, Mark Markel, about working with Scout and the 
          impact of the #PetsMakeADifferenceCampaign.
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="Westminster Dog Show: Meet the Breeds"
        cities={false}
        cityImage={<DogShowImg />}
        className="blue-gradient"
        link="/article/dogs/just-for-fun/breeds-westminster-dog-show/"
      >
        <p>
          We got to attend one of the world’s most renowned dog competitions, Westminster Dog Show, 
          in New York City back in February (is it me, or does that seem like 3 years ago now?!!). 
          We met some fabulous dogs, spoke with their owners and trainers, and got a behind the 
          scenes look at what goes on at the famous dog show.
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="PetPlace Chat: An Interview With the Dog Doc, Dr. Marty Goldstein"
        cities={false}
        cityImage={<DogDocImg />}
        link="/article/dogs/just-for-fun/interview-with-dr-marty-goldstein/"
      >
        <p>
          Dr. Marty has been a leading voice in integrative veterinary medicine for over 45 years, 
          so when his new documentary, The Dog Doc, debuted in March, we didn’t want to miss an 
          opportunity to chat with him.
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="Indoor Exercises & Fun Activities For Your Pet"
        cities={false}
        cityImage={<FunActivitiesImg />}
        className="blue-gradient"
        link="/article/cats/pet-behavior-training/indoor-exercises-games-pets/"
      >
        <p>
          When COVID hit and we were all trapped inside with pets and loved ones (or solo, making 
          sourdough bread), we turned to one of our experts, Dr. Alett Mekler, to create ways to 
          keep our pets active and engaged during lockdown.
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="The Ultimate Guide to Road Tripping with Your Cat"
        cities={false}
        cityImage={<RoadTrippingImg />}
        link="/article/cats/just-for-fun/road-trip-cat/"
      >
        <p>
          Bored at home and want to hit the road? We get you’ve got you covered! We interviewed Holly 
          Anne Dustin of Feline Friends Cat Care and Consulting to collect the best tips for road 
          tripping with your cat.
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="How Service Dogs Provide Care During the COVID-19 Outbreak"
        cities={false}
        cityImage={<ServiceDogsImg />}
        className="blue-gradient"
        link="/article/dogs/pet-behavior-training/service-dogs-coronavirus/"
      >
        <p>
          Service dog organizations were negatively impacted by the pandemic, which forced them to halt all advanced dog training. As a result, people in need of service dogs were forced to remain on the waiting list for one of these well-trained pups
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="COVID-19 Guide to Pet Care"
        cities={false}
        cityImage={<CovidGuideImg />}
        link="/article/general/pet-health/covid19-coronavirus-pet-care-guide/"
      >
        <p>
          With so many businesses shuttered during lockdown, many had to get creative with how to safely service their customers (like vets and dog walkers). Others, like dog groomers, were forced to shut down completely. Here are some ways that pet businesses were affected by the pandemic, and DIY tips for grooming your pet at home (just in case).
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="The Puppy Checklist"
        cities={false}
        cityImage={<PuppyChecklistImg />}
        className="blue-gradient"
        link="/article/dogs/breeds/puppy-adoption-checklist/"
      >
        <p>
          2020 was a great year for pet adoptions, even though it was a dumpster fire for almost everything else. We put together a helpful checklist for those who are considering adopting or welcoming a new puppy into their home this year. Its value will extend well beyond 2020!
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="Tap Into Your Deeper Self with Equine Guided Learning"
        cities={false}
        cityImage={<GuidedLearningImg />}
        link="/article/horses/just-for-fun/equine-guided-learning/"
      >
        <p>
          We had the opportunity to interview Gail Carruthers, a triple-certified equine guided trainer and co-owner of Skye Blue Acres outside of Toronto. Carruthers and her other facilitators teach you how to “speak horse” to improve your personal development, social-emotional learning, leadership training, and even manage grief.
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="PetPlace Chat: Meet Brussels Sprout"
        cities={false}
        cityImage={<BrusselsSproutImg />}
        className="blue-gradient"
        link="/article/dogs/just-for-fun/brussels-sprout-dog-influencer/ "
      >
        <p>
          We were so taken by Brussels Sprout after meeting him at PetCon that we were delighted to be able to interview his mom, Sigrid Neilson, about the Brussels Griffon breed. She gave us some great tips on how to find a reputable breeder and how to support a cause close to her heart.
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="PetPlace Chat: Here Comes Meatball"
        cities={false}
        cityImage={<MeatballImg />}
        link="/article/dogs/just-for-fun/meatball-dog-influencer/"
      >
        <p>
          Like Sprout, we also met Meatball at PetCon and jumped at the chance to interview his dad, Tony Hayden, about discovering that Meatball had a genetic disease called cerebellar hypoplasia and how the Internet ended up being the savior he never knew they both needed.
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="Safely Handling Backyard Chickens"
        cities={false}
        cityImage={<BackyardChickensImg />}
        className="blue-gradient"
        link="/article/birds/pet-care/safely-handling-chickens/"
      >
        <p>
          2020 was a weird year, which explains why #backyardchickens started trending on Instagram (over 1.5 million posts!). We interviewed two backyard chicken coop experts, Tory McCagg and Stacia Campbell Howard, to get the best tips for those of you brave enough to raise your own #backyardchickens.
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="Survey Results: Returning to Work After Lockdown"
        cities={false}
        cityImage={<WorkAfterLockdownImg />}
        link="/article/general/news/pet-parents-love-stay-at-home-order/ "
      >
        <p>
          After the first wave of the pandemic was over, we surveyed over 300 PetPlace readers to ask them about how they felt about returning to work after spending so much quality time at home with their pets. The answers might surprise you.
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="The Pet-Friendly Travel Guide"
        cities={false}
        cityImage={<TravelGuideImg />}
        className="blue-gradient"
        link="/travel-guide/"
      >
        <p>
          Although travel was a bit more limited in 2020 than in previous years, we put together a pet-friendly travel guide for a handful of states across the country. Since people aren’t flying as much right now, we wanted to make it easy for you to take a road trip with your pet. 
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="PetPlace Chat: @DoggosDoingThings"
        cities={false}
        cityImage={<DoggosDoingThingsImg />}
        link="/article/dogs/just-for-fun/chat-doggos-doing-things/"
      >
        <p>
          If you love pet memes, there’s a good chance you have seen (or already follow) posts from the insanely popular Instagram account @DoggosDoingThings. When we found out that they published a book, we reached out to chat with the man behind the account, John Trulli.
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="The Breed Guide"
        cities={false}
        cityImage={<BreedGuideImg />}
        className="blue-gradient"
        link="/article/breed/"
      >
        <p>
          With so many people interested in becoming pet parents this past year, we decided to launch a Breed Guide to help make it easier to find the best breed for your home and personality. Expect more breeds and detailed information from our amazing team of vets in the year ahead! 
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="PetPlace Chat: Philadelphia Councilwoman Bass and The #PlayFree Initiative"
        cities={false}
        cityImage={<InitiativeImg />}
        link="/article/dogs/just-for-fun/chat-philly-councilwoman-cindy-bass/"
      >
        <p>
          PetPlace is headquartered in Philadelphia, so when we learned that our city was on the list for a new initiative from Stonyfield Yogurt to create organic parks for people and pets across the country, we wanted to know more. We spoke with Philadelphia Councilwoman Cindy Bass about her involvement in the program and why it’s a great initiative for cities to support.
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="Pawsome Fall Style Report"
        cities={false}
        cityImage={<StyleReportImg />}
        className="blue-gradient"
        link="/article/dogs/just-for-fun/fall-dog-fashion/"
      >
        <p>
          Fashion Week might have been canceled this year, but that didn’t stop us from letting our inner fashionista flag fly! The Pawsome Fall Style Report highlights a variety of cute options for the most stylish of pups.
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="Animal Shelter Appreciation Week: See Inside Delaware Humane Association"
        cities={false}
        cityImage={<AnimalShelterImg />}
        link="/article/general/pet-care/animal-shelter-appreciation-week/"
      >
        <p>
          We sent our video team to the Delaware Humane Association in Wilmington, Delaware to get a better understanding of how shelters work and what you can do to show support. Plus, we got to meet some pretty cute cats and dogs while we were there, which is always an added bonus!
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="Election 2020: Cats vs. Dogs"
        cities={false}
        cityImage={<CatsDogsImg />}
        className="blue-gradient"
        link="/article/general/just-for-fun/pet-election-2020-dogs-cats/"
      >
        <p>
          It was certainly a contentious year for politics, especially when it came down to who you voted for: cats or dogs?!  We broke down all the important issues for each candidate in order to help you better understand their platform and figure out once and for all if you’re a cat person or a dog person.
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="PetPlace Chat: Meet the Hosts of the National Dog Show"
        cities={false}
        cityImage={<NationalDogShowImg />}
        link="/article/dogs/just-for-fun/chat-national-dog-show-david-frei-john-ohurle"
      >
        <p>
          Every Thanksgiving, the National Dog Show is broadcast live from Philadelphia, bringing joy to millions of dog lovers across the country. Although it was not open to the public this year due to public health concerns, we were able to chat with the co-hosts of the event, David Frei and John O’Hurley, about their nearly two-decade partnership, their lifelong affection for canines, and what to expect from this year’s competition.
        </p>
      </TravelGuideCard>

      <TravelGuideCard
        title="Holiday Gift Guide for Pets and Pet Lovers"
        cities={false}
        cityImage={<GiftGuideImg />}
        className="blue-gradient"
        link="/article/general/just-for-fun/2020-holiday-gift-guide-for-pets-and-pet-lovers/"
      >
        <p>
          We launched our first PetPlace Holiday Gift Guide, which featured a variety of gifts for pets and pet lovers from some of our favorite brands. Although the holidays are behind us, if you still want to purchase a little something special for your pet, check it out (and maybe start making your list for next year... too soon?).
        </p>
      </TravelGuideCard>
    </Layout>
  )
}

export const pageQuery = graphql`
  query YearInReview($id: String!) {
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

export default YearInReview
