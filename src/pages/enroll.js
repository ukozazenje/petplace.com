import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProgressBar from "../components/enroll/progressBar"
import { StepOne } from "../components/enroll/stepOne"
import { StepTwo } from "../components/enroll/stepTwo"
import { StepThree } from "../components/enroll/stepThree"
import { StepFour } from "../components/enroll/stepFour"
import { StepFive } from "../components/enroll/stepFive"
import { StepSix } from "../components/enroll/stepSix"
import { CUSTOM_PLAN } from "../components/enroll/constants"
import "rc-slider/assets/index.css"
const Enroll = () => {
  const [activeStepInfo, setActiveStepInfo] = React.useState({
    step: 1,
    percent: 0,
    title: "1. Pet Info",
  })
  const [quoteData, setQuoteData] = useState(null)
  // const [baseProduct, setBaseProduct] = useState(null)
  // const [upgradeOptions, setUpgradeOptions] = useState(null)
  // const [wellnessOptions, setWellnessOptions] = useState(null)
  const [allProducts, setAllProducts] = useState(null)
  const [accidentCare, setAccidentCare] = useState(false)
  const [basicPlanState, setBasicPlanState] = useState({
    sliderState: {
      deductibleStep: 100,
      coinsuranceStep: 20,
      coverageStep: "Unlimited",
    },
    selectedLimits: {
      coverageLimitId: 16,
      incidentLimitId: 1,
      deductibleId: 5,
      coinsuranceId: 2,
    },
    baseProduct: [],
    upgradeOptions: [],
    wellnessOptions: [],
    selectedUpgrades: [],
    monthlyInstallment: "",
    total: "",
    serviceFee: "",
    currentPetId: "",
    preselectedOptions: [],
  })

  const [ultimatePlanState, setUltimatePlanState] = useState({
    sliderState: {
      deductibleStep: 100,
      coinsuranceStep: 10,
      coverageStep: "Unlimited",
    },
    selectedLimits: {
      coverageLimitId: 16,
      incidentLimitId: 13,
      deductibleId: 13,
      coinsuranceId: 1,
    },
    baseProduct: [],
    upgradeOptions: [],
    wellnessOptions: [],
    selectedUpgrades: [],
    monthlyInstallment: "",
    total: "",
    serviceFee: "",
    currentPetId: "",
    preselectedOptions: [],
  })

  const [customPlanState, setCustomPlanState] = useState({
    sliderState: {
      deductibleStep: 3,
      coinsuranceStep: 20,
      coverageStep: 10000,
    },
    selectedLimits: {
      coverageLimitId: 5,
      incidentLimitId: 13,
      deductibleId: 12,
      coinsuranceId: 2,
    },
    baseProduct: [],
    upgradeOptions: [],
    wellnessOptions: [],
    selectedUpgrades: [],
    monthlyInstallment: "",
    total: "",
    serviceFee: "",
    currentPetId: "",
    preselectedOptions: [],
  })

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address1: "",
    address2: "",
    apt_number: "",
    petName: "",
    speciesId: "1",
    breedId: "",
    breedName: "",
    age: "",
    ageId: "",
    postalCode: "",
    email: "",
    promoCode: "",
    hasQualifyingConditions: "0",
    city: "",
    state: "",
    stateName: "",
    eConsent: true,
  })
  const [versionNo, setVersionNo] = React.useState("007")
  const [activePlan, setActivePlan] = React.useState(CUSTOM_PLAN)
  const [publicQuote, setPublicQuote] = React.useState()
  const [checkout, setCheckout] = React.useState()
  const handleNext = step => {
    switch (step) {
      case 1:
        setActiveStepInfo({
          step: 1,
          percent: 0,
          title: "1. Pet Info",
        })
        break
      case 2:
        setActiveStepInfo({
          step: 2,
          percent: 33,
          title: "2. Accident and Illness",
        })
        break
      case 3:
        setActiveStepInfo({
          step: 3,
          percent: 66,
          title: "3. Routine Care",
        })
        break
      case 4:
        setActiveStepInfo({
          step: 4,
          percent: 83,
          title: "3. Routine Care",
        })
        break
      case 5:
        setActiveStepInfo({
          step: 5,
          percent: 100,
          title: "4. Enroll",
        })
        break
      default:
        setActiveStepInfo({
          step: 6,
          percent: 100,
          title: "4. Enroll",
        })
        break
    }
  }

  return (
    <Layout>
      <SEO
        title="Get a Free Pet Insurance Quote"
        description="Create a custom pet insurance plan and get a free quote for your pet. Find the right coverage to help protect your pet’s health."
      />
      <div className="quote-page-container">
        <ProgressBar activeStepInfo={activeStepInfo} />
        {activeStepInfo.step === 1 && (
          <StepOne
            handleNext={handleNext}
            formState={formState}
            setFormState={setFormState}
            setQuoteData={setQuoteData}
            quoteData={quoteData}
            setBasicPlanState={setBasicPlanState}
            basicPlanState={basicPlanState}
            setUltimatePlanState={setUltimatePlanState}
            ultimatePlanState={ultimatePlanState}
            setCustomPlanState={setCustomPlanState}
            customPlanState={customPlanState}
            setAllProducts={setAllProducts}
            accidentCare={accidentCare}
            setAccidentCare={setAccidentCare}
            versionNo={versionNo}
            setVersionNo={setVersionNo}
          />
        )}

        {activeStepInfo.step === 2 && (
          <StepTwo
            handleNext={handleNext}
            formState={formState}
            setFormState={setFormState}
            setQuoteData={setQuoteData}
            quoteData={quoteData}
            setBasicPlanState={setBasicPlanState}
            basicPlanState={basicPlanState}
            setUltimatePlanState={setUltimatePlanState}
            ultimatePlanState={ultimatePlanState}
            setCustomPlanState={setCustomPlanState}
            customPlanState={customPlanState}
            setAllProducts={setAllProducts}
            allProducts={allProducts}
            activePlan={activePlan}
            setActivePlan={setActivePlan}
            accidentCare={accidentCare}
            setAccidentCare={setAccidentCare}
          />
        )}

        {activeStepInfo.step === 3 && (
          <StepThree
            handleNext={handleNext}
            formState={formState}
            setFormState={setFormState}
            setQuoteData={setQuoteData}
            quoteData={quoteData}
            setBasicPlanState={setBasicPlanState}
            basicPlanState={basicPlanState}
            setUltimatePlanState={setUltimatePlanState}
            ultimatePlanState={ultimatePlanState}
            setCustomPlanState={setCustomPlanState}
            customPlanState={customPlanState}
            setAllProducts={setAllProducts}
            allProducts={allProducts}
            activePlan={activePlan}
            setActivePlan={setActivePlan}
            versionNo={versionNo}
            setVersionNo={setVersionNo}
          />
        )}

        {activeStepInfo.step === 4 && (
          <StepFour
            handleNext={handleNext}
            formState={formState}
            setFormState={setFormState}
            setQuoteData={setQuoteData}
            quoteData={quoteData}
            setBasicPlanState={setBasicPlanState}
            basicPlanState={basicPlanState}
            setUltimatePlanState={setUltimatePlanState}
            ultimatePlanState={ultimatePlanState}
            setCustomPlanState={setCustomPlanState}
            customPlanState={customPlanState}
            setAllProducts={setAllProducts}
            allProducts={allProducts}
            activePlan={activePlan}
            setActivePlan={setActivePlan}
            publicQuote={publicQuote}
            setPublicQuote={setPublicQuote}
          />
        )}

        {activeStepInfo.step === 5 && (
          <StepFive
            handleNext={handleNext}
            formState={formState}
            setFormState={setFormState}
            setQuoteData={setQuoteData}
            quoteData={quoteData}
            setBasicPlanState={setBasicPlanState}
            basicPlanState={basicPlanState}
            setUltimatePlanState={setUltimatePlanState}
            ultimatePlanState={ultimatePlanState}
            setCustomPlanState={setCustomPlanState}
            customPlanState={customPlanState}
            setAllProducts={setAllProducts}
            allProducts={allProducts}
            activePlan={activePlan}
            setActivePlan={setActivePlan}
            checkout={checkout}
            setCheckout={setCheckout}
          />
        )}
        {activeStepInfo.step === 6 && (
          <StepSix
            activePlan={activePlan}
            checkout={checkout}
            setBasicPlanState={setBasicPlanState}
            basicPlanState={basicPlanState}
            setUltimatePlanState={setUltimatePlanState}
            ultimatePlanState={ultimatePlanState}
            setCustomPlanState={setCustomPlanState}
            customPlanState={customPlanState}
          />
        )}
      </div>
    </Layout>
  )
}

export default Enroll
