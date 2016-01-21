import { SHOW_PARTY } from '../actions/SHOW_PARTY.js'
import { HIDE_PARTY } from '../actions/HIDE_PARTY.js'

export const visibleParties = function(state=[], action){
	// console.log('visibleParties reducer working')
	switch (action.type){

		case SHOW_PARTY: {
			return [
				...state,
				action.party
			]
		}

		case HIDE_PARTY: {
			return state.filter(function(ele){
				return ele != action.party
			})
		}

		default: return state
	}
}