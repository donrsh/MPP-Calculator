import { ADD_COUNTER } from '../actions/ADD_COUNTER.js'

export const counter = function(state=0, action){
	switch(action.type){
		case ADD_COUNTER:{
			return ++state;
			break;
		}

		default:
			return state
	}
}