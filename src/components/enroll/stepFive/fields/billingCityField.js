import React from "react"
import { Field } from "formik"

const BillingCity = ({ props }) => {
  const { handleChange, errors, touched, setFieldError } = props
  return (
    <div className="fields-col">
      <label htmlFor="billingCity">City</label>
      <Field
        name="billingCity"
        placeholder="City"
        className={`field ${
          errors.billingCity && touched.billingCity ? "has-error" : ""
        }`}
        onChange={e => handleChange(e)}
      />
    </div>
  )
}
export default BillingCity
