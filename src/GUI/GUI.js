import React, { useState } from "react"
import { connect } from "react-redux"

import { setWaveform } from "../redux/actions"
import "./GUI.css"

const GUI = props => {
  const [dropdown, setDropdown] = useState(false)

  const handleClick = e => {
    props.setWaveform(e.target.getAttribute("name"))
    setDropdown(false)
  }

  return (
    <div className="gui-container">
      <div className="gui-waveform">
        <div className="gui-waveform-btn" onClick={_ => setDropdown(!dropdown)}>
          {props.waveform}
        </div>
        <div
          className="gui-waveform-choices"
          style={{ opacity: `${dropdown ? "100%" : "0"}` }}
        >
          <div
            className="gui-waveform-choice"
            style={props.waveform === "sine" ? { background: "grey" } : {}}
            onClick={handleClick}
            name="sine"
          >
            sine
          </div>
          <div
            className="gui-waveform-choice"
            style={props.waveform === "square" ? { background: "grey" } : {}}
            onClick={handleClick}
            name="square"
          >
            square
          </div>
          <div
            className="gui-waveform-choice"
            style={props.waveform === "sawtooth" ? { background: "grey" } : {}}
            onClick={handleClick}
            name="sawtooth"
          >
            sawtooth
          </div>
          <div
            className="gui-waveform-choice"
            style={props.waveform === "triangle" ? { background: "grey" } : {}}
            onClick={handleClick}
            name="triangle"
          >
            triangle
          </div>
        </div>
      </div>
    </div>
  )
}

const mstp = state => {
  return {
    waveform: state.waveform
  }
}

export default connect(mstp, { setWaveform })(GUI)
