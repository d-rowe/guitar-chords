import React from 'react';
import { getSuggestions } from '../libs/chords';

const SearchBar = () => {

  const onChange = e => {
    console.log(getSuggestions(e.target.value));
  };

  const onEnter = () => {
    // console.log(chordData.normalized);
  };

  const onKeyDown = e => {
    // Check for enter key
    if (e.keyCode === 13) {
      onEnter();
    }
  };

  return (
    <div className='d-flex justify-content-center my-3'>
      <input
        type='text'
        className='form-control search'
        aria-label='Chord'
        placeholder='Search chords...'
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default SearchBar;
