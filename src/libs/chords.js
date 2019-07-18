import { parseChord, chordRendererFactory } from 'chord-symbol';
import Chords from './chords.json';

export const getSuggestions = searchText => {
  const parsedChord = parseChord(searchText);
  try {
    const chordData = parsedChord.normalized;
    const suggestions = Chords.chords[chordData.rootNote].map(chord => {
      const parsedChord = parseChord(`${chord.key}${chord.suffix}`);
      let chordData;
      try {
        chordData = parsedChord.normalized;
      } catch {
        chordData = null;
      }

      return {
        displayName: chordRendererFactory({ useShortNamings: true })(
          parsedChord
        ),
        key: chord.key,
        suffix: chord.suffix,
        chordData: chordData
      };
    });
    const filteredSuggestions = suggestions.filter(
      suggestion => suggestion.displayName !== null
    );
    return filteredSuggestions;
  } catch {
    return null;
  }
};

export const renderChord = chord => {
  return {
    short: chordRendererFactory({ useShortNamings: true })(chord),
    academic: chordRendererFactory({ useShortNamings: false })(chord)
  };
};

export const capitalize = chordText => {
  const firstLetter = chordText.charAt(0);
  if (firstLetter === firstLetter.toLowerCase()) {
    return `${firstLetter.toUpperCase()}${chordText.slice(1)}`;
  } else {
    return chordText;
  }
};
