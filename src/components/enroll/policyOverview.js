import React from "react"
import EmailModal from "./emailModal"
import {
  deductiblePriceForId,
  coinsurancePriceForId,
  coveragePriceForId,
} from "./constants"

const formatTotalPrice = n => {
  const priceArr = (n + "").split(".")
  return (
    <span className="price-format">
      ${n && n.toFixed(2)}
      {/* ${priceArr[0]}.<span>{priceArr[1]}</span> */}
    </span>
  )
  // return `${priceArr[0]}<span>$${priceArr[1]}/month</span>`
}

export const PolicyOverview = ({ selectedPlan, activePlan }) => {
  // console.log(selectedPlan, activePlan)
  const [open, setOpen] = React.useState(false)
  // console.log("selectedUpgrades", selectedPlan.selectedUpgrades)
  // console.log("wellnessOptions", selectedPlan.wellnessOptions)
  // console.log("upgradeOptions", selectedPlan.upgradeOptions)

  const allUpgradeOptions = [
    ...selectedPlan.upgradeOptions,
    ...selectedPlan.wellnessOptions,
  ]
  const selectedOptions = allUpgradeOptions.filter(item =>
    selectedPlan.selectedUpgrades.includes(item.stateFilingProductId)
  )
  return (
    <div className="policy-overview-card">
      <EmailModal open={open} setOpen={setOpen} />
      <div className="policy-overview-content">
        <h4>
          Policy overview: <span>{activePlan}</span>
        </h4>
        <ul>
          <li>
            Deductible:{" "}
            <span>
              {deductiblePriceForId[selectedPlan.selectedLimits.deductibleId]}
            </span>
          </li>
          <li>
            Reimbursement:{" "}
            <span>
              {coinsurancePriceForId[selectedPlan.selectedLimits.coinsuranceId]}
            </span>
          </li>
          <li>
            Annual Limit:{" "}
            <span>
              {coveragePriceForId[selectedPlan.selectedLimits.coverageLimitId]}
            </span>
          </li>
          <li>
            Upgrades included:{" "}
            {selectedOptions.map((option, index) => (
              <span key={option.display}>
                {option.display === "BreedingCoverage"
                  ? "Breeding Coverage"
                  : option.display}
                {index < selectedOptions.length - 1 ? ", " : ""}
              </span>
            ))}
          </li>
        </ul>
      </div>
      <div className="policy-overview-prices">
        <ul>
          <li>Monthly total:</li>
          <li>{formatTotalPrice(selectedPlan.total)}</li>
          <li>*Does not include $3/month service fee (if paid monthly)</li>
          {/* <li>
            <button onClick={() => setOpen(true)} type="button">
              Email Quote
            </button>
          </li> */}
        </ul>
      </div>
    </div>
  )
}
