import React from "react"
import useWindowSize from "../../utils/useWindowSize"

const Table007 = () => {
  const { width } = useWindowSize()

  return (
    <tbody>
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
      {/* <tr>
        <td>Heartworm Prevention</td>
        <td>$30</td>
        <td>$30</td>
      </tr> */}
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
      {/* <tr>
        <td>Microchip</td>
        <td>$20</td>
        <td>$40</td>
      </tr> */}
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
    </tbody>
  )
}

export default Table007
