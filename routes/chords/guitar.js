const router = require('express').Router();
const GuitarChord = require('../../models/guitarChord');

router.route('/').get((req, res) => {
  GuitarChord.find()
    .then(chords => res.json(chords))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:name').get((req, res) => {
  const { name } = req.params;
  GuitarChord.find({ name })
    .then(chords => res.json(chords))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/position/:position').get((req, res) => {
  let { position } = req.params;
  position = parseInt(position);
  GuitarChord.find({ 'vex.position': position })
    .then(chords => res.json(chords))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const chord = req.body;
  const newChord = new GuitarChord(chord);
  newChord
    .save()
    .then(() => res.json('Chord added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
