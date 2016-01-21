import { CHANGE_VOTE } from '../actions/CHANGE_VOTE.js'
import { SHOW_PARTY } from '../actions/SHOW_PARTY.js'
import { HIDE_PARTY } from '../actions/HIDE_PARTY.js'

export const vote = function(state={}, action){
	// console.log('vote reducer working')

	switch (action.type){

		case CHANGE_VOTE: {
			
			return {
				...state,
				[action.party]: action.vote
			}
			break;
		}

		case HIDE_PARTY: {
			return{
				...state,
				[action.party]: 0
			}
		}

		default: return state
	}
}