import React from 'react';
import { parseChord } from 'chord-symbol';
import { getSuggestions, renderChord, capitalize } from '../../libs/chords';
import { connect } from 'react-redux';
import './style.css';

const SearchBar = ({ updateSearch, parsed, inputText }) => {
  const onChange = e => {
    updateSearch(capitalize(e.target.value));
  };

  return (
    <div className='d-flex justify-content-center mt-3'>
      <div className='d-flex flex-column align-content-center'>
        <input
          type='text'
          className='form-control search'
          aria-label='Chord'
          placeholder='Search chords...'
          onChange={onChange}
        />
        <p
          className={`text-center mt-1 invalid-text${
            parsed === null && inputText !== '' ? '' : ' no-opacity'
          }`}
        >
          Hmm, that doesn't appear to be a chord...
        </p>
      </div>
    </div>
  );
};

const maptStateToProps = state => {
  return { parsed: state.search.parsed, inputText: state.search.inputText };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSearch: inputText => {
      dispatch({ type: 'SET_SEARCH_INPUT_TEXT', inputText: inputText });
      dispatch({
        type: 'SET_SUGGESTIONS',
        suggestions: getSuggestions(inputText)
      });
      dispatch({
        type: 'SET_PARSED_CHORD',
        parsedChord: parseChord(inputText)
      });
      dispatch({
        type: 'SET_RENDERED_CHORD',
        renderedChord: renderChord(parseChord(inputText))
      });
    }
  };
};

export default connect(
  maptStateToProps,
  mapDispatchToProps
)(SearchBar);