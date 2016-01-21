// dependencies
import { combineReducers } from 'redux'

// reducers
import { vote } from './vote.js' 
import { visibleParties } from './visibleParties.js'
import { hiddenParties } from './hiddenParties.js'
import { counter } from './counter.js'

export const rootReducer = combineReducers({
	vote,
	visibleParties,
	hiddenParties
})

// export const rootReducer = counter