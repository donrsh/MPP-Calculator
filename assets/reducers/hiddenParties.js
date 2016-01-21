import { SHOW_PARTY } from '../actions/SHOW_PARTY.js'
import { HIDE_PARTY } from '../actions/HIDE_PARTY.js'

export const hiddenParties = function(state=[], action){
	// console.log('hiddenParties reducer working')
	switch (action.type){

		case HIDE_PARTY: {
			return [
				...state,
				action.party
			]
		}

		case SHOW_PARTY: {
			return state.filter(function(ele){
				return ele != action.party
			})
		}

		default: return state
	}
}