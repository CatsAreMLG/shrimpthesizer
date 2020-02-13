import React, {useState} from 'react';
import * as Tone from "tone";

import keys from './data/keys'
import './App.css';

//create a synth and connect it to the master output (your speakers)
let osc = {type:"sine"}
let env = {
  attack : 0.1 ,
  decay : 0.1 ,
  sustain : 0.3 ,
  release : 1
}

function App() {
  const [down, setDown] = useState({})
  const play = async (e) => {
    let key = e.key
    if (!down[key]) {
      if (keys[key]) {
        await Tone.start()
        let synth = new Tone.Synth({
          oscillator : osc,
          envelope : env
        }).toMaster()
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
      hey
    </div>
  );
}

export default App;
