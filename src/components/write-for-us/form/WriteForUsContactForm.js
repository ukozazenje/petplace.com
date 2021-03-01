import React from "react"
import axios from "axios"
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
  if (!values.massage) {
    errors.massage = "Required"
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
          massage: "",
          email: "",
        }}
        onSubmit={values => {
          // axios
          //   .post(
          //     "https://7dzmo5zwc3.execute-api.us-east-1.amazonaws.com/prod/create?name=petplace&age=56&location=Kraljevo"
          //   )
          //   .then(res => console.log(res))
          setSuccess(true)
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
              placeholder="Jane"
              className={`${errors.name && touched.name ? "has-error" : ""}`}
            />

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              className={`${errors.email && touched.email ? "has-error" : ""}`}
            />

            <label htmlFor="massage">Massage</label>
            <Field
              id="massage"
              name="massage"
              placeholder="Massage"
              component="textarea"
              className={`${
                errors.massage && touched.massage ? "has-error" : ""
              }`}
            />
            <button className="primary" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default WriteForUsContactForm
