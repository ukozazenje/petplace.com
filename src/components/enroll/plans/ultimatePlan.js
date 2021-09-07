import React from "react"
import { getLogo } from "../constants"

const UltimatePlan = ({
  active,
  setActivePlan,
  price,
  plan,
  accidentCare,
  // title,
  // basicPrice,
  // customPrice,
  // unlimitedPrice,
  // deductibleBasicPrice,
  // reimbursementBasicPrice,
  // annualLimitBasicPrice,
  // deductibleUnlimitedPrice,
  // reimbursementUnlimitedPrice,
  // annualLimitUnlimitedPrice,
  // customPlanPrices,
}) => {
  const selectedPlans = plan.upgradeOptions.filter(item =>
    plan.selectedUpgrades.includes(item.stateFilingProductId)
  )
  return (
    <div
      onClick={() => setActivePlan("Ultimate")}
      className={`pricing-plan ${active ? "is-active" : ""}`}
    >
      <div className="plan-header">ULTIMATE</div>
      <div className="plan-price">
        <span className="plan-price-amount">${price && price.toFixed(2)}</span>
        /month
      </div>
      <div
        className={`plan-items ${
          accidentCare ? "accident-care-plan-items" : ""
        }`}
      >
        <div className="plan-item">
          <span>Deductible:</span>{" "}
          <span>{accidentCare ? "$100" : "$1,000"}</span>
        </div>
        <div className="plan-item">
          <span>Reimbursement:</span> <span>90%</span>
        </div>
        <div className="plan-item">
          <span>Annual Limit:</span> <span>Unlimited</span>
        </div>
      </div>
      {active && selectedPlans.length > 0 && (
        <div className="plan-footer">
          <p>Upgrades added:</p>
          <div className="logos-wrapper">
            {selectedPlans && selectedPlans.map(item => getLogo(item.display))}
          </div>
        </div>
      )}
    </div>
  )
}

export default UltimatePlan
