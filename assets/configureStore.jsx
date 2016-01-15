import 'babel-polyfill'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import promise from 'redux-promise'
import { rootReducer } from './reducers/rootReducer.js'

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunk, promise, logger)(createStore);

export const configureStore = function(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}

// export const configureStore = function(initialState) {
// 	return createStore(rootReducer, initialState)
// }

