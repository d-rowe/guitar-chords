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
    this.vexDraw();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      // Rerender if props change
      this.vexReRender();
    }
  }

  vexReRender = () => {
    this.refs.diagram.firstChild.remove();
    this.vexDraw();
  };

  vexDraw = () => {
    this.chord = new ChordBox(this.refs.diagram, {
      width: 200, // canvas width
      height: 240, // canvas height

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

    this.chord.draw({
      // array of [string, fret, label (optional)]
      chord: this.props.frets,
      // optional: position marker
      position: this.props.baseFret,
      // barres: this.props.barres
    });
  };

  render() {
    return <div ref="diagram" className="diagram" />;
  }
}

export default Diagram;
