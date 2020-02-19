import React from 'react'
import { connect } from 'react-redux'
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css'
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css'
import JqxKnob, {
  IKnobProps
} from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxknob'

import { setAttack } from '../redux/actions'

import Waveform from './waveform/Waveform'
import './GUI.css'

class GUI extends React.PureComponent<{}, IKnobProps> {
  constructor(props: {}) {
    super(props)
    const pointer = {
      offset: '55%',
      size: '25%',
      style: { fill: '#00a4e1', stroke: 'grey' },
      thickness: 3,
      type: 'line'
    }
    const progressBar = {
      background: { fill: 'grey' },
      offset: '90%',
      size: '9%',
      style: { fill: '#00a4e1' }
    }
    this.state = {
      pointer,
      progressBar
    }
  }

  render() {
    return (
      <div className="gui-container">
        <div className="gui-osc1">
          Osc I
          <Waveform />
        </div>
        {/* <div className="gui-osc2">
        Osc II
        <Waveform />
      </div> */}
        <div className="container">
          <JqxKnob
            width={'100px'}
            height={'50%'}
            min={0}
            max={100}
            value={this.props.attack}
            startAngle={130}
            endAngle={410}
            snapToStep={true}
            rotation={'clockwise'}
            pointer={this.state.pointer}
            progressBar={this.state.progressBar}
            onChange={e => this.props.setAttack(e.args.value, 'attack')}
          />
        </div>
      </div>
    )
  }
}

const mstp = state => {
  return {
    attack: state.attack
  }
}

export default connect(mstp, { setAttack })(GUI)
