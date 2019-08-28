import React from 'react';
import ChordCard from './chordCard';

const ChordDeck = ({ chords, variant }) => {
  const chordCards = chords.map((chord, index) => (
    <ChordCard
      chord={chord.chord}
      variant={chord.variant}
      name={chord.name}
      position={chord.position}
      key={index}
    />
  ));

  return <div className='cards'>{chordCards}</div>;
};

export default ChordDeck;
