import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import InstagramIconOrange from '../../images/instagram-orange.svg'
import TwitterIconOrange from '../../images/twitter-orange.svg'
import FacebookIconOrange from '../../images/facebook-orange.svg'
import PintrestIconOrange from '../../images/pinterestIcon.svg'
import axios from 'axios'

const validate = (values, props /* only available when using withFormik */) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.company) {
    errors.company = 'Required';
  }
  if (!values.name) {
    errors.name = 'Required';
  }
  return errors;
};



const thankContent = () => (

  <div className="container is-fullhd">
    <div className="thank-you-msg">
      <h1>Thank You!</h1>
      <p>Your request has been seccessfully submited, we will get back to you soon! </p>
    </div>
  </div>
)

const ContactSection = () => {
  const [thankYouMsg, setThankYouMsg] = useState(false)

  return (
    <section className="advertise-contact">
      { thankYouMsg ?  thankContent() : (
      <div className="container is-fullhd">
        <h4>Contact Us</h4>
        <p>Fill out the form below if you’re interested in becoming a sponsor or advertiser with PetPlace.</p>
        <Formik
          initialValues={{ email: '', name: '', company: '', serviceOfInterest: 'Social Media' }} 
          validate={validate}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              setThankYouMsg(true)
              const test = JSON.stringify({"text": `Name: ${values.name} \n Email: ${values.email} \n Company: ${values.company} \n Service Of Interest: ${values.serviceOfInterest}`,  })
              axios.post(`https://hooks.slack.com/services/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`, test,  {
                withCredentials: false,
                transformRequest: [(data, headers) => {
                  delete headers.post["Content-Type"]
                  return data
                }]
              })
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
          }) => (
            <Form className="advertise-with-us-form">
              <div className="field-wrapper">
                <label htmlFor="name">First name</label>
                <Field name='name' type='text' className={`${errors.name && touched.name ? "has-error" : ""}`} />
              </div> 
              <div className="field-wrapper">
                <label htmlFor="email">Email</label>
                <Field name='email' type='email' className={`${errors.email && touched.email ? "has-error" : ""}`}/>
              </div> 
              <div className="field-wrapper">
                <label htmlFor="serviceOfInterest">Service of Interest</label>
                <Field as="select" name="serviceOfInterest" >
                    <option value="Social Media">Social Media</option>
                    <option value="Content Creation">Content Creation</option>
                    <option value="Pet Insurance Inquiry">Pet Insurance Inquiry</option>
                    <option value="Other">Other</option>
                </Field>
              </div> 
              <div className="field-wrapper">
                <label htmlFor="company">Company</label>
                <Field name='company' type='text'  className={`${errors.company && touched.company ? "has-error" : ""}`}/>
              </div> 
              <button disabled={isSubmitting}>Submit</button>
            </Form>
          )}
        </Formik>
          <div className="icons-wrapper">
            <a href="https://www.facebook.com/petplacefans" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIconOrange} />
            </a>
            <a href="https://twitter.com/PetPlaceFans" target="_blank" rel="noopener noreferrer">
              <img src={ TwitterIconOrange } />
            </a>
            <a href="https://www.instagram.com/petplace/" target="_blank" rel="noopener noreferrer">
              <img src={ InstagramIconOrange }  />
            </a>
            <a href="https://www.pinterest.com/petplacefans/" target="_blank" rel="noopener noreferrer">
              <img src={ PintrestIconOrange }  />
            </a>
          </div>
      </div>
      ) }
    </section>
  )
}

export default ContactSection
