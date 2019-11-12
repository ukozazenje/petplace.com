import React from "react"
import { Form, Formik, ErrorMessage, Field } from "formik"
import axios from "axios"

const ContactUs = () => {
  return (
    <section className="section contact-us-form">
      <div className="container is-fullhd">
        <Formik
          initialValues={{ email: "", email_confirm: "", dog_crazy: true, puppy: true, cat_crazy: true}}
          validate={values => {
            let errors = {}
            if(!values.email){
              errors.email = 'Email is Required'
            }
            if (values.email !== values.email_confirm) {
              errors.email = "Email values don't match"
            }
            return errors;
          }}
          onSubmit={values => {
            axios
              .post(
                "https://psluo758l6.execute-api.us-east-1.amazonaws.com/prod/emails",
                {
                  email: values.email,
                  puppy: values.puppy,
                  dog_crazy: values.dog_crazy,
                  cat_crazy: values.cat_crazy,
                  date: new Date().toUTCString()
                }
              )

            console.log(values)
          }}
          render={({ values, errors }) => (
            <Form>
              <h3>Get the best of PetPlace straight to your inbox.</h3>
              <ErrorMessage name="email" component="div" />
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
                    name="puppy"
                    checked={values.puppy}
                  />
                  <label htmlFor="puppy">
                    Yes, Send Me The Puppy Newsletter.
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
              <Field type="email" name="email"  />
              <Field type="email" name="email_confirm"  />
              <button type="submit">Sign Up Now</button>
            </Form>
          )}
        />
      </div>
    </section>
  )
}

export default ContactUs
