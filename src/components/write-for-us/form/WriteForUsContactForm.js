import React from "react"
import axios from "axios"
import { Formik, Form, Field } from "formik"
const WriteForUsContactForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          massage: "",
          email: "",
        }}
        onSubmit={values => {
          axios
            .post(
              "https://7dzmo5zwc3.execute-api.us-east-1.amazonaws.com/prod/create?name=petplace&age=56&location=Kraljevo"
            )
            .then(res => console.log(res))
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Jane" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />

          <label htmlFor="massage">Massage</label>
          <Field id="massage" name="massage" placeholder="Doe" />

          <button type="submit">second</button>
        </Form>
      </Formik>
    </div>
  )
}

export default WriteForUsContactForm
