export const CHANGE_VOTE = 'CHANGE_VOTE'

export const ac_CHANGE_VOTE = function(party, vote){
	return {
		type: CHANGE_VOTE,
		party,
		vote,
	}
}
