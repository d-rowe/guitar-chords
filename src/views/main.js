import React from 'react';
import ChordDeck from '../components/chordCards/chordDeck';
import SearchBar from '../components/search/searchBar';

const Main = () => {
  const chords = [
    {
      name: 'C Major',
      chord: [[1, 0], [2, 1, '1'], [3, 0], [4, 2, 2], [5, 3, 3], [6, 'x']],
      position: 0,
      barres: []
    },
    {
      name: 'D Major',
      chord: [
        [1, 2, 2],
        [2, 3, 3],
        [3, 2, '1'],
        [4, 0, 'D'],
        [5, 'x'],
        [6, 'x']
      ],
      position: 0,
      barres: []
    },
    {
      name: 'E Major',
      chord: [
        [1, 0, 'E'],
        [2, 0],
        [3, 1, 1],
        [4, 2, 3],
        [5, 2, 2],
        [6, 0, 'E']
      ],
      position: 0,
      barres: []
    },
    {
      name: 'G Major',
      chord: [[1, 3, 4], [2, 3, 3], [3, 0, 'G'], [4, 0], [5, 2, 1], [6, 3, 2]],
      position: 0,
      barres: []
    },
    {
      name: 'A Major',
      chord: [[1, 0], [2, 2, 3], [3, 2, 2], [4, 2, 1], [5, 0, 'A'], [6, 'x']],
      position: 0,
      barres: []
    },
    {
      name: 'D Minor',
      chord: [[1, 1, 1], [2, 3, 3], [3, 2, 2], [4, 0, 'D'], [5, 'x'], [6, 'x']],
      position: 0,
      barres: []
    },
    {
      name: 'E Minor',
      chord: [[1, 0], [2, 0], [3, 0], [4, 2, 3], [5, 2, 2], [6, 0, 'E']],
      position: 0,
      barres: []
    },
    {
      name: 'A Minor',
      chord: [[1, 0], [2, 1, 1], [3, 2, 3], [4, 2, 2], [5, 0, 'A'], [6, 'x']],
      position: 0,
      barres: []
    },
    {
      name: 'C7',
      chord: [[1, 0], [2, 1, 1], [3, 3, 4], [4, 2, 2], [5, 3, 3], [6, 'x']],
      position: 0,
      barres: []
    },
    {
      name: 'D7',
      chord: [[1, 2, 3], [2, 1, 1], [3, 2, 2], [4, 0, 'D'], [5, 'x'], [6, 'x']],
      position: 0,
      barres: []
    },
    {
      name: 'E7',
      chord: [[1, 0], [2, 3, 4], [3, 1, 1], [4, 0], [5, 2, 2], [6, 0, 'E']],
      position: 0,
      barres: []
    },
    {
      name: 'G7',
      chord: [[1, 1, 1], [2, 0], [3, 0], [4, 0], [5, 2, 2], [6, 3, 3]],
      position: 0,
      barres: []
    },
    {
      name: 'A7',
      chord: [[1, 0], [2, 2, 3], [3, 0], [4, 2, 2], [5, 0, 'A'], [6, 'x']],
      position: 0,
      barres: []
    },
    {
      name: 'Dm7',
      chord: [[3, 2, 2], [4, 0], [5, 'x'], [6, 'x']],
      position: 0,
      barres: [{ fromString: 2, toString: 1, fret: 1 }]
    },
    {
      name: 'Em7',
      chord: [[1, 0], [2, 3, 4], [3, 0], [4, 0], [5, 2, 1], [6, 0, 'E']],
      position: 0,
      barres: []
    },
    {
      name: 'Am7',
      chord: [[1, 0], [2, 1, 1], [3, 0], [4, 2, 2], [5, 0, 'A'], [6, 'x']],
      position: 0,
      barres: []
    }
  ];

  return (
    <div>
      <SearchBar />
      <ChordDeck chords={chords} />
    </div>
  );
};

export default Main;
