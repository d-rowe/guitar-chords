import React from 'react';
import { ChordBox } from 'vexchords';
import '../../style/components/chord/diagram.css';

const COLOR = '#666';
const BG_COLOR = '#FFF';
const STROKE_COLOR = '#666';
const TEXT_COLOR = '#666';
const STRING_COLOR = '#666';
const FRET_COLOR = '#666';
const LABEL_COLOR = '#666';

class Diagram extends React.Component {
  componentDidMount() {
    this.chord = new ChordBox(this.refs.diagram, {
      // Customizations (all optional, defaults shown)
      width: 200, // canvas width
      height: 200, // canvas height
      circleRadius: 5, // circle radius (width / 20 by default)

      numStrings: 6, // number of strings (e.g., 4 for bass)
      numFrets: 5, // number of frets (e.g., 7 for stretch chords)
      showTuning: true, // show tuning keys

      defaultColor: COLOR, // default color
      bgColor: BG_COLOR, // background color
      strokeColor: STROKE_COLOR, // stroke color (overrides defaultColor)
      textColor: TEXT_COLOR, // text color (overrides defaultColor)
      stringColor: STRING_COLOR, // string color (overrides defaultColor)
      fretColor: FRET_COLOR, // fret color (overrides defaultColor)
      labelColor: LABEL_COLOR, // label color (overrides defaultColor)

      fretWidth: 1, // fret width
      stringWidth: 1 // string width
    });

    this.vexDraw();
  }

  componentDidUpdate() {
    // TODO: Check if props changed, if so vexReRender
    // this.vexReRender();
  }

  vexReRender = () => {
    this.refs.diagram.firstChild.remove();
    this.vexDraw();
  };

  vexDraw = () => {
    this.chord.draw({
      // array of [string, fret, label (optional)]
      chord: this.props.chord,

      // optional: position marker
      position: this.props.position // start render at fret 5

      // optional: barres for barre chords
      // barres: [
      //   { fromString: 6, toString: 1, fret: 1 },
      //   { fromString: 5, toString: 3, fret: 3 }
      // ],

      // optional: tuning keys
      // tuning: ["E", "A", "D", "G", "B", "E"]
    });
  };

  render() {
    return <div ref="diagram" className="diagram" />;
  }
}

export default Diagram;
