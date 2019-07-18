import React from 'react';
import ChordCard from './chordCard';

const ChordDeck = ({ chords }) => {
  const chordCards = chords.map((chord, index) => (
    <ChordCard chord={chord} key={index} />
  ));

  return <div className='cards'>{chordCards}</div>;
};

export default ChordDeck;
