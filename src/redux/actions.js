export const SET_WAVEFORM = 'SET_WAVEFORM'
export const SET_ATTACK = 'SET_ATTACK'
export const SET_DECAY = 'SET_DECAY'
export const SET_SUSTAIN = 'SET_SUSTAIN'
export const SET_RELEASE = 'SET_RELEASE'

export const setWaveform = waveform => {
  return { type: SET_WAVEFORM, payload: waveform }
}

export const setAttack = attack => {
  console.log(attack)
  return { type: SET_ATTACK, payload: attack }
}

export const setDecay = decay => {
  return { type: SET_DECAY, payload: decay }
}

export const setSustain = sustain => {
  return { type: SET_SUSTAIN, payload: sustain }
}

export const setRelease = release => {
  return { type: SET_RELEASE, payload: release }
}
