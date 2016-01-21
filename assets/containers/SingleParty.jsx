//dependencies
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//data
import staticData from '../static.js'

//components
import { SinglePartySlide } from '../components/SinglePartySlide.jsx'
import { SinglePartyCandidates } from '../components/SinglePartyCandidates.jsx' 
import TextField from 'material-ui/lib/text-field';

//action creators
import { ac_CHANGE_VOTE } from '../actions/CHANGE_VOTE.js'
import {ac_HIDE_PARTY } from '../actions/HIDE_PARTY.js'

// styles
require('../scss/SingleParty.scss')

export var SingleParty = React.createClass({

	propTypes: {
		//injected from props
		partyName: PropTypes.string.isRequired,
		
		//injected from mapStateToProps
		vote: PropTypes.number.isRequired,
		voteLimit: PropTypes.number.isRequired,
		advancedVote: PropTypes.number.isRequired,
		electedNum: PropTypes.number.isRequired,
		partyNameInZh: PropTypes.string.isRequired,

		//injected from mapDispatchToProps
		dispatch_CHANGE_VOTE: PropTypes.func.isRequired,
		dispatch_HIDE_PARTY: PropTypes.func.isRequired,
	},

	voteInputEnterKeyDown: function(){

		const { partyName, voteLimit, dispatch_CHANGE_VOTE } = this.props;
		const voteInput = this.voteInput;
		const voteNumberStr = voteInput.getValue();
		const voteNumberReg = /^\d{0,2}(.\d{0,2})$/i;
		// console.log(testReg.test(vote))\
		if(voteNumberReg.test(voteNumberStr)){
			const voteNum = Number(voteNumberStr);
			if(voteInput.getValue()/100 <= voteLimit){
				dispatch_CHANGE_VOTE(partyName, voteNum/100);
				voteInput.setErrorText('');
			} else {
				voteInput.setErrorText('總投票率超過 100%, 請重新輸入數值');
			}
		} else {
			console.log('err!')
			voteInput.setErrorText('數字格式不符, 請重新輸入')
		}
		this.voteInput.clearValue();
	},

	render: function(){
		const { partyName, partyNameInZh, vote, voteLimit, advancedVote, electedNum, } = this.props;
		const { dispatch_CHANGE_VOTE, dispatch_HIDE_PARTY } = this.props

		return(
			<div className="singleParty">

				<div className="singleParty__header">
				 	<div className="singleParty__partyNameInZh">{partyNameInZh}</div>
				 	<i className="material-icons singleParty_hideIcon"
				 		onClick={()=>dispatch_HIDE_PARTY(partyName)}>
				 		delete
				 	</i>
				</div>
				
				<div className="singleParty__infoAndControl">
						<div className="singleParty__vote">原始得票率: {(vote * 100).toFixed(2)}%</div>
						<div className="singleParty__vote">步進得票率: {(advancedVote * 100).toFixed(2)}%</div>
						<div className="singleParty__vote">席次: {electedNum}</div>
						<SinglePartySlide
							{...{partyName, vote, voteLimit, dispatch_CHANGE_VOTE}}
						/>

						<TextField className="voteInput"
							ref={c => this.voteInput = c}
							voteLimit={voteLimit}
							hintText='請在這裡輸入投票數, 格式 dd.dd'
							onEnterKeyDown={this.voteInputEnterKeyDown}
						/>
				</div>

				<div className="candidates">
					<SinglePartyCandidates 
						{...{partyName, electedNum}}
					/>
				</div>

			</div>
		)
	}
})

				


const mapStateToProps = (state, ownProps) => {
	const { partyName } = ownProps;
	
	let dataArr = [] //used later to store all further computated data, including advancedVote and electedNum for a single party
	let totalVote = 0;
	for(var party in state.vote){
		totalVote += state.vote[party]
		dataArr.push({
				party,
				vote: state.vote[party] 
		})
	}
	
	//calculate advancedVote and first-step electedNum and restNum
	//and initailize advancedNum and electedNum (set values to be 0)
	let restNum = 34;
	dataArr.forEach((ele) => {
		ele.advancedVote = totalVote != 0 ? ele.vote / totalVote : 0;
		ele.electedNum_first = ~~(34 * ele.advancedVote);
		ele.restNum = (34 * ele.advancedVote) % 1;
		ele.advancedNum = 0;
		ele.electedNum = 0;
		restNum -= ele.electedNum_first; 
	})

	//calculate advanceNum
	if(restNum > 0 && restNum != 34){
		dataArr.sort((party1, party2)=>{
			return party1.restNum >= party2.restNum ? -1 : 1;
		})

		dataArr.forEach((ele, idx) => {
			ele.advancedNum = idx < restNum ? 1 : 0;
		})
	}

	dataArr.forEach((ele, idx) => {
		ele.electedNum = ele.electedNum_first + ele.advancedNum;
	})
	
	
	const getDataOf = function(party){
		var data;
		dataArr.forEach((ele) => {
		if(ele.party == party) data = ele;
		})
		return data
	}

	console.log(getDataOf(partyName))

	const vote = state.vote[partyName]
	const voteLimit = 1 - (totalVote - vote)  //this takes some thinking!
	const advancedVote = getDataOf(partyName).advancedVote
	const electedNum = getDataOf(partyName).electedNum

	return{
		partyNameInZh: staticData[partyName].zh,
		vote,
		voteLimit,
		advancedVote,
		electedNum,
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return{
		dispatch_CHANGE_VOTE: bindActionCreators( ac_CHANGE_VOTE, dispatch ),
		dispatch_HIDE_PARTY: bindActionCreators( ac_HIDE_PARTY, dispatch )
	}
}

SingleParty = connect( mapStateToProps, mapDispatchToProps )( SingleParty );