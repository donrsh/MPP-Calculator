import { partyNames } from './static.js'

export var initialState = {
	vote: {},
	counter: 0
};

// initialize the vote state
partyNames.forEach(function(name){
	initialState.vote[name] = 0.1
});