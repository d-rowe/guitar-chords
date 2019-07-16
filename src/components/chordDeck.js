import React from 'react';
import ChordDiagram from './chordDiagram';

const ChordDeck = ({ chords }) => {
  const chordDiagrams = chords.map(chord => <ChordDiagram chord={chord} />);

  return <div className='cards'>{chordDiagrams}</div>;
};

export default ChordDeck;
