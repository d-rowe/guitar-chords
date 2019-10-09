import React from 'react';
import { capitalize } from '../../utils/chords';
import { connect } from 'react-redux';
import '../../style/components/search/bar.css';

const Bar = ({ updateSearch }) => {
  const onChange = e => {
    fetch(`/tabs?chord=${capitalize(e.target.value)}`)
      .then(res => {
        return res.json();
      })
      .then(chord => {
        console.log(chord);
        updateSearch(chord);
      });
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="d-flex flex-column align-content-center">
        <input
          type="text"
          className="form-control search"
          aria-label="Chord"
          placeholder="Search chords..."
          onChange={onChange}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    updateSearch: inputText => {
      dispatch({
        type: 'SET_RESULTS',
        results: inputText
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Bar);
