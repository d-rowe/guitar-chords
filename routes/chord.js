const router = require('express').Router();
let Chord = require('../models/chord');

router.route('/').get((req, res) => {
  Chord.find()
    .then(chords => res.json(chords))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const chord = req.body;
  const newChord = new Chord(chord);
  newChord
    .save()
    .then(() => res.json('Chord added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
