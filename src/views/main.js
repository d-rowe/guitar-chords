import React from "react";
import Deck from "../components/chord/deck";
import Bar from "../components/search/bar";
import { connect } from "react-redux";

const Main = ({ results }) => {
  const deck = results.length > 0 ? <Deck chords={results} /> : null;

  return (
    <div>
      <Bar />
      {deck}
    </div>
  );
};

const mapStateToProps = state => {
  return { results: state.results };
};

export default connect(mapStateToProps)(Main);
