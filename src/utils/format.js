export const chordsToVexChords = chords => {
  let vexChords = [];
  chords.forEach(chord => {
    let curVexChords = chord.positions.map((position, i) => {
      return {
        name: `${chord.key} ${chord.quality}`,
        chord: fretsToVexChord(position.frets),
        position: i,
        midi: position.midi
      };
    });
    vexChords.push(...curVexChords);
  });
  return vexChords;
};

const fretsToVexChord = frets => {
  let chord = [];
  for (let i in frets) {
    let stringId = 6 - i;
    let fret = frets[i];
    let fretCaption;
    if (fret === -1) fret = 'x';
    let stringData = [stringId, fret];
    if (fret !== 0 && fret !== 'x') {
      fretCaption = fret;
      stringData.push(fretCaption);
    }
    chord.push(stringData);
  }
  return chord.reverse();
};
