import { createStore } from 'redux'
import setShips from './reducers/setShips'

const store = createStore(setShips)

export default store