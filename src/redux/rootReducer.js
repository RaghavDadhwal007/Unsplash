import { combineReducers } from 'redux'
import imageReducer from './images/Reducer'

const rootReducer = combineReducers({
  image: imageReducer,
})

export default rootReducer
