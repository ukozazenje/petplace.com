// import d from '../../images/ProductIcons/smallIcons'
import React from "react"
import AccidentCare from "../../images/ProductIcons/smallIcons/CompanionSelect.png"
import AlternativePlus from "../../images/ProductIcons/smallIcons/AlternativePlus.png"
import BreedingCoverage from "../../images/ProductIcons/smallIcons/BreedingCoverage.png"
import Certificate from "../../images/ProductIcons/smallIcons/30Days.png"
import CompanionCare from "../../images/ProductIcons/smallIcons/CompanionPlus.png"
import CompanionPlus from "../../images/ProductIcons/smallIcons/CompanionPlus.png"
import CompanionSelect from "../../images/ProductIcons/smallIcons/CompanionSelect.png"
import ExamCare from "../../images/ProductIcons/smallIcons/ExamCare.png"
import ExamPlus from "../../images/ProductIcons/smallIcons/ExamCare.png"
import HereditaryPlus from "../../images/ProductIcons/smallIcons/InheritedPlus.png"
import InheritedPlus from "../../images/ProductIcons/smallIcons/InheritedPlus.png"
import SupportPlus from "../../images/ProductIcons/smallIcons/SupportPlus.png"

export const deductibleId = {
  1: 5,
  2: 11,
  3: 12,
  4: 23,
  5: 13,
}
export const deductibleMarks = {
  1: "$100",
  2: "$250",
  3: "$500",
  4: "$750",
  5: "$1,000",
}
export const deductiblePriceForId = {
  5: "$100",
  11: "$250",
  12: "$500",
  23: "$750",
  13: "$1,000",
}
export const coinsuranceId = {
  10: 1,
  20: 2,
  30: 7,
}
export const coinsuranceMarks = {
  10: "90%",
  20: "80%",
  30: "70%",
}
export const coinsurancePriceForId = {
  1: "90%",
  2: "80%",
  7: "70%",
}
export const coverageLimitId = {
  2500: 19,
  5000: 13,
  7500: 20,
  10000: 5,
  12500: 8,
  15000: 23,
  17500: 16,
}
export const coverageMarks = {
  2500: "$2,500",
  5000: "$5,000",
  7500: "$7,500",
  10000: "$10,000",
  12500: "$15,000",
  15000: "$20,000",
  17500: "Unlimited",
}

export const coveragePriceForId = {
  19: "$2,500",
  13: "$5,000",
  20: "$7,500",
  5: "$10,000",
  8: "$15,000",
  23: "$20,000",
  16: "Unlimited",
}

export const INITIAL_BASIC_SELECTED_LIMITS = {
  coverageLimitId: 16,
  incidentLimitId: 1,
  deductibleId: 5,
  coinsuranceId: 2,
}

export const INITIAL_CUSTOM_SELECTED_LIMITS = {
  coverageLimitId: 5,
  incidentLimitId: 13,
  deductibleId: 12,
  coinsuranceId: 2,
}

export const INITIAL_ULTIMATE_SELECTED_LIMITS = {
  coverageLimitId: 16,
  incidentLimitId: 13,
  deductibleId: 13,
  coinsuranceId: 1,
}

export const BASIC_PLAN = "Basic"
export const ULTIMATE_PLAN = "Ultimate"
export const CUSTOM_PLAN = "Custom+"

export const getLogo = name => {
  switch (name) {
    case "AccidentCare":
      return <img key="AccidentCare" src={AccidentCare} alt="AccidentCare" />
    case "AlternativePlus":
      return (
        <img
          key="AlternativePlus"
          src={AlternativePlus}
          alt="AlternativePlus"
        />
      )
    case "BreedingCoverage":
      return (
        <img
          key="BreedingCoverage"
          src={BreedingCoverage}
          alt="BreedingCoverage"
        />
      )
    case "Certificate":
      return <img key="Certificate" src={Certificate} alt="Certificate" />
    case "CompanionCare":
      return <img key="CompanionCare" src={CompanionCare} alt="CompanionCare" />
    case "CompanionPlus":
      return <img key="CompanionPlus" src={CompanionPlus} alt="CompanionPlus" />
    case "CompanionSelect":
      return (
        <img
          key="CompanionSelect"
          src={CompanionSelect}
          alt="CompanionSelect"
        />
      )
    case "ExamCare":
      return <img key="ExamCare" src={ExamCare} alt="ExamCare" />
    case "ExamPlus":
      return <img key="ExamPlus" src={ExamPlus} alt="ExamPlus" />
    case "HereditaryPlus":
      return (
        <img key="HereditaryPlus" src={HereditaryPlus} alt="HereditaryPlus" />
      )
    case "InheritedPlus":
      return <img key="InheritedPlus" src={InheritedPlus} alt="InheritedPlus" />
    case "SupportPlus":
      return <img key="SupportPlus" src={SupportPlus} alt="SupportPlus" />
  }
}
