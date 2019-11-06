const INSTRUMENT = 'guitar';

const chordDB = require(`./original/${INSTRUMENT}.json`);
const reformat = require('./utils/reformat');
const fs = require('fs');

const formattedChords = reformat(chordDB);

let formattedJSON = JSON.stringify(formattedChords);

fs.writeFileSync(`./formatted/${INSTRUMENT}.json`, formattedJSON);
