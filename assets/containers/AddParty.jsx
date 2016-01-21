//dependencies
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//material ui
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';

//data
import staticData from '../static.js'

//action creators
import { ac_SHOW_PARTY } from '../actions/SHOW_PARTY.js'

// styles
require ('../scss/AddParty.scss')

export var AddParty = React.createClass({

	propTypes:{
		// injected from mapStateToProps
		hiddenParties: PropTypes.arrayOf(PropTypes.string).isRequired,

		// injected from mapDispatchToProps
		dispatch_SHOW_PARTY: PropTypes.func.isRequired
	},

	render: function(){
		const { hiddenParties } = this.props
		const { dispatch_SHOW_PARTY } = this.props

		return(<div className="addParty">

				<div className="addParty_icon">
					<i className="material-icons">add_circle</i>
				</div>			

				<div className="addParty_hiddenPartiesList">
				{
					hiddenParties.map(function(ele, idx){
						return (
						<RaisedButton
							key={idx}
							label={staticData[ele].zh}
							onClick={()=>dispatch_SHOW_PARTY(ele)}
						/>
						)
					})
				}
			</div>
		</div>)
	}
})

const mapStateToProps = function(state){
	const { hiddenParties } = state
	return {
		hiddenParties
	}
}

const mapDispatchToProps = function(dispatch){
	return{
		dispatch_SHOW_PARTY: bindActionCreators( ac_SHOW_PARTY, dispatch )
	}
}

AddParty = connect(mapStateToProps, mapDispatchToProps)(AddParty)