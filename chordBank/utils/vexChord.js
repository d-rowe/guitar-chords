const vexChord = (frets, baseFret) => {
  let vChord = [];
  frets.forEach((fret, i) => {
    let sNum = frets.length - i;
    if (fret === -1) fret = 'x';
    let sData = [sNum, fret];
    if (fret !== 0 && fret !== 'x') {
      caption = fret + baseFret - 1;
      sData.push(caption);
    }
    vChord.push(sData);
  });
  return vChord.reverse();
};

module.exports = vexChord;
