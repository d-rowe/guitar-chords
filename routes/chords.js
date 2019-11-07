const router = require('express').Router();
let guitarRouter = require('./chords/guitar');
let ukuleleRouter = require('./chords/ukulele');

router.use('/guitar', guitarRouter);
router.use('/ukulele', ukuleleRouter);

module.exports = router;
