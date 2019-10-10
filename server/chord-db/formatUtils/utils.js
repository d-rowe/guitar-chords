export const positionsToVex = positions => {
  let out = [];
  positions.forEach((position, i) => {
    let chord = [];
    let frets = position.frets;
    let fingers = position.fingers;
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
      barres: fingersToBarres(fingers),
      baseFret: position.baseFret,
      variant: i + 1,
      midi: position.midi
    });
  });
  return out;
};

// Example [1, 3, 4, 2, 1, 1]
const fingersToBarres = fingers => {
  // {1: [0, 5]}
  let fingerIDs = {};
  fingers.forEach((finger, i) => {
    if (finger !== (-1 && 0)) {
      let entry = fingerIDs[finger];
      if (entry === undefined) {
        fingerIDs[finger] = { start: i };
      } else {
        fingerIDs[finger] = { ...entry, end: i };
      }
    }
  });
  let barres = [];
  Object.keys(fingerIDs).forEach(key => {
    if (fingerIDs[key].end !== undefined) {
      let barreData = fingerIDs[key];
      barres.push({
        fromString: barreData.end + 1,
        toString: barreData.start + 1,
        fret: parseInt(key)
      });
    }
  });
  // fingerIDs.forEach(entry => console.log(entry))
  return barres;
};
