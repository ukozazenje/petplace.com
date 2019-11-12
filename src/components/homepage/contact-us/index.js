import React from "react"
import { Form, Formik, Field } from "formik"
import axios from "axios"

const ContactUs = () => {
  return (
    <section className="section contact-us-form">
      <div className="container is-fullhd">
        <Formik
          initialValues={{ email: "", email_confirm: "", dog_crazy: true, puppy: false, cat_crazy: true}}
          validate={values => {
            let errors = {}
            if(!values.email){
              errors.email = 'Email is Required'
            }
            if (values.email !== values.email_confirm) {
              errors.email_confirm = "Email values don't match"
            }
            return errors;
          }}
          onSubmit={values => {
            axios
              .post(
                "https://psluo758l6.execute-api.us-east-1.amazonaws.com/prod/emails",
                {
                  email: values.email,
                  puppy: false,
                  dog_crazy: values.dog_crazy,
                  cat_crazy: values.cat_crazy,
                  date: new Date().toUTCString()
                }
              )

            console.log(values)
          }}
          render={({ values, errors, touched }) => (
            <Form>
              <h3>Get the best of PetPlace straight to your inbox.</h3>
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
              <Field type="email" name="email_confirm" placeholder="Confirm your email" className={ errors.email_confirm && touched.email_confirm ? "field-error" : "" } />
              {/* <ErrorMessage name="email" component="div" /> */}
              <button type="submit">Sign Up Now</button>
              <p>By signing up, you agree to our <a>Terms of Service</a> and <a>Privacy Policy</a>.</p>
            </Form>
          )}
        />
      </div>
    </section>
  )
}

export default ContactUs
