import React from "react"
import { Field, ErrorMessage } from "formik"
import MaskedInput from "react-text-mask"

const phoneNumberMask = [
  "(",
  /\d/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
]

const validate = values => {
  if (!values) {
    return "Required"
  } else if (values.replace(/[^0-9]/g, "")[0] === "0") {
    return "Number can not start with 0"
  } else if (values.replace(/[^0-9]/g, "")[0] === "1") {
    return "Number can not start with 1"
  } else if (values.replace(/[^0-9]/g, "").length < 10) {
    return "Number must be 10 chars long"
  } else if (values.replace(/[^0-9]/g, "").substring(6, 10) === "0000") {
    return "Not valid phone number"
  }
}

const Phone = ({ props }) => {
  const { handleChange, errors, touched, setFieldError } = props
  return (
    <div className="fields-col phone_number-col">
      <label htmlFor="phone">Phone Number</label>
      <Field validate={validate} name="phone">
        {({ field }) => (
          <MaskedInput
            {...field}
            mask={phoneNumberMask}
            guide={false}
            placeholder="Enter your phone number"
            type="text"
            className={`field ${
              errors.phone && touched.phone ? "has-error" : ""
            }`}
            onChange={e => {
              handleChange(e)
            }}
          />
        )}
      </Field>
    </div>
  )
}

export default Phone
