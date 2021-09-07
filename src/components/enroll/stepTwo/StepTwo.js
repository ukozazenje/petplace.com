import React, { useState, useEffect } from "react"
import { BASIC_PLAN, CUSTOM_PLAN, ULTIMATE_PLAN } from "../constants"
import SelectedPlan from "../selectedPlan"
import BasicPricingPlan from "../plans/basicPlan"
import BasicSlider from "../sliders/basicSlider"
import UltimatePricingPlan from "../plans/ultimatePlan"
import UltimateSlider from "../sliders/ultimateSlider"
import CustomPricingPlan from "../plans/customPlan"
import CustomSlider from "../sliders/customSlider"
import AccidentCare from "./what-we-offer/AccidentCare"
import CompanionCare from "./what-we-offer/CompanionCare"
import {
  calculateSumOfMonthlyInstallment,
  roundToTwoDecimals,
} from "../helpers"
import { UpgradeOptions } from "../upgradeOptions"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from "@material-ui/core"
export const StepTwo = ({
  handleNext,
  formState,
  setFormState,
  setQuoteData,
  quoteData,
  setBasicPlanState,
  basicPlanState,
  setUltimatePlanState,
  ultimatePlanState,
  setCustomPlanState,
  customPlanState,
  setAllProducts,
  allProducts,
  activePlan,
  setActivePlan,
  accidentCare,
}) => {
  useEffect(() => {
    accidentCare && setActivePlan(ULTIMATE_PLAN)
    setBasicPlanState(prevState => {
      return {
        ...prevState,
        total: roundToTwoDecimals(
          prevState.baseProduct.monthlyInstallment +
            calculateSumOfMonthlyInstallment(prevState.preselectedOptions) +
            calculateSumOfMonthlyInstallment(
              prevState.upgradeOptions.filter(option =>
                prevState.selectedUpgrades.includes(option.stateFilingProductId)
              )
            )
        ),
      }
    })

    setUltimatePlanState(prevState => {
      return {
        ...prevState,
        total: roundToTwoDecimals(
          prevState.baseProduct.monthlyInstallment +
            calculateSumOfMonthlyInstallment(prevState.preselectedOptions) +
            calculateSumOfMonthlyInstallment(
              prevState.upgradeOptions.filter(option =>
                prevState.selectedUpgrades.includes(option.stateFilingProductId)
              )
            )
        ),
      }
    })

    setCustomPlanState(prevState => {
      return {
        ...prevState,
        total: roundToTwoDecimals(
          prevState.baseProduct.monthlyInstallment +
            calculateSumOfMonthlyInstallment(prevState.preselectedOptions) +
            calculateSumOfMonthlyInstallment(
              prevState.upgradeOptions.filter(option =>
                prevState.selectedUpgrades.includes(option.stateFilingProductId)
              )
            )
        ),
      }
    })
  }, [])

  // Update Total price of Custom Plan on selected upgrade change
  React.useEffect(() => {
    setCustomPlanState(prevState => {
      return {
        ...prevState,
        total: roundToTwoDecimals(
          prevState.baseProduct.monthlyInstallment +
            calculateSumOfMonthlyInstallment(prevState.preselectedOptions) +
            calculateSumOfMonthlyInstallment(
              prevState.upgradeOptions.filter(option =>
                prevState.selectedUpgrades.includes(option.stateFilingProductId)
              )
            )
        ),
      }
    })
  }, [customPlanState.selectedUpgrades])

  // Update Total price of Basic Plan on selected upgrade change
  React.useEffect(() => {
    setBasicPlanState(prevState => {
      return {
        ...prevState,
        total: roundToTwoDecimals(
          prevState.baseProduct.monthlyInstallment +
            calculateSumOfMonthlyInstallment(prevState.preselectedOptions) +
            calculateSumOfMonthlyInstallment(
              prevState.upgradeOptions.filter(option =>
                prevState.selectedUpgrades.includes(option.stateFilingProductId)
              )
            )
        ),
      }
    })
  }, [basicPlanState.selectedUpgrades])

  // Update Total price of Unlimited Plan on selected upgrade change
  React.useEffect(() => {
    setUltimatePlanState(prevState => {
      return {
        ...prevState,
        total: roundToTwoDecimals(
          prevState.baseProduct.monthlyInstallment +
            calculateSumOfMonthlyInstallment(prevState.preselectedOptions) +
            calculateSumOfMonthlyInstallment(
              prevState.upgradeOptions.filter(option =>
                prevState.selectedUpgrades.includes(option.stateFilingProductId)
              )
            )
        ),
      }
    })
  }, [ultimatePlanState.selectedUpgrades])

  // const [activePlan, setActivePlan] = React.useState(CUSTOM_PLAN)
  const [expanded, setExpend] = React.useState(false)
  return (
    <section className="quote-form-steps-section step-two">
      <h2>Step 1: Choose Your Accident and Illness Coverage</h2>
      {accidentCare ? (
        <p>
          AccidentCare offers coverage for accidents and injuries and has set
          limits that have been preselected for you.
        </p>
      ) : (
        <>
          <p>
            Please select 1 of the 3 packages and customize as you see fit using
            our tool below.
          </p>
          <p>
            Our Accident and Illness plan provides coverage for veterinary
            expenses related to the diagnosis and treatment of accidents,
            injuries, and illnesses. The following services are included with
            coverage, regardless of which plan you choose:
          </p>
        </>
      )}
      <ExpansionPanel
        expanded={expanded}
        onChange={() => setExpend(!expanded)}
        className="what-we-cover-panel"
        elevation={0}
      >
        <ExpansionPanelSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="what-we-cover-panel-summary"
        >
          <p className="what-we-cover-heading">
            What we cover <ExpandMoreIcon htmlColor="#ff0000" />
          </p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="what-we-cover-panel-details">
          {basicPlanState.baseProduct.display === "AccidentCare" ? (
            <AccidentCare />
          ) : (
            <CompanionCare />
          )}
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {activePlan === BASIC_PLAN && (
        <SelectedPlan
          petName={formState.petName}
          speciesId={formState.speciesId}
          planName={BASIC_PLAN}
          total={basicPlanState.total}
        />
      )}

      {activePlan === CUSTOM_PLAN && (
        <SelectedPlan
          petName={formState.petName}
          speciesId={formState.speciesId}
          planName={CUSTOM_PLAN}
          total={customPlanState.total}
        />
      )}

      {activePlan === ULTIMATE_PLAN && (
        <SelectedPlan
          petName={formState.petName}
          speciesId={formState.speciesId}
          planName={ULTIMATE_PLAN}
          total={ultimatePlanState.total}
        />
      )}

      <div className="coverage-prices-wrapper">
        {accidentCare ? (
          <div className="pricing-table">
            <UltimatePricingPlan
              active={ULTIMATE_PLAN === activePlan ? true : false}
              setActivePlan={setActivePlan}
              price={ultimatePlanState.total}
              plan={ultimatePlanState}
              accidentCare={accidentCare}
            />
          </div>
        ) : (
          <>
            {CUSTOM_PLAN === activePlan ? (
              <p className="use-scale">
                Use the scale below to customize your plan options
              </p>
            ) : null}
            <div className="pricing-table">
              <BasicPricingPlan
                active={BASIC_PLAN === activePlan ? true : false}
                setActivePlan={setActivePlan}
                price={basicPlanState.total}
                plan={basicPlanState}
              />
              <CustomPricingPlan
                active={CUSTOM_PLAN === activePlan ? true : false}
                setActivePlan={setActivePlan}
                plan={customPlanState}
              />
              <UltimatePricingPlan
                active={ULTIMATE_PLAN === activePlan ? true : false}
                setActivePlan={setActivePlan}
                price={ultimatePlanState.total}
                plan={ultimatePlanState}
              />
            </div>
          </>
        )}
        {BASIC_PLAN === activePlan && !accidentCare && <BasicSlider />}
        {CUSTOM_PLAN === activePlan && !accidentCare && (
          <CustomSlider
            setCustomPlanState={setCustomPlanState}
            customPlanState={customPlanState}
          />
        )}
        {ULTIMATE_PLAN === activePlan && !accidentCare && <UltimateSlider />}
        <div className="additional-coverage-section">
          {accidentCare ? (
            <h3>Additional Coverage Options for Accident Coverage:</h3>
          ) : (
            <h3>
              Additional Coverage Options for Accident and Illness Coverage:
            </h3>
          )}
          {BASIC_PLAN === activePlan &&
            basicPlanState.upgradeOptions.map((option, index) => (
              <UpgradeOptions
                key={index}
                selectedUpgrades={basicPlanState.selectedUpgrades}
                setSelectedUpgrade={setBasicPlanState}
                option={option}
              />
            ))}
          {CUSTOM_PLAN === activePlan &&
            customPlanState.upgradeOptions.map((option, index) => (
              <UpgradeOptions
                key={index}
                selectedUpgrades={customPlanState.selectedUpgrades}
                setSelectedUpgrade={setCustomPlanState}
                option={option}
              />
            ))}
          {ULTIMATE_PLAN === activePlan &&
            ultimatePlanState.upgradeOptions.map((option, index) => (
              <UpgradeOptions
                key={index}
                selectedUpgrades={ultimatePlanState.selectedUpgrades}
                setSelectedUpgrade={setUltimatePlanState}
                option={option}
              />
            ))}
        </div>
      </div>
      <div className="quote-buttons-wrapper">
        <button
          onClick={() => handleNext(1)}
          className="back-button"
          type="button"
        >
          Back
        </button>
        <button
          onClick={() => handleNext(3)}
          className="submit-button"
          type="button"
        >
          Continue
        </button>
      </div>
    </section>
  )
}
