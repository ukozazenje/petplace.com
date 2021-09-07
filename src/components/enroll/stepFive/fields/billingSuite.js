import React from "react"
import { Field } from "formik"

const BillingSuite = ({ props }) => {
  const { handleChange, errors, touched, setFieldError } = props
  return (
    <div className="fields-col">
      <label htmlFor="billingSuite">Apt, Suite</label>
      <Field
        name="billingSuite"
        placeholder="Apt, Suite"
        className={`field ${
          errors.billingSuite && touched.billingSuite ? "has-error" : ""
        }`}
        onChange={e => handleChange(e)}
      />
    </div>
  )
}
export default BillingSuite
