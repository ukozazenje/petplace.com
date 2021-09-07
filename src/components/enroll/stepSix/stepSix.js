import React from "react"
import UseScrollToTop from "../useScrollToTop"
import {
  deductiblePriceForId,
  coinsurancePriceForId,
  coveragePriceForId,
  BASIC_PLAN,
  CUSTOM_PLAN,
  ULTIMATE_PLAN,
} from "../constants"
import loginIcon from "../../../images/login-icon.svg"
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

export const StepSix = ({
  checkout,
  activePlan,
  customPlanState,
  basicPlanState,
  ultimatePlanState,
}) => {
  UseScrollToTop()

  const getActivePlanData = activePlanName => {
    switch (activePlanName) {
      case CUSTOM_PLAN:
        return customPlanState
        break
      case BASIC_PLAN:
        return basicPlanState
        break
      case ULTIMATE_PLAN:
        return ultimatePlanState
      default:
        break
    }
  }

  const selectedPlan = getActivePlanData(activePlan)
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
    <section className="quote-form-steps-section thank-you-quote-page">
      <h2>Congratulations on Your Enrollment!</h2>
      <h3 className="thank-you-page-subheading">Welcome to the Family</h3>
      <p>
        Thank you for choosing PetPartners (underwritten by Independence
        American Insurance Company and, in WA, American Pet Insurance Company)
        to be your pet’s health insurance partner. You will soon receive an
        email or packet in the mail with all the necessary information regarding
        your new policy.
      </p>
      <p>
        If you have any questions about your coverage, please do not hesitate to
        contact our Customer Care Team at{" "}
        <a href="tel:18667741113">866-774-1113</a>.
      </p>

      <div className="policy-overview-card">
        <div className="policy-overview-content">
          <h4>
            Policy: <span>{checkout.policyId}</span>
          </h4>
          <ul>
            <li>
              Full Term Coverage:{" "}
              <span>
                {new Date(checkout.effectiveOn).toLocaleDateString("en-US")} -{" "}
                {new Date(checkout.expiresOn).toLocaleDateString("en-US")}
              </span>
            </li>
            <li>
              Deductible:{" "}
              <span>
                {deductiblePriceForId[selectedPlan.selectedLimits.deductibleId]}
              </span>
            </li>
            <li>
              Reimbursement:{" "}
              <span>
                {
                  coinsurancePriceForId[
                    selectedPlan.selectedLimits.coinsuranceId
                  ]
                }
              </span>
            </li>
            <li>
              Annual Limit:{" "}
              <span>
                {
                  coveragePriceForId[
                    selectedPlan.selectedLimits.coverageLimitId
                  ]
                }
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
            <li>
              {formatTotalPrice(
                checkout.coveragePeriods[0].coverageSummaries[0]
                  .totalMonthlyInstallment
              )}
            </li>
            <li>*Does not include $3/month service fee (if paid monthly)</li>
            {/* <li>
              <button onClick={() => setOpen(true)} type="button">
                Email Quote
              </button>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="login-portal-section">
        <h4>Login to Your Customer Portal</h4>
        <p>
          Your Customer Portal gives you easy access to your policy, allowing
          you to view your policy documents, update payment information, submit
          claims, view claim status, and more.{" "}
        </p>
        <a
          href="https://www.petpartners.com/portal/#/"
          className="button submit-button"
          target="_blank"
        >
          <img src={loginIcon} alt="login icon" /> PORTAL LOGIN
        </a>
      </div>
      {/* <pre>{JSON.stringify(checkout, undefined, 3)}</pre> */}
    </section>
  )
}
