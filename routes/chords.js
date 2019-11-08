const router = require('express').Router();
const guitarRouter = require('./chords/guitar');
const ukuleleRouter = require('./chords/ukulele');
const GuitarChord = require('../models/guitarChord');
const UkuleleChord = require('../models/ukuleleChord');

router.use('/guitar', guitarRouter);
router.use('/ukulele', ukuleleRouter);

// All chords
router.route('/').get((req, res) => {
  Promise.all([GuitarChord.find(), UkuleleChord.find()])
    .then(chords => {
      const [guitar, ukulele] = chords;
      res.json({ guitar, ukulele });
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Chords by requested name
router.route('/name/:name').get((req, res) => {
  const { name } = req.params;
  Promise.all([GuitarChord.find({ name }), UkuleleChord.find({ name })])
    .then(chords => {
      const [guitar, ukulele] = chords;
      res.json({ guitar, ukulele });
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
