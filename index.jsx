// dependencies
import React from 'react'; 
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux'
import { Provider } from 'react-redux';

//initial state
import { initialState } from './assets/initialState.js'

//staticData
import { partyNames } from './assets/static.js'

//components
import { SinglePartySlide } from './assets/components/SinglePartySlide.jsx'
import { SinglePartyCandidates } from './assets/components/SinglePartyCandidates.jsx'
import { TestButton } from './assets/components/TestButton.jsx'
import { ListOfSingleParty } from './assets/components/ListOfSingleParty.jsx'

//container
import { SingleParty } from './assets/containers/SingleParty.jsx'
import { TotalBar } from './assets/containers/TotalBar.jsx'
import { AddParty } from './assets/containers/AddParty.jsx'

//the app
import { App } from './assets/App.jsx'

//configure store
import { configureStore } from './assets/configureStore.jsx'
var store = configureStore(initialState)

// action creators
import { ac_ADD_COUNTER } from './assets/actions/ADD_COUNTER.js'
import { ac_CHANGE_VOTE } from './assets/actions/CHANGE_VOTE.js'
import { ac_SHOW_PARTY } from './assets/actions/SHOW_PARTY.js'
import { ac_HIDE_PARTY } from './assets/actions/HIDE_PARTY.js'

// style

const dispatch_HIDE_PARTY = bindActionCreators( ac_HIDE_PARTY, store.dispatch )

ReactDOM.render(
	<Provider store={store}>
		<App
		/>
	</Provider>
	,
	document.getElementById('root')
)