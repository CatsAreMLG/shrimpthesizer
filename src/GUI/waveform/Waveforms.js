import React from 'react'
import { connect } from 'react-redux'

import { setWaveform } from '../../redux/actions'

const Waveforms = props => {
  const handleClick = e => {
    props.setWaveform(e.target.getAttribute('name'))
    props.setDropdown(false)
  }

  return (
    <>
      {props.types.map(type => {
        return (
          <div
            className="gui-waveform-choice"
            style={
              props.waveform === type
                ? { background: 'rgba(255, 255, 255, 0.25)' }
                : {}
            }
            onClick={handleClick}
            name={type}>
            {type}
          </div>
        )
      })}
    </>
  )
}

const mstp = state => {
  return {
    waveform: state.waveform
  }
}

export default connect(mstp, { setWaveform })(Waveforms)
