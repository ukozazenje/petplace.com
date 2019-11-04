import React from 'react'

const ContactUs = () => {
  return (
    <section className="section contact-us-form">
      <div className="container is-widescreen">
        <form>
          <h3>Get the best of Petplace straight to your inbox.</h3> 
          <div className="columns">
            <div className="column">
              <input type="checkbox"  name="dog-newsletter"  />
              <label htmlFor="dog-newsletter">Yes, Send Me The Dog Crazy Newsletter.</label>
              <input type="checkbox"  name="puppy-newsletter" checked />
              <label htmlFor="puppy-newsletter">Yes, Send Me The Puppy Newsletter.</label>
              <input type="checkbox"  name="cat-newsletter" checked />
              <label htmlFor="cat-newsletter">Yes, Send Me The Cat Crazy Newsletter.</label>
            </div>
          </div>
          <input type="text" name="name" />
          <input type="text" name="name" />
          <button type="submit">Sign Up Now</button>
        </form>
        <p className="disclaimer">By signing up you agree to our Terms of Service and Privacy Policy</p>
      </div>
    </section>
  )
}

export default ContactUs
