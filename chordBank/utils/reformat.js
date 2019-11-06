const vexChord = require('./vexChord');

const reformat = chordDB => {
  const roots = Object.keys(chordDB.chords);
  let formatted = [];

  roots.forEach(root => {
    const chordTypes = chordDB.chords[root];

    chordTypes.forEach(chordType => {
      const { key, suffix, positions: voicings } = chordType;
      const name = key + suffix;

      voicings.forEach(voicing => {
        const { frets, fingers, baseFret, barres, midi } = voicing;
        const chord = vexChord(frets, baseFret);
        const tuning =
          frets.length === 6
            ? ['E', 'A', 'D', 'G', 'B', 'E']
            : frets.length === 4
            ? ['G', 'C', 'E', 'A']
            : null;

        let vex = {
          chord,
          position: baseFret,
          barres
        };

        if (tuning) {
          vex = { ...vex, tuning };
        }

        const formattedChord = {
          name,
          vex,
          fingers,
          midi,
          source: 'chord-db',
          user: 'd-rowe',
          date: Date.now()
        };

        formatted.push(formattedChord);
      });
    });
  });

  return formatted;
};

module.exports = reformat;
