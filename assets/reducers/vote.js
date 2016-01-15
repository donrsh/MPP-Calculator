import { CHANGE_VOTE } from '../actions/CHANGE_VOTE.js'

export const vote = function(state={}, action){

	switch (action.type){

		case CHANGE_VOTE: {
			console.log('vote reducer working')
			return {
				...state,
				[action.party]: action.vote
			}
			break;
		}

		default: return state
	}
}