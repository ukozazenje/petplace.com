import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import InstagramIconOrange from '../../images/advertise-with-us/instagram-white.svg'
import TwitterIconOrange from '../../images/advertise-with-us/twitter-white.svg'
import FacebookIconOrange from '../../images/advertise-with-us/facebook-white.svg'
import PintrestIconOrange from '../../images/advertise-with-us/pinterest-white.svg'
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
        <span className="text-divider"></span>
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
                <Field name='name' type='text' placeholder="First Name" className={`${errors.name && touched.name ? "has-error" : ""}`} />
              </div> 
              <div className="field-wrapper">
                <Field name='email' type='email' placeholder="Email" className={`${errors.email && touched.email ? "has-error" : ""}`}/>
              </div> 
              <div className="field-wrapper">
                <Field as="select" placeholder="Service of Interest" name="serviceOfInterest" >
                    <option value="Social Media">Social Media</option>
                    <option value="Content Creation">Content Creation</option>
                    <option value="Pet Insurance Inquiry">Pet Insurance Inquiry</option>
                    <option value="Other">Other</option>
                </Field>
              </div> 
              <div className="field-wrapper">
                <Field name='company' type='text' placeholder="Company" className={`${errors.company && touched.company ? "has-error" : ""}`}/>
              </div> 
              <button disabled={isSubmitting}>SUBMIT</button>
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
