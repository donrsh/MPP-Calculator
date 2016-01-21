// dependencies
import React, { PropTypes } from 'react';
import staticData from '../static.js'

// styles
require('../scss/SinglePartyCandidates.scss')

export var SinglePartyCandidates = React.createClass({

	propTypes:{
		partyName: PropTypes.string.isRequired,
		electedNum: PropTypes.number.isRequired
	},

	render: function(){

		const { partyName, electedNum } = this.props;
		const candidates = staticData[partyName].candidates;

		return(
			<div className="singlePartyCandidates">
				{
					candidates.map((candidate, idx)=>{
						let classname = idx < electedNum ? "candidate elected" : "candidate";

						return  <span className={classname} key={idx}>{candidate}</span>
					})
				}
			</div>
		)
	}
})