import React, { useState } from 'react'
import { connect } from 'react-redux'

import { setWaveform } from '../../redux/actions'
import Waveforms from './Waveforms'

const Waveform = props => {
  const [dropdown, setDropdown] = useState(false)

  return (
    <div className="gui-waveform">
      <div className="gui-waveform-btn" onClick={_ => setDropdown(!dropdown)}>
        {props.waveform}
      </div>
      <div
        className="gui-waveform-choices"
        style={{ opacity: `${dropdown ? '100%' : '0'}` }}>
        <Waveforms
          setDropdown={setDropdown}
          types={['sine', 'square', 'sawtooth', 'triangle']}
        />
      </div>
    </div>
  )
}

const mstp = state => {
  return {
    waveform: state.waveform
  }
}

export default connect(mstp, { setWaveform })(Waveform)
