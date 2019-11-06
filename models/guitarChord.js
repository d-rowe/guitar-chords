const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const guitarChordSchema = new Schema(
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

const GuitarChord = mongoose.model('guitar', guitarChordSchema, 'guitar');

module.exports = GuitarChord;
