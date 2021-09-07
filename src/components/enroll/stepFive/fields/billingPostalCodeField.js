import React from "react"
import { Field, ErrorMessage } from "formik"
import MaskedInput from "react-text-mask"

const validate = values => {
  console.log(values)
  let val = values.replace(/[^0-9]/g, "")

  if (!val) {
    return "Required"
  }

  if (val.length < 5) {
    return "Must be 5 chars"
  }
}

const BillingPostalCode = ({ props }) => {
  const { handleChange, errors, touched, setFieldError } = props
  return (
    <div className="fields-col">
      <label htmlFor="billingPostalCode">Zip</label>
      <Field name="billingPostalCode" validate={validate}>
        {({ field }) => (
          <MaskedInput
            {...field}
            className={`field ${
              errors.billingPostalCode && touched.billingPostalCode
                ? "has-error"
                : ""
            }`}
            id="billingPostalCode"
            mask={[/[0-9]/, /\d/, /\d/, /\d/, /\d/]}
            placeholder={"Zip"}
            type="text"
            guide={false}
            onChange={e => handleChange(e)}
          />
        )}
      </Field>
    </div>
  )
}
export default BillingPostalCode
