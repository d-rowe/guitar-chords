const teoria = require("teoria");
const fs = require("fs");

let letters = "ABCDEFG";
const accidentals = ["", "#", "b"];
const exclude = ["B#", "Cb", "E#", "Fb"];

letters = letters.split("");
let roots = [];
letters.forEach(letter =>
  accidentals.forEach(accidental => roots.push(letter + accidental))
);
roots = roots.filter(root => !exclude.includes(root));

const qualities = ["Major", "minor", "dim", "aug", "7", "M7", "m7", "dim7", "M9", "m9"];

let chordBank = [];
roots.forEach(root => {
  root = teoria.note(root + "4");
  qualities.forEach(quality => {
    const notes = root.chord(quality).notes();
    const name = root.name().toUpperCase() + root.accidental() + quality;
    chordBank.push({
      name,
      notes: notes.map(note => note.scientific()),
      midi: notes.map(note => note.midi()),
      source: "auto-generate",
      user: "d-rowe",
      date: Date.now(),
      inversion: 0
    });
  });
});

console.log("Exported " + chordBank.length + " piano chords");
chordBank = JSON.stringify(chordBank);
fs.writeFileSync("../formatted/piano.json", chordBank);
