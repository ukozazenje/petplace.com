import React from "react"
import { Field, ErrorMessage } from "formik"
import MaskedInput from "react-text-mask"
import validCard from "card-validator"

const validate = values => {
  if (!values) {
    return "Required"
  }

  if (!validCard.expirationYear(values).isValid) {
    return "Not valid"
  }
}

const ExpiresYear = ({ props }) => {
  const { handleChange, errors, touched, setFieldError } = props
  return (
    <div className="fields-col">
      <label htmlFor="expires_year">Expires Year</label>
      <Field name="expires_year" validate={validate}>
        {({ field }) => (
          <MaskedInput
            {...field}
            className={`field ${
              errors.expires_year && touched.expires_year ? "has-error" : ""
            }`}
            id="expires_year"
            mask={[/\d/, /\d/, /\d/, /\d/]}
            placeholder={"YYYY"}
            type="text"
            guide={false}
            onChange={e => handleChange(e)}
          />
        )}
      </Field>
    </div>
  )
}
export default ExpiresYear
