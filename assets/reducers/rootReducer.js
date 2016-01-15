// dependencies
import { combineReducers } from 'redux'

// reducers
import { vote } from './vote.js' 
import { counter } from './counter.js'

export const rootReducer = combineReducers({
	vote,
	counter
})

// export const rootReducer = counter