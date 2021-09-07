import React from "react"
import { Form, Formik, Field } from "formik"
import Switch from "react-switch"
import Select from "react-select"
import { petAge } from "./breedsList"
import { DogIcon, CatIcon } from "../PetIcon"
import { Link } from "gatsby"
// import DiscountIcon from "../../images/5-percent.svg"
// import AddPetIcon from "../../images/add-pet-icon.svg"
import axios from "axios"
import PostalCode from "./fields/postalCodeField"
import { getDisplayName, productsWithPrices, setExamPlus } from "../helpers"
import {
  INITIAL_BASIC_SELECTED_LIMITS,
  INITIAL_ULTIMATE_SELECTED_LIMITS,
  INITIAL_CUSTOM_SELECTED_LIMITS,
} from "../constants"
import { states } from "../states"

const validate = (values /* only available when using withFormik */) => {
  const errors = {}

  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }
  if (!values.petName) {
    errors.petName = "Required"
  }

  if (!values.speciesId) {
    errors.speciesId = "Required"
  }
  if (!values.age) {
    errors.age = "Required"
  }

  if (!values.hasQualifyingConditions) {
    errors.hasQualifyingConditions = "Required"
  }
  if (!values.breedName) {
    errors.breedName = "Required"
  }
  return errors
}

const calculateDateOfBirth = (dt, n) => {
  if (n === "8 Weeks-Under-1") {
    return new Date(dt.setFullYear(dt.getFullYear())).toISOString()
  } else {
    return new Date(dt.setFullYear(dt.getFullYear() - n)).toISOString()
  }
}
const filterBreedList = breed => {
  return {
    value: breed.breedId,
    label: breed.display,
  }
}
export const StepOne = ({
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
  setAccidentCare,
  versionNo,
  setVersionNo,
}) => {
  // console.log("hasQualifyingConditions", formState.hasQualifyingConditions)
  const [breedRef, setBreedRef] = React.useState()
  const [ageRef, setAgeRef] = React.useState()
  const clearSelectValues = () => {
    breedRef.select.clearValue()
    ageRef.select.clearValue()
  }
  const [speciesId, setSpeciesId] = React.useState("1")
  const [breedsList, setBreedList] = React.useState([])
  const [checked, setChecked] = React.useState(
    formState.hasQualifyingConditions === "1" ? true : false
  )
  const handleChange = (nextChecked, setFieldValue) => {
    setFieldValue("hasQualifyingConditions", nextChecked ? "1" : "0")
    setChecked(nextChecked)
  }

  const handleSpeciesChange = (setFieldValue, speciesId) => {
    setFieldValue("speciesId", speciesId)
    setSpeciesId(speciesId)
    axios
      .get(`${process.env.GATSBY_PP_API}/quote/v1/breeds/${speciesId}`)
      .then(({ data }) => {
        const breedsData = data.map(filterBreedList)
        const mixedBreed = breedsData.find(item => item.label === "Mixed Breed")
        const removeMixedBreed = breedsData.filter(
          item => item.label !== "Mixed Breed"
        )

        setBreedList([mixedBreed, ...removeMixedBreed])
      })
      .then(() => {
        setFieldValue("ageId", "")
        setFieldValue("age", "")
        setFieldValue("breedId", "")
        setFieldValue("breedName", "")
        clearSelectValues()
      })
  }

  React.useEffect(() => {
    axios
      .get(`${process.env.GATSBY_PP_API}/quote/v1/breeds/${speciesId}`)
      .then(({ data }) => {
        const breedsData = data.map(filterBreedList)
        const mixedBreed = breedsData.find(item => item.label === "Mixed Breed")
        const removeMixedBreed = breedsData.filter(
          item => item.label !== "Mixed Breed"
        )
        setBreedList([mixedBreed, ...removeMixedBreed])
      })
  }, [])
  const [petName, setPetName] = React.useState(formState.petName)
  return (
    <section className="quote-form-steps-section step-one">
      <h2>
        Create a Custom Insurance Plan for <br />
        {`${petName || "(PETNAME)"}`}
      </h2>
      <p>Design your pet’s insurance plan in 4 easy steps.</p>
      {/* <div className="look-up-box">
        <h5>Look up activation</h5>
        <div className="look-up-content">
          <p>
            If you have an activation code for your pet, look it up here to get
            started.
          </p>
          <a className="button">Look Up Pet</a>
        </div>
      </div> */}
      <Formik
        initialValues={formState}
        validate={validate}
        onSubmit={(values, actions) => {
          axios
            .get(
              `${process.env.GATSBY_PP_API}/quote/v1/postalcode/${values.postalCode}`
            )
            .then(result => {
              // axios
              //   .get(
              //     `${process.env.GATSBY_PP_API}/quote/v1/limits/${values.postalCode}`
              //   )
              //   .then(data => handleNext(2))
              // setFormState(prevState => {
              //   return {
              //     ...prevState,
              //     city: result.data.city,
              //     state: result.data.stateCode,
              //   }
              // })

              setFormState(prevState => {
                return {
                  ...prevState,
                  ...values,
                  city: result.data.city,
                  state: result.data.stateCode,
                  stateName: states.filter(
                    state => state.value === result.data.stateCode
                  )[0]["label"],
                }
              })
              axios
                .get(
                  `${process.env.GATSBY_PP_API}/quote/v1/state-filing?statecode=${result.data.stateCode}`
                )
                .then(res =>
                  setVersionNo(
                    res.data.stateFilingProduct[0].stateFiling.versionNo
                  )
                )
              axios
                .post(`${process.env.GATSBY_PP_API}/quote/v1`, {
                  marketChannelId: 1,
                  // effectiveOn: new Date().toISOString(),
                  pets: [
                    {
                      petName: values.petName,
                      breedId: values.breedId,
                      dob: calculateDateOfBirth(new Date(), values.age),
                      qualifyingConditions:
                        values.hasQualifyingConditions === "0" ? false : true,
                    },
                  ],
                  customer: {
                    firstName: "",
                    lastName: "",
                    postalCode: values.postalCode,
                    email: values.email,
                  },
                })
                .then(res => {
                  // setFormState(values)
                  setQuoteData(res.data.data)
                  return res.data.data
                })
                .then(quote => {
                  setAccidentCare(
                    quote.pets[0].qualifyingConditions || values.age > 8
                  )
                  axios
                    .get(
                      `${process.env.GATSBY_PP_API}/quote/v1/quote-pet/${quote.currentPetId}/products`
                    )
                    .then(res => {
                      // const filteredProducts = [
                      //   ...res.data.baseProducts,
                      //   ...res.data.preselectedOptions,
                      //   ...res.data.upgradeOptions,
                      //   ...res.data.wellnessOptions,
                      // ]
                      // const stateFilingProductIds = filteredProducts.map(
                      //   item => {
                      //     return {
                      //       filteredProducts: item.filteredProducts,
                      //     }
                      //   }
                      // )
                      // setAllProducts(stateFilingProductIds)

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

                      const basicPlanRequest = axios
                        .post(
                          `${process.env.GATSBY_PP_API}/quote/v1/preview/${quote.currentPetId}`,
                          [basicPlanState.selectedLimits]
                        )
                        .then(res => {
                          setBasicPlanState(prevState => {
                            return {
                              ...prevState,
                              selectedLimits: INITIAL_BASIC_SELECTED_LIMITS,
                              selectedUpgrades: [],
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
                              serviceFee: quote.serviceFee,
                              currentPetId: quote.currentPetId,
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
                        .catch(err => console.log(err))
                      const ultimatePlanRequest = axios
                        .post(
                          `${process.env.GATSBY_PP_API}/quote/v1/preview/${quote.currentPetId}`,
                          [
                            quote.pets[0].qualifyingConditions || values.age > 8
                              ? {
                                  coverageLimitId: 16,
                                  incidentLimitId: 13,
                                  deductibleId: 5,
                                  coinsuranceId: 1,
                                }
                              : ultimatePlanState.selectedLimits,
                          ]
                        )
                        .then(res => {
                          setUltimatePlanState(prevState => {
                            return {
                              ...prevState,
                              selectedLimits:
                                quote.pets[0].qualifyingConditions ||
                                values.age > 8
                                  ? {
                                      coverageLimitId: 16,
                                      incidentLimitId: 13,
                                      deductibleId: 5,
                                      coinsuranceId: 1,
                                    }
                                  : INITIAL_ULTIMATE_SELECTED_LIMITS,
                              selectedUpgrades: [],
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
                              serviceFee: quote.serviceFee,
                              currentPetId: quote.currentPetId,
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
                        .catch(err => console.log(err))

                      const customPlanRequest = axios
                        .post(
                          `${process.env.GATSBY_PP_API}/quote/v1/preview/${quote.currentPetId}`,
                          [customPlanState.selectedLimits]
                        )
                        .then(res => {
                          setCustomPlanState(prevState => {
                            return {
                              ...prevState,
                              sliderState: {
                                deductibleStep: 3,
                                coinsuranceStep: 20,
                                coverageStep: 10000,
                              },
                              selectedLimits: INITIAL_CUSTOM_SELECTED_LIMITS,
                              selectedUpgrades: [],
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
                              serviceFee: quote.serviceFee,
                              currentPetId: quote.currentPetId,
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
                        .catch(err => console.log(err))
                      axios
                        .all([
                          basicPlanRequest,
                          ultimatePlanRequest,
                          customPlanRequest,
                        ])
                        .then(res => handleNext(2))
                        .catch(err => console.error(err))
                    })
                })
            })
            .catch(err => {
              actions.setSubmitting(false)
              actions.setFieldError("postalCode", "Not valid Zip")
            })
        }}
      >
        {props => (
          <Form>
            <div className="fields-row">
              <div className="fields-col">
                <label htmlFor="name">Pet Name</label>
                <Field
                  name="petName"
                  placeholder="Pet Name"
                  className={`field ${
                    props.errors.petName && props.touched.petName
                      ? "has-error"
                      : ""
                  }`}
                  onChange={e => {
                    props.handleChange(e)
                    setPetName(e.target.value)
                  }}
                />
              </div>
            </div>

            <div className="fields-row fields-buttons-row">
              <div className="fields-col alg-end">
                <label htmlFor="speciesId">Pet Type</label>
                <button
                  type="button"
                  onClick={() => handleSpeciesChange(props.setFieldValue, "1")}
                  className={`custom-radio-button ${
                    speciesId === "1" ? "active-state" : ""
                  }`}
                >
                  <DogIcon active={speciesId === "1"} />
                </button>
              </div>
              <div className="fields-col alg-end">
                <button
                  type="button"
                  onClick={() => handleSpeciesChange(props.setFieldValue, "2")}
                  className={`custom-radio-button ${
                    speciesId === "2" ? "active-state" : ""
                  }`}
                >
                  <CatIcon active={speciesId === "2"} />
                </button>
              </div>
            </div>

            <div className="fields-row">
              <div className="fields-col">
                <label htmlFor="breedId">Pet Breed</label>
                <Select
                  ref={ref => {
                    setBreedRef(ref)
                  }}
                  className={`basic-single searchable-select field ${
                    props.errors.breedName && props.touched.breedName
                      ? "has-error"
                      : ""
                  }`}
                  // className=""
                  classNamePrefix="select"
                  defaultValue={
                    props.values && props.values.breedName
                      ? {
                          label: props.values.breedName,
                          value: props.values.breedId,
                        }
                      : undefined
                  }
                  isClearable={true}
                  isSearchable={true}
                  name="breedName"
                  onChange={option => {
                    props.setFieldValue("breedId", option ? option.value : "")
                    props.setFieldValue("breedName", option ? option.label : "")
                  }}
                  options={breedsList}
                />
              </div>

              <div className="fields-col">
                <label htmlFor="age">Pet Age</label>
                <Select
                  className={`basic-single searchable-select field ${
                    props.errors.age && props.touched.age ? "has-error" : ""
                  }`}
                  classNamePrefix="select"
                  ref={ref => {
                    setAgeRef(ref)
                  }}
                  defaultValue={
                    props.values && props.values.age
                      ? {
                          label: props.values.age,
                          value: props.values.ageId,
                        }
                      : undefined
                  }
                  isClearable={true}
                  isSearchable={true}
                  name="age"
                  onChange={option => {
                    props.setFieldValue("ageId", option ? option.value : "")
                    props.setFieldValue("age", option ? option.label : "")
                  }}
                  options={petAge}
                />
              </div>
            </div>

            <div className="fields-row">
              <div className="fields-col">
                <label htmlFor="hasQualifyingConditions">
                  Has your pet ever shown symptoms, received treatment for, or
                  been diagnosed with any illness or condition including
                  Diabetes, Cushing’s Disease, or FeLV/FIV? (Your answer to this
                  question will not affect your premium, but it may affect your
                  pet’s eligibility.)
                </label>
                <Switch
                  onChange={e => handleChange(e, props.setFieldValue)}
                  checked={checked}
                  className="react-switch"
                  checkedIcon={<div className="switch-icon checked">YES</div>}
                  uncheckedIcon={<div className="switch-icon">NO</div>}
                  onColor="#FF7D5A"
                  height={32}
                  width={87}
                  handleDiameter={24}
                />
              </div>
            </div>

            <div className="fields-row">
              <div className="fields-col">
                <label htmlFor="postalCode">Zip Code</label>
                {/* <Field name="postalCode" placeholder="Zip" /> */}
                <PostalCode props={props} />
              </div>

              <div className="fields-col">
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  placeholder="Email"
                  className={`field ${
                    props.errors.email && props.touched.email ? "has-error" : ""
                  }`}
                />
              </div>
              <div className="fields-col disclaimer-col">
                <p>
                  Enter your email to save your quote. Unsubscribe anytime. We
                  will never sell your information. See our{" "}
                  <Link to="/privacy-policy/">PRIVACY POLICY.</Link>
                </p>
              </div>
            </div>

            {/* <div className="fields-row">
              <div className="fields-col">
                <label htmlFor="name">Group Code</label>
                <Field name="promo_code" placeholder="Group Code" />
              </div>
            </div> */}

            {/* <div className="discount-box-wrapper">
              <h4>
                <img src={DiscountIcon} alt="discount" /> Multi-pet discount
              </h4>
              <p>
                Receive a 5% discount when enrolling more than one pet with our
                Multi-Pet Discount. Discount will be automatically applied at
                checkout.
              </p>
              <button className="add-pet-button">
                <img src={AddPetIcon} alt="add pet" /> Add one more Pet
              </button>
            </div> */}
            {!props.dirty && quoteData && quoteData.quoteGuid ? (
              <button
                className={`button submit-button ${
                  props.isSubmitting ? "is-loading" : ""
                }`}
                type="button"
                onClick={() => handleNext(2)}
              >
                Choose Coverage
              </button>
            ) : (
              <button
                disabled={props.isSubmitting}
                className={`button submit-button ${
                  props.isSubmitting ? "is-loading" : ""
                }`}
                type="submit"
              >
                Choose Coverage
              </button>
            )}
          </Form>
        )}
      </Formik>
    </section>
  )
}
