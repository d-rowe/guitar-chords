import { parseChord, chordRendererFactory } from 'chord-symbol';

export const chordsToVexChords = chords => {
  let vexChords = [];
  chords.forEach(chord => {
    let curVexChords = chord.positions.map((position, i) => {
      return {
        name: chordRendererFactory({ useShortNamings: true })(
          parseChord(`${chord.key}${chord.quality}`)
        ),
        chord: fretsToVexChord(position.frets),
        variant: i + 1,
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
