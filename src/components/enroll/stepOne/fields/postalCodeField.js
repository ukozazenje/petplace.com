import React from "react"
import { Field, ErrorMessage } from "formik"
import MaskedInput from "react-text-mask"

const validate = values => {
  let val = values.replace(/[^0-9]/g, "")

  if (!val) {
    return "Required"
  }

  if (val.length < 5) {
    return "Must be 5 chars"
  }
}

const PostalCode = ({ props }) => {
  const { handleChange, errors, touched, setFieldError } = props
  return (
    <>
      <Field name="postalCode" validate={validate}>
        {({ field }) => (
          <MaskedInput
            {...field}
            className={`field ${
              errors.postalCode && touched.postalCode ? "has-error" : ""
            }`}
            id="postalCode"
            mask={[/[0-9]/, /\d/, /\d/, /\d/, /\d/]}
            placeholder={"Zip Code"}
            type="text"
            guide={false}
            onChange={e => handleChange(e)}
          />
        )}
      </Field>

      {/* <ErrorMessage
        data-testid="postalCode"
        name="postalCode"
        component="div"
        className="field-error"
      /> */}
    </>
  )
}
export default PostalCode
