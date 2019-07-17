import React from 'react';
import ChordDiagram from './chordDiagram';

const ChordDeck = ({ chords }) => {
  const chordDiagrams = chords.map((chord, index) => (
    <ChordDiagram chord={chord} key={index} />
  ));

  return <div className='cards'>{chordDiagrams}</div>;
};

export default ChordDeck;
