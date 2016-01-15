import React, { PropTypes } from 'react';

export const TestButton = React.createClass({

	propTypes: {
		action: PropTypes.func.isRequired,
	},

	render: function( props ){

		return(
			<button
				onClick={this.props.action}
			>
				{this.props.children}
			</button>
		)
	}
})