import React from 'react';
import ChordDiagram from '../components/chordDiagram';
import SearchBar from '../components/searchBar';

const Main = () => {
  return (
    <div className='container'>
      <SearchBar />
      <div className='cards'>
        <ChordDiagram
          chord={{
            name: 'C Major',
            chord: [[1, 0], [2, 1, 1], [3, 0], [4, 2, 2], [5, 3, 3]],
            position: 0,
            barres: []
          }}
        />
      </div>
    </div>
  );
};

export default Main;
