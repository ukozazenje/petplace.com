import React from "react"
import { getLogo } from "../constants"
const BasicPlan = ({ active, setActivePlan, price, plan }) => {
  const selectedPlans = plan.upgradeOptions.filter(item =>
    plan.selectedUpgrades.includes(item.stateFilingProductId)
  )
  return (
    <div
      onClick={() => setActivePlan("Basic")}
      className={`pricing-plan ${active ? "is-active" : ""}`}
    >
      <div className="plan-header">BASIC</div>
      <div className="plan-price">
        <span className="plan-price-amount">${price && price.toFixed(2)}</span>
        /month
      </div>
      <div className="plan-items">
        <div className="plan-item">
          <span>Deductible:</span> <span>$100</span>
        </div>
        <div className="plan-item">
          <span>Reimbursement:</span> <span>80%</span>
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

export default BasicPlan
