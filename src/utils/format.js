export const formatChordResults = chords => {
  chords.forEach(chord => {
    let positions = chord.positions;
    console.log(positionsToVexChords(positions, chord.key, chord.quality));
    let chordsArr = positions.map(position => {
      let frets = position.frets;

      // console.log({
      //   name: `${chord.key} ${chord.quality}`,
      //   chord: fretsToVexChord(frets)
      // });
      return {
        name: `${chord.key} ${chord.quality}`,
        chord: fretsToVexChord(frets)
      };
    });
    // console.log(chordsArr);
  });
  return chords;
};

const positionsToVexChords = (positions, key, quality) => {
  return positions.map((position, i) => {
    return {
      name: `${key} ${quality}`,
      chord: fretsToVexChord(position.frets),
      position: i,
      midi: position.midi
    };
  });
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
