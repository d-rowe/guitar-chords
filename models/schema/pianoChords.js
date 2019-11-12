const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pianoChordSchema = new Schema(
  {
    name: { type: String, required: true },
    notes: { type: Array, required: true },
    midi: { type: Array, required: true },
    source: { type: String },
    inversion: { type: Number },
    user: { type: String },
    date: { type: Date }
  },
  { timestamps: true }
);

module.exports = pianoChordSchema;
