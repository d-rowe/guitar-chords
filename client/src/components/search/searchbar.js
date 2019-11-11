import React from 'react';
import getSuggestions from '../../utils/allChords';
import { AutoComplete } from 'antd';
import { connect } from 'react-redux';

const Searchbar = ({ setSearch }) => {
  return (
    <AutoComplete
      style={{ width: 150 }}
      dataSource={getSuggestions()}
      placeholder='Chord...'
      filterOption={(inputValue, option) =>
        option.props.children
          .toUpperCase()
          .indexOf(inputValue.toUpperCase()) !== -1
      }
      onSelect={term => setSearch(term)}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setSearch: inputText => {
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
)(Searchbar);
