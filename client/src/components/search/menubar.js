import React from 'react';
import Searchbar from './searchbar';
import InstrumentSelect from './instrumentSelect';
import './menubar.sass';

const Menubar = () => (
  <div className='menubar'>
    <Searchbar />
    <InstrumentSelect />
  </div>
);

export default Menubar;
