import React from 'react';
import ChordDeck from '../components/chordCards/chordDeck';
import SearchBar from '../components/search/searchBar';
import { connect } from 'react-redux';

const Main = ({ results }) => {
  const chordDeck = () => {
    if (results !== []) {
      return <ChordDeck chords={results} />;
    }
  };

  return (
    <div>
      <SearchBar />
      {chordDeck()}
    </div>
  );
};

const mapStateToProps = state => {
  return { results: state.results };
};

export default connect(mapStateToProps)(Main);
