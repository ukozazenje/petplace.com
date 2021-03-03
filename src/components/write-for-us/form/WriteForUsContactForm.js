import React from "react"
import axios from "axios"
import { v4 as uuidv4 } from "uuid"
import { Formik, Form, Field } from "formik"

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = "Required"
  }
  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }
  if (!values.message) {
    errors.message = "Required"
  }

  return errors
}

const WriteForUsContactForm = () => {
  const [success, setSuccess] = React.useState(false)

  return success ? (
    <div className="container is-fullhd">
      <h3 className="success-msg">Thanks for filling out our form!</h3>
    </div>
  ) : (
    <div className="container is-fullhd">
      <h3>Pitch Your Ideas!</h3>
      <Formik
        initialValues={{
          name: "",
          message: "",
          email: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          values.itemId = uuidv4()
          axios
            .post(
              "https://2ympwguwl3.execute-api.us-east-1.amazonaws.com/prod/people",
              values
            )
            .then(res => {
              setSubmitting(false)
              setSuccess(true)
            })
        }}
        validate={validate}
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
          <Form className="write-for-us-form">
            <label htmlFor="name">Name</label>
            <Field
              id="name"
              name="name"
              placeholder="Enter your name"
              className={`${errors.name && touched.name ? "has-error" : ""}`}
            />

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="Enter email"
              type="email"
              className={`${errors.email && touched.email ? "has-error" : ""}`}
            />

            <label htmlFor="message">Message</label>
            <Field
              id="message"
              name="message"
              placeholder="Enter Message"
              component="textarea"
              className={`${
                errors.message && touched.message ? "has-error" : ""
              }`}
            />
            <button disabled={isSubmitting} className="primary" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default WriteForUsContactForm
