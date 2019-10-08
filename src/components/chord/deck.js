import React from 'react';
import Card from './card';
import '../../style/components/chord/deck.css';

const Deck = ({ chords }) => {
  const chordCards = chords.map((chord, index) => (
    <Card
      chord={chord.chord}
      variant={chord.variant}
      name={chord.name}
      position={chord.position}
      key={index}
    />
  ));

  return <div className="cards">{chordCards}</div>;
};

export default Deck;
