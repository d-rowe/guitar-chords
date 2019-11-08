const { exec } = require('child_process');
const args = process.argv.slice(2);
const INSTRUMENT = args[0];
const DB = 'chords';

require('dotenv').config();
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOST } = process.env;

exec(
  `mongoimport --host ${MONGO_HOST} --ssl --username ${MONGO_USERNAME} --password ${MONGO_PASSWORD} --authenticationDatabase admin --db ${DB} --collection ${INSTRUMENT} --type JSON --jsonArray --file ./formatted/${INSTRUMENT}.json`,
  (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(stderr);
  }
);
