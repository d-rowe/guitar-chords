import { parseChord } from 'chord-symbol';
import Chords from './chords.json';

export const getSuggestions = searchText => {
  const parsedChord = parseChord(searchText);
  try {
    const chordData = parsedChord.normalized;
    const suggestions = Chords.chords[chordData.rootNote].map(
      chord => `${chord.key}${chord.suffix}`
    );
    return suggestions;
  } catch {
    return null;
  }
};
