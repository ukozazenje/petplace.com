import React from "react"
import {
  deductiblePriceForId,
  coinsurancePriceForId,
  coveragePriceForId,
  getLogo,
} from "../constants"
const CustomPlan = ({ active, setActivePlan, plan }) => {
  const selectedPlans = plan.upgradeOptions.filter(item =>
    plan.selectedUpgrades.includes(item.stateFilingProductId)
  )
  return (
    <div
      onClick={() => setActivePlan("Custom+")}
      className={`pricing-plan ${active ? "is-active" : ""}`}
    >
      <div className="plan-header">CUSTOM+</div>
      <div className="plan-price">
        <span className="plan-price-amount">
          ${plan && plan.total && plan.total.toFixed(2)}
        </span>
        /month
      </div>
      <div className="plan-items">
        <div className="plan-item">
          <span>Deductible:</span>{" "}
          <span>{deductiblePriceForId[plan.selectedLimits.deductibleId]}</span>
        </div>
        <div className="plan-item">
          <span>Reimbursement:</span>{" "}
          <span>
            {coinsurancePriceForId[plan.selectedLimits.coinsuranceId]}
          </span>
        </div>
        <div className="plan-item">
          <span>Annual Limit:</span>{" "}
          <span>{coveragePriceForId[plan.selectedLimits.coverageLimitId]}</span>
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

export default CustomPlan
