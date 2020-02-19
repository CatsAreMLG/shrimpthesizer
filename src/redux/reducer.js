import {
  SET_WAVEFORM,
  SET_ATTACK,
  SET_DECAY,
  SET_SUSTAIN,
  SET_RELEASE
} from './actions'

let defaultState = {
  waveform: 'sine',
  attack: 10,
  decay: 10,
  sustain: 10,
  release: 10
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_WAVEFORM:
      return action.payload
        ? {
            ...state,
            waveform: action.payload
          }
        : state
    case SET_ATTACK:
      return action.payload
        ? {
            ...state,
            attack: action.payload
          }
        : state
    case SET_DECAY:
      return action.payload
        ? {
            ...state,
            decay: action.payload
          }
        : state
    case SET_RELEASE:
      return action.payload
        ? {
            ...state,
            release: action.payload
          }
        : state
    case SET_SUSTAIN:
      return action.payload
        ? {
            ...state,
            sustain: action.payload
          }
        : state
    default:
      return state
  }
}
export default reducer
