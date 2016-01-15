// dependencies
import React from 'react'; 
import ReactDOM from 'react-dom';
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

//configure store
import { configureStore } from './assets/configureStore.jsx'
var store = configureStore(initialState)

// action creators
import { ac_ADD_COUNTER } from './assets/actions/ADD_COUNTER.js'
import { ac_CHANGE_VOTE } from './assets/actions/CHANGE_VOTE.js'
 
ReactDOM.render(
	<Provider store={store}>
		<ListOfSingleParty
			partyNames={partyNames}
		/>
	</Provider>
	,
	document.getElementById('root')
)