import React from "react"
import AdditionalCoverage from "./additionalCoverage"
import AccidentCare from "../../../images/ProductIcons/logo-AccidentCare.png"
import AlternativePlus from "../../../images/ProductIcons/logo-alternativeplus.png"
import BreedingCoverage from "../../../images/ProductIcons/logo-BreedingCoverage.png"
import Certificate from "../../../images/ProductIcons/logo-30daycert.png"
import CompanionCare from "../../../images/ProductIcons/logo-CompanionCare.png"
import CompanionPlus from "../../../images/ProductIcons/logo-companionplus.png"
import CompanionSelect from "../../../images/ProductIcons/logo-companionselect.png"
import ExamCare from "../../../images/ProductIcons/logo-examcare.png"
import ExamPlus from "../../../images/ProductIcons/logo-ExamPlus.png"
import HereditaryPlus from "../../../images/ProductIcons/logo-PET-HereditaryPlus--dark.png"
import InheritedPlus from "../../../images/ProductIcons/logo-inheritedplus.png"
import SupportPlus from "../../../images/ProductIcons/logo-PET-SupportPlus--dark.png"

export const UpgradeOptions = ({
  option,
  setSelectedUpgrade,
  selectedUpgrades,
  key,
}) => {
  switch (option.display) {
    case "AccidentCare":
      return (
        <AdditionalCoverage
          logo={AccidentCare}
          fieldName="hereditary"
          tooltipText="test"
          option={option}
          setSelectedUpgrade={setSelectedUpgrade}
          selectedUpgrades={selectedUpgrades}
          key={key}
        >
          <p>Accident only coverage</p>
        </AdditionalCoverage>
      )
    case "AlternativePlus":
      return (
        <AdditionalCoverage
          logo={AlternativePlus}
          fieldName="emergency"
          tooltipText="test"
          option={option}
          setSelectedUpgrade={setSelectedUpgrade}
          selectedUpgrades={selectedUpgrades}
          key={key}
        >
          <p>
            Coverage for alternative, holistic and behavioral care including
            chiropractic treatment, acupuncture, herbal supplements and
            vitamins.
          </p>
        </AdditionalCoverage>
      )
    case "BreedingCoverage":
      return (
        <AdditionalCoverage
          logo={BreedingCoverage}
          fieldName="hereditary"
          tooltipText="test"
          option={option}
          setSelectedUpgrade={setSelectedUpgrade}
          selectedUpgrades={selectedUpgrades}
          key={key}
        >
          <p>
            Coverage for accidents, illnesses, and complications relating to or
            caused by breeding, pregnancy, whelping or nursing, including
            emergency c-sections.
          </p>
        </AdditionalCoverage>
      )
    case "Certificate":
      return (
        <AdditionalCoverage
          logo={Certificate}
          fieldName="emergency"
          tooltipText="test"
          option={option}
          setSelectedUpgrade={setSelectedUpgrade}
          selectedUpgrades={selectedUpgrades}
          key={key}
        >
          <p>
            Covers the cost of exam fees for your sick or injured pet during an
            unplanned visit to the vet or emergency room. Eligible at your
            regular veterinarian, speciality clinics and emergency rooms. This
            is HIGHLY recommended.
          </p>
        </AdditionalCoverage>
      )
    case "CompanionCare":
      return (
        <AdditionalCoverage
          logo={CompanionCare}
          fieldName="hereditary"
          tooltipText="test"
          option={option}
          setSelectedUpgrade={setSelectedUpgrade}
          selectedUpgrades={selectedUpgrades}
          key={key}
        >
          <p>Accident and Illness coverage</p>
        </AdditionalCoverage>
      )
    case "CompanionPlus":
      return (
        <AdditionalCoverage
          logo={CompanionPlus}
          fieldName="emergency"
          tooltipText="test"
          option={option}
          setSelectedUpgrade={setSelectedUpgrade}
          selectedUpgrades={selectedUpgrades}
          key={key}
        >
          <p>
            Covers the cost of exam fees for your sick or injured pet during an
            unplanned visit to the vet or emergency room. Eligible at your
            regular veterinarian, speciality clinics and emergency rooms. This
            is HIGHLY recommended.
          </p>
        </AdditionalCoverage>
      )
    case "CompanionSelect":
      return (
        <AdditionalCoverage
          logo={CompanionSelect}
          fieldName="hereditary"
          tooltipText="test"
          option={option}
          setSelectedUpgrade={setSelectedUpgrade}
          selectedUpgrades={selectedUpgrades}
          key={key}
        >
          <p>
            Coverage for hereditary and congenital conditions, as well as other
            chronic conditions like arthritis, diabetes and heart disease. Since
            your pet is under the age of 2, this coverage is available, which
            will remain for the lifetime of your pet’s coverage, should you want
            it.
          </p>
        </AdditionalCoverage>
      )
    case "ExamCare":
      return (
        <AdditionalCoverage
          logo={ExamCare}
          fieldName="emergency"
          tooltipText="test"
          option={option}
          setSelectedUpgrade={setSelectedUpgrade}
          selectedUpgrades={selectedUpgrades}
          key={key}
        >
          <p>
            Covers the cost of exam fees for your sick or injured pet during an
            unplanned visit to the vet or emergency room. Eligible at your
            regular veterinarian, speciality clinics and emergency rooms. This
            is HIGHLY recommended.
          </p>
        </AdditionalCoverage>
      )
    case "ExamPlus":
      return (
        <AdditionalCoverage
          logo={ExamPlus}
          fieldName="hereditary"
          tooltipText="test"
          option={option}
          setSelectedUpgrade={setSelectedUpgrade}
          selectedUpgrades={selectedUpgrades}
          key={key}
          mostPopular={true}
        >
          <p>
            Covers the cost of exam fees for your sick or injured pet during an
            unplanned visit to the vet or emergency room.
          </p>
        </AdditionalCoverage>
      )
    case "HereditaryPlus":
      return (
        <AdditionalCoverage
          logo={HereditaryPlus}
          fieldName="emergency"
          tooltipText="test"
          option={option}
          setSelectedUpgrade={setSelectedUpgrade}
          selectedUpgrades={selectedUpgrades}
          key={key}
        >
          <p>
            Coverage for hereditary and congenital conditions, as well as other
            chronic conditions like arthritis, diabetes, and heart disease. Must
            be under the age of 2 to enroll.
          </p>
        </AdditionalCoverage>
      )
    case "InheritedPlus":
      return (
        <AdditionalCoverage
          logo={InheritedPlus}
          fieldName="hereditary"
          tooltipText="test"
          option={option}
          setSelectedUpgrade={setSelectedUpgrade}
          selectedUpgrades={selectedUpgrades}
          key={key}
        >
          <p>
            Coverage for hereditary and congenital conditions as well as other
            chronic conditions like arthritis, diabetes and heart disease.
          </p>
        </AdditionalCoverage>
      )
    case "SupportPlus":
      return (
        <AdditionalCoverage
          logo={SupportPlus}
          fieldName="emergency"
          tooltipText="test"
          option={option}
          setSelectedUpgrade={setSelectedUpgrade}
          selectedUpgrades={selectedUpgrades}
          key={key}
        >
          <p>
            Supportive coverage for expenses incurred when having to say goodbye
            to your beloved pet. Must be under the age of 5 to enroll.
          </p>
        </AdditionalCoverage>
      )
    default:
      return
  }
}
