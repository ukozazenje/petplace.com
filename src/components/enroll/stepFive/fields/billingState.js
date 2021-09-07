import React from "react"
import Select from "react-select"
import { states } from "../../states"

const BillingState = ({ props }) => {
  console.log(props.values.billingState)
  return (
    <div className="fields-col">
      <label htmlFor="state">State</label>
      <Select
        className={`basic-single searchable-select field ${
          props.errors.billingState && props.touched.billingState
            ? "has-error"
            : ""
        }`}
        classNamePrefix="select"
        defaultValue={
          props.values && props.values.billingState
            ? {
                label: props.values.billingState,
                value: props.values.billingStateName,
              }
            : undefined
        }
        isClearable={true}
        isSearchable={true}
        name="billingState"
        onChange={option => {
          props.setFieldValue("billingState", option ? option.value : "")
          props.setFieldValue("billingState", option ? option.label : "")
        }}
        options={states}
      />
    </div>
  )
}

export default BillingState
