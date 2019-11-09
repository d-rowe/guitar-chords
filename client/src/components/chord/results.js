import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import anime from 'animejs';
import Diagram from './diagram';
import './results.sass';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [], loading: false };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.update();
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
      results: Array.from(chords).map((r, i) => (
        <Diagram chordDat={r.vex} key={i} />
      )),
      loading: false
    });
    anime({
      targets: '.diagram',
      opacity: [0, 1],
      delay: anime.stagger(50),
      duration: 100,
      easing: 'linear'
    });
  };

  render() {
    if (this.state.loading) {
      return (
        <div className='loading-container'>
          <div className='loading-box'>
            <FontAwesomeIcon icon={faSpinner} size='4x' spin />
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
