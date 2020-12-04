import React from 'react'
import {Link} from 'gatsby'

const JustForFunSection = () => {
  return (
    <>
      <section className="section just-for-fun">
        <div className="container is-fullhd">
          <div className="columns">
            <div className="column is-7">
              <h2>Just For Fun</h2>
              <p>
                Everyone knows that caring for pets is hard work. It can be hectic, stressful, even overwhelming -- sometimes. More often than not, dogs, cats, rabbits, birds, snakes, and other pets are a whole lot of fun. That’s why the PetPlace team doesn’t stop at offering medical advice and how-to pet care guides. We’ve also dedicated an entire “wing” of our site to light-hearted content that’ll put a smile on your face. 
              </p>
              <p>In PetPlace’s Just for Fun section, you can read the latest celebrity pet news, check out furtastic photos from Instagram-famous pups, find recipes for tasty homemade cat treats, take quizzes to test your tropical bird know-how, answer surveys to find the perfect fish, and much, much more.</p>
              <Link to="/article/category/just-for-fun/" className="about-us-btn">Just For Fun</Link>
            </div>
          </div>         
        </div>        
      </section>
    </>
  )
}

export default JustForFunSection