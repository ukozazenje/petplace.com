import React from "react"
import Slider, { Range } from "rc-slider"
import axios from "axios"
import { roundToTwoDecimals } from "../helpers"
import {
  productsWithPrices,
  calculateSumOfMonthlyInstallment,
  setExamPlus,
} from "../helpers"

import {
  coinsuranceId,
  coinsuranceMarks,
  coverageLimitId,
  coverageMarks,
  deductibleId,
  deductibleMarks,
  deductiblePriceForId,
  coinsurancePriceForId,
  coveragePriceForId,
} from "../constants"

const CustomSlider = ({ setCustomPlanState, customPlanState }) => {
  // const[selectedIds, seSelectedIds] = React.useState(customPlanState.)
  // console.log(customPlanState.sliderState)
  // console.log(customPlanState.selectedLimits)
  React.useEffect(() => {
    // console.log("UpdateLimits")
    updateCustomPlan()
  }, [customPlanState.selectedLimits])
  const updateCustomPlan = () => {
    axios
      .get(
        `${process.env.GATSBY_PP_API}/quote/v1/quote-pet/${customPlanState.currentPetId}/products`
      )
      .then(res => {
        const upgradeOptions = res.data.upgradeOptions.filter(
          option =>
            option.parentStateFilingProductId ===
            res.data.baseProducts[0]["stateFilingProductId"]
        )
        const wellnessOptions = res.data.wellnessOptions.filter(
          option =>
            option.parentStateFilingProductId ===
            res.data.baseProducts[0]["stateFilingProductId"]
        )
        const baseProduct = res.data.baseProducts[0]
        const preselectedOptions =
          res.data.preselectedOptions.length > 0
            ? res.data.preselectedOptions.filter(
                option =>
                  option.parentStateFilingProductId ===
                  res.data.baseProducts[0]["stateFilingProductId"]
              )
            : []

        axios
          .post(
            `${process.env.GATSBY_PP_API}/quote/v1/preview/${customPlanState.currentPetId}`,
            [customPlanState.selectedLimits]
          )
          .then(res => {
            setCustomPlanState(prevState => {
              return {
                ...prevState,
                upgradeOptions: setExamPlus(
                  productsWithPrices(
                    upgradeOptions,
                    res.data[0].monthlyPreviewResults
                  )
                ),
                wellnessOptions: productsWithPrices(
                  wellnessOptions,
                  res.data[0].monthlyPreviewResults
                ),
                baseProduct: {
                  ...baseProduct,
                  monthlyInstallment: res.data[0].monthlyPreviewResults.filter(
                    item =>
                      item.stateFilingProductId ===
                      baseProduct.stateFilingProductId
                  )[0].monthlyInstallment,
                },
                preselectedOptions:
                  preselectedOptions.length > 0
                    ? productsWithPrices(
                        preselectedOptions,
                        res.data[0].monthlyPreviewResults
                      )
                    : [],
              }
            })
          })
          .then(() => {
            setCustomPlanState(prevState => {
              // console.log(prevState.baseProduct.monthlyInstallment)
              // console.log(
              //   calculateSumOfMonthlyInstallment(prevState.preselectedOptions)
              // )
              // console.log(
              //   calculateSumOfMonthlyInstallment(prevState.selectedUpgrades)
              // )
              return {
                ...prevState,
                total: roundToTwoDecimals(
                  prevState.baseProduct.monthlyInstallment +
                    calculateSumOfMonthlyInstallment(
                      prevState.preselectedOptions
                    ) +
                    calculateSumOfMonthlyInstallment(
                      prevState.upgradeOptions.filter(option =>
                        prevState.selectedUpgrades.includes(
                          option.stateFilingProductId
                        )
                      )
                    )
                ),
              }
            })
          })
          .catch(err => console.log(err))
      })
  }

  const handleChange = (limit, e) => {
    if (limit === "deductible") {
      setCustomPlanState(prevState => {
        return {
          ...prevState,
          selectedLimits: {
            ...prevState.selectedLimits,
            deductibleId: deductibleId[e],
          },
          sliderState: {
            ...prevState.sliderState,
            deductibleStep: e,
          },
        }
      })
      // setTimeout(updateCustomPlan(), 500)
      // updateCustomPlan()
    }

    if (limit === "coinsurance") {
      setCustomPlanState(prevState => {
        return {
          ...prevState,
          selectedLimits: {
            ...prevState.selectedLimits,
            coinsuranceId: coinsuranceId[e],
          },
          sliderState: {
            ...prevState.sliderState,
            coinsuranceStep: e,
          },
        }
      })
      // updateCustomPlan()
    }

    if (limit === "coverage") {
      // console.log(e)
      setCustomPlanState(prevState => {
        return {
          ...prevState,
          selectedLimits: {
            ...prevState.selectedLimits,
            coverageLimitId: coverageLimitId[e],
          },
          sliderState: {
            ...prevState.sliderState,
            coverageStep: e,
          },
        }
      })
      // updateCustomPlan()
    }
  }
  return (
    <div className="slider-steps-row">
      <div className="slider-steps-col custom-slider">
        <p>Deductible:</p>
        <p className="slider-price-mobile">
          {deductiblePriceForId[customPlanState.selectedLimits.deductibleId]}
        </p>
        <Slider
          min={1}
          max={5}
          marks={deductibleMarks}
          step={null}
          onChange={e => handleChange("deductible", e)}
          defaultValue={customPlanState.sliderState.deductibleStep}
          handleStyle={[
            {
              background: "#6F69A8",
              border: "5px solid white",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.15)",
              height: "30px",
              width: "30px",
              marginTop: "-14px",
              // marginLeft: "11px",
            },
          ]}
          railStyle={{ backgroundColor: "#D9D9D9", height: "6px" }}
          trackStyle={[{ backgroundColor: "#D9D9D9", height: "6px" }]}
          dotStyle={{
            background: "#FFFFFF",
            border: "5px solid white",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.15)",
            height: "30px",
            width: "30px",
            bottom: "-12px",
            marginLeft: "-15px",
          }}
        />
      </div>
      {/* Reimbursement slider */}
      <div className="slider-steps-col custom-slider">
        <p>Reimbursement:</p>
        <p className="slider-price-mobile">
          {coinsurancePriceForId[customPlanState.selectedLimits.coinsuranceId]}
        </p>
        <Slider
          min={10}
          max={30}
          reverse={true}
          marks={coinsuranceMarks}
          step={null}
          onChange={e => handleChange("coinsurance", e)}
          defaultValue={customPlanState.sliderState.coinsuranceStep}
          handleStyle={[
            {
              background: "#6F69A8",
              border: "5px solid white",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.15)",
              height: "30px",
              width: "30px",
              marginTop: "-14px",
              // marginRight: "11px",
            },
          ]}
          railStyle={{ backgroundColor: "#D9D9D9", height: "6px" }}
          trackStyle={[{ backgroundColor: "#D9D9D9", height: "6px" }]}
          dotStyle={{
            background: "#FFFFFF",
            border: "5px solid white",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.15)",
            height: "30px",
            width: "30px",
            bottom: "-12px",
            marginRight: "-15px",
          }}
        />
      </div>
      {/* Annual slider */}
      <div className="slider-steps-col custom-slider">
        <p>Annual Limit:</p>
        <p className="slider-price-mobile">
          {coveragePriceForId[customPlanState.selectedLimits.coverageLimitId]}
        </p>
        <Slider
          dots={false}
          min={2500}
          max={17500}
          marks={coverageMarks}
          step={null}
          onChange={e => handleChange("coverage", e)}
          defaultValue={customPlanState.sliderState.coverageStep}
          handleStyle={[
            {
              background: "#6F69A8",
              border: "5px solid white",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.15)",
              height: "30px",
              width: "30px",
              marginTop: "-14px",
              // marginLeft: "11px",
            },
          ]}
          railStyle={{ backgroundColor: "#D9D9D9", height: "6px" }}
          trackStyle={[{ backgroundColor: "#D9D9D9", height: "6px" }]}
          dotStyle={{
            background: "#FFFFFF",
            border: "5px solid white",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.15)",
            height: "30px",
            width: "30px",
            bottom: "-12px",
            marginLeft: "-15px",
          }}
        />
      </div>
    </div>
  )
}

export default CustomSlider
