import React, { Component } from "react"
import Layout from "../components/layout"
import ContactUsSection from "../components/homepage/contact-us"
import GiftBox from "../components/GiftBox"
import AvatarImg from "../images/winter-paw-tection-for-dogs/jeena-choi-avatar.jpg"
import ProdImg1 from "../images/winter-paw-tection-for-dogs/prod-box-1.jpg"
import ProdImg2 from "../images/winter-paw-tection-for-dogs/prod-box-2.jpg"
import ProdImg3 from "../images/winter-paw-tection-for-dogs/prod-box-3.jpg"
import ProdImg4 from "../images/winter-paw-tection-for-dogs/prod-box-4.jpg"
import ProdImg5 from "../images/winter-paw-tection-for-dogs/prod-box-5.jpg"
import ProdImg6 from "../images/winter-paw-tection-for-dogs/prod-box-6.jpg"
import ProdImg7 from "../images/winter-paw-tection-for-dogs/prod-box-7.jpg"
import ProdImg8 from "../images/winter-paw-tection-for-dogs/prod-box-8.jpg"
import ProdImg9 from "../images/winter-paw-tection-for-dogs/prod-box-9.jpg"
import ProdImg10 from "../images/winter-paw-tection-for-dogs/prod-box-10.jpg"
import ProdImg11 from "../images/winter-paw-tection-for-dogs/prod-box-11.jpg"
import ProdImg12 from "../images/winter-paw-tection-for-dogs/prod-box-12.jpg"
import ProdImg13 from "../images/winter-paw-tection-for-dogs/prod-box-13.jpg"

const WinterPawDogs = () => {
  return (
    <Layout>
      <div className="winter-paw-tection-page">
        <div className="holiday-treats-hero-image winter-paw-tection-hero-image">
          <div className="container is-fullhd">
            <div class="author-info">
              <img class="author-img" src={AvatarImg} alt="avatar" />
              <p class="author-name">Jeena Choi</p>
            </div>
            <h1>Winter Paw-tection for Dogs</h1>
            <p>
              In my snowy Northeastern town, there is a blizzard blowing through 
              that’s estimated to last about 2 days. Talk about an opportune time
              to discuss paw protection! 
            </p>
          </div>
        </div>        
        <section className="section products-section blue-section">
          <div className="container is-fullhd">
            <div class="winter-paw-tection-intro-wrapper">
              <p>
                Last year, I made my first contribution to PetPlace with <a href="https://www.petplace.com/article/dogs/pet-care/does-puppy-need-snow-boots/" target="_blank">Does My Puppy
                Need Snow Boots?</a> <br />I learned so much about paw care while writing and researching, specifically that my 
                <a href="https://www.instagram.com/p/CLIlBzAAoBw/?utm_source=ig_web_copy_link" target="_blank"> Westie</a> pup needed boots due to his 
                size and height. 
              </p>
              <p>
                At first glance, most dog boots look alike, so I’ve decided to compile a 
                list of popular boots in a variety of looks and sizes to meet your doggo’s 
                needs. Pick a pair to keep your pup protected this winter, and be sure to 
                scroll down for an exclusive discount code just for PetPlace readers!
              </p>
              <h4>Important Tip:</h4>
              <p>
                Be sure to measure your pup’s paws carefully, following product instruction. 
                Most boot brands listed below offer measurement charts for an accurate fit. 
                Try them on at home before taking your fur buddy out in the snow and be patient 
                as your pupster gets used to walking in their new boots. P.S.: watching your 
                fido trying to master the bootie-walk is priceless and should lift your spirits 
                during the grey winter season.
              </p>
            </div>
            <p className="sponsored-paragraph sponsored-paragraph-wpd">
              All products featured in this article were independently selected
              by our editorial team. As an Amazon and Chewy Associate, PetPlace
              will earn if you click on the provided links and/or purchase a
              qualifying product from Amazon or Chewy.
            </p>

            <div className="section-subtitle"></div>
            
            <h3>Ankle Boots</h3>

            <div className="gift-box">
              <div className="gift-box-image">
                <img src={ProdImg1} alt="gift" />
              </div>
              <div className="gift-box-content">
                <p className="gift-box-subtitle">For Active Dogs</p>
                <h4>Kurgo</h4>
                <p>
                  These lightweight, durable, waterproof all-terrain boots 
                  are popular with active families. Featuring rugged soles that mimics a 
                  dog’s pads, breathable mesh, and flexible ankle cord, these boots “make 
                  any quest paws-sible,” whether through rain, snow, salt, heat, glass, and 
                  other hazards.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://prf.hn/click/camref:1101l9vcZ/destination:https%3A%2F%2Fwww.chewy.com%2Fkurgo-blaze-cross-dog-shoes%2Fdp%2F190627"
                  className="gift-box-btn"
                >
                  Buy on Chewy
                </a>
              </div>
            </div>

            <div className="gift-box">
              <div className="gift-box-image">
                <img src={ProdImg2} alt="gift" />
              </div>
              <div className="gift-box-content">
                <p className="gift-box-subtitle">For Day-to-Day Use</p>
                <h4>QUMY</h4>
                <p>
                  Everyday walks with this set of flexible ankle boots will
                  protect your doggy’s paws from any type of weather. Skid-resistant and 
                  anti-slip soles mean these can also be worn indoors for dogs with hip 
                  conditions, and help prevent accidental slips and falls.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.amazon.com/gp/product/B01LYITJ4S/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01LYITJ4S&linkCode=as2&tag=petplace07-20&linkId=edf7814e6ad69ea76ba1a5f67269703d"
                  className="gift-box-btn"
                >
                  Large Dog
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.amazon.com/gp/product/B0861WJZBZ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0861WJZBZ&linkCode=as2&tag=petplace07-20&linkId=828ca465eaa326f27a8da377f90407d1"
                  className="gift-box-btn"
                >
                  Small Dog
                </a>
              </div>
            </div>

            <div className="gift-box">
              <div className="gift-box-image">
                <img src={ProdImg3} alt="gift" />
              </div>
              <div className="gift-box-content">
                <p className="gift-box-subtitle">For Day-to-Day Use</p>
                <h4>Ultra Paws</h4>
                <p>
                  Another option for daily use is this set made from water-resistant, extra 
                  flexible nylon and Tough Trek, a thermoplastic material that provides extra 
                  grip indoors and out. They also have foam ankle pads for extra comfort.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://prf.hn/click/camref:1101l9vcZ/destination:https%3A%2F%2Fwww.chewy.com%2Fultra-paws-durable-dog-boots-4-count%2Fdp%2F56632"
                  className="gift-box-btn"
                >
                  Buy on Chewy
                </a>
              </div>
            </div>

            <div className="gift-box">
              <div className="gift-box-image">
                <img src={ProdImg4} alt="gift" />
              </div>
              <div className="gift-box-content">
                <p className="gift-box-subtitle">Fleece-lined and Fancy</p>
                <h4>Winsoon</h4>
                <p>
                  Ideal for short-haired or short-stature dogs, these adorable and affordable 
                  sherpa-lined winter boots are made for providing extra warmth while protecting 
                  paws in cold or wet climates. Constructed from soft, synthetic leather and 
                  sturdy rubber soles, these boots are made for walking!
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.amazon.com/gp/product/B00XR42U6S/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00XR42U6S&linkCode=as2&tag=petplace07-20&linkId=4004e265ff7df5dac96619d4e7c59ac8"
                  className="gift-box-btn"
                >
                  Buy on Amazon
                </a>
              </div>
            </div>

            <div className="gift-box">
              <div className="gift-box-image">
                <img src={ProdImg5} alt="gift" />
              </div>
              <div className="gift-box-content">
                <p className="gift-box-subtitle">High-ankle Option</p>
                <h4>GF Pet</h4>
                <p>
                  The high-ankle style ensures your doggo doesn’t kick off the boots accidentally 
                  or just for kicks (I know because my mischievous pup is a master at kicking off 
                  his boots). This set boasts built-in socks for warmth and an adjustable fastener 
                  for a secure fit. Try a set for your leggy, furry friend.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://prf.hn/click/camref:1101l9vcZ/destination:https%3A%2F%2Fwww.chewy.com%2Fgf-pet-dog-booties%2Fdp%2F254218"
                  className="gift-box-btn"
                >
                  Buy on Chewy
                </a>
              </div>
            </div>

            <div className="gift-box">
              <div className="gift-box-image">
                <img src={ProdImg6} alt="gift" />
              </div>
              <div className="gift-box-content">
                <p className="gift-box-subtitle">Rain Boots</p>
                <h4>Canada Pooch</h4>
                <p>
                  Wellies for your pooch equals no more muddy paw tracks on your just-cleaned floors. But really, 
                  these seriously stylish boots excel at protecting their precious paws from the outdoor elements. 
                  The warm liner and slick silicon exterior with non-slip soles provide comfort too. 
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://prf.hn/click/camref:1101l9vcZ/destination:https%3A%2F%2Fwww.chewy.com%2Fcanada-pooch-lined-wellies-dog-boots%2Fdp%2F256198"
                  className="gift-box-btn"
                >
                  Buy on Chewy
                </a>
              </div>
            </div>

            <div className="gift-box">
              <div className="gift-box-image">
                <img src={ProdImg7} alt="gift" />
              </div>
              <div className="gift-box-content">
                <p className="gift-box-subtitle">Year-Round</p>
                <h4>Ethical Pet</h4>
                <p>
                  These are no-nonsense, no-frills fleece boots that do the job without breaking the bank. 
                  This practical number from Ethical Pet has an easy-on and off design and no-skid, non-slip 
                  PVC soles that work great for hot summer sidewalks and salty winter walkways. Bonus: they 
                  can be machine washed and air dried. 
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://prf.hn/click/camref:1101l9vcZ/destination:https%3A%2F%2Fwww.chewy.com%2Fethical-pet-fashion-lookin-good%2Fdp%2F56345"
                  className="gift-box-btn"
                >
                  Buy on Chewy
                </a>
              </div>
            </div>

            <div className="gift-box">
              <div className="gift-box-image">
                <img src={ProdImg8} alt="gift" />
              </div>
              <div className="gift-box-content">
                <p className="gift-box-subtitle">Year-Round</p>
                <h4>Frisco</h4>
                <p>
                  The water-resistant soft soles with snug fit elastic toggles make these boots a step-up 
                  from run-of-the-mill fleece boots, but still practical enough for fun outdoor adventures. 
                  Anti-slip soles are a plus for traction in the rain and snow as well.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://prf.hn/click/camref:1101l9vcZ/destination:https%3A%2F%2Fwww.chewy.com%2Ffrisco-anti-slip-soft-soled-dog-boots%2Fdp%2F250890"
                  className="gift-box-btn"
                >
                  Buy on Chewy
                </a>
              </div>
            </div>

            <div className="gift-box">
              <div className="gift-box-image">
                <img src={ProdImg9} alt="gift" />
              </div>
              <div className="gift-box-content">
                <p className="gift-box-subtitle">Unique</p>
                <h4>Walkee Paws</h4>
                <p>
                  These are truly the most unique pup boots on the market right now. In fact, the company 
                  prefers to call its design “dog leggings,”  promising a better bootie 
                  experience to match the distinctive design. Made of stretchy, waterproof fabric, grippy 
                  soles for traction, and over-the-back design (see photo), these go above and beyond to 
                  ensure a comfortable fit and maximum protection for your pooch. Use discount code WALKEE15 
                  at checkout for an exclusive 15% savings for our readers. 
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://walkeepaws.com/collections/waterproof-dog-leggings?sscid=21k5_34aub&utm_source=2689152&utm_medium=affiliate&utm_campaign=1586457"
                  className="gift-box-btn"
                >
                  Buy at Walkee Paws
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section products-section">
          <div className="container is-fullhd">
            <h3>Balms</h3>
            <p className="section-subtitle">Can’t get your fur buddy to wear boots? Balms are another way to protect doggy paws that create a barrier between the paw pad and the elements. Check out a few of our favorites below.</p>

            <GiftBox title="Musher’s Secret" img={ProdImg10}>
              <p>
                Made of 100% pure natural wax, beeswax, and vitamin E, this balm doesn't just have a cult 
                following among pet owners, it also has hordes of horse-loving devotees. The super-moisturizing 
                formula soothes cracked paw pads and hooves, creating a breathable, yet dense, barrier. This 
                means hot concrete, steamy sand beaches, and icy terrain are no match for its protective powers. 
                A little dab goes a long way, so keep this balm handy and use on parched snouts too.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://prf.hn/click/camref:1101l9vcZ/destination:https%3A%2F%2Fwww.chewy.com%2Fmushers-secret-paw-protection-natural%2Fdp%2F128336"
                className="gift-box-btn"
              >
                Buy on Chewy
              </a>
            </GiftBox>

            <GiftBox title="Pawstruck" img={ProdImg11}>
              <p>
                This creamy balm, made with extra virgin olive oil, coconut oil, beeswax, and non-GMO 
                vitamin E is a USDA-certified organic product. It’s also known for its protection against
                rough terrain and extreme temperatures.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://prf.hn/click/camref:1101l9vcZ/destination:https%3A%2F%2Fwww.chewy.com%2Fpawstruck-ruff-relief-nose-paw-dog%2Fdp%2F244043"
                className="gift-box-btn"
              >
                Buy on Chewy
              </a>
            </GiftBox>

            <GiftBox title="Natural Dog Company" img={ProdImg12}>
              <p>
                PawTection is a vegan, all-natural blend of waxes and oils made for safeguarding sensitive 
                paw pads from painful scratches and damaging chaps. With ingredients that include mango butter, 
                sunflower oil, and rosemary extract, it creates a protective barrier to lock in moisture and 
                help prevent drying.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/gp/product/B00LR365T4/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00LR365T4&linkCode=as2&tag=petplace07-20&linkId=224e12c092dc867bcbebffbd11809ea9"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>

            <GiftBox title="Dr. Bronner’s" img={ProdImg13}>
              <p>
                Dry skin happens to dogs too, especially cracked paw pads in the colder months. Gently wash and 
                dry their paws and apply this unscented balm for soothing relief. This is formulated 
                for human babies, so go ahead and put some on your rough patches too. 
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/gp/product/B01LXE0TP5/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01LXE0TP5&linkCode=as2&tag=petplace07-20&linkId=66aa0788c484ecabb36e1686cfba5f53"
                className="gift-box-btn"
              >
                Buy on Amazon
              </a>
            </GiftBox>

            <p className="sponsored-paragraph sponsored-paragraph-bottom sponsored-paragraph-wpd">
              All products featured in this article were independently selected by our editorial team. 
              As an Amazon and Chewy Associate, PetPlace will earn if you click on the provided links 
              and/or purchase a qualifying product from Amazon or Chewy.
            </p> 
          </div>
        </section>
      </div>
      <ContactUsSection />
    </Layout>
  )
}

export default WinterPawDogs