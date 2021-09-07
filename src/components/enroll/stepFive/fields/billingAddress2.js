import React from "react"
import { Field } from "formik"

// const validate = values => {
//   if (!values) {
//     return "Required"
//   }
// }

const BillingAddress2 = ({ props }) => {
  const { handleChange, errors, touched, setFieldError } = props
  return (
    <div className="fields-col">
      <label htmlFor="billingAddress">Address</label>
      <Field
        name="billingAddress"
        placeholder="Street Address"
        // validate={validate}
        className={`field ${
          errors.billingAddress && touched.billingAddress ? "has-error" : ""
        }`}
        onChange={e => handleChange(e)}
      />
    </div>
  )
}
export default BillingAddress2
