import guitarChords from '../chord-db/guitar.json';
import { parseChord, chordRendererFactory } from 'chord-symbol';

const chordToTabs = chord => {
  const parsedChord = parseChord(chord);
  const renderedChord = chordRendererFactory({ useShortNamings: true })(
    parsedChord
  );
  return guitarChords[renderedChord];
};

export default chordToTabs;
