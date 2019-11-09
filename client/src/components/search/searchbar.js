import React from 'react';
import _ from 'lodash';
import { Search, Select } from 'semantic-ui-react';
import { connect } from 'react-redux';
import allChords from './allChords';
import './searchbar.sass';

const instrumentOptions = [
  { key: 'guitar', value: 'guitar', text: 'Guitar' },
  { key: 'ukulele', value: 'ukulele', text: 'Ukulele' }
];

const suggestionsNum = 5;
const initialState = { isLoading: false, results: [], value: '' };
// Set source for search suggestions
const source = allChords();

class SearchBar extends React.Component {
  state = initialState;

  handleInstrumentChange = (e, data) => {
    this.props.setInstrument(data.value);
  };

  handleResultSelect = (e, { result }) => {
    const searchText = result.title;
    this.setState({ value: searchText });
    this.props.setSearch(searchText);
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch).splice(0, suggestionsNum)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <div className='searchbar-container'>
        <div className='searchbar'>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            results={results}
            value={value}
            placeholder='Chord'
            {...this.props}
          />
        </div>
        <div className='instrument-select'>
          <Select
            defaultValue={'guitar'}
            options={instrumentOptions}
            className='instrument-select'
            onChange={this.handleInstrumentChange}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSearch: inputText => {
      dispatch({
        type: 'SET_SEARCH',
        search: inputText
      });
    },
    setInstrument: instrument => {
      dispatch({
        type: 'SET_INSTRUMENT',
        instrument
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
