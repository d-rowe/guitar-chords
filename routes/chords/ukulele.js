const router = require('express').Router();
let UkuleleChord = require('../../models/ukuleleChord');

// All ukulele chords
router.route('/').get((req, res) => {
  UkuleleChord.find()
    .then(chords => res.json(chords))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Ukulele chords by requested name
router.route('/name/:name').get((req, res) => {
  const { name } = req.params;
  UkuleleChord.find({ name })
    .then(chords => res.json(chords))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Ukulele chords by requested position
router.route('/position/:position').get((req, res) => {
  let { position } = req.params;
  position = parseInt(position);
  UkuleleChord.find({ 'vex.position': position })
    .then(chords => res.json(chords))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add ukulele chord
router.route('/add').post((req, res) => {
  const chord = req.body;
  const newChord = new UkuleleChord(chord);
  newChord
    .save()
    .then(() => res.json('Chord added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
