import React from "react"

const FilterCheckBox = ({ handleChange, checkBoxName, types }) => {
  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        onChange={e => handleChange(checkBoxName)}
        checked={types.includes(checkBoxName)}
        name={`${checkBoxName}`}
      />
      <span>
        <label htmlFor={`${checkBoxName}`}>{checkBoxName}</label>
      </span>
    </div>
  )
}

export default FilterCheckBox
