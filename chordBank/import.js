const { exec } = require('child_process');
const args = process.argv.slice(2);
const INSTRUMENT = args[0];
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
