import React from "react"
import { Field, ErrorMessage } from "formik"
import MaskedInput from "react-text-mask"
import validCard from "card-validator"

const validate = values => {
  // console.log(values)
  // console.log("Valid card", validCard.number(values).isValid)
  // let val = values.replace(/[^0-9]/g, "")

  if (!values) {
    return "Required"
  }

  if (!validCard.number(values).isValid) {
    return "Card number not valid"
  }
}

const CreditCardField = ({ props }) => {
  const { handleChange, errors, touched, setFieldError } = props
  return (
    <div className="fields-col">
      <label htmlFor="card_number">Card Number</label>
      <Field name="card_number" validate={validate}>
        {({ field }) => (
          <MaskedInput
            {...field}
            className={`field ${
              errors.card_number && touched.card_number ? "has-error" : ""
            }`}
            id="card_number"
            mask={[
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              " ",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              " ",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              " ",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
            placeholder={"****  ****  ****  ****"}
            type="text"
            guide={false}
            onChange={e => handleChange(e)}
          />
        )}
      </Field>
    </div>
  )
}
export default CreditCardField
