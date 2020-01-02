import React, { useState } from "react"
import { Form, Formik, Field } from "formik"
import axios from "axios"
import { Link } from 'gatsby'

const ContactUs = () => {
  const count = useState(0);

  const handleClose = () => {
    localStorage.setItem('closed', (count + 1));  
  };

  return (
    <section className="section contact-us-form">
      <div className="container is-fullhd">
        <Formik
          initialValues={{ email: "", name: "", dog_crazy: true, cat_crazy: true}}
          validate={values => {
            let errors = {}
            if(!values.email){
              errors.email = 'Email is Required'
            }
            if (!values.name) {
              errors.name = "Name is required"
            }
            return errors;
          }}
          onSubmit={values => {
            axios
              .post(
                "https://psluo758l6.execute-api.us-east-1.amazonaws.com/prod/emails",
                {
                  email: values.email,
                  dog_crazy: values.dog_crazy,
                  cat_crazy: values.cat_crazy,
                  name: values.name,
                  date: new Date().toUTCString()
                }
              ).then(
                window.location = "/subscription-confirmation"
              )
          }}
        >
          {({ values, errors, touched }) => (
            <Form>
              <h3>Get the best of PetPlace straight to&nbsp;your&nbsp;inbox.</h3>
              <div className="columns">
                <div className="column">
                  <Field
                    type="checkbox"
                    name="dog_crazy"
                    checked={values.dog_crazy}
                  />
                  <label htmlFor="dog_crazy">
                    Yes, Send Me The Dog Crazy Newsletter.
                  </label>
                </div>
                <div className="column">
                  <Field
                    type="checkbox"
                    name="cat_crazy"
                    checked={values.cat_crazy}
                  />
                  <label htmlFor="cat_crazy">
                    Yes, Send Me The Cat Crazy Newsletter.
                  </label>
                </div>
              </div>
              <Field
                type="email"
                name="email"
                placeholder="Type your email"
                className={ errors.email && touched.email ? "field-error" : "" }
              />
              <Field type="text" name="name" placeholder="Enter your name" className={ errors.name && touched.name ? "field-error" : "" } />
              {/* <ErrorMessage name="email" component="div" /> */}
              <button type="submit" onClick={handleClose} >Sign Up Now</button>
              <p>By signing up, you agree to our <Link to="/terms-of-use">Terms of Use</Link> and <Link to='/privacy-policy'>Privacy Policy</Link>.</p>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  )
}

export default ContactUs
