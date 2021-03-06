import React from 'react';
import { connect } from 'react-redux';
import { TrinityRingsSpinner } from 'react-epic-spinners';
import anime from 'animejs';
import DiagramCard from '../diagram/diagramCard';
import './results.sass';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [], loading: false };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.search !== '') {
        this.update();
      }
    }
  }

  update = () => {
    this.setState({ loading: true });
    const { search, instrument } = this.props;

    fetch(`/chords/${instrument}/name/${search}`)
      .then(res => {
        return res.json();
      })
      .then(chords => this.setResults(chords))
      .catch(err => {
        this.setState({
          results: <p>Error, try again...</p>,
          loading: false
        });
      });
  };

  setResults = chords => {
    this.setState({
      results: Array.from(chords).map((chordDat, i) => (
        <DiagramCard chordDat={chordDat} key={i} />
      )),
      loading: false
    });
    // Animate cards entering
    anime({
      targets: '.diagram-card',
      opacity: [0, 1],
      scale: [0, 1],
      translateX: [-200, 0],
      delay: anime.stagger(30),
      duration: 250,
      easing: 'easeOutSine'
    });
  };

  render() {
    if (this.state.loading) {
      return (
        <div className='loading-container'>
          <div className='loading-box'>
            <TrinityRingsSpinner color='#203A43' />
            <h4>Gathering chords...</h4>
          </div>
        </div>
      );
    } else {
      return (
        <div className='results-container container'>{this.state.results}</div>
      );
    }
  }
}
const mapStateToProps = state => {
  return { search: state.search, instrument: state.instrument };
};

export default connect(mapStateToProps)(Results);
