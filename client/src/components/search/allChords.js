const keys = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
const suffixes = [
  'major',
  'minor',
  'dim',
  'dim7',
  'sus2',
  'sus4',
  '7sus4',
  'alt',
  'aug',
  '6',
  '69',
  '7',
  '7b5',
  'aug7',
  '9',
  '9b5',
  'aug9',
  '7b9',
  '7#9',
  '11',
  '9#11',
  '13',
  'maj7',
  'maj7b5',
  'maj7#5',
  'maj9',
  'maj11',
  'maj13',
  'm6',
  'm69',
  'm7',
  'm7b5',
  'm9',
  'm11',
  'mmaj7',
  'mmaj7b5',
  'mmaj9',
  'mmaj11',
  'add9',
  'madd9'
];

const get = () => {
  let allChords = [];
  keys.forEach(key => {
    suffixes.forEach(suffix => {
      allChords.push({ title: `${key}${suffix}` });
    });
  });
  return allChords;
};

export default get;
