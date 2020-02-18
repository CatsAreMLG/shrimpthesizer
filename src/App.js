import React, { useState } from "react"
import * as Tone from "tone"
import { connect } from "react-redux"

import GUI from "./GUI/GUI"
import keys from "./data/keys"
import "./App.css"

//create a synth and connect it to the master output (your speakers)
let osc = { type: "triangle" }
let env = {
  attack: 0.1,
  decay: 0.1,
  sustain: 0.3,
  release: 1
}

function App(props) {
  const [down, setDown] = useState({})
  const play = async e => {
    let key = e.key
    if (!down[key]) {
      if (keys[key]) {
        await Tone.start()

        let tremolo = new Tone.Tremolo({
          frequency: 0,
          type: "sine",
          depth: 0.25,
          spread: 0
        })
          .toMaster()
          .start()

        let synth = new Tone.Synth({
          oscillator: { type: props.waveform },
          envelope: env
        }).chain(tremolo, Tone.Master)

        synth.triggerAttack(keys[key])
        let newDown = down
        newDown[key] = synth
        setDown(newDown)
      }
    }
  }
  const stop = e => {
    console.log(down)
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
    waveform: state.waveform
  }
}

export default connect(mstp, {})(App)
