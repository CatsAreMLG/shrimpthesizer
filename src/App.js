import React, { useState, useEffect } from 'react'
import * as Tone from 'tone'
import { connect } from 'react-redux'

import GUI from './GUI/GUI.tsx'
import keys from './data/keys'
import { setAttack } from './redux/actions'
import './App.css'

function App(props) {
  function useForceUpdate() {
    const [value, setValue] = useState(0) // integer state
    return () => setValue(value => ++value) // update the state to force render
  }
  const forceUpdate = useForceUpdate()
  const [down, setDown] = useState({})
  const play = async e => {
    let key = e.key
    if (!down[key]) {
      if (keys[key]) {
        await Tone.start()

        let tremolo = new Tone.Tremolo({
          frequency: 0,
          type: 'sine',
          depth: 0.25,
          spread: 0
        })
          .toMaster()
          .start()
        var vol = new Tone.Volume(-20)
        let synth = new Tone.Synth({
          oscillator: { type: props.waveform },
          envelope: {
            attack: props.attack / 10 + 0.1,
            decay: props.decay / 10 + 0.1,
            sustain: props.sustain / 10 + 0.1,
            release: props.release / 10 + 0.1
          }
        }).chain(vol, Tone.Master)

        synth.triggerAttack(keys[key])
        let newDown = down
        newDown[key] = synth
        setDown(newDown)
      }
    }
  }
  const stop = e => {
    let key = e.key
    if (down[key]) {
      down[key].triggerRelease()
      let newDown = down
      delete newDown[key]
      setDown(newDown)
    }
  }

  return (
    <div className="App" onKeyDown={play} onKeyUp={stop} tabIndex="0">
      <GUI />
    </div>
  )
}

const mstp = state => {
  return {
    waveform: state.waveform,
    attack: state.attack,
    decay: state.decay,
    sustain: state.sustain,
    release: state.release
  }
}

export default connect(mstp, { setAttack })(App)
