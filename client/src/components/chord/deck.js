import React from 'react';
import Card from './card';
import '../../style/components/chord/deck.css';

const Deck = ({ chords }) => {
  const chordNames = Object.keys(chords);
  const cards = chordNames.map((key, i) => {
    const chord = chords[key];
    return <Card chord={chord} variant={1} name={key} key={i} />;
  });

  return <div className="cards">{cards}</div>;
};

export default Deck;
