import React from 'react';
import MenuBar from '../components/search/menubar';
import Results from '../components/results/results';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './main.sass';

const Main = ({ results }) => {
  return (
    <Grid>
      <Grid.Column>
        <MenuBar />
        <Results />
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = state => {
  return { results: state.results };
};

export default connect(mapStateToProps)(Main);
