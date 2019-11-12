const mongoose = require('mongoose');
const pianoChordSchema = require('./schema/pianoChords');

const PianoChord = mongoose.model('piano', pianoChordSchema, 'piano');

module.exports = PianoChord;
