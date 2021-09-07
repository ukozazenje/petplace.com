import React from "react"

const CompanionCare = () => {
  return (
    <>
      <h3>CompanionCare</h3>
      <p>
        CompanionCare provides coverage for veterinary expenses related to the
        diagnosis and treatment of accidents, injuries, and illnesses. Our
        Custom option allows you to create a personalized plan by choosing your
        own deducible, annual limit, and coinsurance. Our Basic plan is a
        cost-effective option for those looking to cover minor accidents and
        illnesses. It offers the same great coverage as CompanionCare, but with
        set limits and lower premiums. Both Custom and Basic include coverage
        for:
      </p>
      <div className="what-we-cover-panel-lists check-list">
        <ul>
          <li>Accidents</li>
          <li>Injuries</li>
          <li>Illnesses</li>
          <li>X-rays & Ultrasound</li>
          <li>CT Scan & MRI</li>
          <li>Labwork</li>
        </ul>
        <ul>
          <li>Prescription Medications</li>
          <li>Vitamins & Supplements</li>
          <li>Surgery</li>
          <li>Behavioral Issues</li>
          <li>Alternative & Holistic Treatment</li>
        </ul>
        <ul>
          <li>Hydrotherapy</li>
          <li>Physical Therapy</li>
          <li>Emergency Care</li>
          <li>Cancer Coverage</li>
          <li>Pet Ambulance</li>
          <li>Hospitalization</li>
        </ul>
      </div>
      <hr />
      <h5>What is Not Covered:</h5>
      <div className="what-we-cover-panel-lists x-checked-list">
        <ul>
          <li>Pre-existing conditions</li>
          <li>
            Hereditary or Congenital Conditions (Unless enrolled in
            HereditaryPlus)
          </li>
          <li>Exam Fees (Unless enrolled in ExamPlus)</li>
          <li>
            Routine and Wellness Care (Unless enrolled in Defender/DefenderPlus)
          </li>
          <li>Costs related to breeding</li>
          <li>Elective or Cosmetic Procedures</li>
        </ul>
      </div>
      <p>
        There is a 2-day waiting period for accidents and a 14-day waiting
        period for illnesses before coverage begins. Some conditions may require
        an extended waiting period. Coverage is subject to deductible and
        coinsurance up to your annual maximum.
      </p>
    </>
  )
}

export default CompanionCare
