import React from "react"
import { Form, Formik, Field } from "formik"
import Switch from "react-switch"
import UseScrollToTop from "../useScrollToTop"
import LockIcon from "../../../images/lock.svg"
import SatisfactionPeriodIcon from "../../../images/30days.svg"
import { PolicyOverview } from "../policyOverview"
import BillingAddress2 from "./fields/billingAddress2"
import BillingCityField from "./fields/billingCityField"
import BillingPostalCodeField from "./fields/billingPostalCodeField"
import BillingSuite from "./fields/billingSuite"
import BillingState from "./fields/billingState"
import CreditCardField from "./fields/creditCard"
import CVC from "./fields/cvc"
import ExpiresMonth from "./fields/expiresMonth"
import ExpiresYear from "./fields/expiresYear"
import NameOnTheCard from "./fields/nameOnTheCard"
import { BASIC_PLAN, CUSTOM_PLAN, ULTIMATE_PLAN } from "../constants"
import { formatName, formatCC } from "../helpers"
import axios from "axios"
import validCard from "card-validator"
import Checkbox from "@material-ui/core/Checkbox"

export const StepFive = ({
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
  checkout,
  setCheckout,
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
  const [
    sendDocumentsByEmailState,
    setSendDocumentsByEmailState,
  ] = React.useState(true)
  const [
    differentBillingAddressState,
    setDifferentBillingAddressState,
  ] = React.useState(false)

  const handleChange = (nextChecked, setFieldValue, fieldName, setState) => {
    // console.log(nextChecked)
    setFieldValue(fieldName, nextChecked)
    setState(nextChecked)
  }
  const [token, setToken] = React.useState()
  React.useEffect(() => {
    axios
      .get(`${process.env.GATSBY_PP_API}/quote/v1/trustcommerce/token`)
      .then(res => res.data)
      .then(data => setToken(data.trusteeApiToken))
  }, [])

  const validate = (values /* only available when using withFormik */) => {
    const errors = {}

    if (values.different_billing_address) {
      if (!values.billingAddress) {
        errors.billingAddress = "Required"
      }

      if (!values.billingState) {
        errors.billingState = "Required"
      }

      if (!values.billingCity) {
        errors.billingCity = "Required"
      }
    }
    return errors
  }

  return (
    <section className="quote-form-steps-section step-five">
      <h2>
        Billing Information <img src={LockIcon} alt="lock icon" />
      </h2>
      <p className="step-five-intro-paragraph">
        If you would like to pay by cash or check, please contact our Customer
        Care Team at <a href="tel:18667741113">866-774-1113</a>.
      </p>
      <div className="satisfaction-period-wrapper">
        <h3>
          <img src={SatisfactionPeriodIcon} alt="Satisfaction Period icon" />{" "}
          Satisfaction Period
        </h3>
        <p>
          If you are not completely satisfied within the first 30 days of your
          policy,{" "}
          <span>
            we will refund 100% of your premium as long as no claims have been
            filed.*
          </span>
        </p>
      </div>
      <Formik
        initialValues={{
          name_on_card: "",
          card_number: "",
          expires_month: "",
          expires_year: "",
          cvc: "",
          isElectronicDelivery: false,
          different_billing_address: "",
          billingAddress: "",
          billingCity: "",
          billingPostalCode: "",
          billingSuite: "",
          billingState: "",
          billingStateName: "",
        }}
        validate={validate}
        onSubmit={(values, actions) => {
          const formatNameOnCard = formatName(values.name_on_card)
          const formatBillingAddress = (address, apt_number) => {
            if (address && apt_number) {
              return `${address} ${apt_number}`
            } else {
              return address
            }
          }
          const checkoutData = {
            quoteGuid: quoteData.quoteGuid,
            firstName: formState.firstName,
            lastName: formState.lastName,
            address1: formState.address1,
            city: formState.city,
            postalCode: formState.postalCode,
            last4: values.card_number.substr(-4),
            expiresOn: `${values.expires_year}-${values.expires_month}-01`,
            trusteeApiToken: token,
            firstNameOnCard: formatNameOnCard.firstName,
            lastNameOnCard: formatNameOnCard.lastName,
            billingAddress1:
              formatBillingAddress(
                values.billingAddress,
                values.billingSuite
              ) || formState.address1,
            billingCity: values.billingCity || formState.city,
            billingPostalCode: values.billingPostalCode || formState.postalCode,
            // formatBillingAddress(formState.postalCode, formState.apt_number),
            isElectronicDelivery: values.isElectronicDelivery,
            eConsent: formState.eConsent,
          }

          axios
            .post(
              `https://vl3fhu6bt7.execute-api.us-east-1.amazonaws.com/test/test`,
              {
                token: token,
                cc: values.card_number.replace(/\D+/g, ""),
                exp: formatCC(values.expires_month, values.expires_year),
              }
            )
            .then(() => {
              axios
                .post(
                  `${process.env.GATSBY_PP_API}/quote/v1/checkout`,
                  checkoutData
                )
                .then(res => {
                  setCheckout(res.data)
                })
                .then(() => handleNext(6))
                .catch(err => console.log(err))
            })
        }}
      >
        {props => (
          <Form>
            <div className="fields-row">
              <NameOnTheCard props={props} />
              <CreditCardField props={props} />
            </div>

            <div className="fields-row">
              <ExpiresMonth props={props} />
              <ExpiresYear props={props} />
              <CVC props={props} />
              <div className="fields-col">
                <p className="fraud-warning">
                  Fraud Warning: Any person who knowingly, and with intent to
                  injure, defraud, or deceive any insurer, or makes any claim
                  for the proceeds of an insurance policy containing any false,
                  incomplete, or misleading information may be guilty of a
                  crime.
                </p>
              </div>
            </div>

            <div className="fields-row">
              <div className="fields-col">
                <p>Use a different billing address?</p>
              </div>

              <div className="fields-col switch-col">
                <Switch
                  onChange={e =>
                    handleChange(
                      e,
                      props.setFieldValue,
                      "different_billing_address",

                      setDifferentBillingAddressState
                    )
                  }
                  checked={differentBillingAddressState}
                  className="react-switch"
                  checkedIcon={<div className="switch-icon checked">YES</div>}
                  uncheckedIcon={<div className="switch-icon">NO</div>}
                  onColor="#FF7D5A"
                  height={26}
                  width={70}
                  handleDiameter={18}
                />
              </div>
            </div>

            {props.values.different_billing_address === true && (
              <>
                <div className="fields-row">
                  <BillingAddress2 props={props} />
                  <BillingSuite props={props} />
                </div>
                <div className="fields-row">
                  <BillingCityField props={props} />
                  <BillingState props={props} />
                  <BillingPostalCodeField props={props} />
                </div>
              </>
            )}

            <div className="fields-row">
              <div className="fields-col">
                <p>
                  I agree to go paperless and receive policy documents and
                  communication electronically.
                </p>
              </div>

              <div className="fields-col switch-col">
                <Switch
                  onChange={e =>
                    handleChange(
                      e,
                      props.setFieldValue,
                      "isElectronicDelivery",
                      setSendDocumentsByEmailState
                    )
                  }
                  checked={sendDocumentsByEmailState}
                  className="react-switch"
                  checkedIcon={<div className="switch-icon checked">YES</div>}
                  uncheckedIcon={<div className="switch-icon">NO</div>}
                  onColor="#FF7D5A"
                  height={26}
                  width={70}
                  handleDiameter={18}
                />
              </div>
            </div>
            {/* <div className="fields-row">
              <div className="fields-col">
                <p>
                  I agree that by checking this box I have electronically signed
                  and agreed to the terms of the{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.petpartners.com/res/common/files/application_acknowledgement-fullterm.pdf"
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
            </div> */}
            <PolicyOverview
              selectedPlan={selectedQuotePlan}
              activePlan={activePlan}
            />

            <button
              disabled={props.isSubmitting}
              className={`button submit-button ${
                props.isSubmitting ? "is-loading" : ""
              }`}
              type="submit"
            >
              ENROLL NOW
            </button>
          </Form>
        )}
      </Formik>
    </section>
  )
}
