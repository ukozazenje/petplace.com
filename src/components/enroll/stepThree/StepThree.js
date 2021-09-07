import React from "react"
import { Form, Formik, Field } from "formik"
import LogoDefender from "../../../images/LogoDefender.svg"
import LogoDefenderPlus from "../../../images/LogoDefenderPlus.svg"
import LogoDefenderMobile from "../../../images/LogoDefenderMobile.svg"
import LogoDefenderPlusMobile from "../../../images/LogoDefenderPlusMobile.svg"
import Switch from "react-switch"
import PetDogIcon from "../../../images/pet-dog-icon.svg"
import CartIcon from "../../../images/cart.svg"
import InformationIcon from "../../../images/information-icon.svg"
import ExpendIcon from "../../../images/expendIcon.svg"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import useDeviceDetect from "../../utils/useDeviceDetect"
import useWindowSize from "../../utils/useWindowSize"
import UseScrollToTop from "../useScrollToTop"
import SelectedPlan from "../selectedPlan"
import { BASIC_PLAN, CUSTOM_PLAN, ULTIMATE_PLAN } from "../constants"
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from "@material-ui/core"
import {
  calculateSumOfMonthlyInstallment,
  roundToTwoDecimals,
} from "../helpers"
import { Tooltip } from "@material-ui/core"
import Table006 from "./Table006"
import Table007 from "./Table007"

const formatTotalPrice = n => {
  const priceArr = (n + "").split(".")
  return (
    <span>
      {n && n.toFixed(2)}
      <span>/month</span>
      {/* ${priceArr[0]}.<span>{priceArr[1]}/month</span> */}
    </span>
  )
  // return `${priceArr[0]}<span>$${priceArr[1]}/month</span>`
}

export const StepThree = ({
  handleNext,
  formState,
  setFormState,
  setQuoteData,
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
  setVersionNo,
  versionNo,
}) => {
  UseScrollToTop()
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
            ) +
            calculateSumOfMonthlyInstallment(
              prevState.wellnessOptions.filter(option =>
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
            ) +
            calculateSumOfMonthlyInstallment(
              prevState.wellnessOptions.filter(option =>
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
            ) +
            calculateSumOfMonthlyInstallment(
              prevState.wellnessOptions.filter(option =>
                prevState.selectedUpgrades.includes(option.stateFilingProductId)
              )
            )
        ),
      }
    })
  }, [ultimatePlanState.selectedUpgrades])

  const handleWellnessOptions = (selectedPlan, id) => {
    switch (selectedPlan) {
      case CUSTOM_PLAN:
        setCustomPlanState(prevState => {
          const copyOfUpgrades = prevState.selectedUpgrades.includes(id)
            ? prevState.selectedUpgrades.filter(upgradeId => upgradeId !== id)
            : [...prevState.selectedUpgrades, id]

          return {
            ...prevState,
            selectedUpgrades: copyOfUpgrades,
          }
        })
        break
      case BASIC_PLAN:
        setBasicPlanState(prevState => {
          const copyOfUpgrades = prevState.selectedUpgrades.includes(id)
            ? prevState.selectedUpgrades.filter(upgradeId => upgradeId !== id)
            : [...prevState.selectedUpgrades, id]

          return {
            ...prevState,
            selectedUpgrades: copyOfUpgrades,
          }
        })
        break
      case ULTIMATE_PLAN:
        setUltimatePlanState(prevState => {
          const copyOfUpgrades = prevState.selectedUpgrades.includes(id)
            ? prevState.selectedUpgrades.filter(upgradeId => upgradeId !== id)
            : [...prevState.selectedUpgrades, id]

          return {
            ...prevState,
            selectedUpgrades: copyOfUpgrades,
          }
        })
      default:
        break
    }
  }
  const handleChange = (nextChecked, fieldName, stateFilingProductId) => {
    if (fieldName === "Defender" && defenderPlusSwitcherState) {
      setDefenderPlusSwitcherState(false)
      setDefenderSwitcherState(true)
      handleWellnessOptions(activePlan, defenderData.stateFilingProductId)
      handleWellnessOptions(activePlan, defenderPlusData.stateFilingProductId)
    } else if (fieldName === "Defender") {
      setDefenderSwitcherState(nextChecked)
      handleWellnessOptions(activePlan, defenderData.stateFilingProductId)
    }

    if (fieldName === "DefenderPlus" && defenderSwitcherState) {
      setDefenderPlusSwitcherState(true)
      setDefenderSwitcherState(false)
      handleWellnessOptions(activePlan, defenderData.stateFilingProductId)
      handleWellnessOptions(activePlan, defenderPlusData.stateFilingProductId)
    } else if (fieldName === "DefenderPlus") {
      setDefenderPlusSwitcherState(nextChecked)
      handleWellnessOptions(activePlan, defenderPlusData.stateFilingProductId)
    }

    // setDefenderSwitcherState(nextChecked)
  }
  const { isMobile } = useDeviceDetect()
  const { width } = useWindowSize()

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

  const getDefenderData = (data, wellnessType) => {
    if (wellnessType === "Defender") {
      const defenderData = data.wellnessOptions.filter(
        option => option.display === "Defender"
      )
      return defenderData[0]
    } else {
      const defenderPlusData = data.wellnessOptions.filter(
        option => option.display === "DefenderPlus"
      )
      return defenderPlusData[0]
    }
  }
  const selectedQuotePlan = getActivePlanData(activePlan)
  // console.log(selectedQuotePlan.total)
  const defenderData = getDefenderData(selectedQuotePlan, "Defender")
  const defenderPlusData = getDefenderData(selectedQuotePlan, "DefenderPlus")

  const [expanded, setExpend] = React.useState(true)
  const [defenderSwitcherState, setDefenderSwitcherState] = React.useState(
    selectedQuotePlan.selectedUpgrades.includes(
      defenderData.stateFilingProductId
    )
  )
  const [
    defenderPlusSwitcherState,
    setDefenderPlusSwitcherState,
  ] = React.useState(
    selectedQuotePlan.selectedUpgrades.includes(
      defenderPlusData.stateFilingProductId
    )
  )
  return (
    <section className="quote-form-steps-section step-two">
      <h2>Step 2: Choose Optional Routine Care Coverage</h2>
      <p>
        This coverage provides reimbursement for the routine medical care you
        already provide for your pet. Our Routine Care Coverage includes
        reimbursement for preventive visits, vaccines, routine blood work,
        neutering, and dental care. Check the full list below to see everything
        that is covered.
      </p>
      <Formik
        initialValues={{}}
        // validate={validate}
        onSubmit={(values, actions) => {
          handleNext(4)
        }}
      >
        {props => (
          <Form>
            <SelectedPlan
              petName={formState.petName}
              speciesId={formState.speciesId}
              planName={activePlan}
              total={getActivePlanData(activePlan).total}
            />
            <div className="coverage-prices-wrapper defenders-plan-prices-table-section">
              <ExpansionPanel
                expanded={expanded}
                onChange={() => setExpend(!expanded)}
                className="coverage-expansion-panel"
                elevation={0}
              >
                <ExpansionPanelSummary
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  className="coverage-expansion-panel-summary"
                >
                  <h4>
                    Accident and Illness Coverage <ExpandMoreIcon />
                  </h4>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className="coverage-expansion-panel-details">
                  <p>
                    {activePlan}{" "}
                    {formatTotalPrice(getActivePlanData(activePlan).total)}
                  </p>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <div className="table-wrapper">
                <table className="defenders-table">
                  <thead className="defenders-header">
                    <tr>
                      <th>Routine Care Coverage</th>
                      <th>
                        <img
                          src={width > 768 ? LogoDefender : LogoDefenderMobile}
                          alt="defender logo"
                        />
                        <Tooltip title="Provides reimbursement for various routine and preventative care expenses that help keep our pets healthy.">
                          <img
                            src={InformationIcon}
                            alt="information for defender"
                            className="information-defender-icon"
                          />
                        </Tooltip>
                      </th>
                      <th>
                        <img
                          src={
                            width > 768
                              ? LogoDefenderPlus
                              : LogoDefenderPlusMobile
                          }
                          alt="defender plus logo"
                        />
                        <Tooltip title="Provides reimbursement for various routine and preventative care expenses that help keep our pets healthy, including dental cleanings or spay/neuter.">
                          <img
                            src={InformationIcon}
                            alt="information for defender+"
                            className="information-defender-icon"
                          />
                        </Tooltip>
                      </th>
                    </tr>
                  </thead>
                  <thead className="defenders-controls">
                    <tr>
                      <th>Cost</th>
                      <th>
                        ${defenderData.monthlyInstallment.toFixed(2)}
                        /month
                        <br />
                        <Switch
                          onChange={e =>
                            handleChange(
                              e,
                              "Defender",
                              defenderData.stateFilingProductId
                            )
                          }
                          checked={defenderSwitcherState}
                          className="react-switch"
                          checkedIcon={
                            <div className="switch-icon checked">YES</div>
                          }
                          uncheckedIcon={<div className="switch-icon">NO</div>}
                          onColor="#FF7D5A"
                          height={26}
                          width={70}
                          handleDiameter={18}
                        />
                      </th>
                      <th>
                        ${defenderPlusData.monthlyInstallment.toFixed(2)}
                        /month
                        <br />
                        <Switch
                          onChange={e =>
                            handleChange(
                              e,
                              "DefenderPlus",
                              defenderPlusData.stateFilingProductId
                            )
                          }
                          checked={defenderPlusSwitcherState}
                          className="react-switch"
                          checkedIcon={
                            <div className="switch-icon checked">YES</div>
                          }
                          uncheckedIcon={<div className="switch-icon">NO</div>}
                          onColor="#FF7D5A"
                          height={26}
                          width={70}
                          handleDiameter={18}
                        />
                      </th>
                    </tr>
                  </thead>
                  {versionNo === "006" && <Table006 />}
                  {versionNo === "007" && <Table007 />}
                  {/* <tbody>
                    <tr className="defenders-titles">
                      <td>Preventive Benefits</td>
                      {width > 768 ? (
                        <>
                          <td>Annual Reimbursement</td>
                          <td>Annual Reimbursement</td>
                        </>
                      ) : (
                        <td colSpan="2">Annual Reimbursement</td>
                      )}
                    </tr>
                    <tr>
                      <td>Spay/Neuter - Teeth Cleaning</td>
                      <td>$0</td>
                      <td>$150</td>
                    </tr>
                    <tr>
                      <td>Rabies</td>
                      <td>$15</td>
                      <td>$15</td>
                    </tr>
                    <tr>
                      <td>Flea/Tick/Heartworm Prevention</td>
                      <td>$80</td>
                      <td>$95</td>
                    </tr>
                    <tr>
                      <td>Vaccination/Titer</td>
                      <td>$30</td>
                      <td>$40</td>
                    </tr>
                    <tr>
                      <td>Wellness Exam</td>
                      <td>$50</td>
                      <td>$50</td>
                    </tr>
                    <tr>
                      <td>Heartworm test or FELV screen</td>
                      <td>$25</td>
                      <td>$30</td>
                    </tr>
                    <tr>
                      <td>Blood, fecal, parasite exam</td>
                      <td>$50</td>
                      <td>$70</td>
                    </tr>
                    <tr>
                      <td>Urinalysis or ERD</td>
                      <td>$15</td>
                      <td>$25</td>
                    </tr>
                    <tr>
                      <td>Deworming</td>
                      <td>$20</td>
                      <td>$20</td>
                    </tr>
                  </tbody> */}
                  <tfoot className="defenders-total">
                    <tr>
                      <td>Total</td>
                      <td>$305</td>
                      <td>$535</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="quote-buttons-wrapper">
              <button
                onClick={() => handleNext(2)}
                className="back-button"
                type="button"
              >
                Back
              </button>
              <button className="submit-button" type="submit">
                Continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  )
}

// export default StepThree
