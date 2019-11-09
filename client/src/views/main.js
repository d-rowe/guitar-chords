import React from 'react';
import SearchBar from '../components/search/searchbar';
import Results from '../components/chord/results';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './main.sass';

const Main = ({ results }) => {
  return (
    <Grid>
      <Grid.Column>
        <SearchBar />
        <Results />
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = state => {
  return { results: state.results };
};

export default connect(mapStateToProps)(Main);
