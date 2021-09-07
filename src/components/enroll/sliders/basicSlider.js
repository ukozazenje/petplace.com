import React from "react"
import Slider, { Range } from "rc-slider"
import { deductibleMarks, coverageMarks } from "../constants"
const BasicSlider = () => {
  return (
    <div className="slider-steps-row">
      <div className="slider-steps-col custom-slider">
        <p>Deductible:</p>
        <p className="slider-price-mobile">100$</p>
        <Slider
          disabled={true}
          min={1}
          max={5}
          marks={deductibleMarks}
          step={null}
          onChange={e => console.log(e)}
          defaultValue={1}
          handleStyle={[
            {
              background: "#D9D9D9",
              border: "5px solid white",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.15)",
              height: "30px",
              width: "30px",
              marginTop: "-14px",
              // marginLeft: "11px",
            },
          ]}
          railStyle={{ backgroundColor: "#D9D9D9", height: "6px" }}
          trackStyle={[{ backgroundColor: "#D9D9D9", height: "6px" }]}
          dotStyle={{
            background: "#FFFFFF",
            border: "5px solid white",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.15)",
            height: "30px",
            width: "30px",
            bottom: "-12px",
            marginLeft: "-15px",
          }}
        />
      </div>
      {/* Reimbursement slider */}
      <div className="slider-steps-col custom-slider">
        <p>Reimbursement:</p>
        <p className="slider-price-mobile">90%</p>
        <Slider
          disabled={true}
          min={10}
          max={30}
          reverse={true}
          marks={{
            10: "90%",
            20: "80%",
            30: "70%",
          }}
          step={null}
          onChange={e => console.log(e)}
          defaultValue={20}
          handleStyle={[
            {
              background: "#D9D9D9",
              border: "5px solid white",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.15)",
              height: "30px",
              width: "30px",
              marginTop: "-14px",
            },
          ]}
          railStyle={{ backgroundColor: "#D9D9D9", height: "6px" }}
          trackStyle={[{ backgroundColor: "#D9D9D9", height: "6px" }]}
          dotStyle={{
            background: "#FFFFFF",
            border: "5px solid white",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.15)",
            height: "30px",
            width: "30px",
            bottom: "-12px",
            marginLeft: "-15px",
            marginRight: "-15px",
          }}
        />
      </div>
      {/* Annual slider */}
      <div className="slider-steps-col custom-slider">
        <p>Annual Limit:</p>
        <p className="slider-price-mobile">Unlimited</p>
        <Slider
          disabled={true}
          dots={false}
          min={2500}
          max={17500}
          marks={coverageMarks}
          step={null}
          onChange={e => console.log(e)}
          defaultValue={17500}
          handleStyle={[
            {
              background: "#D9D9D9",
              border: "5px solid white",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.15)",
              height: "30px",
              width: "30px",
              marginTop: "-14px",
              // marginLeft: "11px",
            },
          ]}
          railStyle={{ backgroundColor: "#D9D9D9", height: "6px" }}
          trackStyle={[{ backgroundColor: "#D9D9D9", height: "6px" }]}
          dotStyle={{
            background: "#FFFFFF",
            border: "5px solid white",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.15)",
            height: "30px",
            width: "30px",
            bottom: "-12px",
            marginLeft: "-15px",
          }}
        />
      </div>
    </div>
  )
}

export default BasicSlider
