// dependencies
import React, { PropTypes } from 'react';

// containers & components
import { SingleParty } from '../containers/SingleParty.jsx'

export const ListOfSingleParty = React.createClass({

	propTypes: {
		//injected from props
		partyNames: PropTypes.arrayOf(PropTypes.string).isRequired
	},

	render: function( props ){

		const { partyNames } = this.props

		return(
			<div className="listOfSingleParty">
			{
				partyNames.map(function(partyName, idx){
					return <SingleParty partyName={partyName} key={idx} />
				})
			}
			</div>
		)
	}
})