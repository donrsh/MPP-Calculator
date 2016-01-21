// dependencies
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// containers
import { Header } from './containers/Header.jsx'
import { AddParty } from './containers/AddParty.jsx'

// components
import { ListOfSingleParty } from './components/ListOfSingleParty.jsx'

export var App = React.createClass({

	propTypes: {
		// injected from mapStateToProps
	    visibleParties: PropTypes.arrayOf(PropTypes.string).isRequired
	},

	render: function(){

		const { visibleParties } = this.props

		return (
			<div id="app">
				<Header />
				<ListOfSingleParty partyNames={visibleParties} />
				<AddParty />
			</div>
		)
	}
})

const mapStateToProps = function(state){
	const { visibleParties } = state
	return{
		visibleParties
	}
}

App = connect(mapStateToProps)(App)