import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import allReducers from './reducers/index'
import { watchBoard } from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(allReducers, compose(applyMiddleware(thunk, sagaMiddleware)))

sagaMiddleware.run(watchBoard)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
