import { partyNames } from './static.js'

export var initialState = {
	vote: {},
	visibleParties: ['DPP','KMT','NPP','GSDP','PFP'],
	hiddenParties: ['NP', 'FTP', 'PPUP', 'MCFAP', 'MKT', 'FHL', 'ZHTYTJD', 'TSU', 'CCT', 'TIP', 'NPSU', 'NHSA', 'TP'],
};

// initialize the vote state
partyNames.forEach(function(name){
	initialState.vote[name] = 0
});
