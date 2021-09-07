import React from "react"
import PetDogIcon from "../../images/pet-dog-icon.svg"
import PetCatIcon from "../../images/pet-cat-icon.svg"
import CartIcon from "../../images/cart.svg"
const formatTotalPrice = n => {
  const priceArr = (n + "").split(".")
  return (
    <span className="active-plan-price">
      {n && n.toFixed(2)}
      <span>/month</span>
      {/* ${priceArr[0]}.<span>{priceArr[1]}/month</span> */}
    </span>
  )
  // return `${priceArr[0]}<span>$${priceArr[1]}/month</span>`
}
const SelectedPlan = ({ petName, speciesId, planName, total }) => {
  return (
    <div className="price-calculator-wrapper">
      <div className="price-calculator-col">
        <img src={speciesId == 1 ? PetDogIcon : PetCatIcon} alt="pet icon" />{" "}
        <span className="price-calculator-pet-name">
          {petName ? petName : "[Pet]"}
        </span>
      </div>
      <div className="price-calculator-col">
        <img src={CartIcon} alt="cart icon" />{" "}
        <span className="active-plan">{planName}</span>{" "}
        {formatTotalPrice(total)}
        {/* <span className="active-plan-price">
          $11.<span>11/month</span>
        </span> */}
        {/* <span className="active-plan-price">${formatTotalPrice(total)}</span> */}
      </div>
    </div>
  )
}

export default SelectedPlan
