//dependencies
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// styles
require('../scss/Header.scss')

export var Header = React.createClass({

	propTypes: {
		//injected from mapStateToProps
		totalVote: PropTypes.number.isRequired
	},

	render: function(){
		
		const { totalVote } = this.props

		return (
			<header>
				<div id="title">政黨票<br/>計算機</div>
				<div id="totalVote">
					目前總投票率<br/>
					<span id="totalVoteNumber">
						{(totalVote * 100).toFixed(2)} / 100 % 
					</span>
				</div>
			</header>
		)
	}
})

const mapStateToProps = function(state){
	var totalVote = 0
	for(var party in state.vote){
		totalVote += state.vote[party]
	}

	return { totalVote }
}

Header = connect(mapStateToProps)(Header)