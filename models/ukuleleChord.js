const mongoose = require('mongoose');
const frettedChordSchema = require('../schema/frettedChords');

const UkuleleChord = mongoose.model('ukulele', frettedChordSchema, 'ukulele');

module.exports = UkuleleChord;
