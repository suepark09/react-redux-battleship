// DO NOT USE!!!!!!!!!!!!!!!

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import allReducers from './reducers/index'
import {watchBoard} from './sagas/index'

// const sagaMiddleware = createSagaMiddleware()

// const store = createStore(allReducers, compose(applyMiddleware(thunk, sagaMiddleware)))

// sagaMiddleware.run(watchBoard)

// export default store
