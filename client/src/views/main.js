import React from 'react';
import SearchBar from '../components/search/searchbar';
import { Container, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './main.sass';

const Main = ({ results }) => {
  return (
    <Container>
      <Grid>
        <Grid.Column>
          <div className='searchbar-container'>
            <SearchBar />
          </div>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

const mapStateToProps = state => {
  return { results: state.results };
};

export default connect(mapStateToProps)(Main);
