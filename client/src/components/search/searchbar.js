import React from 'react';
import _ from 'lodash';
import { Search } from 'semantic-ui-react';
import { connect } from 'react-redux';
import allChords from './allChords';

const suggestionsNum = 5;
const initialState = { isLoading: false, results: [], value: '' };
// Set source for search suggestions
const source = allChords();

class SearchBar extends React.Component {
  state = initialState;
  handleResultSelect = (e, { result }) => {
    const searchText = result.title;
    this.setState({ value: searchText });
    this.props.updateSearch(searchText);
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
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true
        })}
        results={results}
        value={value}
        {...this.props}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSearch: inputText => {
      dispatch({
        type: 'SET_SEARCH',
        search: inputText
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
