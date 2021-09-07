import React from "react"
import StepIcon from "../../images/current-step.svg"

const ProgressBar = ({ activeStepInfo }) => {
  return (
    activeStepInfo.step !== 6 && (
      <section className="progress-bar-section">
        <div className="progress-bar">
          <div className="progress-steps-headings-desktop">
            <p>1. Pet Info</p>
            <p>2. Accident and Illness</p>
            <p>3. Routine Care</p>
            <p>4. Enroll</p>
          </div>
          <div className="progress-steps-headings-mobile">
            <p>{activeStepInfo.title}</p>
          </div>
          <div className="progress-form">
            <div
              className={`progression`}
              style={{ width: `${activeStepInfo.percent}%` }}
            ></div>
            <div
              className={`step step-one ${
                activeStepInfo.percent >= 0 ? "active" : ""
              } `}
            >
              {activeStepInfo.percent >= 0 ? (
                <img src={StepIcon} alt="icon" />
              ) : (
                <span className="ellipse"></span>
              )}
            </div>
            <div
              className={`step step-two ${
                activeStepInfo.percent >= 33 ? "active" : ""
              } `}
            >
              {activeStepInfo.percent >= 33 ? (
                <img src={StepIcon} alt="icon" />
              ) : (
                <span className="ellipse"></span>
              )}
            </div>
            <div
              className={`step step-three ${
                activeStepInfo.percent >= 66 ? "active" : ""
              } `}
            >
              {activeStepInfo.percent >= 66 ? (
                <img src={StepIcon} alt="icon" />
              ) : (
                <span className="ellipse"></span>
              )}
            </div>
            <div
              className={`step step-four ${
                activeStepInfo.percent === 83 ? "active" : ""
              } `}
            >
              {activeStepInfo.percent === 83 ? (
                <img src={StepIcon} alt="icon" />
              ) : null}
            </div>
            <div
              className={`step step-five ${
                activeStepInfo.percent >= 99 ? "active" : ""
              } `}
            >
              {activeStepInfo.percent >= 99 ? (
                <img src={StepIcon} alt="icon" />
              ) : (
                <span className="ellipse"></span>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  )
}

export default ProgressBar
