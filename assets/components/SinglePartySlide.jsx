import React, { PropTypes } from 'react';
import Slider from 'material-ui/lib/slider';

export var SinglePartySlide = React.createClass({

	propTypes: {
		// injected from props
		partyName: PropTypes.string.isRequired,
		vote: PropTypes.number.isRequired,
		voteLimit: PropTypes.number.isRequired,
		dispatch_CHANGE_VOTE: PropTypes.func.isRequired
	},

	render: function(){

		const { partyName, vote, voteLimit, dispatch_CHANGE_VOTE } = this.props;

		return (
			<div className="singlePartyBar">
				<Slider
					ref={ c => this.slider = c }
					defaultValue={vote}
					value={vote}
					step={0.0001}
					onChange={ () => {
						if(this.slider.getValue() <= voteLimit)
							dispatch_CHANGE_VOTE(partyName, this.slider.getValue());
						else{
							this.slider.setValue(vote)
						}
					}}
				/>
			</div>
		)
	}
})