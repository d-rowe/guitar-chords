const mongoose = require('mongoose');
const frettedChordSchema = require('./schema/frettedChords');

const GuitarChord = mongoose.model('guitar', frettedChordSchema, 'guitar');

module.exports = GuitarChord;
