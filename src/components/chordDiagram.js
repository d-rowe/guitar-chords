import React from 'react';
import { ChordBox } from 'vexchords';
import './style.css';

class ChordDiagram extends React.Component {
  constructor(props) {
    super(props);
    this.shadowClasses = ['shadow', 'shadow-lg'];
    this.state = { shadowClass: this.shadowClasses[0] };
  }

  componentDidMount() {
    const chord = new ChordBox(this.refs.diagram, {
      // Customizations (all optional, defaults shown)
      width: this.refs.diagram.clientWidth, // canvas width
      height: this.refs.diagram.clientHeight, // canvas height

      // width: 150,
      // height: 180,

      numStrings: 6, // number of strings (e.g., 4 for bass)
      numFrets: 5, // number of frets (e.g., 7 for stretch chords)
      showTuning: true, // show tuning keys

      defaultColor: '#666', // default color
      bgColor: '#FFF', // background color
      strokeColor: '#666', // stroke color (overrides defaultColor)
      textColor: '#666', // text color (overrides defaultColor)
      stringColor: '#666', // string color (overrides defaultColor)
      fretColor: '#666', // fret color (overrides defaultColor)
      labelColor: '#666', // label color (overrides defaultColor)

      fretWidth: 1, // fret width
      stringWidth: 1 // string width

      // fontFamily,
      // fontSize,
      // fontWeight,
      // fontStyle, // font settings
      // labelWeight // weight of label font
    });

    chord.draw({
      // array of [string, fret, label (optional)]
      chord: [
        [1, 2],
        [2, 0],
        [3, 2],
        [4, 0], // fret 0 = open string
        [5, 'x'], // fret x = muted string
        [6, 'x']
      ],

      // optional: position marker
      position: 5, // start render at fret 5

      // optional: barres for barre chords
      barres: [
        { fromString: 6, toString: 1, fret: 1 },
        { fromString: 5, toString: 3, fret: 3 }
      ],

      // optional: tuning keys
      tuning: ['E', 'A', 'D', 'G', 'B', 'E']
    });
  }

  onHover = () => {
    this.setState({ shadowClass: this.shadowClasses[1] });
  };

  onLeave = () => {
    this.setState({ shadowClass: this.shadowClasses[0] });
  };

  render() {
    return (
      <div
        className={`card diagram-card m-3 ${this.state.shadowClass}`}
        onMouseEnter={this.onHover}
        onMouseLeave={this.onLeave}
      >
        <div className='card-body'>
          <div ref='diagram' className='diagram' />
        </div>
      </div>
    );
  }
}

export default ChordDiagram;
