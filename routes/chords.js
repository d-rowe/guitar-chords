const router = require('express').Router();
const guitarRouter = require('./chords/guitar');
const ukuleleRouter = require('./chords/ukulele');
const GuitarChord = require('../models/guitarChord');
const UkuleleChord = require('../models/ukuleleChord');

router.use('/guitar', guitarRouter);
router.use('/ukulele', ukuleleRouter);

router.route('/').get((req, res) => {
  Promise.all([GuitarChord.find(), UkuleleChord.find()]).then(chords => {
    const [guitar, ukulele] = chords;
    res.json({ guitar, ukulele });
  });
});

router.route('/:name').get((req, res) => {
  const { name } = req.params;
  Promise.all([GuitarChord.find({ name }), UkuleleChord.find({ name })]).then(
    chords => {
      const [guitar, ukulele] = chords;
      res.json({ guitar, ukulele });
    }
  );
});

module.exports = router;
