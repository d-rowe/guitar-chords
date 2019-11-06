const { exec } = require('child_process');

const INSTRUMENT = 'guitar';
const DB = 'chords';

require('dotenv').config();
const { USERNAME, PASSWORD, HOST } = process.env;

exec(
  `mongoimport --host ${HOST} --ssl --username ${USERNAME} --password ${PASSWORD} --authenticationDatabase admin --db ${DB} --collection ${INSTRUMENT} --type JSON --jsonArray --file ./formatted/${INSTRUMENT}.json`,
  (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(stderr);
  }
);
