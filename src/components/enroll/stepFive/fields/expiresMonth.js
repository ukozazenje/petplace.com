import React from "react"
import { Field, ErrorMessage } from "formik"
import MaskedInput from "react-text-mask"
import validCard from "card-validator"

const validate = values => {
  if (!values) {
    return "Required"
  }

  if (!validCard.expirationMonth(values).isValid) {
    return "Not valid"
  }
}

const ExpiresMonth = ({ props }) => {
  const { handleChange, errors, touched, setFieldError } = props
  return (
    <div className="fields-col">
      <label htmlFor="expires_month">Expires Month</label>
      <Field name="expires_month" validate={validate}>
        {({ field }) => (
          <MaskedInput
            {...field}
            className={`field ${
              errors.expires_month && touched.expires_month ? "has-error" : ""
            }`}
            id="expires_month"
            mask={[/\d/, /\d/]}
            placeholder={"MM"}
            type="text"
            guide={false}
            onChange={e => handleChange(e)}
          />
        )}
      </Field>
    </div>
  )
}
export default ExpiresMonth
