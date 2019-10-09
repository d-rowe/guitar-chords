import React from 'react';
import Card from './card';
import '../../style/components/chord/deck.css';

const Deck = ({ chords }) => {
  const chordNames = Object.keys(chords);
  const cards = chordNames.map((key, i) => {
    const chord = chords[key];
    const { variant, baseFret, frets } = chord[0];
    return (
      <Card
        frets={frets}
        variant={variant}
        name={key}
        position={baseFret}
        key={i}
      />
    );
  });

  return <div className="cards">{cards}</div>;
};

export default Deck;
