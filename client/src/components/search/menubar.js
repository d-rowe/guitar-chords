import React from 'react';
import _ from 'lodash';
import { Search, Menu, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import allChords from './allChords';
import './menubar.sass';

const suggestionsNum = 5;
const initialState = { isLoading: false, results: [], value: '' };
// Set source for search suggestions
const source = allChords();

class SearchBar extends React.Component {
  state = { ...initialState, instrument: 'guitar', search: '' };

  handleInstrumentChange = (e, data) => {
    this.props.setInstrument(data.value);
  };

  handleResultSelect = (e, { result }) => {
    const searchText = result.title;
    this.setState({ value: searchText, search: searchText });
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

  setInstrument = instrument => {
    this.setState({ instrument });
    if (this.state.search !== '') {
      this.props.setInstrument(instrument);
    }
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Menu attached='top' inverted>
        <div className='menubar-tools-container'>
          <div className='chord-search'>
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
            <Button.Group>
              <Button
                primary={this.state.instrument === 'guitar'}
                onClick={() => this.setInstrument('guitar')}
              >
                Guitar
              </Button>
              <Button
                primary={this.state.instrument === 'ukulele'}
                onClick={() => this.setInstrument('ukulele')}
              >
                Ukulele
              </Button>
            </Button.Group>
          </div>
        </div>
      </Menu>
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
