const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const frettedChordSchema = new Schema(
  {
    name: { type: String, required: true },
    vex: {
      chord: { type: Array, required: true },
      position: { type: Number, required: true },
      barres: { type: Object },
      tuning: { type: Array, required: true }
    },
    fingers: { type: Array },
    midi: { type: Array, required: true },
    source: { type: String },
    user: { type: String },
    date: { type: Date }
  },
  { timestamps: true }
);

module.exports = frettedChordSchema;
