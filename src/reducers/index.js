import boardReducer from './boardReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  squares: boardReducer
})

export default allReducers
