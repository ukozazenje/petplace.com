import React from "react"

const AccidentCare = () => {
  return (
    <>
      <h3>AccidentCare</h3>
      <p>
        AccidentCare provides coverage for the diagnostics and treatment for
        unexpected injuries caused by accidents. AccidentCare has set limits of
        $100 deductible, unlimited annual limit and 90% reimbursement. Includes
        coverage for:
      </p>
      <div className="what-we-cover-panel-lists check-list">
        <ul>
          <li>Accidents</li>
          <li>Injuries</li>
          <li>X-rays & Ultrasound</li>
          <li>CT Scan & MRI</li>
        </ul>
        <ul>
          <li>Labwork</li>
          <li>Prescription Medications</li>
          <li>Vitamins & Supplements</li>
          <li>Hospitalization</li>
        </ul>
        <ul>
          <li>Surgery</li>
          <li>Hydrotherapy</li>
          <li>Physical Therapy</li>
          <li>Emergency Care</li>
          <li>Pet Ambulance</li>
        </ul>
      </div>
      <hr />
      <h5>What is Not Covered:</h5>
      <div className="what-we-cover-panel-lists x-checked-list">
        <ul>
          <li>Pre-existing conditions</li>
          <li>Illnesses</li>
          <li>Exam Fees (Unless enrolled in ExamPlus)</li>
          <li>
            Routine and Wellness Care (Unless enrolled in Defender/DefenderPlus)
          </li>
        </ul>
      </div>
      <p>
        There is a 2-day waiting period. Some conditions may require extended
        waiting periods. Coverage is subject to deductible and coinsurance up to
        your annual maximum.
      </p>
    </>
  )
}

export default AccidentCare
