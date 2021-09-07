import React from "react"
import { Field, ErrorMessage } from "formik"

const validate = values => {
  if (!values) {
    return "Required"
  }
}

const NameOnTheCard = ({ props }) => {
  const { handleChange, errors, touched, setFieldError } = props
  return (
    <div className="fields-col">
      <label htmlFor="name_on_card">Name on Card</label>
      <Field
        onChange={e => handleChange(e)}
        validate={validate}
        className={`field ${
          errors.name_on_card && touched.name_on_card ? "has-error" : ""
        }`}
        name="name_on_card"
        placeholder="Full Name"
      />
    </div>
  )
}
export default NameOnTheCard
