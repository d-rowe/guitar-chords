const router = require('express').Router();
let UkuleleChord = require('../../models/ukuleleChord');

router.route('/').get((req, res) => {
  UkuleleChord.find()
    .then(chords => res.json(chords))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:chordName').get((req, res) => {
  const { chordName } = req.params;
  UkuleleChord.find({ name: chordName })
    .then(chords => res.json(chords))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/position/:position').get((req, res) => {
  let { position } = req.params;
  position = parseInt(position);
  UkuleleChord.find({ 'vex.position': position })
    .then(chords => res.json(chords))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const chord = req.body;
  const newChord = new UkuleleChord(chord);
  newChord
    .save()
    .then(() => res.json('Chord added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
