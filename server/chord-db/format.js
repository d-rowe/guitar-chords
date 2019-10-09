import { parseChord, chordRendererFactory } from 'chord-symbol';
import guitarChords from './original/guitar.json';
import { positionsToVex } from './formatUtils/utils';
import fs from 'fs';

const originalChords = guitarChords.chords;

let fChords = {};
for (let k in originalChords) {
  let chords = originalChords[k];
  chords.forEach(chord => {
    const { key, suffix, positions } = chord;
    const parsedChord = parseChord(`${key}${suffix}`);
    const renderedChord = chordRendererFactory({ useShortNamings: true })(
      parsedChord
    );
    fChords[renderedChord] = { [renderedChord]: positionsToVex(positions) };
  });
}

let fChordsJson = JSON.stringify(fChords);

fs.writeFileSync('./guitar.json', fChordsJson);
