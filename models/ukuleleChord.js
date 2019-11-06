const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ukuleleChordSchema = new Schema(
  {
    name: { type: String, required: true },
    chord: { type: Array, unique: true },
    position: { type: Number },
    barres: { type: Object },
    tuning: { type: Array },
    midi: { type: Array },
    user: { type: String },
    instrument: { type: String }
  },
  { timestamps: true }
);

const UkuleleChord = mongoose.model('ukulele', ukuleleChordSchema, 'ukulele');

module.exports = UkuleleChord;
