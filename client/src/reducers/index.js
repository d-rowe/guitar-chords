import { combineReducers } from 'redux';
import search from './search';
import instrument from './instrument';

export default combineReducers({
  search,
  instrument
});
