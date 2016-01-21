import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Slider from 'material-ui/lib/slider';

export var TotalBar = React.createClass({

	propTypes: {
		//injected from mapStateToProps
		residueVote: PropTypes.number.isRequired,		
	},

	render: function(){

		const { residueVote } = this.props

		return (
			<div id="TotalBar">
				<Slider
					disabled={ true }
					value={ residueVote }
				/>
				<div>未分配比例還有 <span>{ residueVote }</span> %</div>
			</div>
		)
	}
})

const mapStateToProps = ( state ) => {
	let residueVote = 1;
	for (key in state.vote){
		residueVote -= state.vote[key]
	}

	return {
		residueVote
	}
}