const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chordSchema = new Schema(
  {
    name: { type: String },
    chord: { type: Array },
    position: { type: Number },
    barres: { type: Object },
    tuning: { type: Array },
    midi: { type: Array },
    user: { type: String }
  },
  { timestamps: true }
);

const Chord = mongoose.model('Chord', chordSchema);

module.exports = Chord;
