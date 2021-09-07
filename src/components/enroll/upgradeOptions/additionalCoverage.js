import React from "react"
import Switch from "react-switch"
import InformationIcon from "../../../images/information-icon.svg"
import MostImportantImage from "../../../images/mostPopular.svg"
const AdditionalCoverage = ({
  logo,
  children,
  option,
  mostPopular,
  setSelectedUpgrade,
  selectedUpgrades,
  key,
}) => {
  const switchState = selectedUpgrades => {
    return selectedUpgrades.filter(
      upgrade => upgrade === option.stateFilingProductId
    ).length > 0
      ? true
      : false
  }
  const checked = switchState(selectedUpgrades)
  const handleChange = nextChecked => {
    // setChecked(nextChecked)
    if (nextChecked === false) {
      setSelectedUpgrade(prevState => {
        return {
          ...prevState,
          selectedUpgrades: prevState.selectedUpgrades.filter(
            item => item !== option.stateFilingProductId
          ),
        }
      })
    } else {
      setSelectedUpgrade(prevState => {
        return {
          ...prevState,
          selectedUpgrades: [
            ...prevState.selectedUpgrades,
            option.stateFilingProductId,
          ],
        }
      })
    }
  }

  return (
    <div className="additional-coverage-wrapper">
      <div className="additional-coverage-container">
        <div className="additional-coverage-content">
          <div
            className={`additional-coverage-title ${mostPopular &&
              "most-popular"}`}
          >
            <img src={logo} alt="logo" className="product-logo" />
            {mostPopular && (
              <img
                className="most-popular-image"
                src={MostImportantImage}
                alt="most popular"
              />
            )}
          </div>
          {children}
        </div>
        <div className="additional-coverage-control">
          <div className="additional-coverage-price">{`$${option.monthlyInstallment}/month`}</div>
          <Switch
            onChange={e => handleChange(e)}
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
    </div>
  )
}

export default AdditionalCoverage
