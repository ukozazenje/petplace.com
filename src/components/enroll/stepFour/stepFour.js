import React from "react"
import axios from "axios"
import { Form, Formik, Field } from "formik"
import Switch from "react-switch"
import Select from "react-select"
import { states } from "../states"
import { DogIcon, CatIcon } from "../PetIcon"
import { Link } from "gatsby"
import UseScrollToTop from "../useScrollToTop"
import { PolicyOverview } from "../policyOverview"
import { BASIC_PLAN, CUSTOM_PLAN, ULTIMATE_PLAN } from "../constants"
import PhoneField from "./fields/phone"
const validate = (values /* only available when using withFormik */) => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = "Required"
  }
  if (!values.lastName) {
    errors.lastName = "Required"
  }
  if (!values.city) {
    errors.city = "Required"
  }
  if (!values.state) {
    errors.state = "Required"
  }
  if (!values.address1) {
    errors.address1 = "Required"
  }
  return errors
}

export const StepFour = ({
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
  publicQuote,
  setPublicQuote,
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

  const selectedQuotePlan = getActivePlanData(activePlan)

  const allWellnessAndUpgrade = [
    ...selectedQuotePlan.wellnessOptions,
    ...selectedQuotePlan.upgradeOptions,
  ]

  const selectedWellnessAndUpgrade = allWellnessAndUpgrade
    .filter(item =>
      selectedQuotePlan.selectedUpgrades.includes(item.stateFilingProductId)
    )
    .map(item => {
      return { stateFilingProductId: item.stateFilingProductId }
    })

  const preselectedUpgrades = selectedQuotePlan.preselectedOptions.map(item => {
    return { stateFilingProductId: item.stateFilingProductId }
  })

  const selectedProducts = [
    ...selectedWellnessAndUpgrade,
    ...preselectedUpgrades,
    {
      stateFilingProductId: selectedQuotePlan.baseProduct.stateFilingProductId,
    },
  ]
  return (
    <section className="quote-form-steps-section">
      <h2>Pet Owner Information</h2>
      <p className="quote-form-step-four-paragraph">
        By continuing, you agree to the use of electronic transactions and
        electronic signatures on this{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.petpartners.com/res/common/files/IAIC%20Electronic%20Consent%20Notice_PetPartners.pdf"
        >
          site
        </a>
        .<br /> For paper application, please contact{" "}
        <a href="tel:18667741113">866-774-1113</a>.
      </p>
      <Formik
        initialValues={formState}
        validate={validate}
        onSubmit={(values, actions) => {
          axios
            .post(`${process.env.GATSBY_PP_API}/quote/v1`, {
              quoteGuid: quoteData.quoteGuid,
              marketChannelId: quoteData.marketChannelId,
              effectiveOn: quoteData.effectiveOn,
              currentPetId: quoteData.currentPetId,
              serviceFee: quoteData.serviceFee,
              pets: [
                {
                  petId: quoteData.currentPetId,
                  petName: quoteData.pets[0].petName,
                  breedId: quoteData.pets[0].breedId,
                  dob: quoteData.pets[0].dob,
                  qualifyingConditions: quoteData.pets[0].qualifyingConditions,
                  coverage: {
                    selectedLimits: {
                      ...selectedQuotePlan.selectedLimits,
                    },
                    selectedProducts: selectedProducts,
                  },
                },
              ],
              customer: {
                firstName: values.firstName,
                lastName: values.lastName,
                address1: values.apt_number
                  ? `${values.address1} ${values.apt_number}`
                  : values.address1,
                // address2: values.address2 || null,
                city: values.city,
                postalCode: values.postalCode,
                phone: values.phone,
                email: values.email,
              },
            })
            .then(({ data }) => {
              setPublicQuote(data.data)
              setFormState(prevState => {
                return {
                  ...prevState,
                  ...values,
                }
              })
            })
            .then(() => handleNext(5))
            .catch(err => console.error(err))
          // handleNext(5)
        }}
      >
        {props => (
          <Form>
            <div className="fields-row">
              <div className="fields-col">
                <label htmlFor="firstName">First Name</label>
                <Field
                  name="firstName"
                  placeholder="First Name"
                  className={`field ${
                    props.errors.firstName && props.touched.firstName
                      ? "has-error"
                      : ""
                  }`}
                />
              </div>
              <div className="fields-col">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  name="lastName"
                  placeholder="Last Name"
                  className={`field ${
                    props.errors.lastName && props.touched.lastName
                      ? "has-error"
                      : ""
                  }`}
                />
              </div>
            </div>

            <div className="fields-row">
              <div className="fields-col">
                <label htmlFor="address1">Street Address</label>
                <Field
                  name="address1"
                  placeholder="Street Address"
                  className={`field ${
                    props.errors.address1 && props.touched.address1
                      ? "has-error"
                      : ""
                  }`}
                />
              </div>
              <div className="fields-col">
                <label htmlFor="apt_number">Apt, Suite</label>
                <Field name="apt_number" placeholder="Number" />
              </div>
            </div>

            <div className="fields-row">
              <div className="fields-col">
                <label htmlFor="city">City</label>
                <Field
                  name="city"
                  placeholder="City"
                  className={`field ${
                    props.errors.city && props.touched.city ? "has-error" : ""
                  }`}
                />
              </div>

              <div className="fields-col">
                <label htmlFor="state">State</label>
                <Select
                  className={`basic-single searchable-select field ${
                    props.errors.state && props.touched.state ? "has-error" : ""
                  }`}
                  // className="basic-single searchable-select"
                  classNamePrefix="select"
                  defaultValue={
                    props.values && props.values.state
                      ? {
                          label: props.values.stateName,
                          value: props.values.state,
                        }
                      : undefined
                  }
                  isClearable={true}
                  isSearchable={true}
                  isDisabled={true}
                  name="state"
                  onChange={option => {
                    props.setFieldValue("state", option ? option.value : "")
                    props.setFieldValue("stateName", option ? option.label : "")
                  }}
                  options={states}
                />
              </div>
            </div>

            <div className="fields-row">
              <PhoneField props={props} />
            </div>

            <div className="fields-row">
              <div className="fields-col">
                <p>
                  I agree that by checking this box I have electronically signed
                  and agreed to the terms of the{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.petpartners.com/res/common/files/IAIC%20Electronic%20Consent%20Notice_PetPartners.pdf"
                  >
                    application
                  </a>{" "}
                  and transaction.
                </p>
              </div>
              <div className="fields-col checkbox-col">
                <div className="custom-checkbox">
                  <input
                    type="checkbox"
                    name="eConsent"
                    checked={props.values.eConsent}
                    onChange={() =>
                      props.setFieldValue("eConsent", !props.values.eConsent)
                    }
                  />
                  <span
                    className={`custom-checkbox-checkmark ${
                      props.values.eConsent ? "checked" : ""
                    }`}
                    onClick={() =>
                      props.setFieldValue("eConsent", !props.values.eConsent)
                    }
                  ></span>
                </div>
              </div>
            </div>
            {!props.values.eConsent && (
              <article className="message is-danger">
                <div className="message-body">
                  Must consent to electronic signature to complete enrollment.
                </div>
              </article>
            )}
            <PolicyOverview
              selectedPlan={selectedQuotePlan}
              activePlan={activePlan}
            />
            <div className="quote-buttons-wrapper">
              <button
                onClick={() => handleNext(3)}
                className="back-button"
                type="button"
              >
                Back
              </button>
              {/* {!props.dirty ? (
                <button
                  className={`button submit-button`}
                  type="submit"
                  // onClick={() => handleNext(2)}
                >
                  Continue
                </button>
              ) : ( */}

              <button
                disabled={props.isSubmitting || !props.values.eConsent}
                className={`button submit-button ${
                  props.isSubmitting ? "is-loading" : ""
                }`}
                type="submit"
              >
                Continue
              </button>
              {/* )} */}
              {/* <button className="submit-button" type="submit">
                Continue
              </button> */}
            </div>
          </Form>
        )}
      </Formik>
    </section>
  )
}
