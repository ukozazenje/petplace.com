import React from "react"
import Layout from "../components/layout"
import ContactUsSection from "../components/homepage/contact-us"
import SEO from "../components/seo"
import SeoImage from "../images/advertise-home.jpg"
import Img1 from "../images/write-for-us/play-with-pet.jpg"
import Img2 from "../images/write-for-us/dog-and-cat.png"
import Img3 from "../images/write-for-us/pet-gallery.jpg"
import ScrollArrow from "../images/write-for-us/scroll-down-btn.svg"
import WriteForUsContactForm from "../components/write-for-us/form/WriteForUsContactForm"
const WriteForUs = () => {
  return (
    <Layout>
      <SEO
        title="Write for Us - Petplace"
        description="If you’re a pet professional, pet blogger, or just a pet lover,
                PetPlace may be interested in sharing your thoughts, insights,
                recommendations, and reflections with our readers."
        image={SeoImage}
      />
      <div className="write-for-us-page">
        <div className="section write-for-us-hero-image">
          <div className="container is-fullhd">
            <div className="text-content">
              <h1>Write for Us</h1>
              <p className="lead">
                If you’re a pet professional, pet blogger, or just a pet lover,
                PetPlace may be interested in sharing your thoughts, insights,
                recommendations, and reflections with our readers.
              </p>
            </div>
          </div>
          <a href="#" className="scroll-btn">
            <img src={ScrollArrow} alt="Play with dog" />
          </a>
        </div>

        <section className="section whats-in-section">
          <div className="container is-fullhd">
            <div className="columns">
              <div className="column">
                <h2>
                  What’s in It for <span className="highlight">You</span>?
                </h2>
                <div className="text-content-wrap">
                  <p>
                    <span className="text-subheading">A new audience:</span>
                    <br />
                    Over more than 15 years, PetPlace has developed a vast
                    audience among pet enthusiasts and industry experts. Our
                    blog reaches nearly 1,000,000 unique visitors each month,
                    our newsletters have more than 400,000 combined subscribers,
                    and we’ve built a sizable following across all major social
                    media platforms.
                  </p>
                </div>
                <div className="text-content-wrap">
                  <p>
                    <span className="text-subheading">
                      Promotion for you and your site:
                    </span>
                    <br />
                    Guest writers are welcome to include links back to their own
                    sites or social media profiles within the bodies of their
                    submissions. The editorial team will select one as a
                    “dofollow” link and may promote guest submissions to
                    PetPlace’s newsletter subscribers and/or social media
                    followers.
                  </p>
                </div>
              </div>
              <div className="column image-wrap">
                <img src={Img1} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="section tips-section">
          <div className="container is-fullhd">
            <div className="columns">
              <div className="column tips-first-column">
                <h2>
                  Tips from the <span className="highlight">PetPlace</span> Team
                </h2>
                <img src={Img2} alt="Dog and cat" />
              </div>
              <div className="column tips-second-column">
                <div className="text-content-wrap">
                  <p>
                    <span className="text-subheading">Be conversational:</span>
                    <br />
                    Even veterinary students get tired of sifting through
                    textbooks! PetPlace’s content should be accessible to all
                    readers from the first-time pet owner to the seasoned
                    expert.
                  </p>
                </div>
                <div className="text-content-wrap">
                  <p>
                    <span className="text-subheading">Get creative:</span>
                    <br />
                    Take a look around the PetPlace library and you’ll see that
                    our writers have published a lot of content over the years.
                    That doesn’t mean they’ve covered everything. PetPlace is
                    always interested in articles that find novel ways to
                    explore evergreen subjects. Feel free to submit a number of
                    ideas for the editorial team to review.
                  </p>
                </div>
                <div className="text-content-wrap">
                  <p>
                    <span className="text-subheading">Avoid controversy:</span>
                    <br />
                    PetPlace is committed to covering a range of topics and
                    perspectives. In general, however, the editorial staff
                    avoids publishing opinion-based pieces related to
                    controversial subjects. For example, PetPlace is more likely
                    to accept an article about the merits of obedience training
                    than one championing shock collars or discouraging routine
                    vaccinations. If you’re interested in exploring a topic that
                    may “ruffle some feathers,” take care to remain as objective
                    as possible in your writing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section guidlines-section">
          <div className="container is-fullhd">
            <div className="columns">
              <div className="column">
                <h2>Editorial Guidelines</h2>
                <div className="text-content-wrap">
                  <p>
                    Guest writers are encouraged to submit articles between 650
                    and 2,000 words in length. Brief author biographies and
                    high-quality headshots are encouraged, but not required.
                  </p>
                </div>
                <div className="text-content-wrap">
                  <p>
                    All submissions must be entirely original work published
                    exclusively on PetPlace.
                  </p>
                </div>
                <div className="text-content-wrap">
                  <p>
                    The PetPlace editorial staff reserves the right to make any
                    edits they deem necessary to any work submitted by guest
                    writers. Authors may or may not be informed of edits prior
                    to publication.
                  </p>
                </div>
                <p>
                  Have a product or service to promote? <br />
                  Head to our Advertise With Us Page to learn more.
                </p>
              </div>
              <div className="column image-wrap">
                <img src={Img3} alt="Play with your pet" />
              </div>
            </div>
          </div>
        </section>
        <section className="section write-for-us-form-section">
          <WriteForUsContactForm />
        </section>
      </div>
      <ContactUsSection />
    </Layout>
  )
}

export default WriteForUs
