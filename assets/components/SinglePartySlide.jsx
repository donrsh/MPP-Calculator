import React, { PropTypes } from 'react';
import Slider from 'material-ui/lib/slider';

export var SinglePartySlide = React.createClass({

	propTypes: {
		// injected from props
		partyName: PropTypes.string.isRequired,
		vote: PropTypes.number.isRequired,
		voteLimit: PropTypes.number.isRequired,
		onSlideMove: PropTypes.func.isRequired
	},

	render: function( props ){

		const { partyName, vote, voteLimit, onSlideMove } = this.props;

		return (
			<div className="singlePartyBar">
				<Slider
					ref = { c => this.slider = c }
					defaultValue = { vote }
					onChange = { () => {
						if(this.slider.getValue() <= voteLimit)
							onSlideMove(partyName, this.slider.getValue());
					}}
				/>
				<div> {vote} </div>
			</div>
		)
	}
})