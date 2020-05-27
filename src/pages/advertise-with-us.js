import React from 'react'
import Layout from '../components/layout'
import HeroImage from '../static/images/advertiseHero'
import ContentPublishingImg from '../images/mob_content_publishing.png' 
import { Formik, Field } from 'formik'
const advertise = () => {
  return (
    <Layout>
      <HeroImage />
      <section className="advertise-content">
        <div className="container is-fullhd">
          <p>Our brand partnerships provide businesses with a wonderful opportunity to position themselves as thought leaders, innovators, experts, and go-to resources for our diverse audience of pet parents. Together, we can craft thoughtful, engaging content that captures our audience’s attention and yields new customers.</p>
        </div>
      </section>
      <section className="advertise-boxes advertise-boxes-mobile">
        <div className="container is-fullhd">
          <div className="advertise-box-wrapper">
            <img src={ContentPublishingImg} />
            <div className="advertise-box">
              <h3>Content Publishing</h3>
              <p>Sponsor content for our site and lend your expertise to an article that will be seen by nearly 1 million people in your target demographic.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="advertise-boxes advertise-boxes-desktop">
        <div className="container is-fullhd">
          <div className="advertise-box-wrapper content-publishing-img">
            <div className="advertise-box">
              <h3>Content Publishing</h3>
              <p>Sponsor content for our site and lend your expertise to an article that will be seen by nearly 1 million people in your target demographic.</p>
            </div>
          </div>
          <div className="advertise-box-wrapper content-publishing-img">
            <div className="advertise-box">
              <h3>Content Publishing</h3>
              <p>Sponsor content for our site and lend your expertise to an article that will be seen by nearly 1 million people in your target demographic.</p>
            </div>
          </div>
          <div className="advertise-box-wrapper content-publishing-img">
            <div className="advertise-box">
              <h3>Content Publishing</h3>
              <p>Sponsor content for our site and lend your expertise to an article that will be seen by nearly 1 million people in your target demographic.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="advertise-contact">
        <div className="container is-fullhd">
          <h4>Contact Us</h4>
          <p>Fill out the form below if you’re interested in becoming a sponsor or advertiser with PetPlace.</p>
          <Formik
            initialValues={{ email: '', name: '', company: '', serviceOfInterest: '' }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form>
                <Field name='email' type='email' />
                <Field name='name' type='text' />
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </Layout>
  )
}

export default advertise

