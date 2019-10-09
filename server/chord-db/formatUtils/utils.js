export const positionsToVex = positions => {
  let out = [];
  positions.forEach((position, i) => {
    let chord = [];
    let frets = position.frets;
    for (let i in frets) {
      let stringId = 6 - i;
      let fret = frets[i];
      let fretCaption;
      if (fret === -1) fret = 'x';
      let stringData = [stringId, fret];
      if (fret !== 0 && fret !== 'x') {
        fretCaption = fret + position.baseFret - 1;
        stringData.push(fretCaption);
      }
      chord.push(stringData);
    }
    out.push({
      frets: chord.reverse(),
      baseFret: position.baseFret,
      variant: i + 1,
      midi: position.midi
    });
  });
  return out;
};