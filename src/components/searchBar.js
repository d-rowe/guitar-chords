import React, { useState } from 'react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const onChange = e => {
    setSearchText(e.target.value);
  };

  const onEnter = () => {
    console.log(searchText);
  };

  const onKeyDown = e => {
    // Check for enter key
    if (e.keyCode === 13) {
      onEnter();
    }
  };

  return (
    <div className='d-flex justify-content-center mb-4'>
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
