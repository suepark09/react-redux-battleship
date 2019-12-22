import boardReducer from './boardReducer'
import setShips from './setShips'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
  squares: boardReducer,
  setShips: setShips

})

export default allReducers
