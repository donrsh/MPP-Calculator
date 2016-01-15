//dependencies
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//data
import staticData from '../static.js'

//components
import { SinglePartySlide } from '../components/SinglePartySlide.jsx'
import { SinglePartyCandidates } from '../components/SinglePartyCandidates.jsx' 

//action creators
import { ac_CHANGE_VOTE } from '../actions/CHANGE_VOTE.js'

export var SingleParty = React.createClass({

	propTypes: {
		//injected from props
		partyName: PropTypes.string.isRequired,
		
		//injected from mapStateToProps
		vote: PropTypes.number.isRequired,
		voteLimit: PropTypes.number.isRequired,
		advancedVote: PropTypes.number.isRequired,
		electedNum: PropTypes.number.isRequired,

		//injected from mapDispatchToProps
		onSlideMove: PropTypes.func.isRequired,
		
	},

	render: function( props ){
		const { partyName, vote, voteLimit, advancedVote, electedNum, onSlideMove } = this.props;

		return(
			<div className="singleParty">
				<div className="header">
					<span className="singleParty__partyName">{partyName}</span>
					<span className="singleParty__vote">原始得票率: {vote}</span>
					<span className="singleParty__vote">步進得票率: {advancedVote}</span>
				</div>

				<SinglePartySlide
					{...{partyName, vote, voteLimit, onSlideMove}}
				/>

				<SinglePartyCandidates 
					{...{partyName, electedNum}}
				/>
			</div>
		)
	}
})

const mapStateToProps = (state, ownProps) => {
	const { partyName } = ownProps;

	let totalVote = 0;
	for(var party in state.vote){
		totalVote += state.vote[party]
	}
	
	const vote = state.vote[partyName]
	const voteLimit = 1 - totalVote
	const advancedVote = state.vote[partyName]/(1 - totalVote)
	const electedNum = ~~(staticData[partyName].length * advancedVote)

	return{
		vote,
		voteLimit,
		advancedVote,
		electedNum,
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return{
		onSlideMove: bindActionCreators( ac_CHANGE_VOTE, dispatch )
	}
}

SingleParty = connect( mapStateToProps, mapDispatchToProps )( SingleParty );