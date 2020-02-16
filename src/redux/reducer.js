import { SET_WAVEFORM } from "./actions"

let defaultState = {
  waveform: "sine"
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_WAVEFORM:
      if (action.payload) {
        return {
          ...state,
          waveform: action.payload
        }
      } else {
        return state
      }
    default:
      return state
  }
}
export default reducer
