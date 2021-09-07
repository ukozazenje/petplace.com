import React from "react"
import { Field, ErrorMessage } from "formik"
import MaskedInput from "react-text-mask"
import validCard from "card-validator"

const validate = values => {
  if (!values) {
    return "Required"
  }

  if (!validCard.cvv(values).isValid) {
    return "Not valid"
  }
}

const CVC = ({ props }) => {
  const { handleChange, errors, touched, setFieldError } = props
  return (
    <div className="fields-col">
      <label htmlFor="cvc">CVC</label>
      <Field name="cvc" validate={validate}>
        {({ field }) => (
          <MaskedInput
            {...field}
            className={`field ${errors.cvc && touched.cvc ? "has-error" : ""}`}
            id="cvc"
            mask={[/\d/, /\d/, /\d/]}
            placeholder={"CVC"}
            type="text"
            guide={false}
            onChange={e => handleChange(e)}
          />
        )}
      </Field>
    </div>
  )
}
export default CVC
